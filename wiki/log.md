# Operations Log

Append-only record of all wiki operations. Newest entries at the top.

Format: `## [YYYY-MM-DD HH:MM] {type} | {summary}` where type is one of `ingest | query | lint | publish | migrate | prune`.

---

## [2026-05-05 08:29] publish | QA pass on new pages (4 corrections): RealNumbers URL realnumbersandstrategies.com→realnumbers.com (Strategies is the product); FREESTYLE Telecom URL dropped (no verified domain found); Maturity Model level names corrected (fabricated Connected/Adaptive/Autonomous → real Progressive/Advanced/Pioneering with qualifier descriptions); Intradiem founding-year claim softened (removed unverified since 2009). Wikilinks audited: 4 content links resolve, only known wanted page is Workforce Management Software (WFM or WFO) which my new pages contributed to (now top wanted at 3 refs).

## [2026-05-05 08:29] publish | Edited "Intelligent Automation" — QA fix: align Maturity Model context with actual WFM Labs Maturity Model™ level names — added Progressive (Breaking the Monolith) and Advanced (The Ecosystem Emerges) qualifiers. Removed unverified Intradiem founding-year claim (since 2009 → established player). (rev 597)

## [2026-05-05 08:29] publish | Edited "WFM Ecosystem Architecture" — QA fix: Maturity Model alignment — replaced fabricated level names (Connected/Adaptive/Autonomous) with actual model names from WFM Labs Maturity Model™ (Progressive/Advanced/Pioneering) and added the qualifier descriptions (Breaking the Monolith / Ecosystem Emerges / Enterprise-Wide Intelligence). Added Level 4 reference link to level4.wfmlabs.com. (rev 596)

## [2026-05-05 08:26] publish | Edited "Technology" — QA fix: RealNumbers vendor URL — was realnumbersandstrategies.com (DEAD); correct domain is realnumbers.com. Strategies is the product, not the company name. (rev 595)

## [2026-05-05 08:26] publish | Edited "WFM Ecosystem Architecture" — QA fix: RealNumbers URL (was realnumbersandstrategies.com — DEAD; correct domain is realnumbers.com, Strategies is the product name). Drop FREESTYLE Telecom URL (no verified domain found; keeping company name as bold text). (rev 594)

## [2026-05-05 08:10] publish | Edited "Technology" — Append new section: The Modern Ecosystem Approach. Bridges existing Technology coverage to the new WFM Ecosystem Architecture synthesis page. Cites Lango LinkedIn article (Aug 2025). No existing prose modified — append-only. (rev 593)

## [2026-05-05 08:10] publish | Edited "WFM Ecosystem Architecture" — Create synthesis page for the 4-pillar WFM ecosystem framework. Anchored to Lango LinkedIn article (Aug 2025): The Critical WFM Choice. Sections: Evolution Gap, Two Fatal Flaws (Static Scheduling, Deterministic Planning), Four-Pillar Architecture (Core/Automation/Capacity Planning/Analytics), Three Operational Concepts (Variance as Opportunity, Living Models, Risk-Aware Planning), AI Practical Role, Flexible Workforce Models, Strategic Choice, Maturity Model Alignment. (rev 592)

## [2026-05-05 08:10] publish | Edited "Intelligent Automation" — Create concept page filling the highest-priority red link (3 backlinks). Synthesized from Future WFM Operating Standard framework and Lango LinkedIn article on WFM Ecosystem Architecture (Aug 2025). Sections: What It Is, RPA vs IA, WFM Use Cases, Industrial-Strength Automation Pillar, Vendor Landscape, Maturity Model Context. (rev 591)

## [2026-05-05 08:10] publish | Edited "Automation Software: Robotic Process Automation and Intelligent Automation and (RPA and IA)" — Create redirect to Intelligent Automation. The original placeholder title was awkward; existing page references already display Intelligent Automation as the link text. Redirecting resolves the 3 backlinks without rewriting source pages. (rev 590)

## [2026-05-05 07:45] publish | Edited "Resource Optimization Center (ROC)" — Fix phantom red link: Next-Generation Routing (hyphen) → Next Generation Routing (no hyphen). The hyphenated form was a typo; the actual page slug uses no hyphen. (rev 589)

## [2026-05-05 07:45] publish | Edited "Discrete-Event vs. Monte Carlo Simulation Models" — Fix phantom red link: Multi-Objective Optimization in Contact Centers (plural) → Contact Center (singular). The plural form was a typo; the actual page exists at the singular slug. (rev 588)

## [2026-05-05 07:38] init | Phase 7 complete: 5 MediaWiki workflows + 4 new tools shipped. wfmwiki-mw-audit.ts (lonely/wanted/redirects/dead-ends/stale-stubs), wfmwiki-mw-coverage.ts (red-link inbound count + topic gaps), wfmwiki-mw-edit.ts (diff-approval edit with bot=1 default, 2s rate limit, audit-report tag in summary), wfmwiki-mw-report.ts (composes audit+coverage into weekly). Workflows: Audit, Coverage, Ingest, Update, Report. Verified end-to-end on live wiki: 7 lonely pages, 11 wanted pages (5 content gaps + 6 templates), edit dry-run on Token Test produced clean diff.

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
