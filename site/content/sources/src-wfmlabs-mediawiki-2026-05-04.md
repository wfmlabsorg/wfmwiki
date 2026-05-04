---
title: "WFM Labs MediaWiki Wiki (Pre-Migration Snapshot)"
slug: "src-wfmlabs-mediawiki-2026-05-04"
type: "source"
domains: ["contact-center"]
status: "active"
created: "2026-05-04"
updated: "2026-05-04"
tags: ["migration-source", "mediawiki"]
---

# WFM Labs MediaWiki Wiki (Pre-Migration Snapshot)

Bibliographic snapshot of the original WFM Labs MediaWiki at https://wiki.wfmlabs.org as of 2026-05-04. This source page anchors all content migrated into the new markdown-native wiki.

## Bibliographic Metadata

| Field | Value |
|-------|-------|
| URL | https://wiki.wfmlabs.org |
| Export date | 2026-05-04 |
| Format | MediaWiki XML export via Special:Export |
| Total pages exported | 124 |
| Content pages migrated | 27 |
| Pages routed to Hugo site | 6 (Main Page, Privacy Policy, Terms, CoC, About, plus a Wiki:Privacy duplicate) |
| Pages pruned | 2 (OAuth Test Success, Token Test — test artifacts) |
| Pages requiring manual port | 1 (Event Management — pandoc choke on `{{table}}` template wrapper) |
| Original author | Ted Lango (User:Tlango) |
| Active period | 2022-11 to 2025-08 (revision date range) |
| Local archive | `raw/mediawiki-export/wfmlabs-mediawiki-2026-05-04.xml` |
| Local images | `raw/assets/mediawiki/` *(populated separately by image migration tool)* |

## Pages Migrated from This Source

### Synthesis (12) — Ted's POV / WFM Labs frameworks

- {{< wikilink "synthesis/future-wfm-operating-standard" "Future WFM Operating Standard" >}} *(thesis hub)*
- {{< wikilink "synthesis/workforce-management-standard-introduction" "Workforce Management Standard Introduction" >}}
- {{< wikilink "synthesis/changes-to-the-future-of-workforce-management" "Changes to the Future of Workforce Management" >}}
- {{< wikilink "synthesis/wfm-goals" "WFM Goals" >}}
- {{< wikilink "synthesis/wfm-roles" "WFM Roles" >}}
- {{< wikilink "synthesis/wfm-processes" "WFM Processes" >}}
- {{< wikilink "synthesis/interpersonal-relationships" "Interpersonal Relationships" >}}
- {{< wikilink "synthesis/technology" "Technology" >}}
- {{< wikilink "synthesis/wfm-assessment" "WFM Assessment" >}}
- {{< wikilink "synthesis/wfm-labs-erlang-o" "WFM Labs Erlang-O™" >}}
- {{< wikilink "synthesis/wfm-labs-maturity-model" "WFM Labs Maturity Model™" >}}
- {{< wikilink "synthesis/wfm-labs-risk-score" "WFM Labs Risk Score™" >}}

### Calculators (9)

- {{< wikilink "calculators/annual-attrition" "Annual Attrition" >}}
- {{< wikilink "calculators/annual-salary" "Annual Salary" >}}
- {{< wikilink "calculators/demand-calculation" "Demand Calculation" >}}
- {{< wikilink "calculators/dynamic-calculators" "Dynamic Calculators" >}} *(overview)*
- {{< wikilink "calculators/length-of-training" "Length of Training" >}}
- {{< wikilink "calculators/onboarding-costs" "Onboarding Costs" >}}
- {{< wikilink "calculators/power-of-one" "Power of One" >}}
- {{< wikilink "calculators/speed-to-proficiency-curve" "Speed to Proficiency Curve" >}}
- {{< wikilink "calculators/training-attrition" "Training Attrition" >}}

### Methods (5)

- {{< wikilink "methods/multi-objective-optimization-in-contact-center" "Multi-Objective Optimization in Contact Center" >}}
- {{< wikilink "methods/next-generation-routing" "Next Generation Routing" >}}
- {{< wikilink "methods/real-time-cause-and-effect-fishbone" "Real-Time Cause and Effect Fishbone" >}}
- {{< wikilink "methods/resource-optimization-center-roc" "Resource Optimization Center (ROC)" >}}
- {{< wikilink "methods/level-1-process-templates" "Level 1 Process Templates" >}}

### Comparisons (1)

- {{< wikilink "comparisons/discrete-event-vs-monte-carlo-simulation-models" "Discrete-Event vs. Monte Carlo Simulation Models" >}}

## Migration Notes

- **Conversion tool:** `wfmwiki-mediawiki-import.ts` (uses pandoc 3.1 `mediawiki → gfm`)
- **Heuristic type assignment:** ~95% accurate on first pass. Manual override applied to 2 pages (`interpersonal-relationships`, `technology`) to upgrade from `concept` → `synthesis` based on context as sub-pages of the WFM Operating Standard thesis stack.
- **Image references:** all migrated pages reference `/img/mediawiki/<filename>`. Image files migrated separately (not bundled in XML export).
- **Wikilinks:** internal MediaWiki links converted to Obsidian-style double-bracket wikilink syntax during import. Cross-references preserved.
- **Schema battle-test:** All 27 pages pass `wfmwiki-frontmatter.ts --check` against SCHEMA v1.0.1.

## Decommission Plan

The original wiki.wfmlabs.org will be retained as a 301 redirect to wiki.wfmlabs.com after Hugo site goes live. Original MediaWiki database not migrated — markdown is now the source of truth.
