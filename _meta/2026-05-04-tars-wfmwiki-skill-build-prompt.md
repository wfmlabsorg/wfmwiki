# TARS Build Prompt: WFMWiki Skill

**Version:** 1.0
**Created:** 2026-05-04
**Target:** TARS (Claude Code, WSL2, Opus 4.6)
**Phase:** EXECUTE (skip OBSERVE/THINK — Ted has already done that work)
**Estimated Effort:** 3–5 sessions across multiple days

---

## 1. Mission

Build a new TARS skill — `WFMWiki` — that serves as the orchestrator for the **WFMLabs Knowledge Wiki**, a Karpathy-pattern LLM-maintained wiki that:

1. **Migrates** existing WFMLabs MediaWiki content into a markdown-native, Obsidian-readable wiki.
2. **Ingests** new sources (URLs, PDFs, videos, transcripts, documents) and integrates them into the wiki — creating new pages, updating existing pages, maintaining cross-references, all in markdown.
3. **Maintains** the wiki actively — lint passes, pruning, contradiction detection, gap analysis.
4. **Publishes** a read-only public-facing site at WFMLabs.org with a Hugo + Netlify pipeline.
5. **Triages** contributions from WFM Labs members (future capability — scaffold but don't fully build).

### 1.1 Strategic Frame

The wiki is the documentation layer of WFM Labs' positioning thesis: **next-generation workforce planning across the supply-and-demand industry — for any knowledge worker, human or agentic, with contact centers as the foundational discipline.**

Aperture is intentionally expanding: contact centers remain the canonical example (deepest data, most mature methodology), but the wiki's structural taxonomy must accommodate back-office, knowledge work, and agentic workforce content as first-class citizens, not afterthoughts.

### 1.2 Reference Pattern

This skill implements the pattern described in Andrej Karpathy's *LLM Wiki* gist (April 2026, 5,000+ stars):
- The wiki is the **durable artifact** — not the chat history.
- The LLM is the **maintainer**, not just the retriever.
- Three layers: **raw sources (immutable) → wiki (LLM-owned markdown) → schema (the rules that make the LLM a disciplined maintainer).**
- Operations: **ingest, query, lint.**

Ted's instantiation diverges from Karpathy's purely-personal use case in two ways:
- **Public publishing layer** (Hugo site at WFMLabs.org).
- **Domain-specific schema** (WFM taxonomy, voice, evidence standards).

---

## 2. Architecture

### 2.1 Storage Layout

```
~/cloud/projects/wfmwiki/                  # Source of truth (R2-backed, git-tracked)
├── .git/
├── SCHEMA.md                              # The configuration document
├── README.md
├── raw/                                   # Immutable source documents
│   ├── articles/
│   ├── pdfs/
│   ├── transcripts/
│   ├── mediawiki-export/                  # Original XML dump for audit trail
│   └── assets/                            # Images downloaded locally
├── wiki/                                  # LLM-maintained markdown
│   ├── index.md                           # Auto-updated catalog
│   ├── log.md                             # Append-only operations log
│   ├── domains/                           # Domain overview pages
│   ├── concepts/                          # Concept pages (Erlang C, shrinkage, etc.)
│   ├── methods/                           # How-to pages (building a forecast, etc.)
│   ├── tools/                             # Vendor/tool entity pages
│   ├── practitioners/                     # People pages (Hyndman, Fluss, etc.)
│   ├── sources/                           # One summary page per ingested source
│   ├── synthesis/                         # Ted's POV / next-gen WFM thesis pages
│   ├── comparisons/                       # Cross-source disagreement pages
│   └── glossary/                          # Short definition pages
├── _ops/                                  # Operations support files
│   ├── lint-report.md                     # Latest lint findings
│   ├── ingest-queue.md                    # Pending ingest sources
│   └── contribution-inbox/                # Member-submitted suggestions (future)
└── _build/                                # Hugo build outputs (gitignored)
```

### 2.2 Obsidian Integration

Mount the `wfmwiki/` directory **inside Ted's existing Obsidian vault** as a subfolder via symlink, OR create a dedicated WFMWiki vault. Recommendation: **dedicated vault** at `D:\Obsidian\WFMWiki\` symlinked to `~/cloud/projects/wfmwiki/wiki/` — keeps the wiki's graph view clean and avoids cross-contamination with personal notes.

Obsidian capabilities to leverage:
- **Native wikilinks** (`[[page-slug|Display Text]]`)
- **Graph view** (visual quality check)
- **Dataview** plugin (dynamic queries over frontmatter)
- **Templater** (page templates per type)
- **Hotkey for "Download attachments for current file"** (per Karpathy's tip)
- **Obsidian Web Clipper** (browser extension for fast URL ingest into `raw/`)

### 2.3 Hugo Site (Public Publishing)

```
~/cloud/projects/wfmwiki-site/             # Hugo source
├── config.yaml
├── content/                               # Symlinked or rsync'd from wfmwiki/wiki/
├── themes/                                # Custom or adapted from existing wiki theme
├── layouts/
└── static/
```

Build pipeline:
1. Markdown changes committed to `wfmwiki/` repo.
2. GitHub Action or Cloudflare Worker triggers Hugo build.
3. Built site deploys to Netlify or Cloudflare Pages at WFMLabs.org.
4. Public site is **read-only** — no comments, no editing. Single "Suggest an edit" link per page that opens a GitHub issue or a contribution form.

### 2.4 Coordination Layer Integration

All ingest operations, lint passes, and migration runs register as tasks in TARS's coordination layer:

```bash
bun run ~/pai/Tools/tars-task.ts add "Ingest: Hyndman OTexts forecasting book" --project wfmwiki
bun run ~/pai/Tools/tars-cost.ts summary --project wfmwiki
bun run ~/pai/Tools/tars-activity.ts recent --project wfmwiki
```

---

## 3. The Schema (SCHEMA.md)

**This is the most important file in the entire skill.** It is what makes the LLM a disciplined wiki maintainer rather than a generic chatbot. Get this right and the rest follows.

### 3.1 Page Types

| Type | Purpose | Example |
|------|---------|---------|
| `concept` | An abstract idea or principle | Service Level, Erlang C, Shrinkage |
| `method` | A how-to or technique | Building an ETS Forecast, Running a DOE |
| `tool` | A vendor product or piece of software | NICE WFM, Calabrio, Intradiem, Hyndman OTexts |
| `practitioner` | A person worth tracking | Rob Hyndman, Donna Fluss, Brian Fung |
| `source` | One page per ingested source document | "Hyndman OTexts Ch. 7: Exponential Smoothing" |
| `overview` | Top-level domain page | Forecasting, Scheduling, RTA |
| `comparison` | Cross-source disagreement or method comparison | "Erlang C vs simulation for blended environments" |
| `synthesis` | Ted's POV / original framework / next-gen WFM thesis | "The Three-Pool Workforce Model", "Enterprise Queue Taxonomy" |
| `glossary` | Short definition with cross-refs | "Adherence", "Conformance", "Occupancy" |

### 3.2 Domain Taxonomy

The wiki's organizing structure. Page `domains` frontmatter field MUST use these slugs:

**Foundations**
- `queueing-theory`
- `demand-modeling`
- `supply-modeling`
- `probabilistic-methods`
- `operations-research`

**Workforce Functions**
- `forecasting`
- `capacity-planning`
- `scheduling`
- `real-time-operations`
- `performance-management`
- `mis-reporting`

**Operating Model**
- `org-design`
- `vendor-management-bpo`
- `change-management`
- `gain-sharing`

**Aperture Expansion (Knowledge Workers)**
- `back-office-operations`
- `knowledge-worker-planning`
- `field-operations`
- `professional-services`

**Aperture Expansion (Agentic)**
- `agentic-workforce`
- `human-agent-blends`
- `ai-supervision`

**Methodologies**
- `six-sigma`
- `lean`
- `causal-inference`
- `applied-information-economics`

**Industry**
- `contact-center` (foundational)
- `bpo-industry`
- `tech-vendors`

A page can carry multiple domains. A page on "AI-augmented forecasting" might tag `[forecasting, agentic-workforce, contact-center]`.

### 3.3 Frontmatter Standard

Every wiki page MUST have YAML frontmatter:

```yaml
---
title: "Service Level"
slug: service-level
type: concept                              # see Page Types
domains: [contact-center, performance-management]
status: active                             # stub | draft | active | maturing | mature | deprecated
created: 2026-05-04
updated: 2026-05-04
sources:                                   # list of source page slugs
  - src-hyndman-otexts-2026
  - src-cleartel-internal-001
related:                                   # other wiki pages this is closely related to
  - erlang-c
  - shrinkage
  - occupancy
tags: [kpi, sla]
contributors: [ted-lango]
ted_pov: false                             # true when page contains Ted's original synthesis
aperture: contact-center                   # primary aperture: contact-center | knowledge-worker | agentic | universal
confidence: high                           # high | medium | low | contested
---
```

### 3.4 Voice & Tone

The wiki's voice is **Ted's professional voice**, derived from his book *Adaptive*:

- **Confident but evidence-anchored.** Every factual claim cites a source.
- **Precise.** WFM has specific terminology — use it correctly. Don't say "schedule" when "roster" is more accurate.
- **Pragmatic.** Theory is grounded in operational reality. If a concept doesn't survive contact with an operations floor, say so.
- **No AI-generic prose.** Avoid: "In today's fast-paced world...", "It's important to note that...", "Furthermore, it should be considered that..."
- **Active voice. Short sentences. Definitive verbs.**
- **Acknowledge contested claims.** When sources disagree, create a `comparison` page rather than silently picking a winner.

### 3.5 Citation Discipline

- Every factual claim links to at least one `source` page via wikilink: `[[src-hyndman-otexts-2026|Hyndman, OTexts, 2026]]`.
- Synthesis pages may make claims without per-claim citations BUT must list all underlying sources in frontmatter.
- Direct quotes >15 words from any one source are forbidden (copyright + voice consistency).
- Each source page lists every wiki page that cites it (auto-maintained via backlinks tool).

### 3.6 Wikilink Conventions

- Internal links: `[[page-slug|Display Text]]` (Obsidian-native, Hugo-compatible via plugin/preprocessing).
- Always use kebab-case slugs.
- Display text is optional; default to title case from slug.
- External links: standard markdown `[Text](https://url)`.

### 3.7 The Aperture Expansion Pattern

When ingesting a contact-center-specific source that has broader applicability, create the page in the most general applicable domain and add a `contact-center-specifics` section:

```markdown
# Capacity Planning

Capacity planning is the discipline of...

## In Contact Centers
[Contact-center-specific manifestation]

## In Back-Office Operations
[How it applies to non-real-time work]

## In Agentic Workforces
[Emerging considerations as AI agents enter the supply pool]
```

Conversely, when a contact-center-specific concept has no broader analog (e.g., Erlang C's queueing assumptions), keep it tightly scoped and link from the broader domain page.

---

## 4. Skill Scaffolding

### 4.1 Skill Location

Following the orchestrator pattern from Phase 1 consolidation:

```
~/pai/skills/WFMWiki/
├── SKILL.md
├── Workflows/
│   ├── Ingest.md
│   ├── Query.md
│   ├── Lint.md
│   ├── MediaWikiMigrate.md
│   ├── Publish.md
│   ├── ContributionTriage.md
│   ├── PageCreate.md
│   ├── PageUpdate.md
│   └── BulkIngest.md
└── Context/
    ├── SCHEMA.md                          # Symlink to ~/cloud/projects/wfmwiki/SCHEMA.md
    ├── domain-taxonomy.md
    ├── lint-rules.md
    ├── voice-guide.md
    └── migration-mapping.md
```

Symlink to `~/.claude/skills/WFMWiki` after creation.

### 4.2 SKILL.md (frontmatter)

```yaml
---
name: WFMWiki
triggers:
  - "wfm wiki"
  - "wfmlabs wiki"
  - "wiki ingest"
  - "wiki lint"
  - "wiki page"
  - "add to wiki"
  - "migrate mediawiki"
  - "publish wiki"
workflows:
  - Ingest
  - Query
  - Lint
  - MediaWikiMigrate
  - Publish
  - ContributionTriage
  - PageCreate
  - PageUpdate
  - BulkIngest
agents:
  - WikiArchitect
  - WikiIngestor
  - WikiEditor
  - WikiLinter
  - Evaluator
dependencies:
  - DocReader
  - Research
  - NotebookLM
context_docs:
  - SCHEMA.md
  - domain-taxonomy.md
  - lint-rules.md
  - voice-guide.md
---
```

---

## 5. Workflows (Detailed)

### 5.1 Ingest

**Trigger:** "ingest [source]", "add this to the wiki [URL/path]", "wiki this video"

**Inputs:** URL, file path, raw text, video URL (with transcript extraction)

**Pipeline:**

1. **Capture** — Save source to `raw/` with timestamp + slug. For URLs, snapshot to markdown via web fetch + readability extraction. For videos, pull transcript via NotebookLM skill or yt-dlp + Whisper. For PDFs, use DocReader. Compute SHA-256 for content hash.

2. **Source Page Draft** — Create `wiki/sources/src-{slug}.md` with:
   - Bibliographic metadata (author, date, URL, content hash)
   - Key claims extracted (5–15 bullet points)
   - Concepts mentioned (will become wikilinks)
   - Contradictions or supports relative to existing wiki claims
   - Recommended page touches (which existing pages should be updated)

3. **Integration Plan** — Present Ted with:
   - New pages to create (with proposed slugs and types)
   - Existing pages to update (with diff preview)
   - Wikilinks to add or strengthen
   - Estimated cost (token + time)

4. **Approval Gate (HUMAN CHECKPOINT)** — Ted approves, modifies, or rejects the plan. Default: APPROVED with possible modifications. Auto-merge only when changes are limited to source page creation + index/log updates (no existing wiki content modified).

5. **Execute** — Apply approved changes:
   - Write source page
   - Create new pages from templates
   - Apply diffs to existing pages
   - Update `index.md`
   - Append to `log.md` with consistent prefix: `## [YYYY-MM-DD] ingest | {Source Title}`
   - Register task completion in coordination layer

6. **VERIFY** — Run `wfmwiki-lint.ts --quick` against touched pages. If new lint errors introduced, flag for review.

7. **LEARN** — Append insights to `~/pai/MEMORY/Learning/EXECUTE/wfmwiki-ingest-patterns.md` if any novel patterns emerged.

### 5.2 Query

**Trigger:** "wiki: [question]", "what does the wiki say about [topic]"

**Pipeline:**

1. Read `wiki/index.md` to identify candidate pages.
2. Read top 3–7 candidate pages.
3. Synthesize answer with wikilink citations.
4. **Optional file-back** — Ask Ted: "Worth saving this answer as a wiki page?" If yes, route to PageCreate (likely as `synthesis` type).

This avoids the "answers vanish into chat history" problem Karpathy flags.

### 5.3 Lint

**Trigger:** "wiki lint", "clean up the wiki", "wiki health check"

**Modes:**
- `--quick` — runs structural checks only (broken links, frontmatter validation)
- `--full` — runs all checks including LLM-based contradiction detection
- `--scope=domain:forecasting` — restrict to a domain

**Checks (in order, cheapest first):**

1. **Frontmatter validation** — Every page has required fields, valid types, valid domain slugs.
2. **Broken wikilinks** — `[[slug]]` references that don't resolve.
3. **Orphan pages** — Pages with zero inbound links (excluding `synthesis` and `overview` types which can be hubs).
4. **Stub overload** — Pages with `status: stub` >30 days old.
5. **Missing concept pages** — Terms in [glossary list] mentioned >3 times across wiki without dedicated page.
6. **Tag/domain inconsistency** — Pages tagged `forecasting` that don't link to the forecasting overview.
7. **Source citation gaps** — `concept` and `method` pages with zero source citations.
8. **Contradiction detection (LLM)** — Pairs of pages that make conflicting factual claims about the same entity. Output candidates for `comparison` page creation.
9. **Stale claims (LLM)** — Claims older than 18 months that the web says have been superseded.
10. **Aperture coverage gaps** — Concepts present in `contact-center` aperture with obvious analogs missing in `knowledge-worker` or `agentic` apertures.

**Output:** `_ops/lint-report.md` with severity-graded findings, actionable recommendations, and one-click TARS commands to fix each.

**Pruning** — Lint can suggest deletions (e.g., empty stubs, deprecated pages, low-value content from MediaWiki migration). Deletions ALWAYS require explicit human approval. Deleted pages move to `_archive/` with deletion timestamp and reason, never hard-deleted.

### 5.4 MediaWikiMigrate

**Trigger:** "migrate mediawiki", "import wfmlabs wiki"

**Phase 1 — Export (One-time)**
- Pull MediaWiki XML dump via Special:Export or API.
- Store in `raw/mediawiki-export/wfmlabs-mediawiki-YYYY-MM-DD.xml`.
- Snapshot all images via API to `raw/assets/mediawiki/`.

**Phase 2 — Convert (Automated, then audited)**
- Use `pandoc -f mediawiki -t gfm` to convert each page to GitHub-flavored markdown.
- Parse XML for category metadata.
- Generate naive frontmatter: `type: stub`, `status: draft`, `domains: [contact-center]` (default), source attribution.
- Resolve internal MediaWiki links to wikilink slugs.
- Write to `wiki/_migrated/` (staging area, not yet integrated).

**Phase 3 — Triage (Human + LLM collaborative)**
- WikiArchitect agent reviews each migrated page and recommends:
  - **Keep as-is** — well-formed, fits schema, minor cleanup only
  - **Restructure** — content valuable, schema mismatch (wrong type, wrong domains)
  - **Merge** — content duplicates or should be combined with another page
  - **Split** — page covers multiple concepts that should be separate pages
  - **Prune** — outdated, low-value, or no longer relevant
- Output: `_ops/migration-triage.md` with decision per page.
- Ted reviews and adjusts. Could be done in batches of 20–30 pages per session.

**Phase 4 — Integration (One page or batch at a time)**
- For each Keep/Restructure/Merge/Split decision, run the appropriate workflow (PageUpdate, PageCreate).
- Track progress in `_ops/migration-progress.md`.
- Update `index.md` and `log.md` per integration.

**Phase 5 — Validation**
- Full lint run against migrated content.
- Spot-check 10% of pages for voice consistency, schema compliance.
- Compare topic coverage: any major MediaWiki topic that didn't make it to the new wiki?

### 5.5 Publish

**Trigger:** "publish wiki", "deploy wfmlabs.org"

**Pipeline:**
1. Validate: full lint must pass at `--quick` level.
2. Sync `wfmwiki/wiki/` → `wfmwiki-site/content/`.
3. Run Hugo build: `hugo --minify`.
4. Commit and push to GitHub.
5. Trigger Netlify or Cloudflare Pages deploy.
6. Verify deployment health.
7. Append to log.md: `## [YYYY-MM-DD] publish | site=wfmlabs.org commit={sha}`.

**Rollback:** Standard git revert + redeploy.

### 5.6 ContributionTriage (Future-Friendly Scaffolding)

**Trigger:** New entry in `_ops/contribution-inbox/`

For now, scaffold only. Member contribution model TBD. Recommended initial design:

- Public site has "Suggest an edit" or "Submit a source" link on every page.
- Form submission creates a GitHub issue with structured template (URL, why relevant, suggested page touches).
- TARS reads new issues weekly, runs draft Ingest workflow, presents Ted with a curated review list.
- Ted approves or rejects. Approved contributions credited in page frontmatter `contributors:`.

Build the inbox monitoring + triage drafting NOW (lightweight). Build the public-facing form when contribution volume justifies it.

### 5.7 PageCreate

Standard workflow for creating a new page. Inputs: type, slug, title, domains, initial content. Validates against schema. Adds to index. Appends to log.

### 5.8 PageUpdate

Standard workflow for updating an existing page. Includes diff preview, frontmatter `updated:` field bump, optional `contributors:` append.

### 5.9 BulkIngest

For ingesting many sources at once with reduced supervision. Inputs: list of URLs/paths. Processes through Ingest pipeline with auto-approval for source page creation only (no existing page modifications). Outputs queue for human review of cross-page integration.

---

## 6. Tools (TypeScript / Bun — Code Before Prompts)

Build these as standalone CLIs in `~/pai/Tools/wfmwiki/` so the LLM can shell out rather than prompt-engineer file operations.

### 6.1 `wfmwiki-ingest.ts`
Orchestrates source capture. CLI flags:
- `--url <url>`
- `--file <path>`
- `--video <url>`
- `--text <stdin>`
- `--dry-run` (output integration plan, don't write)

### 6.2 `wfmwiki-link-graph.ts`
Builds in-memory graph from wikilinks. Exposes:
- `--orphans` — pages with no inbound links
- `--hubs` — pages with most inbound links
- `--blast-radius <slug>` — what's affected if this page changes
- `--shortest-path <a> <b>` — link path between two pages

### 6.3 `wfmwiki-lint.ts`
Runs lint suite. Modes from §5.3. Outputs to `_ops/lint-report.md` and stdout.

### 6.4 `wfmwiki-index.ts`
Regenerates `index.md` from filesystem walk + frontmatter parsing. Idempotent.

### 6.5 `wfmwiki-log.ts`
Appends entries to `log.md`. Enforces consistent prefix format. Helpers:
- `--last <n>` — print recent entries
- `--filter <type>` — ingest/query/lint/publish

### 6.6 `wfmwiki-mediawiki-import.ts`
The migration workhorse. Reads XML, converts via pandoc, writes to `wiki/_migrated/`, generates triage report.

### 6.7 `wfmwiki-publish.ts`
Sync + Hugo build + deploy trigger.

### 6.8 `wfmwiki-frontmatter.ts`
Validation library used by lint and creation tools. Schema validation against §3.3.

### 6.9 `wfmwiki-search.ts`
Local search. Phase 1: index-based (read `index.md`, simple keyword match). Phase 2 (when needed): integrate `qmd` for BM25 + vector search. Don't over-engineer initially.

---

## 7. Agents

Define these in `~/pai/agents/`:

### 7.1 WikiArchitect (opus)
- **Role:** Owns schema decisions. Reviews migration triage. Recommends page structure changes.
- **When invoked:** MediaWikiMigrate Phase 3, schema evolution discussions, structural lint decisions.
- **Personality:** Disciplined, opinionated, pushes back on schema drift.

### 7.2 WikiIngestor (sonnet)
- **Role:** Reads new sources, extracts claims, drafts source pages and integration plans.
- **When invoked:** Ingest workflow Steps 2–3.
- **Personality:** Thorough, attribution-discipline, neutral tone.

### 7.3 WikiEditor (sonnet)
- **Role:** Refines drafts to match Ted's voice. Ensures schema compliance. Handles wikilink density and cross-references.
- **When invoked:** PageCreate, PageUpdate, post-Ingest cleanup.
- **Personality:** Voice-consistent, precise, Ted's professional voice as encoded in §3.4.

### 7.4 WikiLinter (sonnet)
- **Role:** Executes lint checks. Generates `_ops/lint-report.md`.
- **When invoked:** Lint workflow.
- **Personality:** Thorough, severity-graded, actionable recommendations only.

### 7.5 Evaluator (existing — opus)
- **Role:** Four Dimensions evaluation when wiki content is published externally (newsletter excerpts, public Hugo pages of Ted's `synthesis` type).
- **When invoked:** Pre-publish for any `ted_pov: true` page.

---

## 8. Build Sequence

Execute in this order. Each phase has its own session(s).

### Phase 0 — Foundation (Session 1, ~2 hrs)
- [ ] Create `~/cloud/projects/wfmwiki/` directory tree
- [ ] Initialize git repo + GitHub remote (`wfmlabsorg/wfmwiki`)
- [ ] Write `SCHEMA.md` from §3 of this prompt (this is the most important file — get it right)
- [ ] Write `wfmwiki/README.md` with mission, structure, contribution model placeholder
- [ ] Create empty directory scaffolding (`wiki/concepts/`, `wiki/methods/`, etc.)
- [ ] Initialize `wiki/index.md` and `wiki/log.md` with starter content
- [ ] Set up Obsidian vault (dedicated, at `D:\Obsidian\WFMWiki\`) with symlink to `wfmwiki/wiki/`
- [ ] Configure Obsidian: Dataview plugin, Templater, attachment folder = `raw/assets/`
- [ ] **VERIFY:** Vault opens cleanly, graph view renders, schema is reviewable.

### Phase 1 — Skill Scaffolding (Session 1–2)
- [ ] Create `~/pai/skills/WFMWiki/` with SKILL.md + Workflows + Context
- [ ] Symlink to `~/.claude/skills/WFMWiki`
- [ ] Define each workflow's purpose + input/output (start with Ingest, Lint, PageCreate)
- [ ] Run `bun run ~/.claude/Tools/GenerateSkillIndex.ts` — verify 49 skills indexed (was 48)
- [ ] Verify CLAUDE.md / context budget still under 8K — if over, audit and trim
- [ ] **VERIFY:** SkillSearch returns WFMWiki for relevant queries.

### Phase 2 — Tools (Session 2)
- [ ] Build `wfmwiki-frontmatter.ts` (schema validator) FIRST — everything else uses it
- [ ] Build `wfmwiki-index.ts` (regenerator)
- [ ] Build `wfmwiki-log.ts` (append helper)
- [ ] Build `wfmwiki-link-graph.ts` (orphans, hubs, blast radius)
- [ ] Build `wfmwiki-lint.ts` `--quick` mode (frontmatter + wikilinks only)
- [ ] **VERIFY:** Each tool runs standalone with `--help`. Lint passes on the empty scaffold.

### Phase 3 — Agents (Session 2–3)
- [ ] Write WikiArchitect, WikiIngestor, WikiEditor, WikiLinter agent definitions
- [ ] Wire agent invocation into workflow definitions
- [ ] **VERIFY:** Agents available via SkillSearch and invokable from a workflow.

### Phase 4 — First Manual Ingest (Session 3 — Hyndman OTexts test)
- [ ] Use Hyndman's OTexts forecasting book chapter 7 (exponential smoothing) as test source
- [ ] Run Ingest workflow end-to-end
- [ ] Result: 1 source page, 3–7 new concept pages, index + log updated
- [ ] **VERIFY:** Quality of generated pages matches §3.4 voice. Ted reviews.
- [ ] **LEARN:** Document any schema gaps revealed. Update SCHEMA.md.

### Phase 5 — MediaWiki Migration (Sessions 4–6)
- [ ] Export current WFMLabs MediaWiki to XML
- [ ] Build `wfmwiki-mediawiki-import.ts`
- [ ] Run conversion → `wiki/_migrated/`
- [ ] WikiArchitect generates triage report
- [ ] Ted reviews triage in batches of 20–30
- [ ] Execute integrations
- [ ] Full lint run; address findings
- [ ] **VERIFY:** All MediaWiki content either integrated, restructured, merged, or explicitly pruned with rationale.

### Phase 6 — Publish Pipeline (Session 6–7)
- [ ] Set up `wfmwiki-site/` Hugo project
- [ ] Choose theme (consider: Hugo Book, Wikipedia-style, or custom — must support wikilinks)
- [ ] Build wikilink-to-Hugo-link preprocessor (likely a Cloudflare Worker or Hugo shortcode)
- [ ] Configure Cloudflare Pages or Netlify deploy
- [ ] Add WFMLabs.org DNS pointing to deploy
- [ ] Deploy first version
- [ ] **VERIFY:** Public site loads, internal links resolve, search works.

### Phase 7 — Lint Maturation (Ongoing)
- [ ] Build remaining lint checks (contradiction detection, stale claims, aperture coverage)
- [ ] Schedule weekly lint via cron + GitHub Actions or Cloudflare Worker
- [ ] Establish lint-review cadence (weekly: 30 min review of `_ops/lint-report.md`)

### Phase 8 — Contribution Triage Scaffolding (Future)
- [ ] Build `_ops/contribution-inbox/` monitor
- [ ] Add "Suggest an edit" GitHub issue template
- [ ] Defer member-facing form until contribution volume justifies it

---

## 9. VERIFY Checklist (Acceptance Criteria)

A successful WFMWiki skill build meets ALL of these:

### Skill-Level
- [ ] `bun run ~/.claude/Tools/SkillSearch.ts "wiki"` returns WFMWiki
- [ ] All 9 workflows have complete .md definitions
- [ ] All 4 new agents (Architect, Ingestor, Editor, Linter) defined
- [ ] All 9 tools build and run with `--help`
- [ ] Skill index regenerated; total skills = 49; context budget verified <8K

### Schema-Level
- [ ] SCHEMA.md is comprehensive and includes all 9 page types, full domain taxonomy, frontmatter standard, voice guide, citation rules, wikilink conventions, aperture expansion pattern
- [ ] Frontmatter validator rejects malformed pages and accepts well-formed ones
- [ ] Schema is symlinked into both `wfmwiki/SCHEMA.md` and skill Context

### Functional-Level
- [ ] Hyndman test ingest produces 5+ wiki pages of acceptable quality
- [ ] Lint `--quick` runs in <5s on full wiki
- [ ] MediaWiki import produces a triageable migration report
- [ ] Hugo build produces a deployable site
- [ ] First publish to WFMLabs.org succeeds

### Integration-Level
- [ ] Ingest tasks register in coordination layer (`tars-task.ts list --project wfmwiki`)
- [ ] Cost tracking works (`tars-cost.ts summary --project wfmwiki`)
- [ ] Activity log queryable
- [ ] Obsidian graph view renders the wiki cleanly with no broken links
- [ ] Hugo site renders all wikilinks correctly

### Quality-Level
- [ ] Three independent ingests produce voice-consistent output (sample audit by Ted)
- [ ] Evaluator agent grades a sample `synthesis` page at >=3.5 weighted average
- [ ] No `ted_pov: true` page publishes without Evaluator gate

---

## 10. LEARN Phase Prompts

After each session, capture:

1. **What broke?** Schema gaps revealed, voice drift, link rot, integration failures.
2. **What surprised you?** Patterns that emerged from real ingest content vs. anticipated patterns.
3. **What needs to evolve?** Schema additions, new page types, lint rules to add.
4. **What's the cost shape?** Per-ingest token cost, per-lint cost. Inform budget discipline.

Append insights to `~/pai/MEMORY/Learning/EXECUTE/wfmwiki-build.md`.

After full Phase 5 (migration) completion:
- Append to `~/pai/MEMORY/Learning/PLAN/wiki-migration-patterns.md` — generalized lessons applicable to future wiki migrations or ingestion projects.

---

## 11. Out of Scope (Explicit Non-Goals for v1.0)

- Real-time collaborative editing (the wiki is single-author + curated contributions)
- Vector/embedding search (start with index-based; add `qmd` only when scale demands)
- Public comments or discussion threads (use LinkedIn / WFM Labs community for discussion)
- Multilingual support
- Integration with other wikis or external knowledge graphs
- Automatic ingestion from RSS or scheduled feeds (manual point-and-ingest only for now)
- Member-facing submission form UI (defer to Phase 8 when justified)

---

## 12. Open Decisions for Ted

These are choices that should be made consciously, not by default:

1. **Vault topology:** Dedicated WFMWiki vault, OR subfolder of main vault? *Recommendation: dedicated.*
2. **Hugo theme:** Adopt existing wiki-style theme (Hugo Book, Docsy), build custom, or fork an existing knowledge-base theme? *Recommendation: start with Hugo Book or Hextra; customize later.*
3. **Domain (URL):** WFMLabs.org root, or wiki.WFMLabs.org subdomain? *Recommendation: subdomain — keeps WFMLabs.org root flexible for the community/membership site.*
4. **Aperture phasing:** Migrate MediaWiki content as contact-center-tagged first, then expand aperture in subsequent ingest waves? OR re-architect during migration? *Recommendation: Migrate as-is with `aperture: contact-center`, then expand via new ingests rather than re-tagging during migration.*
5. **Public read access:** Fully public, or gated behind WFM Labs membership? *Recommendation: Public — wiki serves as a discovery/credibility engine for the community.*
6. **Member contribution model:** GitHub PR (highest discipline, lowest accessibility) vs. form-based submission (lowest discipline, highest accessibility) vs. manual email triage. *Recommendation: GitHub issue for now (low volume expected); formalize when needed.*

---

## 13. Notes on Karpathy Pattern Fidelity

This skill stays faithful to Karpathy's pattern in:
- **The wiki is the durable artifact** (not chats)
- **Three-layer architecture** (raw / wiki / schema)
- **LLM as maintainer, not just retriever**
- **Index + log as core operational files**
- **Lint as a first-class operation**
- **Obsidian as the IDE**

It diverges in:
- **Public publishing layer** (Karpathy's pattern is personal; this is a community asset)
- **Domain-specific schema** (vs. generic)
- **Multi-aperture taxonomy** (contact-center / knowledge-worker / agentic) reflecting WFM Labs' positioning evolution
- **Coordination layer integration** (TARS-specific)
- **Evaluation gate for `synthesis` pages** (TARS-specific)

These divergences are deliberate. Document them in `wfmwiki/README.md` for transparency.

---

## 14. Final Invocation

When ready to begin, paste this entire prompt into a TARS session with:

```
TARS, please execute the WFMWiki skill build per the attached prompt.
Begin with Phase 0 (Foundation). Stop and confirm at the end of each phase.
For Phase 0, please also propose any clarifications or schema improvements
before we lock in SCHEMA.md.
```

Expected first response from TARS: a Phase 0 plan with explicit file list, any schema clarifications needed, and a confirmation prompt.

---

*End of build prompt. Total estimated effort: 3–5 sessions. Estimated cost: $50–100 in API usage across all phases. Estimated wall-clock time to first publish: 10–15 hours of focused work spread over 1–2 weeks.*
