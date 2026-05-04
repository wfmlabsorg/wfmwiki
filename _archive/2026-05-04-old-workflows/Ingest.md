# Ingest Workflow

**Trigger:** "ingest [source]", "add this to the wiki [URL/path]", "wiki this video"

**Inputs:** URL, file path, raw text, video URL (with transcript extraction)

## Pipeline

1. **Capture** — Save source to `raw/` with timestamp + slug.
   - URLs → markdown via web fetch + readability extraction
   - Videos → transcript via NotebookLM skill or yt-dlp + Whisper
   - PDFs → DocReader skill
   - Compute SHA-256 content hash for dedup detection

2. **Source Page Draft** *(WikiIngestor agent)* — Create `wiki/sources/src-{slug}.md` with:
   - Bibliographic metadata (author, date, URL, content hash)
   - Key claims (5–15 bullets)
   - Concepts mentioned (will become wikilinks)
   - Contradictions or supports vs. existing wiki claims
   - Recommended page touches (which existing pages to update)

3. **Integration Plan** — Present to Ted:
   - New pages to create (proposed slugs + types)
   - Existing pages to update (diff preview)
   - Wikilinks to add or strengthen
   - Estimated cost (token + time)

4. **Approval Gate (HUMAN CHECKPOINT)** — Ted approves, modifies, or rejects.
   - **Auto-merge allowed** when changes are limited to: source page creation + index/log updates (no existing wiki content modified).
   - **Approval required** for any modification to existing wiki pages.

5. **Execute** *(WikiEditor agent)*:
   - Write source page
   - Create new pages from type templates
   - Apply diffs to existing pages
   - Run `wfmwiki-index.ts --regen`
   - Append to `log.md`: `## [YYYY-MM-DD HH:MM] ingest | {Source Title}`
   - Register task completion in coordination layer

6. **VERIFY** — Run `wfmwiki-lint.ts --quick` against touched pages. Flag new lint errors for review.

7. **LEARN** — Append novel patterns to `~/pai/MEMORY/Learning/EXECUTE/wfmwiki-ingest-patterns.md`.

## Outputs

- 1 source page in `wiki/sources/`
- N new concept/method/tool pages
- M updated existing pages (diff-applied)
- Updated `index.md` and `log.md`
- TARS task completion logged
