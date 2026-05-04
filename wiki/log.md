# Operations Log

Append-only record of all wiki operations. Newest entries at the top.

Format: `## [YYYY-MM-DD HH:MM] {type} | {summary}` where type is one of `ingest | query | lint | publish | migrate | prune`.

---

## [2026-05-04 15:00] init | Cleanup: deleted CF Pages project, removed wiki.wfmlabs.com CNAME from Netlify, archived Hugo site/ + 5 migration tools + 9 markdown-pipeline workflows, dropped 28 duplicate wiki/{section}/ files (now in MediaWiki only), updated SKILL.md + MISSION.md to reflect MediaWiki-as-source-of-truth, built MW API client + overview tool, verified bot auth (User:Tlango@TARS — bureaucrat+sysop, 578 edits).

## [2026-05-04 12:17] publish | QA fixes: light theme as default, MediaWiki-inspired CSS polish, sidebar redesigned (Resources / Future WFM Playbook / Tools / Reference / External — mirrors original wfmlabs.org wiki). New homepage at wiki/_home.md with hero, positioning, get-started cards. Publish tool now processes top-level files + has prefix-matching slug resolver for anchor-style mangled slugs + bare-img path fix + wikilink shortcode uses Site.GetPage (sections resolve too). Stripped MediaWiki [[Category:*]] and [[Image:*]] artifacts. Final state: 0 raw [[]] on home, 8 wikilink-new (genuine missing concept stubs — diagnostic-reports, simulation-software, probability-variance-goals — proper red-link behavior).

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
