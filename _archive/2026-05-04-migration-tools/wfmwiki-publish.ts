#!/usr/bin/env bun
/**
 * wfmwiki-publish.ts — Sync wiki/ → site/content/, build Hugo site.
 *
 * 1. Walks wiki/{type}s/ for markdown files.
 * 2. Builds slug → "section/slug" map.
 * 3. Transforms each page:
 *    - [[slug|Display]] → {{< wikilink "section/slug" "Display" >}}
 *    - ![alt](../raw/assets/mediawiki/X) → ![alt](/img/mediawiki/X)
 *    - Strips wfmwiki-only frontmatter fields (mediawiki_*, etc.)
 * 4. Writes to site/content/<section>/<slug>.md
 * 5. Generates _index.md per section (catalog page).
 * 6. Rsyncs raw/assets/mediawiki/ → site/static/img/mediawiki/
 * 7. Optionally runs `hugo --minify` (--build flag).
 *
 * Usage:
 *   bun run wfmwiki-publish.ts --sync          Sync content + assets only
 *   bun run wfmwiki-publish.ts --build         Sync + run hugo build
 *   bun run wfmwiki-publish.ts --serve         Sync + start hugo server (dev)
 *   bun run wfmwiki-publish.ts --dry-run       Preview without writing
 *   bun run wfmwiki-publish.ts --help
 */

import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join, basename } from "node:path";
import { parseFrontmatter } from "./wfmwiki-frontmatter";

const PROJECT_ROOT = "/home/tlango/cloud/projects/wfmwiki";
const WIKI_ROOT = join(PROJECT_ROOT, "wiki");
const SITE_ROOT = join(PROJECT_ROOT, "site");
const SITE_CONTENT = join(SITE_ROOT, "content");
const ASSETS_SRC = join(PROJECT_ROOT, "raw", "assets", "mediawiki");
const ASSETS_DST = join(SITE_ROOT, "static", "img", "mediawiki");

// Sections in wiki/ that map to Hugo sections in site/content/
const SECTIONS = ["synthesis", "methods", "comparisons", "calculators", "concepts", "tools", "practitioners", "sources", "glossary"];

// Top-level wiki/*.md files that publish to site/content/*.md (no section dir).
// Filename _home.md becomes site/content/_index.md (Hugo home).
const TOP_LEVEL_MAP: Record<string, string> = {
  "_home.md": "_index.md",
};

// Frontmatter fields to strip when publishing (keep wiki-internal metadata out of Hugo)
const STRIP_FIELDS = new Set([
  "mediawiki_original",
  "mediawiki_revision_date",
  "mediawiki_revision_id",
  "ted_pov",
  "confidence",
  "aperture",
  "contributors",
  "sources",
  "related",
]);

type PageMeta = {
  slug: string;
  section: string;
  title: string;
  filePath: string;
};

// ──────────────────────────────────────────────────────────────────
// Walk wiki/ and build slug map
// ──────────────────────────────────────────────────────────────────

function loadAllPages(): PageMeta[] {
  const pages: PageMeta[] = [];
  for (const section of SECTIONS) {
    const dir = join(WIKI_ROOT, section);
    if (!existsSync(dir)) continue;
    for (const entry of readdirSync(dir)) {
      if (!entry.endsWith(".md")) continue;
      const filePath = join(dir, entry);
      const slug = basename(entry, ".md");
      const { fm } = parseFrontmatter(readFileSync(filePath, "utf8"));
      pages.push({
        slug,
        section,
        title: String(fm.title ?? slug),
        filePath,
      });
    }
  }
  return pages;
}

// ──────────────────────────────────────────────────────────────────
// Content transformation
// ──────────────────────────────────────────────────────────────────

// Try to resolve a slug. If exact match: return "section/slug". If no exact match
// but a known slug is a prefix (anchor-style mangled slug from MediaWiki migration),
// return "section/known-slug#suffix". Otherwise return null.
function resolveSlug(
  slug: string,
  slugMap: Map<string, string>,
): { sectionSlug: string; anchor: string | null } | null {
  const exact = slugMap.get(slug);
  if (exact) return { sectionSlug: exact, anchor: null };

  // Longest-prefix match: find the longest known slug that is a prefix of `slug`
  // followed by a hyphen (so "wfm-processes" prefix-matches "wfm-processes-foo"
  // but "wfm" doesn't accidentally match "wfm-processes").
  let bestMatch: { knownSlug: string; sectionSlug: string } | null = null;
  for (const [knownSlug, sectionSlug] of slugMap) {
    if (slug.startsWith(knownSlug + "-") &&
        (!bestMatch || knownSlug.length > bestMatch.knownSlug.length)) {
      bestMatch = { knownSlug, sectionSlug };
    }
  }
  if (bestMatch) {
    const anchor = slug.slice(bestMatch.knownSlug.length + 1);
    return { sectionSlug: bestMatch.sectionSlug, anchor };
  }
  return null;
}

function transformContent(
  raw: string,
  slugMap: Map<string, string>,
): string {
  let out = raw;

  // [[slug|Display]] → wikilink shortcode or markdown anchor link
  out = out.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_m, rawSlug: string, disp: string) => {
    const slug = rawSlug.trim();
    const display = disp.trim();
    const resolved = resolveSlug(slug, slugMap);
    if (!resolved) {
      return `{{< wikilink "${slug}" "${display}" >}}`;
    }
    if (resolved.anchor) {
      return `[${display}](/${resolved.sectionSlug}/#${resolved.anchor})`;
    }
    return `{{< wikilink "${resolved.sectionSlug}" "${display}" >}}`;
  });

  // [[slug]] → wikilink shortcode or markdown anchor link
  out = out.replace(/\[\[([^\]|]+)\]\]/g, (_m, rawSlug: string) => {
    const slug = rawSlug.trim();
    const resolved = resolveSlug(slug, slugMap);
    if (!resolved) {
      return `{{< wikilink "${slug}" >}}`;
    }
    if (resolved.anchor) {
      const display = resolved.anchor.replace(/-/g, " ");
      return `[${display}](/${resolved.sectionSlug}/#${resolved.anchor})`;
    }
    return `{{< wikilink "${resolved.sectionSlug}" >}}`;
  });

  // ../raw/assets/mediawiki/X → /img/mediawiki/X
  out = out.replace(/\.\.\/raw\/assets\/mediawiki\//g, "/img/mediawiki/");

  // Bare HTML <img src="filename.png" ...> (no path) → prepend /img/mediawiki/
  // Pattern: src="word.ext" where word has no slash
  out = out.replace(
    /<img(\s[^>]*?)src="([^"\/]+\.(png|jpg|jpeg|gif|svg))"/gi,
    (_m, before: string, file: string) => `<img${before}src="/img/mediawiki/${file}"`,
  );

  // Also handle HTML <img> → markdown image (in case the fix-images pass missed it for
  // top-level pages that weren't in wiki/ yet).
  out = out.replace(
    /<img\s+src="\/img\/mediawiki\/([^"]+)"\s+title="([^"]*)"[^>]*\/?>/g,
    (_m, src: string, title: string) => `![${title}](/img/mediawiki/${src})`,
  );
  out = out.replace(
    /<img\s+src="\/img\/mediawiki\/([^"]+)"\s+alt="([^"]*)"[^>]*\/?>/g,
    (_m, src: string, alt: string) => `![${alt}](/img/mediawiki/${src})`,
  );

  return out;
}

function rewriteFrontmatter(raw: string): string {
  const { fm, body } = parseFrontmatter(raw);
  const lines = ["---"];
  for (const [key, value] of Object.entries(fm)) {
    if (STRIP_FIELDS.has(key)) continue;
    if (Array.isArray(value)) {
      if (value.length === 0) continue;
      lines.push(`${key}: [${value.map(v => JSON.stringify(String(v))).join(", ")}]`);
    } else if (typeof value === "string") {
      lines.push(`${key}: ${JSON.stringify(value)}`);
    } else {
      lines.push(`${key}: ${value}`);
    }
  }
  lines.push("---");
  lines.push("");
  return lines.join("\n") + body;
}

// ──────────────────────────────────────────────────────────────────
// Section index generation
// ──────────────────────────────────────────────────────────────────

const SECTION_INTROS: Record<string, { title: string; intro: string }> = {
  synthesis: {
    title: "Synthesis",
    intro: "Original frameworks, models, and points of view on next-generation workforce management. These pages reflect Ted Lango's synthesis of operating practice, framed through the WFM Operating Standard.",
  },
  calculators: {
    title: "Calculators",
    intro: "Interactive WFM math — staffing, attrition, training, and capacity computations grounded in operations data.",
  },
  methods: {
    title: "Methods",
    intro: "How-to pages and operational techniques. Each method is a repeatable procedure with inputs, steps, and expected outputs.",
  },
  comparisons: {
    title: "Comparisons",
    intro: "Cross-method analyses where two or more approaches differ, complement, or contradict.",
  },
  concepts: {
    title: "Concepts",
    intro: "Abstract ideas and principles that underpin WFM practice — service level, shrinkage, occupancy, and beyond.",
  },
  tools: {
    title: "Vendor Tools",
    intro: "Vendor products, software platforms, and external tooling referenced across the wiki.",
  },
  practitioners: {
    title: "Practitioners",
    intro: "People worth tracking — researchers, authors, and practitioners shaping workforce planning.",
  },
  sources: {
    title: "Sources",
    intro: "Bibliographic anchors for every ingested source. Each wiki page citation traces back to one of these.",
  },
  glossary: {
    title: "Glossary",
    intro: "Short definitions for WFM terminology — adherence, conformance, occupancy, and more.",
  },
};

function generateSectionIndex(section: string, pages: PageMeta[]): string {
  const meta = SECTION_INTROS[section] ?? { title: section, intro: "" };
  const sorted = pages.filter(p => p.section === section).sort((a, b) => a.title.localeCompare(b.title));
  const lines = [
    "---",
    `title: "${meta.title}"`,
    `description: "${meta.intro.replace(/"/g, '\\"').slice(0, 160)}"`,
    "---",
    "",
    `# ${meta.title}`,
    "",
    meta.intro,
    "",
    `## Pages (${sorted.length})`,
    "",
  ];
  for (const p of sorted) {
    lines.push(`- {{< wikilink "${p.section}/${p.slug}" "${p.title}" >}}`);
  }
  lines.push("");
  return lines.join("\n");
}

// ──────────────────────────────────────────────────────────────────
// Filesystem operations
// ──────────────────────────────────────────────────────────────────

function rsyncImages(dryRun: boolean): void {
  if (!existsSync(ASSETS_SRC)) {
    console.log(`  (no images at ${ASSETS_SRC})`);
    return;
  }
  if (!dryRun) mkdirSync(ASSETS_DST, { recursive: true });
  const flags = ["-a", "--delete"];
  if (dryRun) flags.push("--dry-run");
  const result = spawnSync("rsync", [...flags, ASSETS_SRC + "/", ASSETS_DST + "/"], {
    stdio: ["ignore", "ignore", "inherit"],
  });
  if (result.status !== 0) throw new Error("rsync images failed");
  const count = readdirSync(ASSETS_DST).length;
  console.log(`  ${count} images at ${ASSETS_DST.replace(PROJECT_ROOT, "")}`);
}

function clearOldContent(dryRun: boolean): void {
  // Clear section directories.
  for (const section of SECTIONS) {
    const dir = join(SITE_CONTENT, section);
    if (existsSync(dir)) {
      if (!dryRun) rmSync(dir, { recursive: true, force: true });
    }
  }
  // Clear top-level managed files (mapped from wiki/_*.md).
  for (const target of Object.values(TOP_LEVEL_MAP)) {
    const path = join(SITE_CONTENT, target);
    if (existsSync(path) && !dryRun) rmSync(path);
  }
}

function publishTopLevelFiles(slugMap: Map<string, string>, dryRun: boolean): void {
  for (const [src, dst] of Object.entries(TOP_LEVEL_MAP)) {
    const srcPath = join(WIKI_ROOT, src);
    if (!existsSync(srcPath)) continue;
    const raw = readFileSync(srcPath, "utf8");
    const stripped = rewriteFrontmatter(raw);
    const transformed = transformContent(stripped, slugMap);
    const dstPath = join(SITE_CONTENT, dst);
    if (!dryRun) writeFileSync(dstPath, transformed);
  }
}

function writePages(pages: PageMeta[], slugMap: Map<string, string>, dryRun: boolean): void {
  for (const page of pages) {
    const sectionDir = join(SITE_CONTENT, page.section);
    if (!dryRun) mkdirSync(sectionDir, { recursive: true });
    const raw = readFileSync(page.filePath, "utf8");
    const stripped = rewriteFrontmatter(raw);
    const transformed = transformContent(stripped, slugMap);
    const outPath = join(sectionDir, `${page.slug}.md`);
    if (!dryRun) writeFileSync(outPath, transformed);
  }

  // Section index pages
  for (const section of SECTIONS) {
    const sectionPages = pages.filter(p => p.section === section);
    if (sectionPages.length === 0) continue;
    const indexPath = join(SITE_CONTENT, section, "_index.md");
    if (!dryRun) writeFileSync(indexPath, generateSectionIndex(section, pages));
  }
}

// ──────────────────────────────────────────────────────────────────
// CLI
// ──────────────────────────────────────────────────────────────────

function help() {
  console.log(`
wfmwiki-publish.ts — Sync wiki/ → site/content/, build Hugo

Usage:
  bun run wfmwiki-publish.ts --sync       Sync content + assets only
  bun run wfmwiki-publish.ts --build      Sync + run hugo --minify
  bun run wfmwiki-publish.ts --serve      Sync + start hugo server
  bun run wfmwiki-publish.ts --dry-run    Preview, no writes
  bun run wfmwiki-publish.ts --help

Source:      ${WIKI_ROOT}
Site:        ${SITE_ROOT}
Content out: ${SITE_CONTENT}
Images out:  ${ASSETS_DST}
`);
}

function runHugo(mode: "build" | "serve"): number {
  const args = mode === "build" ? ["--minify"] : ["server", "--buildDrafts", "--bind", "0.0.0.0"];
  console.log(`\n→ hugo ${args.join(" ")}\n`);
  const result = spawnSync("hugo", args, {
    cwd: SITE_ROOT,
    stdio: "inherit",
  });
  return result.status ?? 1;
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    help();
    process.exit(0);
  }
  const dryRun = args.includes("--dry-run");
  const buildMode = args.includes("--build");
  const serveMode = args.includes("--serve");
  const syncMode = args.includes("--sync") || buildMode || serveMode;

  if (!syncMode) {
    console.error("Specify --sync, --build, --serve, or --dry-run");
    help();
    process.exit(2);
  }

  console.log(`${dryRun ? "[DRY RUN] " : ""}Publishing wfmwiki…\n`);
  const pages = loadAllPages();
  console.log(`Loaded ${pages.length} pages from wiki/`);
  const slugMap = new Map(pages.map(p => [p.slug, `${p.section}/${p.slug}`]));
  console.log(`Slug map: ${slugMap.size} entries`);

  console.log("→ Clearing old section content");
  clearOldContent(dryRun);

  console.log("→ Writing transformed content");
  writePages(pages, slugMap, dryRun);

  console.log("→ Publishing top-level files");
  publishTopLevelFiles(slugMap, dryRun);

  console.log("→ Syncing images");
  rsyncImages(dryRun);

  console.log(`\n✓ Sync complete${dryRun ? " (DRY RUN)" : ""}`);

  if (dryRun) return;

  if (buildMode) {
    const code = runHugo("build");
    if (code !== 0) process.exit(code);
    console.log(`\n✓ Hugo build complete: ${join(SITE_ROOT, "public")}/`);
  } else if (serveMode) {
    runHugo("serve"); // blocks until Ctrl+C
  }
}

if (import.meta.main) main();
