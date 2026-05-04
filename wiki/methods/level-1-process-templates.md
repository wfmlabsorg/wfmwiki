---
title: "Level 1 Process Templates"
slug: level-1-process-templates
type: method
domains: [org-design]
status: draft
created: 2026-05-04
updated: 2026-05-04
aperture: contact-center
confidence: medium
sources: [src-wfmlabs-mediawiki-2026-05-04]
related: []
tags: [migrated-mediawiki]
contributors: [ted-lango]
ted_pov: true
mediawiki_original: "Level 1 Process Templates"
mediawiki_revision_date: 2025-10-11
---
# Sample SOPs for Level 1

This packet turns the rhythm from Section 7.8 into three one-page SOPs you can run on Monday. They are *instruments*, not paperwork: light, repeatable, and written in the language of the floor. Map them directly to the cadence — **week → day → interval** — so the same work happens the same way twice.

------------------------------------------------------------------------

## SOP 1 — Weekly Forecast \|\| v1.0 \| 2024-01-15

**Purpose** — Give Scheduling a believable 15–30 minute picture they can build around.  
**Owner** — Forecast lead (name/role)  
**Cadence** — Publish Thu 15:00 for next week  
**Inputs** — Last 4 comparable weeks by day/skill/channel; known events (campaigns, outages, holidays); current AHT trend.  
**Steps**

1.  Pull interval arrivals and AHT; smooth obvious anomalies.
2.  Annotate known events (e.g., "Tue 12:00 email drop").
3.  Set AHT assumption and note change vs last week (± mm:ss).
4.  Compute *required staff* via Erlang-C for the service promise (e.g., 80/30).
5.  Write two uncertainties (e.g., "Mon AHT may +0:20; Fri volume may −5%").

**Outputs** — One shared source-of-truth tab: Arrivals, AHT, Required Staff; plus a one-paragraph forecast note (events, assumptions, uncertainties).  
**QC** — Spot-check two peak intervals; confirm metric definitions; verify no missing intervals.  
**Handoff** — Tag Scheduling owner; attach note; archive as /Forecasts/Weekly/  

------------------------------------------------------------------------

## SOP 2 — Build the Roster \|\| v1.0 \| 2024-01-15

**Purpose** — Turn the forecast into seats and time *with protections* (breaks, coaching, training).  
**Owner** — Scheduling lead (name/role)  
**Cadence** — Post Fri 17:00  
**Inputs** — Forecast tab (required staff); shrinkage policy (components + rates); coaching/training priorities; agent availability/preferences.  
**Steps**

1.  Apply shrinkage to *required* staff to produce *scheduled* staff by interval.
2.  Place breaks away from forecast peaks; stagger lunches across the crest.
3.  Block coaching/training windows; guardrail: keep unless two red intervals *and* occupancy above band.
4.  Resolve conflicts and coverage gaps; document any manual overrides.
5.  Publish the roster and a "what changed vs forecast" summary.

**Outputs** — Final roster (shared drive) + 7-day glance heatmap (coverage vs required).  
**QC** — Two peak intervals meet SL with occupancy inside band; breaks do not stack; protected windows visible.  
**Handoff** — Tag Real-time owner with protected windows and flex options.  

------------------------------------------------------------------------

## SOP 3 — Intraday Control \|\| v1.0 \| 2024-01-15

**Purpose** — Steer the *next* interval, not judge the last.  
**Owner** — Real-time lead (name/role)  
**Cadence** — Every 15–30 minutes  
**Inputs** — Live SL and occupancy; roster/protections; micro-moves playbook; thresholds (e.g., SL \< target two intervals; occupancy \> band).  
**Steps**

1.  Read interval SL + occupancy.
2.  If SL low *and* occupancy high, apply micro-moves in order:
    1.  Reclaim one back-office task (pre-named agents).
    2.  Nudge two breaks by 5 minutes.
    3.  Unlock a small flex pool (pre-approved).
3.  Keep coaching/training unless both thresholds trip; if canceled, re-book within 48h.
4.  Log two variance intervals (what moved: arrivals, AHT, staffing) for the end-of-day review.

**Outputs** — Quick action log in the shared variance sheet (time, move, reason, result).  
**QC** — No "break cliffs"; micro-moves precede cancellations; occupancy remains within band over the hour.  
**Handoff** — Post end-of-day variance notes for the forecaster; tag Scheduling if protections were used.  

------------------------------------------------------------------------

## How to adopt this packet (one hour, no new tools)

- Create the three one-page SOPs in your shared drive; set owners and cadences.
- Add a single "variance log" sheet with columns: interval, lever moved (arrivals/AHT/staffing), action taken, outcome.
- Agree the guardrails once (SL threshold, occupancy band, abandon treatment) and reference them in each SOP.
- Version and archive: if it changed, increment the version; if it repeats, keep it in the SOP.

*Governance in one line.* If it changed the plan, it goes in the variance log; if it keeps happening, it becomes an SOP; if an SOP is ignored twice, fix the SOP or the goal.
