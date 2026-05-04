---
title: "WFM Roles"
slug: wfm-roles
type: synthesis
domains: [org-design, contact-center]
status: draft
created: 2026-05-04
updated: 2026-05-04
aperture: contact-center
confidence: medium
sources: []
related: []
tags: [migrated-mediawiki]
contributors: [ted-lango]
ted_pov: true
mediawiki_original: "WFM Roles"
mediawiki_revision_date: 2025-10-01
---
# WFM Organizational Roles — 5-Level Maturity Map

*This WFM standard outlines the organizational roles that carry the loop of forecast → schedule → real-time → learn. Roles are grouped into Forecasting, Scheduling, and Real-Time, with cross-cutting partners (platform/automation, routing, vendor management, analytics). What changes through the five levels is not the existence of these roles, but \*\*who owns what, the artifacts they produce, and how decisions are made and executed\*\*.*

## How to Use This Map

- \*\*Keep the core families\*\* (Forecasting / Scheduling / Real-Time) from the legacy standard, but \*\*instantiate them at your current maturity level\*\*.
- \*\*Role charters\*\* and \*\*handoffs\*\* are the mechanism: every level clarifies inputs → outputs → escalation, then upgrades skills and adds net-new roles where needed.
- The \*\*ROC\*\* (Resource/Real-time Optimization Center) is the execution hub from Level 2 onward; by Level 3 it runs an automation rulebook; by Level 4 it binds to probabilistic plans; by Level 5 it supervises autonomous decisioning. :contentReference\[oaicite:1\]{index=1}

## Roles by Maturity Level (Overview)

| Level                  | Role Posture (Core Families)                                                                                                       | New/Evolved Roles                                                                                                                                                | Primary Artifacts & Decision Rights                                                                                                               |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| **L1: Initial/Manual** | Roles exist as work, not titles; minimal viable team covering Forecasting, Scheduling, Real-Time                                   | —                                                                                                                                                                | One-page role charters; weekly interval view; roster with protected shrink; intraday micro-moves log; lightweight RACI-lite.                      |
| **L2: Foundational**   | Clear, distinct Forecasting / Scheduling / Real-Time functions with documented handoffs and cadence                                | ROC lead (intraday); platform admin (part-time)                                                                                                                  | Role charters; change logs; shrinkage policy; pre-shift & intraday huddles; tiered skill ladders; incident → action catalog.                      |
| **L3: Progressive**    | Same three pillars, but work tilts from plan defense to outcome optimization; real-time becomes rule authoring and experimentation | **Automation Orchestrator** (RTA→), **Automation Strategist**                                                                                                    | Rule→Trigger→Action registry; A/B toggles; acceptance & value readouts (AAR, VCE, SLS); weekly “learning” packs.                                  |
| **L4: Advanced**       | Forecasting and scheduling consume probabilistic plans; ROC executes staffing bands & guardrails                                   | **Capacity Planning Data Scientist (CPDS)**, **OR–WFM Translator**, enhanced Orchestrator                                                                        | Staffing envelopes (P50/P80/P95); constraint register; model cards; Pareto options; decision packs; model governance RACI.                        |
| **L5: Pioneering**     | WFM evolves to enterprise orchestration; core roles supervise autonomy and optimize multi-stakeholder value                        | **Chief Workforce Strategist**, **AI–Human Collaboration Designer**, **Customer Intelligence Analyst**, **Workforce Evolution Planner**, **Ethical AI Governor** | Enterprise guardrails (fairness, explainability); cross-business resource orchestration; scenario portfolios; anomaly review and override policy. |

------------------------------------------------------------------------

# Level-by-Level Role Charters & Interfaces

## Level 1: Roles (R) — Defining Essential Functions

*At L1, three people make the operation work—often wearing multiple hats. Naming the hats and the handoffs stabilizes today and prepares Level 2.*

Forecasting Owner  

- Publish a believable 15–30-minute view; note events and two uncertainties; post AHT and service promise; hand off by Thu 15:00.
- \*\*Output:\*\* Interval arrivals/AHT + required staff (Erlang-C baseline), plus context notes.

Scheduling Owner  

- Turn intent into seats/time with protections; place breaks vs. peaks; lock coaching with save/skip rule; hand off Fri 17:00.
- \*\*Output:\*\* Roster + “what changed” note vs. forecast.

Real-Time Owner  

- Steer the **next interval**: monitor SL/ASA and occupancy band; apply smallest pre-agreed moves before canceling development; log two variance intervals/day and hand back.

Why naming roles matters  

- Clarity of hat-on moments, clean handoffs, assumptions documented for the next role; less firefighting, more preserved coaching time.

## Level 2: Roles (R) — Building Core WFM Practices

*L2 professionalizes the loop: distinct functions, documented handoffs, cadenced collaboration, and an ROC stance for intraday.*

Principles  

1.  Document each job and its handoff (inputs → outputs → escalation).
2.  Collaborate on a cadence (weekly look-ahead, pre-shift, intraday huddles).
3.  Build tiered skills by role (basics now; advanced aligned to L3).
4.  Prepare for evolution (abandonment awareness, simple sim, rule design).

Role Charters (one-pagers)  

- **Forecasting** – Interval view and assumptions; WAPE reporting; two uncertainties; daily variance notes returned to forecaster.
- **Scheduling** – Shrinkage policy applied; break/coach placement; preferences handled by rules; summary of roster deltas.
- **Real-Time / ROC** – Intraday reads; micro-moves playbook; latency reduction; daily log to close the loop.

Targeted Training (tiered)  

- Forecasting: interval stats & event tagging → abandonment awareness & simple simulation.
- Scheduling: shrinkage & placement rules → re-optimization and blended templates.
- Real-time: interval reads & escalation → playbook design and cross-skill/channel rebalancing.

## Level 3: Roles (R) — Evolution of WFM Functions

*L3 elevates roles rather than removing them. Real-time shifts from firefighting to automation orchestration and experimentation, measured by AAR/VCE/SLS.*

Real-Time Analyst → **Automation Orchestrator**  

- **Rule design & optimization**: convert repeatable incidents into Rule→Trigger→Action logic (e.g., long-call assist, break protection, dynamic training).
- **Experimentation cadence**: A/B toggles, threshold sweeps, holdouts; changelog with owner, hypothesis, guardrails, rollback.
- **Pattern recognition**: mine acceptance, timing, tenure effects; feed L&D/QM/Knowledge.
- **Proactive interventions**: early-warning (fatigue, ACW overrun, repeated escalations) with staged responses.
- **Narratives with numbers**: weekly “top value” and “silent cost” rules tied to SLS, AHT tails, adherence exceptions, and training completion.
- **Lifecycle**: spot pattern → draft rule & guardrails → pilot & measure (AAR, VCE) → scale/tweak/retire → document.

New/Evolved Partners  

- **Automation Strategist** (emerges at L3): curates rule portfolio, aligns with business outcomes, and manages value readouts.
- Forecaster/Scheduler: start designing rules and bands that protect development and defend occupancy ranges as guardrails.

## Level 4: Roles (R) — New Positions for the OR Era

*L4 adds an analytical layer atop L3 execution. Planning becomes probabilistic and explainable; interfaces between analytics and operations are formalized.*

Net-New Roles  

- **Capacity Planning Data Scientist (CPDS)** – Probabilistic demand, Monte Carlo ranges, simulation & optimization, risk metrics, calibration; delivers staffing **distributions**, stress-tests, sensitivities, model cards.
- **OR–WFM Translator** – Converts business rules to model constraints and back; owns planning dashboards and decision packs; elicits trade-offs & weights; plain-language implications.
- **Automation Orchestrator (enhanced)** – Consumes staffing envelopes; implements risk-based policies; runs controlled A/B; feeds telemetry for model refresh.

Evolving Core Roles  

- Forecaster → **Probabilistic forecaster** (drivers + confidence bands).
- WFM analyst → **Strategic workforce planner** (multi-horizon scenarios; option value of flex pools/BPO).
- Real-time → **Experimenting operator** (early-warning thresholds, targeted interventions, post-mortems that update priors). :contentReference\[oaicite:2\]{index=2}

Operating Model & Competencies  

- Ownership: model integrity (CPDS), business fitness (Translator), execution fitness (Orchestrator), joint governance.
- Competency blueprint across Math/OR, Data/Tech, Domain, Decision, Communication.
- Sizing guidance (e.g., 500 vs 3,000 agents) and career paths from senior WFM roles into new specialties.
- Integration risks & mitigations (overlap, “precision theater,” black-box fear, silo drift) handled via RACI, ranges, model cards, and monthly range-vs-reality forums.

## Level 5: Roles (R) — The New Workforce Architects

*L5 completes the evolution: from operational specialists to enterprise architects who orchestrate human and digital work with explicit governance.*

New Enterprise-Altitude Roles  

- **Chief Workforce Strategist** – Orchestrates FTE/gig/BPO/AI portfolio; balances customer/employee/financial/community outcomes; maintains resilience across uncertain futures.
- **AI–Human Collaboration Designer** – Designs hybrid workflows, override paths, explanation UX; measures hybrid performance (value, learning, exception quality); embeds ethical guardrails.
- **Customer Intelligence Analyst** – Journey prediction; cross-channel synthesis; sentiment trajectory; value mapping (task→handler choice→CLV).
- **Workforce Evolution Planner** – Capability portfolios; learning architecture; ecosystem partnerships; weak-signal scanning.
- **Ethical AI Governor** – Bias monitoring/mitigation; explainability/audit; regulatory translation; trust communications.

How Traditional Roles Evolve  

- WFM Analyst → **Enterprise Orchestrator** (cross-business resource posture).
- Capacity Planner → **Scenario Architect** (option-rich strategies with auto-adaptation).
- Real-Time Manager → **Autonomous System Supervisor** (policy/threshold tuning, drift monitoring, ethical boundaries).
- Teams blend WFM operators, data scientists/OR, behavioral scientists, technologists, strategists, and ethics/compliance.

------------------------------------------------------------------------

# Legacy Role Families (Retained & Mapped)

*Your original role families remain the backbone. Below we retain the base content and annotate when each function typically first appears and how it matures.*

## Organizational Roles

Functions are then mapped to the roles:

<table>
<tbody>
<tr class="odd">
<td><p><strong>WFM Organizational Roles</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>Forecasting Role</strong></p></td>
</tr>
<tr class="odd">
<td><p>Forecasting functions aligned to a forecaster's role:</p>
<ul>
<li>Budgeting / Capacity Plans <em>(start L2; matures L4 with staffing envelopes and decision packs)</em></li>
<li>Model Simulation &amp; Risk Rating <em>(introduced L4; CPDS-owned with Translator)</em></li>
<li>Long, Midrange &amp; Short-Term Forecasting <em>(L2→L4 shifts from point to distributions)</em></li>
<li>Vacation Allotments <em>(L2; informed by bands at L4)</em></li>
<li>Attrition Modeling <em>(L2 basics; probabilistic at L4)</em></li>
</ul></td>
</tr>
<tr class="even">
<td><p><strong>Scheduling Role</strong></p></td>
</tr>
<tr class="odd">
<td><p>Scheduling functions aligned to a scheduler's role:</p>
<ul>
<li>Schedule generation, optimization &amp; maintenance <em>(L2; re-optimization rules grow at L3; bands at L4)</em></li>
<li>Shift design &amp; Shift bids <em>(L2; preference-aware/fairness guardrails by L4–L5)</em></li>
<li>Schedule optimization <em>(L2 → rule-assisted at L3 → multi-objective at L4)</em></li>
<li>Activity management (manual &amp; automated) <em>(Manual L2; automated L3 with Orchestrator)</em></li>
<li>Vacation bidding <em>(L2; constrained by staffing envelopes L4)</em></li>
</ul></td>
</tr>
<tr class="even">
<td><p><strong>Real-Time Role</strong></p></td>
</tr>
<tr class="odd">
<td><p>Real-time functions aligned to a real-time analyst's role:</p>
<ul>
<li>Intraday reforecasting <em>(L2 → early-warning thresholds &amp; rule execution L3)</em></li>
<li>Incident management <em>(L2 → automated playbook at L3)</em></li>
<li>Intraday traffic management <em>(L2 → orchestration at L3–L4)</em></li>
<li>Automation rules management <em>(emerges L3; governed L4)</em></li>
</ul></td>
</tr>
</tbody>
</table>

## Other Roles

Additional roles may be considered with the three core areas above, depending on an organization's design. These roles may be fully integrated, partially connected or partner with the WFM roles. Examples include:

- **WFM & Automation Platform Management**
- **Call Routing & Administration**
- **Third Party Management / Outsourced Vendor**
- **Reporting & Analytics**

### WFM & Automation Platform Management

The platforms leveraged for running the WFM software application and WFM automation application require administrators. Depending on the size and structure of a contact center, this may be a dedicated role within the WFM team, or it may be a shared responsibility. Whether dedicated or shared, governance around these two platforms should remain the responsibility of an employee under the WFM function.
*Level notes*: Admin is part-time at L2; becomes embedded in the ROC at L3 (rule registry, audits); at L4, connects to model governance (model/version cards, constraint register).

### Call Routing & Administration

Within the real-time role, intraday traffic management is defined as a function to be aligned to the real-time role. Often, real-time analysts will have the responsibility to alter or adjust call routing & agent skill assignment, to respond to real-time changes in the environment. The degree to which this team manages skill template designs or routing logic will vary by organization, in that many organizations will have a Telephony Management / IT department that has overall responsibility for the phone system. Regardless of the demarcation of responsibility behind the call routing platform, this standard recommends that the real-time team have a strong alignment with the Telephony Management / IT team, and that strong governance be established for managing change to the telephony system.
*Level notes*: L3 introduces rule-driven nudges (skills on/off, assist), while L4/L5 coordinate routing posture with staffing envelopes and fairness/EX guardrails.

### Third Party Management / Outsourced Vendor(s)

Organizations that leverage third party partners to service a percentage of their calls will have functions that are heavily interconnected with the forecasting role. Forecasters are forecasting demand, regardless of who is servicing that demand. With that responsibility, forecasters will need to allocate demand to third party partners and will have processes to determine how volumes are locked and managed with these partners. Given the wide range and nature of third party agreements, the vendor management function is acknowledged in this standard, but it is left to an individual organization to design the methods under which forecasting roles incorporate vendor associated functions.
*Level notes*: At L4, vendor allocations are stress-tested across scenarios and priced with risk (OT/BPO) bands; at L5, vendor/AI/hybrid portfolios are orchestrated centrally. :contentReference\[oaicite:3\]{index=3}

### Reporting & Analytics

WFM organizations generate significant amounts of data and a WFM role or roles may be potentially responsible for generating reports or analysis behind that data. These reports may include:

- Intraday performance reports (IDPs)
- Prior day performance reports (PDPs)
- Service level performance
- Incident reports
- Forecast models & artifacts
- Schedule health reports

…and potentially many more. Depending on an organization's overall operating model and design, these reports may be initially designed with the workforce management team, then managed for generation via either the same team, or by a reporting & analytics organization serving the overall reporting needs for the contact center.
*Level notes*: From L3 onward, reports evolve into \*\*dashboards of ranges & rule value\*\* (AAR/VCE/SLS); L4 adds model cards, constraint registers, and Pareto decision packs; L5 adds governance health (fairness, explainability, time-to-rollback).

------------------------------------------------------------------------

# RACI-Lite Examples (by Level)

| Decision                               | L1 Owner (A/R)           | L2 Owner (A/R)       | L3 Owner (A/R)                            | L4 Owner (A/R)                                 | L5 Owner (A/R)                                                         |
|----------------------------------------|--------------------------|----------------------|-------------------------------------------|------------------------------------------------|------------------------------------------------------------------------|
| Interval forecast & assumptions        | Ops mgr / Forecast owner | Forecaster           | Forecaster (+ Orchestrator for telemetry) | CPDS (model) / Translator (business fit)       | Chief WF Strategist (portfolio); CPDS/Translator for domains           |
| Roster build (shrinkage & protections) | Scheduler                | Scheduler            | Scheduler (+ rules)                       | Scheduler within staffing envelopes            | Orchestrated across functions                                          |
| Intraday micro-move                    | Real-time owner          | Real-time lead (ROC) | Orchestrator via rules                    | Orchestrator under bands/constraints           | Platform autonomously; Supervisor oversees                             |
| Rule change & rollout                  | —                        | —                    | Orchestrator (A), ROC lead (R)            | Orchestrator (R) with CPDS/Translator approval | Autonomous system governance board; Ethical AI Governor for guardrails |

------------------------------------------------------------------------

# Notes

This mapping aligns to the \*\*WFM Labs Maturity Model™\*\* and the Level-by-Level role evolution described across the manuscript and maturity curve references. :contentReference\[oaicite:4\]{index=4} :contentReference\[oaicite:5\]{index=5} :contentReference\[oaicite:6\]{index=6}
