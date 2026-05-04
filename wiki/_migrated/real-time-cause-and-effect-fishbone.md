---
title: "Real-Time Cause and Effect Fishbone"
slug: real-time-cause-and-effect-fishbone
type: method
domains: [operations-research, real-time-operations]
status: draft
created: 2026-05-04
updated: 2026-05-04
aperture: contact-center
confidence: medium
sources: []
related: []
tags: [migrated-mediawiki]
contributors: [ted-lango]
ted_pov: false
mediawiki_original: "Real-Time Cause and Effect Fishbone"
mediawiki_revision_date: 2025-07-15
---
## Cause and Effect Fishbone Diagram

![Cause and Effect Fishbone](../raw/assets/mediawiki/ROC-Cause_and_effect_diagram.jpg)
**[Ishikawa diagrams](http://en.wikipedia.org/wiki/Ishikawa_diagram)** (also called **fishbone diagrams** or **cause-and-effect diagrams**) are diagrams that show the causes of a certain event. Common uses of the Ishikawa diagram are product design and quality defect prevention, to identify potential factors causing an overall effect.[^1]

The ROC's use of the Real-Time Cause and Effect Diagram allows consistent diagnosis of what factors are causing service level objectives to not be met, when thresholds have been broken. The diagram paths have 4 major categories which lead to a miss of service level:

- Poor Line Adherence
- Actual Volume Does Not Match Forecast Volume
- Scheduled Line Does Not Match Arrivals
- Average Handle Time Longer than Forecast

Each category has a subset of likely suspects which lead to the major cause. Example: for **Actual Volume Does Not Match Forecast Volume**, the root cause could be tied to a wide range of events. One example would be a marketing program that was not known or taken into consideration when the forecast was generated. A completely different cause would be a mis-calculation on call reduction initiatives.

## Sample Diagnostic Reports

[[diagnostic-reports]]

[[category-resource-optimization-center]]

[^1]: Wikipedia: Ishikawa diagram <http://en.wikipedia.org/wiki/Ishikawa_diagram>
