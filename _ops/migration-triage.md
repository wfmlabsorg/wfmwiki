# MediaWiki Migration Triage Report

Generated: 2026-05-04
Source: `raw/mediawiki-export/wfmlabs-mediawiki-2026-05-04.xml`
Pages migrated to staging: 36

## Triage Decisions

All migrated pages currently land in `wiki/_migrated/` with `type: stub, status: draft`.
**Ted reviews this report and confirms or adjusts each row before integration.**

Decisions:
- **keep** — content is fine, route to canonical wiki/{type}s/ as-is
- **restructure** — content valuable but needs reorganization (split/rename/retype)
- **merge** — combine with another page (specify target in notes)
- **split** — break into multiple pages (specify resulting slugs in notes)
- **prune** — discard (test artifact, outdated, low-value)
- **meta** — route to Hugo site root (Privacy, Terms, etc.) — not wiki content

| Slug | Title | Proposed Type | Proposed Domains | Recommendation | Notes |
|------|-------|---------------|------------------|----------------|-------|
| — | Event Management | method | operations-research, real-time-operations | **manual-fix** | pandoc failed: pandoc failed: Error at (line 42, column 14): unexpected 'b' {\| {{table}} border="1" cellspacing="0" cellpadding="5" ^  |
| `annual-attrition` | Annual Attrition | calculator | capacity-planning, contact-center | **keep** | Calculator (interactive math). May need ted_pov:true if WFM Labs branded. |
| `annual-salary` | Annual Salary | calculator | capacity-planning, contact-center | **keep** | Calculator (interactive math). May need ted_pov:true if WFM Labs branded. |
| `demand-calculation` | Demand calculation | calculator | capacity-planning, contact-center | **keep** | Calculator (interactive math). May need ted_pov:true if WFM Labs branded. |
| `discrete-event-vs-monte-carlo-simulation-models` | Discrete-Event vs. Monte Carlo Simulation Models | comparison | operations-research, probabilistic-methods | **keep** | Cross-method comparison — fits comparison page type cleanly |
| `dynamic-calculators` | Dynamic Calculators | calculator | capacity-planning, contact-center | **keep** | Calculator (interactive math). May need ted_pov:true if WFM Labs branded. |
| `length-of-training` | Length of Training | calculator | capacity-planning, contact-center | **keep** | Calculator (interactive math). May need ted_pov:true if WFM Labs branded. |
| `level-1-process-templates` | Level 1 Process Templates | method | org-design | **keep** | Process template — synthesis-flavored method |
| `multi-objective-optimization-in-contact-center` | Multi-Objective Optimization in Contact Center | method | operations-research, real-time-operations | **keep** | Method/technique page |
| `next-generation-routing` | Next Generation Routing | method | operations-research, real-time-operations | **keep** | Method/technique page |
| `onboarding-costs` | Onboarding Costs | calculator | capacity-planning, contact-center | **keep** | Calculator (interactive math). May need ted_pov:true if WFM Labs branded. |
| `power-of-one` | Power of One | calculator | capacity-planning, contact-center | **keep** | Calculator (interactive math). May need ted_pov:true if WFM Labs branded. |
| `real-time-cause-and-effect-fishbone` | Real-Time Cause and Effect Fishbone | method | operations-research, real-time-operations | **keep** | Method/technique page |
| `resource-optimization-center-roc` | Resource Optimization Center (ROC) | method | operations-research, real-time-operations | **keep** | Method/technique page |
| `speed-to-proficiency-curve` | Speed to proficiency curve | calculator | capacity-planning, contact-center | **keep** | Calculator (interactive math). May need ted_pov:true if WFM Labs branded. |
| `training-attrition` | Training Attrition | calculator | capacity-planning, contact-center | **keep** | Calculator (interactive math). May need ted_pov:true if WFM Labs branded. |
| `wfm-labs-erlang-o` | WFM Labs Erlang-O™ | synthesis | org-design, contact-center | **keep** | WFM Labs branded synthesis — flag ted_pov: true and gate publish via Evaluator |
| `wfm-labs-maturity-model` | WFM Labs Maturity Model™ | synthesis | org-design, contact-center | **keep** | WFM Labs branded synthesis — flag ted_pov: true and gate publish via Evaluator |
| `wfm-labs-risk-score` | WFM Labs Risk Score™ | synthesis | org-design, contact-center | **keep** | WFM Labs branded synthesis — flag ted_pov: true and gate publish via Evaluator |
| `changes-to-the-future-of-workforce-management` | Changes to the Future of Workforce Management | synthesis | org-design, contact-center | **restructure** | Part of WFM Operating Standard thesis stack — likely needs domain page + sub-pages structure |
| `future-wfm-operating-standard` | Future WFM Operating Standard | synthesis | org-design, contact-center | **restructure** | Part of WFM Operating Standard thesis stack — likely needs domain page + sub-pages structure |
| `interpersonal-relationships` | Interpersonal Relationships | concept | org-design, contact-center | **restructure** | Broad concept — may need to split or merge with thesis pages |
| `technology` | Technology | concept | org-design, contact-center | **restructure** | Broad concept — may need to split or merge with thesis pages |
| `wfm-assessment` | WFM Assessment | synthesis | org-design, contact-center | **restructure** | Part of WFM Operating Standard thesis stack — likely needs domain page + sub-pages structure |
| `wfm-goals` | WFM Goals | synthesis | org-design, contact-center | **restructure** | Part of WFM Operating Standard thesis stack — likely needs domain page + sub-pages structure |
| `wfm-processes` | WFM Processes | synthesis | org-design, contact-center | **restructure** | Part of WFM Operating Standard thesis stack — likely needs domain page + sub-pages structure |
| `wfm-roles` | WFM Roles | synthesis | org-design, contact-center | **restructure** | Part of WFM Operating Standard thesis stack — likely needs domain page + sub-pages structure |
| `workforce-management-standard-introduction` | Workforce Management Standard Introduction | synthesis | org-design, contact-center | **restructure** | Part of WFM Operating Standard thesis stack — likely needs domain page + sub-pages structure |
| `main-page` | Main Page | — |  | **meta** | Routes to Hugo site, not wiki content |
| `privacy-policy` | Privacy Policy | — |  | **meta** | Routes to Hugo site, not wiki content |
| `wiki-about` | Wiki:About | — |  | **meta** | Routes to Hugo site, not wiki content |
| `wiki-code-of-conduct` | Wiki:Code of Conduct | — |  | **meta** | Routes to Hugo site, not wiki content |
| `wiki-privacy-policy` | Wiki:Privacy policy | — |  | **meta** | Routes to Hugo site, not wiki content |
| `wiki-terms-of-service` | Wiki:Terms of Service | — |  | **meta** | Routes to Hugo site, not wiki content |
| — | OAuth Test Success | — |  | **prune** | Test artifact from MediaWiki development |
| — | Token Test | — |  | **prune** | Test artifact from MediaWiki development |

## Schema Battle-Test Notes

After review, append observations on schema gaps revealed by real content:
- Missing page types?
- Missing domain slugs?
- Frontmatter fields needed but not in v1.0?

If gaps found, bump SCHEMA.md version and append changelog entry.