---
title: "WFM Labs Erlang-O™"
slug: "wfm-labs-erlang-o"
type: "synthesis"
domains: ["org-design", "contact-center"]
status: "draft"
created: "2026-05-04"
updated: "2026-05-04"
tags: ["migrated-mediawiki"]
---
#### WFM Labs Erlang-O™

WFM Labs Erlang-O™ is a modern staffing framework developed by Ted Lango at WFM Labs to address the limitations of traditional staffing models like Erlang-C and Erlang-A, which often break down under the operational realities of today’s contact centers. WFM Labs Erlang-O™ is not a replacement for a base staffing algorithm; rather, it is an overlay framework that enhances any interval-level staffing calculation by embedding adjustments for variance, volatility, and intraday shrinkage. It ensures that staffing plans are resilient to real-world conditions while enabling cost optimization and maximizing employee development time.

The "O" in Erlang-O stands for "Overhead," representing the calculated capacity buffer integrated into staffing requirements to absorb natural variance and allow for real-time adjustments.

#### Why Traditional Models Fall Short

Contact centers have historically relied on base algorithms like Erlang-C and Erlang-A to determine the number of agents required to meet service levels. However, these models are based on theoretical assumptions that often misalign with operational reality:

- Erlang-C assumes infinite queue capacity and no caller abandonment.
- Erlang-A accounts for abandonment but still presumes uniform agent capabilities and steady-state arrival patterns.
- Both models assume that demand and capacity can be tightly planned in advance.

These assumptions fail in modern contact centers characterized by:

- Intraday fluctuations in call arrivals and handle times.
- Real-time variability in agent availability.
- Multi-channel operations and skill-based routing.
- The need to balance queue performance with agent development and alternative work.

As a result, staffing plans based purely on Erlang-C or Erlang-A are fragile, requiring reactive interventions when demand deviates from forecasts.

#### WFM Labs Erlang-O™: An Overhead Adjustment Framework

WFM Labs Erlang-O™ does not replace base interval staffing calculations; it enhances them. Organizations may continue using Erlang-C, Erlang-A, or custom algorithms tailored to their operations. Erlang-O works alongside these models, modifying their outputs to account for operational realities.

Base staffing algorithms estimate the number of agents required for a given volume, average handle time (AHT), and service level objective. Erlang-O applies adjustments to this estimate to account for:

- Minimal Interval Variance (MV): The statistical variability inherent in call arrivals within small time intervals. Even under accurate forecasts, arrivals are random, causing fluctuations that must be absorbed in real-time.
- Forecast Volatility (VX): The potential for unpredictable spikes in volume or fluctuations in AHT that exceed expected minimal variance.
- Intraday Shrinkage (IS): Time allocated to off-phone activities such as training, coaching, and breaks, along with alternative work (e.g., email or back-office tasks). Erlang-O treats these as dynamic levers to optimize both service level and agent development during the day.

#### Core Components Explained

##### 1. Base Staffing Algorithm

WFM Labs Erlang-O™ begins with a base staffing calculation, often using Erlang-C or Erlang-A. However, contact centers with more complex environments may employ custom algorithms based on:

- Skill-based routing efficiencies.
- Concurrency in digital channels.
- Customer patience factors.
- Discrete event simulation (DES) models or machine learning estimators.

WFM Labs Erlang-O™ is agnostic to the base staffing algorithm. It enhances the result, regardless of the complexity of the underlying calculation.

##### 2. Minimal Interval Variance (MV)

Minimal Interval Variance captures the inherent randomness in call arrivals at the interval level. Even with accurate forecasts, call volumes within a 15- or 30-minute period will vary. MV is calculated using:

MV = √(2 / π \* Forecasted Call Volume)

This adjustment increases staffing slightly to buffer against these natural fluctuations, preventing queue performance from collapsing when arrivals spike.

##### 3. Forecast Volatility (VX)

Volatility accounts for larger, unpredictable deviations beyond minimal variance. It reflects past patterns of demand surges, AHT swings, or unanticipated events. VX is specific to each contact center, requiring historical data analysis to determine:

- The frequency of volatility spikes.
- The average magnitude of those spikes.

Once assessed, VX adjustments are added to both forecasted calls and AHT.

##### 4. Intraday Shrinkage (IS)

Traditional staffing models treat shrinkage as a pre-scheduled deduction from available capacity. WFM Labs Erlang-O™ redefines shrinkage as a real-time capacity lever:

- Discounted Productive Shrinkage (DPS): Time for coaching, training, and breaks delivered dynamically in response to queue conditions.
- Other Shrinkage (OS): Unplanned shrinkage (e.g., absenteeism, unproductive time).
- Alternative Channel (AC): Time allocated to less time-sensitive work (e.g., email, back-office).

Intraday shrinkage is applied as an inflator to the final staffing requirement, reflecting the need to balance queue work and agent development.

#### Conceptual Staffing Adjustment Framework

WFM Labs Erlang-O™ adjusts the base staff requirement as follows:

Staff Required = Base Staffing Algorithm(Adjusted Calls, Adjusted AHT, SL) / (1 - IS)

Where:

- Adjusted Calls = Forecasted Calls \* (1 + MV + VX1)
- Adjusted AHT = Forecasted AHT \* (1 + VX2)
- IS = DPS (discounted based on real-time delivery), OS, and AC

#### The Role of Real-Time Automation

WFM Labs Erlang-O™ is most effective when paired with real-time automation, allowing contact centers to:

- Continuously monitor queue health and agent availability.
- Dynamically deliver productive shrinkage and alternative work.
- Optimize staffing buffers in real time.

Automation ensures that surplus capacity added through MV and VX adjustments is not wasted but used productively.

#### Key Benefits of WFM Labs Erlang-O™

- Builds resilience into capacity plans by embedding variance and volatility buffers.
- Reduces reliance on manual interventions during peak intervals.
- Maximizes agent development time without sacrificing service levels.
- Supports multi-channel and skill-based routing environments.
- Enhances cost efficiency by reducing reliance on overtime and minimizing service level failures.

#### When to Use WFM Labs Erlang-O™

Erlang-O is ideal for contact centers operating in environments with:

- Frequent intraday variability.
- Skill-based routing and multi-channel complexity.
- A desire to maximize agent training and development.
- Real-time automation capabilities to deliver dynamic adjustments.

#### Future Considerations

WFM Labs Erlang-O™ is designed as a flexible framework that will continue to evolve alongside contact center technologies. Future advancements may include:

- Machine learning for volatility detection.
- AI-driven forecasting refinements.
- Integration with workforce engagement tools for personalized scheduling.

WFM Labs Erlang-O™ represents a significant evolution in workforce management, helping contact centers move from fragile, precision-based staffing to resilient, adaptable operations.
