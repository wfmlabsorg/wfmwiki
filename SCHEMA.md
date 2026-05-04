# SCHEMA.md — WFM Labs Knowledge Wiki Configuration

This is the configuration document. Per the Karpathy LLM Wiki pattern, **this file is what makes the LLM a disciplined wiki maintainer rather than a generic chatbot.**

When the WFMWiki skill activates, this document loads as binding context. Every ingest, edit, and lint operation MUST conform to the rules below.

---

## 1. Page Types

| Type | Purpose | Example |
|------|---------|---------|
| `concept` | An abstract idea or principle | Service Level, Erlang C, Shrinkage |
| `method` | A how-to or technique | Building an ETS Forecast, Running a DOE |
| `tool` | A vendor product or piece of software | NICE WFM, Calabrio, Intradiem, Hyndman OTexts |
| `calculator` | An interactive WFM math tool with inputs → output | Power of One, Speed to Proficiency, WFM Labs Erlang-O™ |
| `practitioner` | A person worth tracking | Rob Hyndman, Donna Fluss, Brian Fung |
| `source` | One page per ingested source document | "Hyndman OTexts Ch. 7: Exponential Smoothing" |
| `overview` | Top-level domain page | Forecasting, Scheduling, RTA |
| `comparison` | Cross-source disagreement or method comparison | Discrete-Event vs. Monte Carlo Simulation |
| `synthesis` | Ted's POV / original framework / next-gen WFM thesis | The Three-Pool Workforce Model, WFM Labs Maturity Model™ |
| `glossary` | Short definition with cross-refs | Adherence, Conformance, Occupancy |

**Note on `calculator`:** Distinct from `tool` because calculators are interactive math objects (input fields → calculated output) rather than vendor products. WFM Labs branded calculators (Erlang-O™, Risk Score™) are typically also `synthesis` content — when a calculator is original IP, set `ted_pov: true` and reference the underlying synthesis page.

---

## 2. Domain Taxonomy

Page `domains` frontmatter MUST use these slugs. A page can carry multiple domains.

### Foundations
- `queueing-theory`
- `demand-modeling`
- `supply-modeling`
- `probabilistic-methods`
- `operations-research`

### Workforce Functions
- `forecasting`
- `capacity-planning`
- `scheduling`
- `real-time-operations`
- `performance-management`
- `mis-reporting`

### Operating Model
- `org-design`
- `vendor-management-bpo`
- `change-management`
- `gain-sharing`

### Aperture Expansion (Knowledge Workers)
- `back-office-operations`
- `knowledge-worker-planning`
- `field-operations`
- `professional-services`

### Aperture Expansion (Agentic)
- `agentic-workforce`
- `human-agent-blends`
- `ai-supervision`

### Methodologies
- `six-sigma`
- `lean`
- `causal-inference`
- `applied-information-economics`

### Industry
- `contact-center` *(foundational)*
- `bpo-industry`
- `tech-vendors`

---

## 3. Frontmatter Standard

Every wiki page MUST have YAML frontmatter:

```yaml
---
title: "Service Level"
slug: service-level
type: concept                              # see §1
domains: [contact-center, performance-management]
status: stub                               # stub | draft | active | maturing | mature | deprecated
created: 2026-05-04
updated: 2026-05-04
sources:                                   # list of source page slugs (kebab-case)
  - src-hyndman-otexts-2026
  - src-cleartel-internal-001
related:                                   # other wiki pages this is closely related to
  - erlang-c
  - shrinkage
  - occupancy
tags: [kpi, sla]
contributors: [ted-lango]
ted_pov: false                             # true when page is Ted's original synthesis
aperture: contact-center                   # contact-center | knowledge-worker | agentic | universal
confidence: high                           # high | medium | low | contested
---
```

**Required fields:** `title`, `slug`, `type`, `domains`, `status`, `created`, `updated`, `aperture`, `confidence`.
**Optional but encouraged:** all others.

---

## 4. Voice & Tone

The wiki's voice is Ted's professional voice, derived from his book *Adaptive*:

- **Confident but evidence-anchored.** Every factual claim cites a source.
- **Precise.** WFM has specific terminology — use it correctly. Don't say "schedule" when "roster" is more accurate.
- **Pragmatic.** Theory is grounded in operational reality. If a concept doesn't survive contact with an operations floor, say so.
- **No AI-generic prose.** Avoid: "In today's fast-paced world…", "It's important to note that…", "Furthermore, it should be considered that…"
- **Active voice. Short sentences. Definitive verbs.**
- **Acknowledge contested claims.** When sources disagree, create a `comparison` page rather than silently picking a winner.

---

## 5. Citation Discipline

- Every factual claim links to at least one `source` page via wikilink: `[[src-hyndman-otexts-2026|Hyndman, OTexts, 2026]]`.
- Synthesis pages (`type: synthesis`) may make claims without per-claim citations BUT must list all underlying sources in frontmatter `sources:`.
- Direct quotes >15 words from any one source are forbidden (copyright + voice consistency).
- Each source page lists every wiki page that cites it (auto-maintained by `wfmwiki-link-graph.ts`).

---

## 6. Wikilink Conventions

- **Internal:** `[[page-slug|Display Text]]` — Obsidian-native, Hugo-compatible via preprocessor.
- **Slugs:** always kebab-case.
- **Display text:** optional; defaults to title-case from slug.
- **External:** standard markdown `[Text](https://url)`.
- **Source links:** prefix slug with `src-` (e.g., `src-hyndman-otexts-2026`).

---

## 7. The Aperture Expansion Pattern

When ingesting contact-center-specific content with broader applicability, create the page in the most general applicable domain and add a `## In Contact Centers` section:

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

Conversely, when a contact-center concept has no broader analog (e.g., Erlang C's queueing assumptions), keep it tightly scoped and link from the broader domain page.

---

## 8. Page Status Lifecycle

| Status | Meaning | Next State |
|--------|---------|------------|
| `stub` | Title + frontmatter, minimal content | → `draft` after first ingest pass |
| `draft` | Initial content from one source | → `active` after voice/citation review |
| `active` | Content reviewed, schema-compliant | → `maturing` after 2+ sources cited |
| `maturing` | Multi-sourced, cross-linked | → `mature` after Ted review + voice pass |
| `mature` | Stable; only updates via new evidence | (terminal until evidence shifts) |
| `deprecated` | Superseded or invalidated | → moved to `_archive/` after 30 days |

Lint flags `stub` pages older than 30 days for review or pruning.

---

## 9. Pruning Discipline

- Deletions ALWAYS require explicit human approval.
- Deleted pages move to `_archive/` (subdirectory of `wiki/`) with deletion timestamp + reason in frontmatter.
- Never hard-delete from git history.
- Lint can *suggest* prunes; only Ted approves.

---

## 10. Migration-Specific Rules (MediaWiki)

When importing from `raw/mediawiki-export/`:

- **Default frontmatter on import:** `type: stub`, `status: draft`, `aperture: contact-center`, `confidence: medium`.
- **Skip these namespaces:** `File:`, `Talk:`, `User:`, `User talk:`, `MediaWiki:`, `Wiki:` (admin pages, image wrappers, system messages).
- **Map to Hugo home, not wiki:** `Main Page` → `site/content/_index.md`.
- **Triage decisions:** keep / restructure / merge / split / prune — recorded in `_ops/migration-triage.md`.

---

## 11. Schema Versioning

Schema is versioned. Material changes (new page type, new required field, removed domain) bump the version and append a changelog entry below.

**Current version:** 1.0 *(2026-05-04)*

### Changelog
- **1.0** *(2026-05-04)* — Initial schema. 10 page types (added `calculator` based on existing wiki content patterns). 26 domain slugs. Aperture taxonomy with 4 values.
