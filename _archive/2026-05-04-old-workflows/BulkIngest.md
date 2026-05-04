# BulkIngest Workflow

**Trigger:** "ingest these N sources" (with list), "here are 6 new resources", "bulk ingest from [folder]"

**Pattern:** This is the canonical "Ted gives me a stack of material" workflow. Per MISSION.md, no auto-cron / RSS — Ted manually presents resources, I process them.

## Inputs

- List of URLs, file paths, or video links
- Optional: target domains (e.g., "all forecasting-related")
- Optional: priority order

## Pipeline

1. **Queue** — write list to `_ops/ingest-queue.md` with status per item.
2. **For each item, run Ingest workflow with reduced supervision:**
   - Capture → raw/
   - Source page draft → wiki/sources/
   - **Auto-approve** source page creation (no existing-page modifications yet)
3. **Cross-page integration deferred** — collect all proposed cross-page touches in `_ops/bulk-integration-queue.md`.
4. **Surface batch report** — single review session for all cross-page integrations.
5. **Ted approves the batch** — apply approved diffs, defer rejected ones.

## Rationale

The bottleneck is human review of *cross-page modifications*, not source-page creation. By batching the cross-page review, Ted reviews 1 batch instead of N individual approvals.

## Cost Discipline

- Track per-source cost via `tars-cost.ts`.
- If cumulative batch cost exceeds budget threshold ($10 default), pause and confirm.
- Optimization: parallel source page drafts (one WikiIngestor agent per source, opus → sonnet routing).

## Outputs

- N source pages created (one per input)
- 1 batch integration report with proposed cross-page changes
- Updated `index.md` and `log.md` (single bulk entry)

## Example Invocation

```
Ted: "Ingest these 6 resources for the next-gen routing topic:
1. https://...
2. /path/to/paper.pdf
3. ...
"

TARS:
  - Queues 6 items
  - Spawns 6 WikiIngestor agents in parallel (sonnet)
  - Each produces a source page draft
  - Batch integration report surfaces 14 proposed cross-page touches
  - Ted approves 11, rejects 3
  - 11 diffs apply, 3 archive
  - Total cost: $4.20, time: 18 min
```
