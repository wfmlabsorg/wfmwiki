#!/usr/bin/env bun
/**
 * wfmwiki-mediawiki-import.ts — Convert MediaWiki XML export → markdown.
 *
 * - Parses MediaWiki XML, takes latest revision per page
 * - Skips system namespaces (File, Talk, User, User talk, MediaWiki, Wiki/Project)
 * - Converts wikitext → GFM via pandoc
 * - Post-processes pandoc output: `[disp](Page "wikilink")` → `[[page-slug|disp]]`
 * - Generates naive frontmatter (per SCHEMA.md migration defaults)
 * - Heuristically proposes page type for triage report
 * - Writes pages to wiki/_migrated/, special pages to site/content/_index.md
 * - Generates _ops/migration-triage.md
 *
 * Usage:
 *   bun run wfmwiki-mediawiki-import.ts --xml <file>           Run import
 *   bun run wfmwiki-mediawiki-import.ts --xml <file> --dry-run List pages without writing
 *   bun run wfmwiki-mediawiki-import.ts --help
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join } from "node:path";

const PROJECT_ROOT = "/home/tlango/cloud/projects/wfmwiki";
const MIGRATED_DIR = join(PROJECT_ROOT, "wiki", "_migrated");
const SITE_CONTENT_DIR = join(PROJECT_ROOT, "site", "content");
const TRIAGE_PATH = join(PROJECT_ROOT, "_ops", "migration-triage.md");
const TODAY = new Date().toISOString().slice(0, 10);

// Skip these namespace prefixes
const SKIP_PREFIXES = ["File:", "Talk:", "User:", "User talk:", "MediaWiki:", "Wiki:", "Category:"];

// Pages routed to Hugo site root, not wiki
const META_TITLES = new Set([
  "Main Page", "Privacy Policy", "Wiki:Privacy policy",
  "Wiki:Terms of Service", "Wiki:Code of Conduct", "Wiki:About",
]);

// Pages to flag for prune in triage
const PRUNE_TITLES = new Set([
  "OAuth Test Success", "Token Test",
]);

// ──────────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────────

type Revision = {
  id: number;
  timestamp: string;
  text: string;
};

type Page = {
  title: string;
  ns: number;
  revisions: Revision[];
  latestText: string;
  latestRevDate: string;
};

type ImportResult = {
  slug: string;
  title: string;
  proposedType: string;
  proposedDomains: string[];
  recommendation: string;
  notes: string;
  outputPath: string | null;
};

// ──────────────────────────────────────────────────────────────────
// XML parsing — minimal, regex-based (sufficient for MediaWiki dump)
// ──────────────────────────────────────────────────────────────────

function decodeXmlEntities(s: string): string {
  return s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

function extractTag(block: string, tag: string): string | null {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`);
  const m = block.match(re);
  return m ? m[1] : null;
}

function extractAllTags(block: string, tag: string): string[] {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "g");
  const out: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(block)) !== null) out.push(m[1]);
  return out;
}

function parsePages(xml: string): Page[] {
  const pageBlocks = extractAllTags(xml, "page");
  const pages: Page[] = [];
  for (const block of pageBlocks) {
    const title = extractTag(block, "title");
    if (!title) continue;
    const ns = parseInt(extractTag(block, "ns") ?? "0", 10);

    const revisions: Revision[] = [];
    for (const rev of extractAllTags(block, "revision")) {
      const id = parseInt(extractTag(rev, "id") ?? "0", 10);
      const timestamp = extractTag(rev, "timestamp") ?? "";
      const text = decodeXmlEntities(extractTag(rev, "text") ?? "");
      revisions.push({ id, timestamp, text });
    }

    if (revisions.length === 0) continue;
    const latest = revisions.reduce((a, b) => (a.id >= b.id ? a : b));

    pages.push({
      title: decodeXmlEntities(title),
      ns,
      revisions,
      latestText: latest.text,
      latestRevDate: latest.timestamp.slice(0, 10),
    });
  }
  return pages;
}

// ──────────────────────────────────────────────────────────────────
// Filtering + slugging
// ──────────────────────────────────────────────────────────────────

function shouldSkip(page: Page): boolean {
  if (page.ns !== 0 && !META_TITLES.has(page.title)) return true;
  for (const prefix of SKIP_PREFIXES) {
    if (page.title.startsWith(prefix) && !META_TITLES.has(page.title)) return true;
  }
  return false;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/['"™®©]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

// ──────────────────────────────────────────────────────────────────
// pandoc bridge
// ──────────────────────────────────────────────────────────────────

function pandocConvert(wikitext: string): string {
  const result = spawnSync("pandoc", ["-f", "mediawiki", "-t", "gfm", "--wrap=preserve"], {
    input: wikitext,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    throw new Error(`pandoc failed: ${result.stderr}`);
  }
  return result.stdout;
}

// Post-process: pandoc emits MediaWiki internal links as `[disp](Page_Name "wikilink")`.
// Convert those to Obsidian-style `[[page-slug|disp]]` for normal pages,
// and to image markdown for File: prefixed targets.
function postProcessLinks(md: string, titleSlugMap: Map<string, string>): string {
  return md.replace(
    /\[([^\]]+)\]\(([^)]+?)\s+"wikilink"\)/g,
    (_match, disp: string, target: string) => {
      const cleanTarget = target.replace(/_/g, " ").replace(/^"|"$/g, "");

      // File: prefix → image markdown referencing local raw/assets/mediawiki/ copy
      if (/^File:/i.test(cleanTarget)) {
        const fileName = cleanTarget.replace(/^File:/i, "").trim().replace(/ /g, "_");
        // disp may contain pipe-separated thumb/size/caption — take last segment as alt
        const altParts = disp.split(/\\\||\|/);
        const alt = (altParts[altParts.length - 1] ?? fileName).trim();
        return `![${alt}](../raw/assets/mediawiki/${fileName})`;
      }

      const slug = titleSlugMap.get(cleanTarget) ?? slugify(cleanTarget);
      if (disp.toLowerCase() === cleanTarget.toLowerCase()) {
        return `[[${slug}]]`;
      }
      return `[[${slug}|${disp}]]`;
    },
  );
}

// File embeds: pandoc emits `![alt](file.jpg "fig:")` or similar
function postProcessFiles(md: string): string {
  return md.replace(
    /!\[([^\]]*)\]\(([^)]+?)\s+"(?:fig:|wikilink)"\)/g,
    (_m, alt: string, file: string) => {
      // Reference local copy in raw/assets/mediawiki/
      const fileName = file.replace(/^File:/, "").trim();
      return `![${alt}](../raw/assets/mediawiki/${fileName})`;
    },
  );
}

// ──────────────────────────────────────────────────────────────────
// Heuristic type proposal — ONLY used in triage report. Migrated
// pages get type:stub by default per SCHEMA.md migration rules.
// ──────────────────────────────────────────────────────────────────

function proposeType(title: string): {
  type: string;
  ted_pov: boolean;
  domains: string[];
  recommendation: string;
  notes: string;
} {
  const t = title.toLowerCase();

  if (PRUNE_TITLES.has(title)) {
    return { type: "—", ted_pov: false, domains: [], recommendation: "prune", notes: "Test artifact from MediaWiki development" };
  }

  if (META_TITLES.has(title)) {
    return { type: "—", ted_pov: false, domains: [], recommendation: "meta", notes: "Routes to Hugo site, not wiki content" };
  }

  // WFM Labs branded → synthesis + ted_pov
  if (/wfm labs|™/.test(t) || /™/.test(title)) {
    return {
      type: "synthesis",
      ted_pov: true,
      domains: ["org-design", "contact-center"],
      recommendation: "keep",
      notes: "WFM Labs branded synthesis — flag ted_pov: true and gate publish via Evaluator",
    };
  }

  // Comparison pages
  if (/ vs\.? | versus /.test(t)) {
    return {
      type: "comparison",
      ted_pov: false,
      domains: ["operations-research", "probabilistic-methods"],
      recommendation: "keep",
      notes: "Cross-method comparison — fits comparison page type cleanly",
    };
  }

  // Calculators (interactive math)
  if (/calculator|power of one|speed to|attrition|onboarding cost|annual salary|length of training|demand calculation|dynamic calc/.test(t)) {
    return {
      type: "calculator",
      ted_pov: false,
      domains: ["capacity-planning", "contact-center"],
      recommendation: "keep",
      notes: "Calculator (interactive math). May need ted_pov:true if WFM Labs branded.",
    };
  }

  // Operating Standard / thesis pages
  if (/(future wfm|workforce management standard|changes to the future|wfm goals|wfm roles|wfm processes|wfm assessment)/.test(t)) {
    return {
      type: "synthesis",
      ted_pov: true,
      domains: ["org-design", "contact-center"],
      recommendation: "restructure",
      notes: "Part of WFM Operating Standard thesis stack — likely needs domain page + sub-pages structure",
    };
  }

  // Routing/RTA/Event Management → method
  if (/routing|event management|cause and effect|fishbone|optimization|simulation/.test(t)) {
    return {
      type: "method",
      ted_pov: false,
      domains: ["operations-research", "real-time-operations"],
      recommendation: "keep",
      notes: "Method/technique page",
    };
  }

  // Process templates (must come before ROC — "process" contains "roc" substring)
  if (/process template/.test(t)) {
    return {
      type: "method",
      ted_pov: true,
      domains: ["org-design"],
      recommendation: "keep",
      notes: "Process template — synthesis-flavored method",
    };
  }

  // Resource Optimization Center (use word boundaries on roc)
  if (/resource optimization center|\broc\b/.test(t)) {
    return {
      type: "synthesis",
      ted_pov: true,
      domains: ["org-design", "real-time-operations"],
      recommendation: "keep",
      notes: "ROC concept — likely Ted's synthesis on RTA org structure",
    };
  }

  // Generic catch-all
  if (/technology|interpersonal/.test(t)) {
    return {
      type: "concept",
      ted_pov: false,
      domains: ["org-design", "contact-center"],
      recommendation: "restructure",
      notes: "Broad concept — may need to split or merge with thesis pages",
    };
  }

  return {
    type: "concept",
    ted_pov: false,
    domains: ["contact-center"],
    recommendation: "keep",
    notes: "Default stub — propose during triage",
  };
}

// ──────────────────────────────────────────────────────────────────
// Frontmatter generation
// ──────────────────────────────────────────────────────────────────

const VALID_TYPES = new Set([
  "concept", "method", "tool", "calculator", "practitioner",
  "source", "overview", "comparison", "synthesis", "glossary",
]);

function buildFrontmatter(
  page: Page,
  slug: string,
  proposedType: string,
  proposedDomains: string[],
  tedPov: boolean,
): string {
  // Use heuristic type if valid; fall back to concept for unknowns.
  // Triage will adjust if heuristic was wrong.
  const type = VALID_TYPES.has(proposedType) ? proposedType : "concept";
  const domains = proposedDomains.length > 0 ? proposedDomains : ["contact-center"];

  const yaml = [
    "---",
    `title: ${JSON.stringify(page.title)}`,
    `slug: ${slug}`,
    `type: ${type}`,
    `domains: [${domains.join(", ")}]`,
    "status: draft",
    `created: ${TODAY}`,
    `updated: ${TODAY}`,
    "aperture: contact-center",
    "confidence: medium",
    "sources: []",
    "related: []",
    "tags: [migrated-mediawiki]",
    "contributors: [ted-lango]",
    `ted_pov: ${tedPov ? "true" : "false"}`,
    `mediawiki_original: ${JSON.stringify(page.title)}`,
    `mediawiki_revision_date: ${page.latestRevDate}`,
    "---",
    "",
  ];
  return yaml.join("\n");
}

// ──────────────────────────────────────────────────────────────────
// Triage report
// ──────────────────────────────────────────────────────────────────

function buildTriageReport(results: ImportResult[]): string {
  const md = [
    "# MediaWiki Migration Triage Report",
    "",
    `Generated: ${TODAY}`,
    `Source: \`raw/mediawiki-export/wfmlabs-mediawiki-${TODAY}.xml\``,
    `Pages migrated to staging: ${results.length}`,
    "",
    "## Triage Decisions",
    "",
    "All migrated pages currently land in `wiki/_migrated/` with `type: stub, status: draft`.",
    "**Ted reviews this report and confirms or adjusts each row before integration.**",
    "",
    "Decisions:",
    "- **keep** — content is fine, route to canonical wiki/{type}s/ as-is",
    "- **restructure** — content valuable but needs reorganization (split/rename/retype)",
    "- **merge** — combine with another page (specify target in notes)",
    "- **split** — break into multiple pages (specify resulting slugs in notes)",
    "- **prune** — discard (test artifact, outdated, low-value)",
    "- **meta** — route to Hugo site root (Privacy, Terms, etc.) — not wiki content",
    "",
    "| Slug | Title | Proposed Type | Proposed Domains | Recommendation | Notes |",
    "|------|-------|---------------|------------------|----------------|-------|",
  ];

  // Sort by recommendation priority
  const order = ["keep", "restructure", "merge", "split", "meta", "prune"];
  const sorted = [...results].sort((a, b) => {
    const ai = order.indexOf(a.recommendation);
    const bi = order.indexOf(b.recommendation);
    if (ai !== bi) return ai - bi;
    return a.title.localeCompare(b.title);
  });

  for (const r of sorted) {
    const slug = r.outputPath ? `\`${r.slug}\`` : "—";
    const title = r.title.replace(/\|/g, "\\|");
    const domains = r.proposedDomains.join(", ");
    const notes = r.notes.replace(/\|/g, "\\|");
    md.push(`| ${slug} | ${title} | ${r.proposedType} | ${domains} | **${r.recommendation}** | ${notes} |`);
  }

  md.push("");
  md.push("## Schema Battle-Test Notes");
  md.push("");
  md.push("After review, append observations on schema gaps revealed by real content:");
  md.push("- Missing page types?");
  md.push("- Missing domain slugs?");
  md.push("- Frontmatter fields needed but not in v1.0?");
  md.push("");
  md.push("If gaps found, bump SCHEMA.md version and append changelog entry.");

  return md.join("\n");
}

// ──────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────

function help() {
  console.log(`
wfmwiki-mediawiki-import.ts — Convert MediaWiki XML → markdown

Usage:
  bun run wfmwiki-mediawiki-import.ts --xml <file>
  bun run wfmwiki-mediawiki-import.ts --xml <file> --dry-run
  bun run wfmwiki-mediawiki-import.ts --help

Reads XML, converts via pandoc, writes markdown to wiki/_migrated/,
generates _ops/migration-triage.md for human review.
`);
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    help();
    process.exit(0);
  }

  const xmlIdx = args.indexOf("--xml");
  if (xmlIdx === -1 || !args[xmlIdx + 1]) {
    console.error("Missing --xml <file>");
    help();
    process.exit(2);
  }
  const xmlPath = args[xmlIdx + 1];
  const dryRun = args.includes("--dry-run");

  console.log(`Reading XML: ${xmlPath}`);
  const xml = readFileSync(xmlPath, "utf8");
  const allPages = parsePages(xml);
  console.log(`Parsed ${allPages.length} pages from XML`);

  const eligible = allPages.filter(p => !shouldSkip(p));
  console.log(`Eligible after namespace filter: ${eligible.length}`);

  // Build title → slug map for wikilink rewriting
  const titleSlugMap = new Map<string, string>();
  for (const p of eligible) {
    titleSlugMap.set(p.title, slugify(p.title));
  }

  if (!dryRun) {
    mkdirSync(MIGRATED_DIR, { recursive: true });
    mkdirSync(SITE_CONTENT_DIR, { recursive: true });
  }

  const results: ImportResult[] = [];
  for (const page of eligible) {
    const slug = slugify(page.title);
    const proposal = proposeType(page.title);

    let md: string;
    try {
      md = pandocConvert(page.latestText);
      md = postProcessLinks(md, titleSlugMap);
      md = postProcessFiles(md);
    } catch (e) {
      const errMsg = (e as Error).message.replace(/\s+/g, " ").slice(0, 200);
      console.error(`✗ ${page.title}: pandoc error — ${errMsg}`);
      results.push({
        slug,
        title: page.title,
        proposedType: proposal.type,
        proposedDomains: proposal.domains,
        recommendation: "manual-fix",
        notes: `pandoc failed: ${errMsg}`,
        outputPath: null,
      });
      continue;
    }

    const frontmatter = buildFrontmatter(page, slug, proposal.type, proposal.domains, proposal.ted_pov);
    const fullDoc = frontmatter + md;

    let outPath: string;
    if (proposal.recommendation === "meta") {
      // Route to Hugo site
      const fileName = page.title === "Main Page" ? "_index.md" : `${slug}.md`;
      outPath = join(SITE_CONTENT_DIR, fileName);
    } else if (proposal.recommendation === "prune") {
      // Don't write — just record in triage
      results.push({
        slug,
        title: page.title,
        proposedType: proposal.type,
        proposedDomains: proposal.domains,
        recommendation: proposal.recommendation,
        notes: proposal.notes,
        outputPath: null,
      });
      continue;
    } else {
      outPath = join(MIGRATED_DIR, `${slug}.md`);
    }

    if (!dryRun) {
      writeFileSync(outPath, fullDoc);
    }

    results.push({
      slug,
      title: page.title,
      proposedType: proposal.type,
      proposedDomains: proposal.domains,
      recommendation: proposal.recommendation,
      notes: proposal.notes,
      outputPath: outPath,
    });
  }

  if (!dryRun) {
    const report = buildTriageReport(results);
    writeFileSync(TRIAGE_PATH, report);
  }

  // Summary to stdout
  const counts: Record<string, number> = {};
  for (const r of results) counts[r.recommendation] = (counts[r.recommendation] ?? 0) + 1;
  console.log(`\n${"─".repeat(50)}`);
  console.log(`Migration summary:`);
  for (const [rec, count] of Object.entries(counts).sort()) {
    console.log(`  ${rec.padEnd(12)} ${count}`);
  }
  console.log(`Total: ${results.length} pages`);
  if (!dryRun) {
    console.log(`\nMigrated pages: ${MIGRATED_DIR}/`);
    console.log(`Site pages:     ${SITE_CONTENT_DIR}/`);
    console.log(`Triage report:  ${TRIAGE_PATH}`);
  } else {
    console.log(`\n(DRY RUN — no files written)`);
  }
}

if (import.meta.main) main();
