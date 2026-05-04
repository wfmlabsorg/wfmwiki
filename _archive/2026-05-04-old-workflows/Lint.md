# Lint Workflow

**Trigger:** "wiki lint", "clean up the wiki", "wiki health check"

## Modes

- `--quick` — structural checks only (frontmatter + wikilinks). <5 sec on full wiki.
- `--full` — all checks including LLM-based contradiction detection.
- `--scope=domain:forecasting` — restrict to a domain.
- `--scope=type:concept` — restrict to a page type.

## Checks (cheapest first)

1. **Frontmatter validation** — required fields present, valid types, valid domain slugs.
2. **Broken wikilinks** — `[[slug]]` references that don't resolve.
3. **Orphan pages** — pages with zero inbound links (excluding `synthesis` and `overview` hubs).
4. **Stub overload** — `status: stub` pages older than 30 days.
5. **Missing concept pages** — glossary terms mentioned >3 times across wiki without dedicated page.
6. **Tag/domain inconsistency** — pages tagged `forecasting` not linking to forecasting overview.
7. **Source citation gaps** — `concept` and `method` pages with zero source citations.
8. **Contradiction detection (LLM)** — pairs of pages with conflicting claims about same entity. Output candidates for `comparison` page creation.
9. **Stale claims (LLM)** — claims older than 18 months potentially superseded by newer evidence.
10. **Aperture coverage gaps** — concepts present in `contact-center` aperture with obvious analogs missing in `knowledge-worker` or `agentic`.
11. **AI-generic prose detection (LLM)** — flag passages with generic LLM voice patterns.

## Output

`_ops/lint-report.md` — severity-graded findings, actionable recommendations, one-click TARS commands to fix each.

## Pruning

Lint can *suggest* deletions (empty stubs, deprecated pages, low-value migration content). Deletions ALWAYS require explicit human approval. Deleted pages move to `wiki/_archive/` with timestamp + reason — never hard-deleted.

## Output Format

```markdown
# Lint Report — 2026-05-04

## Critical (3)
- ❌ `concepts/erlang-c.md` — broken wikilink to `[[shrinkage]]` (page doesn't exist)
- ...

## High (12)
- ⚠️ `concepts/service-level.md` — zero source citations (concept type requires ≥1)
- ...

## Medium (8) / Low (15)
- ...

## Suggested Actions
- [Fix all critical] `bun run ~/pai/Tools/wfmwiki/wfmwiki-lint.ts --fix-criticals`
```
