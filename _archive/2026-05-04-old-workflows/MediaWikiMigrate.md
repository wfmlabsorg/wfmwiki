# MediaWikiMigrate Workflow

**Trigger:** "migrate mediawiki", "import wfmlabs wiki"

## Phase 1 — Export *(One-time, manual by Ted)*

- Pull MediaWiki XML via Special:Export at wiki.wfmlabs.org.
- Store at `raw/mediawiki-export/wfmlabs-mediawiki-YYYY-MM-DD.xml`.
- Snapshot images via API to `raw/assets/mediawiki/`.
- **Status:** ✓ DONE — XML at `raw/mediawiki-export/wfmlabs-mediawiki-2026-05-04.xml` (124 entries; 32 content pages).

## Phase 2 — Convert *(Automated)*

`wfmwiki-mediawiki-import.ts`:
- Parse XML for pages + categories
- Skip namespaces: `File:`, `Talk:`, `User:`, `User talk:`, `MediaWiki:`, `Wiki:`
- Convert page bodies via `pandoc -f mediawiki -t gfm`
- Generate naive frontmatter: `type: stub`, `status: draft`, `aperture: contact-center`, `confidence: medium`
- Resolve internal MediaWiki links to wikilink slugs (kebab-case)
- Write to `wiki/_migrated/` (staging, not yet integrated)
- Map `Main Page` → `site/content/_index.md` (Hugo home, not wiki)

## Phase 3 — Triage *(Human + LLM collaborative)*

**WikiArchitect agent** reviews each migrated page and recommends:

| Decision | Meaning |
|----------|---------|
| **Keep as-is** | Well-formed, fits schema, minor cleanup only |
| **Restructure** | Content valuable, schema mismatch (wrong type, wrong domains) |
| **Merge** | Duplicates or should combine with another page |
| **Split** | Covers multiple concepts that should be separate pages |
| **Prune** | Outdated, low-value, or no longer relevant |

Output: `_ops/migration-triage.md` — decision per page with rationale.

Ted reviews in batches of 20–30 per session. Decisions adjustable.

## Phase 4 — Integration *(One page or batch at a time)*

For each Keep / Restructure / Merge / Split decision, run the appropriate sub-workflow:
- Keep → `PageUpdate` (frontmatter pass + voice review)
- Restructure → `PageCreate` (new) + manual content port
- Merge → `PageUpdate` (target) + archive source
- Split → `PageCreate` (per resulting page) + archive original

Track in `_ops/migration-progress.md`. Update `index.md` + `log.md` per integration.

## Phase 5 — Validation

- Full lint run against migrated content
- Spot-check 10% of pages for voice consistency, schema compliance
- Coverage audit: any major MediaWiki topic that didn't make it to the new wiki?
- Final commit + push

## Notes from Phase 1 Audit

Existing content patterns (32 pages):
- **Thesis stack** (8): Future WFM Operating Standard + components → `synthesis` type, `org-design` domain
- **Calculators** (9): Power of One, attrition formulas, etc. → `calculator` type
- **WFM Labs™ branded** (4): Erlang-O™, Maturity Model™, Risk Score™, Assessment → `synthesis` + `ted_pov: true`
- **Methods/comparisons**: Discrete-Event vs Monte Carlo → `comparison`; Multi-Objective Optimization, ROC, Fishbone → `method`
- **Prune candidates**: OAuth Test Success, Token Test (test artifacts)
