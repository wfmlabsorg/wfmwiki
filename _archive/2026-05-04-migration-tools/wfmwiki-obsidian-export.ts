#!/usr/bin/env bun
/**
 * wfmwiki-obsidian-export.ts — One-way push from wiki/ → Obsidian vault.
 *
 * Per MISSION.md, the Linux-side wiki/ is authoritative. Obsidian is a
 * read/edit mirror. This tool refreshes the mirror on demand.
 *
 * No automatic two-way sync. If you edit in Obsidian and want changes
 * back, copy manually — by design (avoids edit conflict hell).
 *
 * Usage:
 *   bun run wfmwiki-obsidian-export.ts --push        Push wiki/ → vault
 *   bun run wfmwiki-obsidian-export.ts --dry-run     Show what would copy
 *   bun run wfmwiki-obsidian-export.ts --help
 */

import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";

const WIKI_SRC = "/home/tlango/cloud/projects/wfmwiki/wiki/";
const VAULT_DST = "/mnt/d/Obsidian/WFMWiki/";

function rsync(dryRun: boolean): number {
  if (!existsSync(WIKI_SRC)) {
    console.error(`✗ source missing: ${WIKI_SRC}`);
    return 1;
  }

  if (!dryRun && !existsSync(VAULT_DST)) {
    console.log(`Creating vault directory: ${VAULT_DST}`);
    try {
      mkdirSync(VAULT_DST, { recursive: true });
    } catch (e) {
      console.error(`✗ cannot create vault dir: ${(e as Error).message}`);
      console.error(`  Is /mnt/d mounted? Check Windows Obsidian path.`);
      return 1;
    }
  }

  const flags = ["-av", "--delete"];
  if (dryRun) flags.push("--dry-run");

  // Exclude operational files that don't belong in the vault
  flags.push("--exclude=log.md", "--exclude=index.md");

  const result = spawnSync("rsync", [...flags, WIKI_SRC, VAULT_DST], {
    stdio: "inherit",
  });
  return result.status ?? 1;
}

function help() {
  console.log(`
wfmwiki-obsidian-export.ts — One-way push wiki/ → Obsidian vault

Source:      ${WIKI_SRC}
Destination: ${VAULT_DST}

Excludes log.md and index.md (operational files, not for vault graph).
Uses rsync --delete — vault becomes an exact mirror minus exclusions.

Usage:
  bun run wfmwiki-obsidian-export.ts --push        Push to vault
  bun run wfmwiki-obsidian-export.ts --dry-run     Show what would copy
  bun run wfmwiki-obsidian-export.ts --help
`);
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    help();
    process.exit(0);
  }

  if (args.includes("--dry-run")) {
    process.exit(rsync(true));
  }

  if (args.includes("--push")) {
    const code = rsync(false);
    if (code === 0) {
      console.log(`\n✓ pushed wiki/ → ${VAULT_DST}`);
    }
    process.exit(code);
  }

  console.error(`Unknown args: ${args.join(" ")}`);
  help();
  process.exit(2);
}

if (import.meta.main) main();
