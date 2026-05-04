# Operations Log

Append-only record of all wiki operations. Newest entries at the top.

Format: `## [YYYY-MM-DD HH:MM] {type} | {summary}` where type is one of `ingest | query | lint | publish | migrate | prune`.

---

## [2026-05-04 11:54] publish | wiki.wfmlabs.com LIVE: HTTP 200 across home + sample pages + images. CF Pages cert provisioned by Google CA. wfmwiki.pages.dev → wiki.wfmlabs.com via Netlify CNAME + CF Pages custom domain validation.

## [2026-05-04 11:51] publish | Phase 6 first deploy: wfmwiki.pages.dev live with 29 wiki pages + 5 site pages. CNAME wiki.wfmlabs.com → wfmwiki.pages.dev added in Netlify DNS. CF Pages domain validation in progress.

## [2026-05-04 11:26] migrate | Phase 5 integration complete: 27 pages → wiki/{synthesis|methods|comparisons|calculators}, 1 hand-port (Event Management), 1 source page, 73 images pulled, all 29 pages pass schema, 0 missing image refs.

## [2026-05-04 11:03] migrate | MediaWiki import: 36 pages parsed, 27 to wiki/_migrated/, 6 to site/content/, 2 prune, 1 manual-fix (Event Management table-with-template). Schema battle-test passed; v1.0.1 changelog entry.

## [2026-05-04 10:28] init | Phase 0 complete — scaffold, schema, mission, skill, 4 tools verified. Ready for Phase 1 stop gate.

## [2026-05-04 10:26] init | Phase 0 tools verified

## [2026-05-04 10:09] init | Repository scaffolded

- Directory tree created per build prompt §2.1
- MediaWiki XML export landed at `raw/mediawiki-export/wfmlabs-mediawiki-2026-05-04.xml` (124 entries; 32 content pages, 73 file/image wrappers, 19 system/talk pages)
- README.md, .gitignore, index.md, log.md written
- Phase 0 in progress
