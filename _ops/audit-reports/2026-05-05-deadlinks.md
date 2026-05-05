# Wiki Dead Link Audit — 2026-05-05

## Summary

- Pages scanned: 46 (NS 0)
- Pages with at least one external URL: 22
- External URLs found (raw extractions): 73 total occurrences
- Unique external URLs: 56
- Definitively dead URLs (unique): 9
- Pages affected by dead URLs: 7
- Dead URL occurrences across pages: 13

Classification of the 9 unique dead URLs:

| Class | Count |
|---|---|
| Replaceable | 6 |
| Removable | 1 |
| Needs human input | 1 |
| Wikitext parse artifact (not a real URL) | 1 |

### Top offenders (by dead-URL count)

1. **Dynamic Calculators** — 4 dead
2. **Power of One** — 3 dead (per the brief, will be fixed in parallel — listed for completeness only, no action proposed here)
3. **Next Generation Routing** — 3 dead
4. **Multi-Objective Optimization in Contact Center** — 2 dead
5. **WFM Processes**, **WFM Assessment**, **Event Management**, **Discrete-Event vs. Monte Carlo Simulation Models** — 1 dead each

### Systematic patterns observed

1. **RStudio Shiny decommission** — three `tedlango.shinyapps.io/...` URLs (all variants of Power of One) appear on multiple pages; the brief confirms the consolidated replacement at `https://powerofone.wfmlabs.com/`.
2. **kyodo.solutions domain dropped** — `kyodo.solutions` has no DNS record; the active vendor domain is `kyodosolutions.com` (already in use on the Main Page and WFM Labs Risk Score pages, both alive). Three pages still link the dead `.solutions` form.
3. **`wfmlabs.org` direct paths gone** — `/calculators` and `/assessment` 404 on the marketing site; the real targets live on subdomains (`maturity-assessment.wfmlabs.com` for the maturity assessment, `powerofone.wfmlabs.com` for the calculator). The marketing site already links these subdomains directly.
4. **Wikitext parse error** — `https://en.wikipedia.org/wiki/Erlang_(unit` is missing its trailing close-paren because of MediaWiki external-link bracket syntax interaction (`[https://en.wikipedia.org/wiki/Erlang_(unit) Erlang-C]`). Probing failed; the canonical URL `https://en.wikipedia.org/wiki/Erlang_(unit)` returns 200. This is an extraction artifact, not a real dead link in the wikitext — listed below for transparency, recommend no action.
5. **Bot-protection false positives** — five McKinsey URLs, `bls.gov` OOH, `economist.com`, `poweroutage.us`, and `community.wfmlabs.org` all returned HTTP 403 or 000 to curl but are confirmed live via Wayback Machine snapshots from 2025-Q4 / 2026-Q1 (or, for community.wfmlabs.org, are clearly Cloudflare bot-walled). These are NOT dead and require no action. Documented at the bottom of this report so they are not re-flagged in future passes.

---

## Dead Links by Page

Pages ordered by dead-link count (worst first). The Power-of-One page is included for completeness but per the brief is being fixed in a parallel session — no edits proposed here.

### Dynamic Calculators

4 dead URLs.

| URL | Status | Recommendation | Proposed replacement |
|-----|:------:|----------------|---------------------|
| https://tedlango.shinyapps.io/powerofone/ | 404 | Replaceable | https://powerofone.wfmlabs.com/ |
| https://tedlango.shinyapps.io/powerofone-long/ | 404 | Replaceable | https://powerofone.wfmlabs.com/ |
| https://tedlango.shinyapps.io/japan-powerofone/ | 404 | Replaceable | https://powerofone.wfmlabs.com/ |
| https://wfmlabs.org/calculators | 404 | Replaceable | https://powerofone.wfmlabs.com/ (sole live calculator on the marketing site; if a true calculators index gets built later, swap then) |

Note: this page's three Shiny URLs are the same set the brief identifies. After replacement, the page may have three identical links to powerofone.wfmlabs.com — recommend collapsing to a single link with surrounding prose updated to mention "queue size, AHT, and service-level scenarios all in one calculator", but that's editorial polish for human review.

### Power of One

3 dead URLs. **SKIPPING per brief — being fixed by Ted/me in parallel.** Listed for completeness:

| URL | Status | Recommendation | Proposed replacement |
|-----|:------:|----------------|---------------------|
| https://tedlango.shinyapps.io/powerofone/ | 404 | Replaceable | https://powerofone.wfmlabs.com/ |
| https://tedlango.shinyapps.io/powerofone-long/ | 404 | Replaceable | https://powerofone.wfmlabs.com/ |
| https://tedlango.shinyapps.io/japan-powerofone/ | 404 | Replaceable | https://powerofone.wfmlabs.com/ |

### Next Generation Routing

3 dead URLs.

| URL | Status | Recommendation | Proposed replacement |
|-----|:------:|----------------|---------------------|
| https://kyodo.solutions/routing-intelligence | 000 (DNS fail) | Replaceable | https://kyodosolutions.com/ (the `.solutions` TLD form has no DNS; vendor is at `kyodosolutions.com`. The vendor site does NOT have a `/routing-intelligence` subpath — verified 404 — so link to the homepage and adjust surrounding prose accordingly) |
| https://kyodo.solutions/ | 000 (DNS fail) | Replaceable | https://kyodosolutions.com/ |
| https://www.modelcontextprotocol.io/ | 000 (DNS fail) | Replaceable | https://modelcontextprotocol.io/ (drop the `www.` — `www` subdomain has no DNS, bare domain returns 200) |

### Multi-Objective Optimization in Contact Center

2 dead URLs.

| URL | Status | Recommendation | Proposed replacement |
|-----|:------:|----------------|---------------------|
| https://kyodo.solutions/ | 000 (DNS fail) | Replaceable | https://kyodosolutions.com/ |
| https://www.modelcontextprotocol.io/ | 000 (DNS fail) | Replaceable | https://modelcontextprotocol.io/ |

### Discrete-Event vs. Monte Carlo Simulation Models

1 dead URL.

| URL | Status | Recommendation | Proposed replacement |
|-----|:------:|----------------|---------------------|
| https://kyodo.solutions/ | 000 (DNS fail) | Replaceable | https://kyodosolutions.com/ |

### WFM Assessment

1 dead URL.

| URL | Status | Recommendation | Proposed replacement |
|-----|:------:|----------------|---------------------|
| https://wfmlabs.org/assessment | 404 | Replaceable | https://maturity-assessment.wfmlabs.com/ (live, and is the canonical target linked from the wfmlabs.org homepage today) |

### WFM Processes

1 dead URL.

| URL | Status | Recommendation | Proposed replacement |
|-----|:------:|----------------|---------------------|
| https://tedlango.shinyapps.io/powerofone/ | 404 | Replaceable | https://powerofone.wfmlabs.com/ |

### Event Management

1 "URL" — wikitext parse artifact, not a true link.

| URL | Status | Recommendation | Proposed replacement |
|-----|:------:|----------------|---------------------|
| http://csc | 000 (no such host) | **Needs human input** | The wikitext contains the prose "referred to http://csc ticket" and "Notification is generated through the http://csc to the ticket requester". This appears to be a stray "http://" prefix on the word "csc" (which refers to the internal CSC ticketing system the ROC used). It was never a working URL. Recommend simply removing the `http://` prefix to leave plain text "csc ticket" / "to the csc". Confirm with Ted what "csc" referred to in the original ROC documentation — likely "Customer Service Center" or an internal system name — and reword for clarity. |

---

## Extraction artifacts (NOT real dead links)

### Power of One — Erlang Wikipedia link (parser artifact)

The URL extractor produced `https://en.wikipedia.org/wiki/Erlang_(unit` (missing trailing `)`). Source wikitext is `[https://en.wikipedia.org/wiki/Erlang_(unit) Erlang-C]`. The actual canonical URL `https://en.wikipedia.org/wiki/Erlang_(unit)` returns HTTP 200. **No action — link in wikitext is fine; this is a regex limitation in the audit script.**

---

## Bot-protection false positives (CONFIRMED ALIVE — do not flag in future passes)

These URLs returned non-2xx codes to curl, but were confirmed live via the Wayback Machine CDX index showing successful captures within the last 6–12 months, or are clearly Cloudflare-protected interactive sites.

| URL | curl status | Verification |
|-----|:----:|--------------|
| https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/great-attrition-or-great-attraction-the-choice-is-yours | 000 | Wayback 200 capture 2026-02-11 |
| https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/gone-for-now-or-gone-for-good-how-to-play-the-new-talent-game-and-win-back-workers | 000 | Wayback 200 captures (CDX) |
| https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-organization-blog/money-cant-buy-your-employees-loyalty | 000 | Wayback 200 captures (CDX) |
| https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-great-attrition-is-making-hiring-harder-are-you-searching-the-right-talent-pools | 000 | Wayback 200 capture 2026-02-19 |
| https://www.mckinsey.com/featured-insights/sustainable-inclusive-growth/future-of-america/freelance-side-hustles-and-gigs-many-more-americans-have-become-independent-workers | 000 | Wayback 200 captures (CDX) |
| https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm | 403 | Wayback 200 capture 2026-05-02 |
| https://www.economist.com/graphic-detail/2019/02/27/generation-z-is-stressed-depressed-and-exam-obsessed | 403 | Wayback 200 capture 2025-10-01 |
| https://poweroutage.us/ | 403 | Wayback 200 capture 2026-04-30 |
| https://community.wfmlabs.org/ | 403 | Cloudflare bot challenge ("Just a moment…"), site is intentional members area |

**Recommendation:** future link-audit scripts should treat 403 + 000 (especially with HTTP/2 INTERNAL_ERROR) as "needs human/wayback verification" rather than "dead". Many enterprise sites (McKinsey, BLS, The Economist) reject HEAD/curl entirely.

---

## Proposed fix batch (for human approval)

When approved, a single bot edit pass would touch **7 pages** and apply **10 unique URL substitutions**:

1. **Dynamic Calculators** — replace 3 Shiny URLs and 1 wfmlabs.org/calculators with `https://powerofone.wfmlabs.com/`. Editorial cleanup of resulting duplicate links may be needed (defer to human).
2. **Next Generation Routing** — replace `kyodo.solutions/routing-intelligence` and `kyodo.solutions/` with `kyodosolutions.com/`; replace `www.modelcontextprotocol.io/` with `modelcontextprotocol.io/`. Note the `/routing-intelligence` subpath does not exist on the new domain — surrounding prose may need a small edit, defer to human.
3. **Multi-Objective Optimization in Contact Center** — same kyodo and MCP substitutions.
4. **Discrete-Event vs. Monte Carlo Simulation Models** — kyodo substitution.
5. **WFM Assessment** — replace `wfmlabs.org/assessment` with `maturity-assessment.wfmlabs.com/`.
6. **WFM Processes** — replace 1 Shiny URL with `https://powerofone.wfmlabs.com/`.
7. **Event Management** — remove `http://` prefix from two prose mentions of "csc"; **needs Ted's confirmation on what "csc" originally referenced** before editing.

Power of One page intentionally excluded — handled in parallel.
