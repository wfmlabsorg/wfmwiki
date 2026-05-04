# Wiki Content — See wiki.wfmlabs.org

The WFM Labs wiki content lives at **[wiki.wfmlabs.org](https://wiki.wfmlabs.org)** (MediaWiki, hosted on Pro.wiki).

This `wiki/` directory in the repository now holds operational artifacts only — not the wiki content itself.

## What's in this directory

| Path | Purpose |
|------|---------|
| `wiki/log.md` | Append-only operational journal of TARS actions on the wiki |
| `wiki/sources/` | Source pages — bibliographic anchors used by wiki claims |
| `wiki/_archive/` | Soft-deleted local artifacts |

## Source of truth

All wiki articles, categories, images, and templates live in the MediaWiki database at `wiki.wfmlabs.org`. TARS (the WFMWiki skill) reads and writes the wiki via the MediaWiki API at `/w/api.php` using a bot password under `User:Tlango@TARS`.

This repository (`wfmlabsorg/wfmwiki`) holds:

- `raw/` — immutable source documents that get ingested into wiki pages
- `_ops/` — audit reports, ingest queues, weekly review outputs
- `_meta/` — project documentation
- `SCHEMA.md` — wikitext authoring guide (page types, voice, citation discipline)
- `wiki/` — this directory: operational journal + source anchors

The Hugo + Cloudflare Pages migration attempt (May 2026) is preserved in `_archive/2026-05-04-hugo-attempt/` for reference.

## Live status

```bash
sops exec-env ~/pai/secrets.yaml 'bun run ~/pai/Tools/wfmwiki/wfmwiki-mw-overview.ts'
```
