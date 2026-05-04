# ContributionTriage Workflow

**Trigger:** New entry in `_ops/contribution-inbox/` OR scheduled weekly review.

**Status:** Scaffolded for v1.0. Member-facing form deferred until volume justifies.

## Initial Contribution Model

- Public Hugo site has "Suggest an edit" / "Submit a source" link on every page.
- Form submission creates a GitHub issue on `wfmlabsorg/wfmwiki` with structured template:
  - URL or source pointer
  - Why relevant
  - Suggested page touches
- TARS reads new issues weekly via `gh issue list`, drafts an Ingest plan per issue.
- Ted reviews curated batch, approves or rejects.
- Approved contributions credited in target page frontmatter `contributors:`.

## Pipeline (per contribution)

1. **Read issue** via `gh issue view <number>`.
2. **Validate** — does it meet minimum quality bar? (URL works, suggestion is concrete, not spam)
3. **Draft Ingest plan** — same shape as `Ingest.md` Step 3, but flagged as third-party.
4. **Surface to Ted** — batch report at end of weekly review.
5. **Execute or reject** — Ted decides per item.

## Inbox Watcher

`wfmwiki-contribution-watcher.ts` *(future tool)*:
- Polls `gh issue list --label contribution` weekly
- Writes triaged batch to `_ops/contribution-inbox/YYYY-MM-DD-batch.md`
- Notifies Ted via Voice or email

## v1.0 Deliverables

- Build the inbox monitoring + triage drafting (lightweight)
- GitHub issue template at `.github/ISSUE_TEMPLATE/contribution.md`
- "Suggest an edit" link in Hugo theme
- DEFER: public-facing form, automated voting, contributor reputation

## Spam Defense

- All submissions require GitHub account (already a quality filter)
- Repeat offenders → block via GitHub
- LLM pre-screen for relevance before surfacing to Ted
