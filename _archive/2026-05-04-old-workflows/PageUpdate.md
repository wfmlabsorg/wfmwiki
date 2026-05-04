# PageUpdate Workflow

**Trigger:** "update page [slug]", or downstream from Ingest workflow.

## Pipeline

1. **Read current page** — `wiki/{type}s/{slug}.md`.
2. **Diff preview** — generate proposed change as unified diff. Show to Ted before writing.
3. **Approval gate** — Ted approves, modifies, or rejects.
4. **Apply changes**:
   - Update content
   - Bump frontmatter `updated:` to today's date
   - Append `contributors:` if a new contributor's content
   - If frontmatter `status` changes (e.g., `stub` → `draft`), record in log
5. **Validate** — `wfmwiki-frontmatter.ts --check`
6. **Update index** — `wfmwiki-index.ts --regen` (only if title or domains changed)
7. **Update log** — `## [YYYY-MM-DD] page-update | {slug} | {summary}`
8. **Lint** — `wfmwiki-lint.ts --quick --scope=page:{slug}`

## Diff Format

```diff
--- wiki/concepts/service-level.md (original)
+++ wiki/concepts/service-level.md (proposed)
@@ -3,7 +3,7 @@
 type: concept
 domains: [contact-center, performance-management]
 status: draft
-updated: 2026-04-15
+updated: 2026-05-04
 sources:
   - src-hyndman-otexts-2026
+  - src-cleartel-internal-001
@@ -15,3 +16,8 @@
 ...

+## In Back-Office Operations
+
+Service level applied to non-real-time work...
+[[src-cleartel-internal-001|ClearTel internal docs]]
```

## Rules

- **Direct edits to frontmatter `created:`** — forbidden. That field is immutable.
- **Removing citations** — flag for review; never silent.
- **Promoting status** — `stub` → `draft` requires content. `draft` → `active` requires Evaluator pass for `ted_pov: true` pages.
- **Demoting status** — `active` → `deprecated` requires reason in log.
