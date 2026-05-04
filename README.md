# WFM Labs Knowledge Wiki

The documentation layer of WFM Labs' positioning thesis: **next-generation workforce planning across the supply-and-demand industry — for any knowledge worker, human or agentic, with contact centers as the foundational discipline.**

Public site: [wiki.wfmlabs.com](https://wiki.wfmlabs.com) *(deploys from this repo)*

## What this is

An LLM-maintained, markdown-native wiki. Implements the [Karpathy LLM Wiki pattern](https://gist.github.com/karpathy):

- **The wiki is the durable artifact** — not chat history.
- **The LLM is the maintainer** — TARS owns ingest, lint, and pruning.
- **Three layers:** raw sources (immutable) → wiki (LLM-owned markdown) → SCHEMA.md (the rules that make the LLM disciplined).

Divergences from Karpathy's personal-use pattern:
- **Public publishing** via Hugo + Cloudflare Pages.
- **Domain-specific schema** (workforce planning taxonomy, voice, evidence standards).
- **Multi-aperture taxonomy** — contact-center / knowledge-worker / agentic — reflecting WFM Labs' positioning evolution.
- **Coordination layer integration** with TARS (`tars-task.ts`, `tars-cost.ts`).
- **Evaluation gate** for synthesis pages (`ted_pov: true` requires Evaluator pass).

## Storage layout

```
wfmwiki/
├── _meta/                    # Project-level docs (build prompt, decisions)
├── raw/                      # Immutable source documents
│   ├── articles/
│   ├── pdfs/
│   ├── transcripts/
│   ├── mediawiki-export/     # Original XML dump for audit trail
│   └── assets/
├── wiki/                     # LLM-maintained markdown (source of truth)
│   ├── index.md              # Auto-updated catalog
│   ├── log.md                # Append-only operations log
│   ├── domains/              # Domain overview pages
│   ├── concepts/             # Concept pages (Erlang C, shrinkage, etc.)
│   ├── methods/              # How-to pages
│   ├── tools/                # Vendor/tool entity pages
│   ├── practitioners/        # People pages
│   ├── sources/              # One summary per ingested source
│   ├── synthesis/            # Ted's POV / original frameworks
│   ├── comparisons/          # Cross-source disagreement pages
│   └── glossary/             # Short definition pages
├── _ops/                     # Lint reports, ingest queues
└── site/                     # Hugo build output (consumes wiki/)
```

See `SCHEMA.md` for page types, frontmatter, voice guide, and citation discipline.

## Maintained by

The TARS `WFMWiki` skill. Ted is the curator; TARS is the disciplined maintainer.

Trigger phrases: `wfm wiki`, `add to wiki`, `wiki ingest`, `wiki lint`.
