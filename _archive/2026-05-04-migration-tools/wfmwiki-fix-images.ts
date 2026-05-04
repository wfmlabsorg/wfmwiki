#!/usr/bin/env bun
/**
 * wfmwiki-fix-images.ts — Convert pandoc-emitted <img>/<figure> HTML
 * to markdown image syntax pointing at raw/assets/mediawiki/.
 *
 * One-shot post-import cleanup. Idempotent.
 */

import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WIKI_ROOT = "/home/tlango/cloud/projects/wfmwiki/wiki";

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith("_") || entry.startsWith(".")) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (entry.endsWith(".md")) out.push(full);
  }
  return out;
}

function fixContent(s: string): { content: string; changes: number } {
  let changes = 0;

  // <figure>\n<img src="X" ... />\n<figcaption>Y</figcaption>\n</figure>
  s = s.replace(
    /<figure>\s*<img\s+src="([^"]+)"[^>]*\/?>\s*<figcaption>([^<]*)<\/figcaption>\s*<\/figure>/g,
    (_m, src, caption) => {
      changes++;
      return `![${caption}](../raw/assets/mediawiki/${src})`;
    },
  );

  // <img src="X" title="Y" ... />
  s = s.replace(
    /<img\s+src="([^"]+)"\s+title="([^"]*)"[^>]*\/?>/g,
    (_m, src, title) => {
      changes++;
      return `![${title}](../raw/assets/mediawiki/${src})`;
    },
  );

  // <img src="X" alt="Y" ... />  (no title)
  s = s.replace(
    /<img\s+src="([^"]+)"\s+alt="([^"]*)"[^>]*\/?>/g,
    (_m, src, alt) => {
      changes++;
      return `![${alt}](../raw/assets/mediawiki/${src})`;
    },
  );

  // <img src="X" ... />  (no title, no alt)
  s = s.replace(
    /<img\s+src="([^"]+)"[^>]*\/?>/g,
    (_m, src) => {
      changes++;
      return `![${src}](../raw/assets/mediawiki/${src})`;
    },
  );

  return { content: s, changes };
}

function main() {
  const files = walk(WIKI_ROOT);
  let totalChanges = 0;
  let filesChanged = 0;
  for (const f of files) {
    const content = readFileSync(f, "utf8");
    const { content: fixed, changes } = fixContent(content);
    if (changes > 0) {
      writeFileSync(f, fixed);
      console.log(`✓ ${f.replace(WIKI_ROOT, "")}: ${changes} replacements`);
      totalChanges += changes;
      filesChanged++;
    }
  }
  console.log(`\n${filesChanged} files updated, ${totalChanges} total image refs converted.`);
}

if (import.meta.main) main();
