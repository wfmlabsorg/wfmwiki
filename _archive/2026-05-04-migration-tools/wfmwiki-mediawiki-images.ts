#!/usr/bin/env bun
/**
 * wfmwiki-mediawiki-images.ts — Pull all images from a MediaWiki via API.
 *
 * Reads File: page list via MediaWiki's API (action=query&list=allimages),
 * downloads each image, saves to raw/assets/mediawiki/ with original filename.
 * Idempotent: skips files already present.
 *
 * Usage:
 *   bun run wfmwiki-mediawiki-images.ts --wiki https://wiki.wfmlabs.org
 *   bun run wfmwiki-mediawiki-images.ts --wiki <url> --dry-run
 *   bun run wfmwiki-mediawiki-images.ts --help
 */

import { existsSync, mkdirSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ASSETS_DIR = "/home/tlango/cloud/projects/wfmwiki/raw/assets/mediawiki";

type ApiImage = {
  name: string;
  timestamp?: string;
  url?: string;
  size?: number;
};

async function fetchImageList(wikiUrl: string): Promise<ApiImage[]> {
  const images: ApiImage[] = [];
  let aicontinue: string | undefined;

  for (;;) {
    const params = new URLSearchParams({
      action: "query",
      list: "allimages",
      ailimit: "500",
      aiprop: "url|size|timestamp",
      format: "json",
    });
    if (aicontinue) params.set("aicontinue", aicontinue);

    // Most pro.wiki / standard MediaWiki installs put api.php at /w/api.php.
    // Some put it at /api.php. Try /w/api.php first; fall back if 404.
    const url = `${wikiUrl}/w/api.php?${params}`;
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`MediaWiki API ${resp.status}: ${await resp.text()}`);
    }
    const data = await resp.json() as {
      query?: { allimages?: ApiImage[] };
      continue?: { aicontinue?: string };
    };

    if (data.query?.allimages) {
      images.push(...data.query.allimages);
    }
    if (data.continue?.aicontinue) {
      aicontinue = data.continue.aicontinue;
    } else {
      break;
    }
  }

  return images;
}

async function downloadImage(img: ApiImage): Promise<{ saved: boolean; reason: string }> {
  if (!img.url) return { saved: false, reason: "no url in API response" };

  const targetPath = join(ASSETS_DIR, img.name);

  if (existsSync(targetPath)) {
    const sz = statSync(targetPath).size;
    if (img.size && sz === img.size) {
      return { saved: false, reason: `already present (${sz} bytes)` };
    }
  }

  const resp = await fetch(img.url);
  if (!resp.ok) return { saved: false, reason: `HTTP ${resp.status}` };

  const buf = Buffer.from(await resp.arrayBuffer());
  writeFileSync(targetPath, buf);
  return { saved: true, reason: `${buf.length} bytes` };
}

function help() {
  console.log(`
wfmwiki-mediawiki-images.ts — Pull images from a MediaWiki via API

Usage:
  bun run wfmwiki-mediawiki-images.ts --wiki <baseUrl>
  bun run wfmwiki-mediawiki-images.ts --wiki <baseUrl> --dry-run
  bun run wfmwiki-mediawiki-images.ts --help

Lists all File: pages via API, downloads each image, saves to:
  ${ASSETS_DIR}/

Idempotent — skips files already present at the same size.

Example:
  bun run wfmwiki-mediawiki-images.ts --wiki https://wiki.wfmlabs.org
`);
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    help();
    process.exit(0);
  }

  const wikiIdx = args.indexOf("--wiki");
  if (wikiIdx === -1 || !args[wikiIdx + 1]) {
    console.error("Missing --wiki <url>");
    help();
    process.exit(2);
  }
  const wikiUrl = args[wikiIdx + 1].replace(/\/$/, "");
  const dryRun = args.includes("--dry-run");

  console.log(`Listing images at ${wikiUrl}…`);
  const images = await fetchImageList(wikiUrl);
  console.log(`Found ${images.length} images`);

  if (!dryRun) mkdirSync(ASSETS_DIR, { recursive: true });

  let saved = 0, skipped = 0, failed = 0;
  for (const img of images) {
    if (dryRun) {
      console.log(`  ${img.name} (${img.size ?? "?"} bytes) → ${img.url}`);
      continue;
    }

    try {
      const result = await downloadImage(img);
      if (result.saved) {
        console.log(`  ✓ ${img.name} (${result.reason})`);
        saved++;
      } else {
        console.log(`  · ${img.name} — ${result.reason}`);
        skipped++;
      }
    } catch (e) {
      console.error(`  ✗ ${img.name}: ${(e as Error).message}`);
      failed++;
    }
  }

  console.log(`\n${"─".repeat(50)}`);
  console.log(`Saved:   ${saved}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Failed:  ${failed}`);
  console.log(`Total:   ${images.length}`);
  if (!dryRun) console.log(`Output:  ${ASSETS_DIR}/`);
}

if (import.meta.main) main();
