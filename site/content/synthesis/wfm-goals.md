---
title: "WFM Goals"
slug: "wfm-goals"
type: "synthesis"
domains: ["org-design", "contact-center"]
status: "draft"
created: "2026-05-04"
updated: "2026-05-04"
tags: ["migrated-mediawiki"]
---
### New WFM Goals

The future WFM standard outlines both traditional goals and new goals to address the changing dynamics described the {{< wikilink "changes-to-the-future-of-workforce-management-the-drivers-behind-the-need-for-change" "drivers behind the need for change" >}}, with special emphasis on "uncertainty".

#### Why Goals Matter in Workforce Management

Goals serve as the North Star for workforce management organizations, providing direction, enabling measurement, and creating accountability. They transform abstract concepts like "good service" or "efficiency" into concrete, measurable targets that teams can work toward. Without well-defined goals, WFM becomes reactive rather than strategic, fighting fires instead of building capabilities.

Yet the selection and definition of goals is far from universal. What constitutes "good" performance varies dramatically across industries, companies, and even departments within the same organization. A luxury brand may prioritize accessibility and immediate response, while a cost-conscious operation might accept longer wait times in exchange for efficiency. These aren't right or wrong approaches—they're strategic choices aligned to business models and customer expectations.

#### The Nuance of Metric Definition

Every metric can be calculated multiple ways, each revealing different aspects of performance. Consider Service Level: should abandons within threshold be included or excluded? Should it be measured at interval, daily, or monthly levels? Should different channels have different targets? Each choice reflects organizational priorities and operational realities.

This multiplicity extends across all metrics. Forecast accuracy can use MAPE, WAPE, or RMSE. Adherence can be measured as conformance or schedule adherence. Occupancy might include or exclude certain auxiliary states. These aren't mere technical details—they embody philosophical choices about what matters most to your operation.

Organizations must also consider the interplay between metrics. Pursuing aggressive AHT reduction might boost capacity but harm quality and employee experience. Maximizing occupancy improves efficiency but increases burnout risk. Every goal exists in tension with others, requiring thoughtful balance rather than blind optimization.

#### A Framework, Not a Prescription

The goals and metrics presented in this framework—spanning from foundational Level 1 metrics to pioneering Level 5 capabilities—are designed as a guide for your journey, not a rigid prescription. Some organizations will find certain metrics essential while others irrelevant. A healthcare contact center may need to track clinical accuracy while a sales operation focuses on conversion rates. Both are correct for their context.

We've organized these goals across five maturity levels, mixing time-tested traditional metrics with emerging measures designed for the Collaborative Intelligence Era. The traditional metrics remain relevant because the fundamentals of customer contact haven't changed—customers still want their issues resolved quickly and accurately. But the new metrics acknowledge that achieving these fundamentals sustainably requires attention to employee experience, variance management, and the human side of automation.

#### Your Path Forward

As you explore these goals, consider:

- Which metrics align with your strategic priorities?
- How might traditional definitions need adjustment for your context?
- What's the right balance between efficiency and experience metrics?
- How can new metrics help address current operational pain points?
- What measurement capabilities need development to track advanced metrics?

Few, if any organizations will implement every metric presented here. Others will select a focused subset. Many will adapt these definitions to fit their unique needs. All of these approaches are valid. The key is intentional choice—understanding what you're measuring, why it matters, and how it connects to broader organizational objectives.

The journey from Level 1 to Level 5 isn't about checking boxes or implementing every metric. It's about progressively building capabilities that enable your organization to thrive in an environment of increasing complexity and constant change. The goals you choose and how you define them should reflect your unique path through this transformation.

#### Maturity Overview (Goals by Level)

| Level | Stage        | Metrics Added                                                                                                | Key Outcomes             |
|-------|--------------|--------------------------------------------------------------------------------------------------------------|--------------------------|
| 1     | Initial      | Basic SL, AHT, Occupancy, ABA, ASA, Adherence                                                                | Establish measurement    |
| 2     | Foundational | WAPE, Minimal Interval Error Rate (aka Minimal Error Rate/MIV), SQI, Forecast Accuracy – Attrition/Retention | Governance & consistency |
| 3     | Progressive  | AAR, VCE, SCR, Service Level Stability (SLS), MTTR for Intraday Variance                                     | Variance harvesting      |
| 4     | Advanced     | Probabilistic Staffing Bands (P50/P80/P95), OVF, Scenario Robustness, Risk Ratings (SL/Financial/Employee)   | Probabilistic planning   |
| 5     | Pioneering   | CLV Impact, Learning Velocity, Fairness Index, Time‑to‑Rollback (TTR), DQS (placeholder)                     | Autonomous optimization  |

------------------------------------------------------------------------

## Level 1 — Initial / Manual (Establish Measurement)

At Level 1, organizations establish the foundational metrics that form the bedrock of workforce management. These metrics provide basic visibility into contact center performance and create the measurement infrastructure necessary for advancement to higher maturity levels.

### Service Level (SL)

Service Level represents the percentage of calls answered within a defined threshold time, serving as the primary measure of customer accessibility and operational effectiveness.

#### Definition

Service Level measures the percentage of contacts (calls, chats, emails) handled within a target time threshold. The most common standard is 80/20 (80% of calls answered within 20 seconds), though this varies by industry and channel.

#### Formula

$\text{Service Level} = \frac{\text{Calls answered within threshold}}{\text{Total calls offered}} \times 100\%$

Alternative calculation (excluding abandons within threshold):
$\text{Service Level} = \frac{\text{Calls answered within threshold}}{\text{Total calls offered - Abandons within threshold}} \times 100\%$

#### Industry Examples

| Industry            | Common Target | Threshold Time | Rationale                         |
|---------------------|---------------|----------------|-----------------------------------|
| Emergency Services  | 95%           | 10 seconds     | Life-critical response            |
| Financial Services  | 80%           | 20 seconds     | Balance of service and cost       |
| Retail/E-commerce   | 70%           | 30 seconds     | Cost-conscious, seasonal variance |
| Technical Support   | 70%           | 60 seconds     | Complex inquiry preparation       |
| Government Services | 80%           | 30 seconds     | Public service obligation         |
| Healthcare          | 90%           | 30 seconds     | Patient care priority             |

#### Channel-Specific Targets

- **Voice**: 80% in 20-30 seconds
- **Chat**: 80% in 120 seconds (first response)
- **Email**: 90% in 24 hours
- **Social Media**: 80% in 60 minutes

#### Calculation Example

| Metric                                 | Value |
|----------------------------------------|-------|
| Total Calls Offered                    | 5,000 |
| Answered Within 20 seconds             | 3,850 |
| Abandoned Within 20 seconds            | 150   |
| **Service Level (including abandons)** | 77.0% |
| **Service Level (excluding abandons)** | 79.4% |

#### Key Considerations

- Service level is measured at interval (typically 15 or 30 minutes), daily, weekly, and monthly levels
- Peak hour service level often differs significantly from average daily performance
- Consider both offered and answered service level depending on abandon treatment
- Balance service level goals with cost constraints and employee experience

### Average Speed of Answer (ASA)

Average Speed of Answer represents the average time callers wait in queue before connecting with an agent.

#### Definition

ASA measures the average time from when a call enters the queue until it is answered by an agent, excluding IVR time but including ring time.

#### Formula

$\text{ASA} = \frac{\sum \text{Wait time for all answered calls}}{\text{Total answered calls}}$

#### Industry Benchmarks

| Performance Level | ASA Range      | Customer Perception                 |
|-------------------|----------------|-------------------------------------|
| Excellent         | 0-20 seconds   | Immediate service                   |
| Good              | 21-45 seconds  | Acceptable wait                     |
| Fair              | 46-90 seconds  | Noticeable delay                    |
| Poor              | 91-180 seconds | Frustrating wait                    |
| Critical          | \>180 seconds  | Unacceptable, high abandonment risk |

#### Relationship to Service Level

- ASA of 20 seconds with 80% SL typically indicates well-balanced staffing
- ASA of 30+ seconds with 80% SL suggests long tail of extended waits
- ASA should be reviewed alongside service level distribution, not just average

#### Calculation Example

| Hour      | Calls Answered | Total Wait Time    | ASA              |
|-----------|----------------|--------------------|------------------|
| 8:00 AM   | 145            | 2,900 seconds      | 20.0 seconds     |
| 9:00 AM   | 213            | 6,390 seconds      | 30.0 seconds     |
| 10:00 AM  | 198            | 9,900 seconds      | 50.0 seconds     |
| 11:00 AM  | 176            | 5,280 seconds      | 30.0 seconds     |
| **Total** | **732**        | **24,470 seconds** | **33.4 seconds** |

### Abandonment Rate (ABA)

Abandonment Rate measures the percentage of customers who disconnect before reaching an agent.

#### Definition

The percentage of offered calls where the caller hangs up before connecting with an agent, typically excluding abandons within a short threshold (e.g., 5 seconds).

#### Formula

$\text{Abandonment Rate} = \frac{\text{Abandoned calls}}{\text{Total offered calls}} \times 100\%$

Adjusted formula (excluding short abandons):
$\text{Adjusted ABA} = \frac{\text{Abandons after threshold}}{\text{Total offered - Abandons before threshold}} \times 100\%$

#### Industry Targets

| Industry           | Acceptable Range | Critical Threshold | Notes                        |
|--------------------|------------------|--------------------|------------------------------|
| Sales/Revenue      | 2-3%             | \>5%               | Lost revenue impact          |
| Customer Service   | 3-5%             | \>8%               | Service standard             |
| Technical Support  | 5-7%             | \>10%              | Complex inquiry tolerance    |
| Collections        | 7-10%            | \>15%              | Caller reluctance factor     |
| Emergency Services | \<2%             | \>3%               | Critical service requirement |

#### Abandon Timing Analysis

| Time in Queue   | Typical Abandon % | Cumulative Abandons |
|-----------------|-------------------|---------------------|
| 0-5 seconds     | 5%                | 5%                  |
| 6-30 seconds    | 15%               | 20%                 |
| 31-60 seconds   | 25%               | 45%                 |
| 61-120 seconds  | 30%               | 75%                 |
| 121-180 seconds | 15%               | 90%                 |
| \>180 seconds   | 10%               | 100%                |

#### Key Drivers

- Queue wait time (strongest correlation)
- Time of day/day of week patterns
- IVR experience and messaging
- Callback option availability
- Customer urgency/value of interaction

### Average Handle Time (AHT)

Average Handle Time represents the total time required to complete a customer interaction.

#### Definition

AHT encompasses the entire customer interaction duration, including talk time, hold time, and after-call work (ACW).

#### Formula

$\text{AHT} = \frac{\text{Total Talk Time + Total Hold Time + Total ACW Time}}{\text{Total Calls Handled}}$

Component breakdown:
$\text{AHT} = \text{ATT} + \text{AHT} + \text{ACW}$

Where:

- **ATT** = Average Talk Time
- **AHT** = Average Hold Time
- **ACW** = After-Call Work

#### Industry Benchmarks

| Contact Type       | Typical AHT     | Components (Talk/Hold/ACW) |
|--------------------|-----------------|----------------------------|
| Simple Inquiry     | 180-240 seconds | 150/10/20                  |
| Account Service    | 300-420 seconds | 240/30/30                  |
| Technical Support  | 480-720 seconds | 360/60/60                  |
| Sales              | 360-600 seconds | 420/30/90                  |
| Collections        | 420-540 seconds | 360/20/40                  |
| Complex Resolution | 600-900 seconds | 480/90/120                 |

#### Channel Comparison

| Channel      | Typical Handle Time | Concurrency | Efficiency Factor |
|--------------|---------------------|-------------|-------------------|
| Voice        | 360 seconds         | 1.0         | 1.0x              |
| Chat         | 600 seconds         | 2.5         | 0.7x              |
| Email        | 480 seconds         | N/A         | 1.3x              |
| SMS          | 180 seconds         | 4.0         | 0.5x              |
| Social Media | 420 seconds         | 3.0         | 0.6x              |

#### AHT Optimization Balance

- Reducing AHT improves capacity but may harm quality
- Monitor First Call Resolution (FCR) alongside AHT changes
- Consider customer satisfaction impact of rushed interactions
- Track repeat contact rate when implementing AHT reduction initiatives

### Occupancy

Occupancy measures the percentage of logged-in time that agents spend handling customer contacts.

#### Definition

The ratio of handle time to total available time, indicating how "busy" agents are during their logged-in time.

#### Formula

$\text{Occupancy} = \frac{\text{Total Handle Time}}{\text{Total Available Time}} \times 100\%$

Alternative calculation:
$\text{Occupancy} = \frac{\text{Talk Time + Hold Time + ACW Time}}{\text{Sign-in Time - Aux Time}} \times 100\%$

#### Occupancy Targets by Size

| Agent Count   | Target Occupancy | Maximum Sustainable | Burnout Risk Zone |
|---------------|------------------|---------------------|-------------------|
| 5-10 agents   | 65-70%           | 75%                 | \>80%             |
| 11-25 agents  | 70-75%           | 80%                 | \>85%             |
| 26-50 agents  | 75-80%           | 85%                 | \>87%             |
| 51-100 agents | 80-83%           | 87%                 | \>90%             |
| 100+ agents   | 83-85%           | 90%                 | \>92%             |

#### Occupancy Impact Analysis

| Occupancy Level | Agent Experience     | Service Impact       | Efficiency           |
|-----------------|----------------------|----------------------|----------------------|
| \<60%           | Underutilized, bored | Excellent response   | Poor cost efficiency |
| 60-75%          | Comfortable pace     | Good flexibility     | Moderate efficiency  |
| 75-85%          | Productive, engaged  | Standard service     | Good efficiency      |
| 85-90%          | Stressed, pressured  | Degraded flexibility | High efficiency      |
| \>90%           | Burnout risk         | Poor response time   | Unsustainable        |

#### Erlang Relationship

- Occupancy naturally increases with team size (economies of scale)
- Small teams require lower occupancy targets to maintain service levels
- Occupancy and service level have an inverse relationship at high utilization

#### Key Considerations

- Balance efficiency goals with agent wellbeing
- Account for channel differences (chat allows higher occupancy)
- Consider break/auxiliary time in calculations
- Monitor alongside employee satisfaction metrics

### Schedule Adherence

Schedule Adherence measures how closely agents follow their assigned schedules.

#### Definition

The percentage of scheduled time that agents are in the correct state (available, break, lunch, training, etc.) at the correct time.

#### Formula

$\text{Adherence} = \frac{\text{Time in adherence}}{\text{Total scheduled time}} \times 100\%$

Conformance (alternative metric):
$\text{Conformance} = \frac{\text{Total time worked}}{\text{Total time scheduled}} \times 100\%$

#### Industry Standards

| Environment         | Target Adherence | Acceptable Range | Notes                         |
|---------------------|------------------|------------------|-------------------------------|
| Strict scheduling   | 95-98%           | 93-100%          | High control environment      |
| Standard operations | 90-95%           | 88-97%           | Typical contact center        |
| Flexible workplace  | 85-90%           | 82-93%           | Work-from-home considerations |
| Blended environment | 80-85%           | 75-88%           | Multi-skill, project work     |

#### Adherence Exception Categories

| Category               | Typical % | Acceptable? | Action Required            |
|------------------------|-----------|-------------|----------------------------|
| Scheduled breaks/lunch | N/A       | Yes         | None (in adherence)        |
| Unscheduled break      | 2-3%      | Conditional | Monitor pattern            |
| System issues          | 1-2%      | Yes         | Track and resolve          |
| Training overflow      | 1-2%      | Yes         | Adjust schedules           |
| Personal emergency     | 0.5%      | Yes         | Document only              |
| Coaching extension     | 1-2%      | Yes         | Coordinate with supervisor |
| Unauthorized           | \<1%      | No          | Progressive discipline     |

#### Calculation Example

| Time Period                      | Scheduled State | Actual State            | In Adherence?                 |
|----------------------------------|-----------------|-------------------------|-------------------------------|
| 9:00-10:00                       | Available       | Available               | ✓ (60 min)                    |
| 10:00-10:15                      | Break           | Break                   | ✓ (15 min)                    |
| 10:15-11:00                      | Available       | Available (10:20 start) | ✗ (5 min out)                 |
| 11:00-12:00                      | Available       | Available               | ✓ (60 min)                    |
| 12:00-1:00                       | Lunch           | Lunch                   | ✓ (60 min)                    |
| **Total Scheduled: 240 minutes** |                 |                         | **In Adherence: 235 minutes** |
| **Adherence %**                  |                 |                         | **97.9%**                     |

#### Implementation Best Practices

- Start with education, not enforcement
- Allow reasonable grace periods (2-3 minutes)
- Consider different standards for different activities
- Focus on patterns, not individual infractions
- Balance adherence with employee flexibility needs

### Measurement Infrastructure Requirements

#### Data Collection Systems

- **ACD/Phone System**: Real-time call statistics
- **WFM Software**: Schedule management and adherence tracking
- **Reporting Platform**: Historical analysis and trending
- **Display Boards**: Real-time visibility for floor management

#### Reporting Cadence

| Metric        | Real-time | Interval | Daily | Weekly | Monthly |
|---------------|-----------|----------|-------|--------|---------|
| Service Level | ✓         | ✓        | ✓     | ✓      | ✓       |
| ASA           | ✓         | ✓        | ✓     | ✓      | ✓       |
| Abandonment   | ✓         | ✓        | ✓     | ✓      | ✓       |
| AHT           |           | ✓        | ✓     | ✓      | ✓       |
| Occupancy     | ✓         | ✓        | ✓     | ✓      | ✓       |
| Adherence     | ✓         | ✓        | ✓     | ✓      | ✓       |

#### Success Criteria for Level 1

- All six core metrics consistently measured and reported
- Historical data available for at least 13 weeks
- Real-time visibility established for critical metrics
- Basic targets set based on business requirements
- Regular review cadence established with stakeholders

### Summary

Level 1 metrics establish the foundation for workforce management excellence. These six core metrics—Service Level, ASA, Abandonment, AHT, Occupancy, and Adherence—provide essential visibility into contact center performance. Organizations must master consistent measurement and reporting of these metrics before advancing to more sophisticated analytics and optimization strategies found in higher maturity levels.

## Level 2 — Foundational (Governance & Consistency)

At Level 2 we standardize metric definitions and governance and add accuracy measures fit for purpose (WAPE, Minimal Interval Error Rate) along with schedule‑fit (SQI) and supply‑side forecasting (attrition/retention).

### Weighted Absolute Percentage Error (WAPE)

WAPE represents the gold standard for measuring forecast accuracy in workforce management, providing a weighted view of forecast performance that appropriately scales errors based on volume magnitude rather than treating all intervals equally.

#### Definition

Weighted Absolute Percentage Error measures forecast accuracy by calculating the sum of absolute errors divided by the sum of actual values, preventing the distortion that occurs with simple averaging of percentage errors. Unlike MAPE (Mean Absolute Percentage Error), which can overweight errors in low-volume periods, WAPE provides proportional weighting based on actual volumes.

#### Formula

$\text{WAPE} = \frac{\sum_{i=1}^{n} |A_i - F_i|}{\sum_{i=1}^{n} A_i} \times 100\%$

Where:

- **A<sub>i</sub>** = Actual value for period i
- **F<sub>i</sub>** = Forecasted value for period i
- **n** = Number of periods

Alternative representation:
$\text{WAPE} = \frac{\text{Sum of Absolute Errors}}{\text{Sum of Actuals}} \times 100\%$

#### Why WAPE Over Other Metrics

| Metric   | Formula                 | Strength                 | Weakness                   | When to Use            |
|----------|-------------------------|--------------------------|----------------------------|------------------------|
| **WAPE** | Σ\|A-F\|/ΣA             | Volume-weighted accuracy | Can mask interval variance | Primary WFM metric     |
| **MAPE** | (1/n)Σ\|A-F\|/A         | Simple interpretation    | Overweights low volumes    | Never for intervals    |
| **RMSE** | √\[(1/n)Σ(A-F)²\]       | Penalizes large errors   | Not percentage-based       | Model comparison       |
| **MAE**  | (1/n)Σ\|A-F\|           | Absolute scale           | No volume context          | Fixed volume queues    |
| **MASE** | MAE/MAE<sub>naive</sub> | Scale-independent        | Complex interpretation     | Cross-queue comparison |

#### Calculation Example - Daily WAPE

Consider a day with varying call volumes across 12 hours:

| Hour                             | Forecast  | Actual    | Error   | Absolute Error | % Error   |
|----------------------------------|-----------|-----------|---------|----------------|-----------|
| 8:00                             | 145       | 152       | -7      | 7              | -4.6%     |
| 9:00                             | 287       | 298       | -11     | 11             | -3.7%     |
| 10:00                            | 412       | 389       | 23      | 23             | 5.9%      |
| 11:00                            | 398       | 421       | -23     | 23             | -5.5%     |
| 12:00                            | 267       | 251       | 16      | 16             | 6.4%      |
| 13:00                            | 189       | 198       | -9      | 9              | -4.5%     |
| 14:00                            | 234       | 245       | -11     | 11             | -4.5%     |
| 15:00                            | 356       | 341       | 15      | 15             | 4.4%      |
| 16:00                            | 298       | 312       | -14     | 14             | -4.5%     |
| 17:00                            | 245       | 238       | 7       | 7              | 2.9%      |
| 18:00                            | 178       | 186       | -8      | 8              | -4.3%     |
| 19:00                            | 89        | 92        | -3      | 3              | -3.3%     |
| **Total**                        | **3,098** | **3,123** | **-25** | **147**        |           |
| **WAPE = 147 / 3,123 × 100%**    |           |           |         |                | **4.71%** |
| **Simple Average of % Errors**   |           |           |         |                | **4.49%** |
| **MAPE (Mean Absolute % Error)** |           |           |         |                | **4.52%** |

Note how WAPE (4.71%) differs from both the simple average and MAPE, providing a more accurate representation weighted by actual volumes.

#### Interval-Level WAPE Calculation

For a more granular view, calculate WAPE at the interval level:

| Interval | Forecast | Actual | Abs Error | Cumulative Forecast | Cumulative Actual | Cumulative Abs Error | Running WAPE |
|----------|----------|--------|-----------|---------------------|-------------------|----------------------|--------------|
| 8:00     | 36       | 38     | 2         | 36                  | 38                | 2                    | 5.3%         |
| 8:15     | 37       | 39     | 2         | 73                  | 77                | 4                    | 5.2%         |
| 8:30     | 38       | 37     | 1         | 111                 | 114               | 5                    | 4.4%         |
| 8:45     | 34       | 38     | 4         | 145                 | 152               | 9                    | 5.9%         |
| 9:00     | 68       | 71     | 3         | 213                 | 223               | 12                   | 5.4%         |
| 9:15     | 72       | 75     | 3         | 285                 | 298               | 15                   | 5.0%         |
| 9:30     | 74       | 77     | 3         | 359                 | 375               | 18                   | 4.8%         |
| 9:45     | 73       | 75     | 2         | 432                 | 450               | 20                   | 4.4%         |

#### WAPE Interpretation Guidelines

| Queue Size (Annual) | Excellent | Good   | Acceptable | Needs Improvement |
|---------------------|-----------|--------|------------|-------------------|
| \>10M calls         | \<3%      | 3-5%   | 5-7%       | \>7%              |
| 5M-10M calls        | \<4%      | 4-6%   | 6-8%       | \>8%              |
| 1M-5M calls         | \<5%      | 5-7%   | 7-10%      | \>10%             |
| 500K-1M calls       | \<6%      | 6-9%   | 9-12%      | \>12%             |
| 100K-500K calls     | \<8%      | 8-12%  | 12-15%     | \>15%             |
| \<100K calls        | \<10%     | 10-15% | 15-20%     | \>20%             |

#### Time Horizon Considerations

WAPE varies significantly based on the time horizon measured:

| Time Horizon | Typical WAPE Range | Volatility Factor | Use Case             |
|--------------|--------------------|-------------------|----------------------|
| Annual       | 2-5%               | Very Low          | Capacity planning    |
| Monthly      | 3-8%               | Low               | Budget planning      |
| Weekly       | 5-12%              | Medium            | Staff planning       |
| Daily        | 5-15%              | High              | Schedule creation    |
| Interval     | 10-30%             | Very High         | Real-time management |

#### Relationship to Minimal Interval Variance

WAPE must be interpreted alongside the Minimal Interval Variance (MIV) to understand achievable accuracy:

**Achievable WAPE Formula:**
$\text{Achievable WAPE} = \text{MIV} + \text{Systematic Error}$

Where:

- **MIV** = Natural randomness that cannot be forecasted
- **Systematic Error** = Improvable forecast error from model or inputs

For a queue averaging 50 calls per interval:

- MIV ≈ 14.1% (using √n/n formula)
- If actual WAPE = 18%, then Systematic Error = 3.9%
- Improvement opportunity = 3.9%, not 18%

#### WAPE Decomposition Analysis

Break down WAPE by contributing factors:

| Error Source        | Typical Contribution | Detection Method      | Improvement Strategy |
|---------------------|----------------------|-----------------------|----------------------|
| Day-of-week pattern | 25-35%               | DOW analysis          | Seasonal models      |
| Intraday pattern    | 20-30%               | Interval distribution | Profile refinement   |
| Special events      | 15-25%               | Event correlation     | Calendar integration |
| Trend misalignment  | 10-20%               | Trend analysis        | Rolling forecasts    |
| Random variation    | 20-30%               | MIV calculation       | Cannot eliminate     |

#### Multi-Level WAPE Tracking

Organizations should track WAPE at multiple levels:

| Level       | Calculation     | Target           | Review Frequency |
|-------------|-----------------|------------------|------------------|
| Interval    | 30-min segments | Information only | Real-time        |
| Daily       | Full day        | Primary goal     | Daily            |
| Weekly      | 7-day roll-up   | Trending         | Weekly           |
| Monthly     | Calendar month  | Strategic        | Monthly          |
| Queue-level | By service type | Comparison       | Weekly           |
| Enterprise  | All queues      | Executive        | Monthly          |

#### WAPE Best Practices

1.  '''Consistent Calculation\*\*
    - Always exclude intervals with zero actuals
    - Use same time periods for comparison
    - Document any calculation adjustments

<!-- -->

1.  '''Segmentation Analysis\*\*
    - Calculate separately for different day types
    - Segment by volume bands
    - Analyze patterns in high-error periods

<!-- -->

1.  '''Goal Setting\*\*
    - Base targets on queue size and volatility
    - Consider operational constraints
    - Allow for seasonal variation

<!-- -->

1.  '''Continuous Improvement\*\*
    - Weekly review of worst-performing periods
    - Root cause analysis for \>2σ errors
    - Model refinement based on error patterns

#### Common WAPE Pitfalls

| Pitfall                           | Impact                     | Prevention                    |
|-----------------------------------|----------------------------|-------------------------------|
| Including zero-volume periods     | Artificially inflated WAPE | Filter before calculation     |
| Comparing different time horizons | Misleading conclusions     | Standardize comparisons       |
| Ignoring MIV                      | Unrealistic targets        | Calculate and communicate MIV |
| Over-aggregation                  | Hidden interval issues     | Multi-level tracking          |
| Seasonal comparison               | Unfair assessment          | Year-over-year comparison     |

#### Integration with Other Metrics

WAPE should be reviewed alongside:

- **Schedule Quality Index (SQI)**: Poor WAPE limits achievable SQI
- **Service Level Achievement**: WAPE errors compound into service impacts
- **Occupancy Variance**: Forecast errors drive occupancy volatility
- **Overtime/VTO Usage**: WAPE directly correlates with schedule adjustments

#### Summary

WAPE provides the most balanced and appropriate measure of forecast accuracy for workforce management, avoiding the distortions inherent in other percentage-based metrics. By weighting errors proportionally to volume, WAPE gives organizations a true picture of forecast performance that directly relates to operational impact. Combined with Minimal Interval Variance analysis, WAPE enables realistic goal-setting and focused improvement efforts that acknowledge both controllable and uncontrollable sources of forecast error.

### Forecast Accuracy Goals: Call Volume

For decades, much has been published on mathematical methods geared toward time-series forecasting and forecast accuracy. Forecast accuracy has long been a concern of senior management, especially when missing either service level objectives or expense targets. "How accurate was our forecast?" has been heard by all WFM leaders, as if the lack of accuracy would provide an excuse (or scapegoat) for why contact center objectives were missed.

The new WFM standard maintains that forecast accuracy is important goal & metric to establish and leverage continuously. Only by reflecting on how accurate our forecasts are can we drive conversation and ask "why?" a model was off. The critical outcome behind leveraging forecast accuracy is to facilitate uncovering drivers behind any variable which can contribute to the overall completeness of our forecast.

This standard recommends establishing a forecast accuracy metric, at minimum on call volume, and incorporating some concepts in determining how to establish the metric. Questions to ask in establishing a forecast accuracy target:

- What is the <b>queue size</b> you are forecasting for? A queue that delivers 12 million calls annually will have a tighter forecast accuracy target than a queue delivering 1.2 million calls annually.
- What are your **hours of operation**? Contact centers which are open 8 hours a day, 5 days a week will have a tighter forecast accuracy target than the same call volume delivered over a 24-hour, 7 day a week operation.
- What type of **business drivers** can be exposed that **have predictable correlations**? In certain industries, call volumes can be closely tied with predictable events, such as a marketing mailer. Other industries may use subscriber data, policy holder data or other customer counts to correlate to a predictable inquiry rate. Furthermore, some industries have predictable contact rate with seasonality, such as the travel industry, but can suffer in forecast accuracy from non-predictable events, such as storms.
- What is your **historical track record** for forecast accuracy? While you may not be satisfied by simply trending average forecast accuracy and establishing this as a goal, it is useful to look at the performance of various forecasters in establishing or adjusting forecast accuracy goals.
- What **time horizons** do you wish to examine forecast accuracy, interval, daily, weekly, monthly, annually? Each time horizon should be monitored for accuracy, but you will likely want to establish a goal on one time horizon rather than many time horizons. Often, teams will focus on a **daily accuracy goal**, as WFM software cares for distributing the call volume down to the interval level.

This standard **does not recommend** following the often-publicized advice of **"+/-5 percent accuracy as the industry standard"**. No such standard exists, nor should it, given the wide range of variables contributing to any team's ability to forecast accurately, and the nature of variability across differing time horizons.

This standard does recommend queue size as the leading indicator for establishing your forecast accuracy goals, and further recommends leveraging the weighted absolute percentage error (WAPE) method for tracking forecast accuracy.

Examining the WAPE method, we presented a day where 2,952 calls were forecasted across a time horizon lasting from 8:00AM to 8:00PM:

` `![`Forecast_actual_error.jpg`](Forecast_actual_error.jpg "Forecast_actual_error.jpg")

In the above example, each absolute interval variance is calculated, with a weighted absolute percentage error of 5.98% total. When we compare the pure error rate for the day, we see we forecast 2953 against an actual of 3012, or -2.0%. Whether we think this is good or not begins at the interval level, and can be examined by using the following formula, which represents the **minimum absolute error rate:**

![Min abs error](Min_error_formula.jpg "Min abs error")When examining the table again and entering the minimum absolute % error rate, we have a more complete view of how this forecast performed:
![](Forecast_actual_error_min.jpg "Forecast_actual_error_min.jpg")
Using the formula to calculate the minimal absolute error rate, we get a sense of the degree of natural error that can not be "forecasted away" through any means. This is a natural intraday variance that can and should be expected when we establish goals and is discussed later in resilient capacity planning. The formula can easily be leveraged to plot a minimum interval variance rate based on the call volume forecasted for any interval.
![](Min-error-rate-curve.jpg "Min-error-rate-curve.jpg")
This provides simple logic to debunk the fact that there could be a unified "industry standard" behind forecast accuracy – the minimal variance factor alone shows that this isn't practical given that queue groups vary in size and arrival patterns fluctuate.

### Schedule Quality Index Goals

Schedule Quality Index (SQI) allows a WFM organization to measure how tight agent schedules fit the forecast arrival pattern. The calculation can be leveraged as a goal, but it is important to this goal is balanced against the employee-first approach to the next generation WFM model.
![](Schedule_quality_index.jpg "Schedule_quality_index.jpg")

The SQI formula simply looks at the sum of the gaps between agents scheduled and agents required, and expressing those gaps as a % of how far our staffing is off from the forecasted required FTE by interval. The metric than takes 1 - % of gaps to calculate the metric, where 100% would represent an absolute perfect fit. By understanding the percentage gap, decisions can be made as to designing new tour patterns, conducting shift-bids, or ensuring proper automation techniques are in place to close these gaps. A sample calculation:

![](Schedule_quality_index_table.jpg "Schedule_quality_index_table.jpg")
Where **91.6% SQI =** 100% - (Absolute value (122.3/1454.7)

Like forecast accuracy, no industry standard target for this goal exists. Rather, the metric will vary depending on queue groups size, and as important, schedule policy for types of tours designed and shift-bidding principles. In the traditional WFM model, an organization would attempt to drive SQI higher by conducting shift bids and creating a variety of tour types to simulate schedule fit. In the future workforce management model, it is recommended that the goal be tracked, but that employee retention be dimensioned against tour design, and that automation be leveraged to close SQI gaps.

### Forecast Accuracy – Attrition / Retention Goal

The future WFM standard seeks to highlight the importance of predicting how many people will be staffed to service the needs of our customers. Be establishing either an employee attrition (or retention) goal, we highlight the importance of this variable. When a goal is set, and we highlight how good (or bad) we are at achieving that goal, we drive conversation and study of a wider range of people variables. Are we spending adequate time coaching and training employees? Are employees being over-worked? Are employees being regularly recognized? These questions sound like the domain of the contact center management, or perhaps HR, or your learning & development department. But workforce management teams are in a unique position; WFM teams forecast a wide range of variables, critical to ensuring we're set up for achieving financial and customer experience goals.

By taking the same processes leveraged to forecast other variables like call volume, handle time, shrinkage, and occupancy, the future WFM standard adds *forecasting* attrition/retention percentages and establishing a target goal for the accuracy of predicting this metric.

The method outlined in the future WFM model tracks weekly forecast vs. actual on staffing:

- Starting Staff
- Hires
- Exits
- Available Staff

… and compares the forecasted attrition % against the actual attrition percentage to generate a forecast attrition error %. On a weekly basis, this error rate would be calculated, and then annualized, and presented with the annualized forecasted attrition percentage, and actual attrition percentage:
![Forecast_attrition_example.jpg](/img/mediawiki/Forecast_attrition_example.jpg)***The section seeks further feedback and input from WFM community.***

***Share spreadsheet for calculation methodology & validation w/ community.***

------------------------------------------------------------------------

## Level 3 — Progressive (Variance Harvesting)

At Level 3 the operation stops fighting variance and starts harvesting it, with rules/automation and human‑AI collaboration. We maintain MTTR for intraday variance and add AAR, VCE, SCR, SLS, EEI.

### Mean Time to Respond/Repair for Intraday Variance

Real-time teams generally leverage "response rates" to intraday incidents or action submitted for execution. Mean Time to Repair is a traditional metric leveraged in command center environments which seek to measure how quickly teams fix or respond to a scenario where a service or system is down or degraded. Having a goal for turn-around time with a real-time team is useful to set expectations and prioritizations with the team members responding to issues. It is also effective in communicating with stakeholder customers and demonstrating how well the real-time team is performing against service level agreements in place.

MTTR results are normally dimensioned against service level agreements, which may have levels of severity to set expectations:
![](Mttr_example.jpg "Mttr_example.jpg")
Within the WFM process section, we will examine how automations can be leveraged to remove the need for real-time teams to respond/repair types of events. In adopting automation techniques for responding, overall goals established for MTTR may require review.

### Automation Acceptance Rate (AAR) Goal

Automation Acceptance Rate measures the critical human element in workforce automation success - the willingness of agents to accept and act upon system-generated prompts. This metric bridges the gap between technological capability and operational reality, quantifying trust, adoption, and the effectiveness of human-AI collaboration in the contact center environment.

#### Core Definition

Automation Acceptance Rate is calculated as:

$\text{AAR} = \frac{\text{Number of accepted prompts}}{\text{Total number of prompts offered}} \times 100\%$

Where:

- **Accepted prompts** = Automation suggestions acted upon by agents within the action window
- **Total prompts** = All automation suggestions presented to agents
- **Action window** = Time limit for response (typically 30-180 seconds depending on prompt type)

#### Prompt Categories and Acceptance Dynamics

##### Prompt Type Classification

| Prompt Category        | Description                                 | Typical Action Window | Baseline AAR | Target AAR |
|------------------------|---------------------------------------------|-----------------------|--------------|------------|
| **Training Delivery**  | Micro-learning modules during low occupancy | 60-180 seconds        | 70-75%       | 85-90%     |
| **Break Adjustment**   | Shift break timing forward/backward         | 30-60 seconds         | 65-70%       | 85%+       |
| **Coaching Session**   | Scheduled or opportunistic coaching         | 120 seconds           | 60-65%       | 80-85%     |
| **Voluntary Time Off** | VTO offers during overstaffing              | 90 seconds            | 40-50%       | 60-70%     |
| **Overtime Request**   | VOT offers during understaffing             | 120 seconds           | 35-45%       | 55-65%     |
| **Task Assignment**    | Back-office or project work                 | 60 seconds            | 75-80%       | 90%+       |
| **Skill Activation**   | Cross-skill routing enablement              | 45 seconds            | 55-60%       | 75-80%     |
| **After-Call Work**    | Extended ACW for complex issues             | 30 seconds            | 80-85%       | 95%+       |

#### Detailed Calculation Methodology

##### Acceptance Rate Components

The comprehensive AAR calculation includes timing and context factors:

$\text{Weighted AAR} = \sum_{i=1}^{n} \left( \text{AAR}_i \times \text{Volume}_i \times \text{Value}_i \right) / \sum_{i=1}^{n} \left( \text{Volume}_i \times \text{Value}_i \right)$

Where:

- **AAR<sub>i</sub>** = Acceptance rate for prompt type i
- **Volume<sub>i</sub>** = Number of prompts of type i
- **Value<sub>i</sub>** = Business value weight of prompt type i

##### Trust Equation Impact on AAR

AAR correlates directly with the trust equation:

$\text{Expected AAR} = \text{Base AAR} \times \left( 1 + \frac{\text{Transparency} + \text{Benefit} + \text{Control} - \text{Risk}}{100} \right)$

#### AAR Segmentation Analysis

##### By Agent Tenure

<table>
<thead>
<tr class="header">
<th><p>Tenure Band</p></th>
<th><p>Typical AAR</p></th>
<th><p>Trust Factors</p></th>
<th><p>Improvement Strategies</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>0-3 months</p></td>
<td><p>45-55%</p></td>
<td><p>• Low system familiarity<br />
• High cognitive load<br />
• Fear of mistakes</p></td>
<td><p>• Extended action windows<br />
• Simplified prompts<br />
• Supervisor reinforcement</p></td>
</tr>
<tr class="even">
<td><p>3-12 months</p></td>
<td><p>60-70%</p></td>
<td><p>• Growing confidence<br />
• Some negative experiences<br />
• Developing preferences</p></td>
<td><p>• Personalization options<br />
• Success feedback<br />
• Peer champions</p></td>
</tr>
<tr class="odd">
<td><p>1-2 years</p></td>
<td><p>70-80%</p></td>
<td><p>• System trust established<br />
• Routine acceptance<br />
• Efficiency focus</p></td>
<td><p>• Advanced features<br />
• Preference learning<br />
• Autonomy settings</p></td>
</tr>
<tr class="even">
<td><p>2+ years</p></td>
<td><p>75-85%</p></td>
<td><p>• Full system adoption<br />
• Selective acceptance<br />
• Mentorship role</p></td>
<td><p>• Customization control<br />
• Beta features<br />
• Influence on design</p></td>
</tr>
</tbody>
</table>

##### By Time of Day

| Time Period             | AAR Range | Influencing Factors        | Optimization Tactics      |
|-------------------------|-----------|----------------------------|---------------------------|
| Opening (First 2 hours) | 70-80%    | Fresh energy, lower volume | Skill development prompts |
| Mid-Morning Peak        | 55-65%    | High occupancy, stress     | Critical prompts only     |
| Lunch Period            | 75-85%    | Rotating coverage          | Break coordination focus  |
| Afternoon               | 60-70%    | Fatigue setting in         | Energizing activities     |
| Closing                 | 50-60%    | End-of-day mindset         | VTO, administrative tasks |

##### By Prompt Complexity

$\text{AAR}_{\text{complexity}} = \text{Base AAR} \times e^{-\lambda \times \text{Complexity Score}}$

Where λ = complexity decay factor (typically 0.15-0.25)

#### Setting AAR Goals

##### Progressive Target Framework

<table>
<thead>
<tr class="header">
<th><p>Implementation Phase</p></th>
<th><p>Duration</p></th>
<th><p>Overall AAR Target</p></th>
<th><p>Focus Areas</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>Pilot</strong></p></td>
<td><p>Months 1-3</p></td>
<td><p>40-50%</p></td>
<td><p>• High-value prompts only<br />
• Volunteer agents<br />
• Extensive feedback loops</p></td>
</tr>
<tr class="even">
<td><p><strong>Rollout</strong></p></td>
<td><p>Months 4-9</p></td>
<td><p>55-65%</p></td>
<td><p>• Expand prompt types<br />
• All agent inclusion<br />
• Trust building campaigns</p></td>
</tr>
<tr class="odd">
<td><p><strong>Optimization</strong></p></td>
<td><p>Months 10-15</p></td>
<td><p>70-75%</p></td>
<td><p>• Personalization<br />
• Advanced features<br />
• Continuous improvement</p></td>
</tr>
<tr class="even">
<td><p><strong>Maturity</strong></p></td>
<td><p>Months 16+</p></td>
<td><p>80-85%</p></td>
<td><p>• Autonomous adjustments<br />
• Agent-configured rules<br />
• Predictive preferences</p></td>
</tr>
</tbody>
</table>

##### Context-Specific AAR Targets

| Operational Context       | Minimum AAR | Standard Target | Stretch Goal | Key Success Factors            |
|---------------------------|-------------|-----------------|--------------|--------------------------------|
| High-volume, simple tasks | 70%         | 80%             | 90%          | Clear value, quick wins        |
| Complex, multi-skill      | 60%         | 70%             | 80%          | Gradual introduction, training |
| Sales/Revenue focused     | 65%         | 75%             | 85%          | Incentive alignment            |
| Technical support         | 55%         | 65%             | 75%          | Context preservation           |
| Regulated industries      | 75%         | 85%             | 95%          | Compliance emphasis            |

#### AAR Value Quantification

##### Direct Value Calculation

$\text{AAR Value} = \sum_{i} \left( \text{Prompts}_i \times \text{AAR}_i \times \text{Value per Action}_i \right)$

Example for 1000-agent center:

| Prompt Type                  | Daily Volume | AAR | Accepted | Value per Action | Daily Value     |
|------------------------------|--------------|-----|----------|------------------|-----------------|
| Training Modules             | 500          | 85% | 425      | \$15             | \$6,375         |
| Break Optimization           | 2,000        | 80% | 1,600    | \$3              | \$4,800         |
| Coaching Sessions            | 200          | 75% | 150      | \$25             | \$3,750         |
| VTO Offers                   | 100          | 60% | 60       | \$30             | \$1,800         |
| Task Routing                 | 800          | 90% | 720      | \$8              | \$5,760         |
| **Daily Total:**             |              |     |          |                  | **\$22,485**    |
| **Annual Value (250 days):** |              |     |          |                  | **\$5,621,250** |

##### Indirect Value Multiplication

AAR creates compound value through:

- **Service Level Impact**: Each 10% AAR increase → 2-3% SL improvement
- **Attrition Reduction**: High AAR (\>80%) correlates with 15-20% lower attrition
- **Occupancy Optimization**: Effective AAR enables 5-7% occupancy increase
- **Training Effectiveness**: 85%+ AAR → 3.6x training delivery increase

#### Trust Building Framework

##### Trust Component Analysis

<table>
<thead>
<tr class="header">
<th><p>Trust Component</p></th>
<th><p>Current State Assessment</p></th>
<th><p>Improvement Initiatives</p></th>
<th><p>Expected AAR Lift</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>Transparency</strong></p></td>
<td><p>• Explain prompt reasoning<br />
• Show value created<br />
• Share success metrics</p></td>
<td><p>• In-prompt explanations<br />
• Weekly value reports<br />
• Peer success stories</p></td>
<td><p>+10-15%</p></td>
</tr>
<tr class="even">
<td><p><strong>Benefit</strong></p></td>
<td><p>• Track personal gains<br />
• Highlight time saved<br />
• Show skill growth</p></td>
<td><p>• Personal dashboards<br />
• Gamification elements<br />
• Development tracking</p></td>
<td><p>+15-20%</p></td>
</tr>
<tr class="odd">
<td><p><strong>Control</strong></p></td>
<td><p>• Preference settings<br />
• Snooze options<br />
• Feedback mechanisms</p></td>
<td><p>• Customization UI<br />
• Smart timing<br />
• One-click feedback</p></td>
<td><p>+12-18%</p></td>
</tr>
<tr class="even">
<td><p><strong>Risk Mitigation</strong></p></td>
<td><p>• No adherence penalty<br />
• Supervisor support<br />
• Error protection</p></td>
<td><p>• Safe-to-fail culture<br />
• Clear policies<br />
• Undo capabilities</p></td>
<td><p>+8-12%</p></td>
</tr>
</tbody>
</table>

#### AAR Diagnostic Framework

##### Root Cause Analysis for Low AAR

<table>
<thead>
<tr class="header">
<th><p>AAR Range</p></th>
<th><p>Likely Causes</p></th>
<th><p>Diagnostic Questions</p></th>
<th><p>Remediation Strategies</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>&lt;40%</p></td>
<td><p>System distrust</p></td>
<td><p>• Recent negative events?<br />
• Communication gaps?<br />
• Policy conflicts?</p></td>
<td><p>• Trust reset campaign<br />
• Leadership involvement<br />
• Policy alignment</p></td>
</tr>
<tr class="even">
<td><p>40-60%</p></td>
<td><p>Usability issues</p></td>
<td><p>• Timing problems?<br />
• Interface confusion?<br />
• Content relevance?</p></td>
<td><p>• UX optimization<br />
• Timing adjustments<br />
• Content curation</p></td>
</tr>
<tr class="odd">
<td><p>60-75%</p></td>
<td><p>Engagement barriers</p></td>
<td><p>• Incentive misalignment?<br />
• Competing priorities?<br />
• Change fatigue?</p></td>
<td><p>• Incentive review<br />
• Priority clarification<br />
• Pace modulation</p></td>
</tr>
<tr class="even">
<td><p>75-85%</p></td>
<td><p>Optimization opportunities</p></td>
<td><p>• Personalization gaps?<br />
• Edge cases?<br />
• Advanced features?</p></td>
<td><p>• ML personalization<br />
• Exception handling<br />
• Feature rollout</p></td>
</tr>
</tbody>
</table>

#### Implementation Requirements

##### Technical Architecture

1.  **Prompt Generation Engine**
    - Rule-based triggers
    - ML-driven predictions
    - Context awareness algorithms
    - Priority queuing system

<!-- -->

1.  **Delivery Mechanisms**
    - Desktop notifications
    - Mobile app integration
    - Screen pop-ups
    - Audio/visual alerts

<!-- -->

1.  **Response Tracking**
    - Acceptance logging
    - Response time capture
    - Reason code collection
    - Outcome measurement

<!-- -->

1.  **Analytics Platform**
    - Real-time AAR monitoring
    - Segmentation analysis
    - Predictive modeling
    - A/B testing framework

##### Organizational Requirements

- **Policies**: No-penalty period, opt-in/opt-out rights, feedback loops
- **Communication**: Launch campaign, success stories, continuous updates
- **Training**: System orientation, value demonstration, preference setting
- **Support**: Dedicated help desk, peer champions, supervisor coaching

#### AAR Improvement Roadmap

<table>
<thead>
<tr class="header">
<th><p>Month</p></th>
<th><p>Focus</p></th>
<th><p>Key Actions</p></th>
<th><p>Target AAR</p></th>
<th><p>Success Metrics</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1-2</p></td>
<td><p>Foundation</p></td>
<td><p>• Agent communication<br />
• System setup<br />
• Baseline measurement</p></td>
<td><p>35-45%</p></td>
<td><p>Participation rate &gt;80%</p></td>
</tr>
<tr class="even">
<td><p>3-4</p></td>
<td><p>Trust Building</p></td>
<td><p>• Quick wins<br />
• Feedback incorporation<br />
• Success celebration</p></td>
<td><p>50-60%</p></td>
<td><p>NPS &gt;40</p></td>
</tr>
<tr class="odd">
<td><p>5-6</p></td>
<td><p>Expansion</p></td>
<td><p>• Prompt variety<br />
• Personalization<br />
• Advanced features</p></td>
<td><p>65-70%</p></td>
<td><p>Value delivery &gt;$2M</p></td>
</tr>
<tr class="even">
<td><p>7-9</p></td>
<td><p>Optimization</p></td>
<td><p>• ML enhancement<br />
• Predictive timing<br />
• Preference learning</p></td>
<td><p>75-80%</p></td>
<td><p>Attrition reduction 10%</p></td>
</tr>
<tr class="odd">
<td><p>10-12</p></td>
<td><p>Maturity</p></td>
<td><p>• Autonomous operation<br />
• Agent configuration<br />
• Continuous evolution</p></td>
<td><p>80-85%</p></td>
<td><p>ROI &gt;300%</p></td>
</tr>
</tbody>
</table>

#### AAR Monitoring Dashboard

| Metric                    | Current Hour | Today  | Week   | Month  | Trend |
|---------------------------|--------------|--------|--------|--------|-------|
| Overall AAR               | 82.3%        | 79.8%  | 78.5%  | 77.2%  | ↑     |
| Training AAR              | 88.5%        | 86.2%  | 85.1%  | 84.3%  | ✓     |
| Break AAR                 | 79.1%        | 78.4%  | 77.9%  | 76.8%  | →     |
| VTO AAR                   | 61.2%        | 58.7%  | 57.3%  | 55.9%  | ↓     |
| New Agent AAR (\<90 days) | 68.4%        | 65.2%  | 63.8%  | 62.1%  | →     |
| Trust Score               | 74/100       | 73/100 | 72/100 | 71/100 | ↑     |

#### Relationship to Other Metrics

AAR acts as a leading indicator and enabler for multiple goals:

- **VCE Achievement**: AAR × Variance Windows = Harvested Activities
- **OVF Realization**: High AAR enables flexible cost strategies
- **Service Level**: Automated adjustments require acceptance to impact SL
- **Employee Satisfaction**: AAR \>80% correlates with +15 point eNPS
- **Training Completion**: AAR directly drives completion rates
- **Attrition Prevention**: Trust (via AAR) reduces turnover by 20-30%

#### Common AAR Pitfalls and Prevention

| Pitfall                              | Impact                   | Prevention Strategy                 |
|--------------------------------------|--------------------------|-------------------------------------|
| Forcing acceptance through penalties | -40% AAR, trust collapse | Positive reinforcement only         |
| Too many prompts too fast            | -25% AAR, alert fatigue  | Graduated rollout, smart throttling |
| Poor timing algorithms               | -30% AAR, disruption     | ML-based timing optimization        |
| Lack of value communication          | -20% AAR, low engagement | Continuous value storytelling       |
| Ignoring agent feedback              | -35% AAR, resistance     | Rapid iteration cycles              |

#### Summary

Automation Acceptance Rate serves as the critical bridge between workforce management technology and human adoption. By establishing AAR as a formal goal, organizations:

- Build trust in human-AI collaboration systems
- Enable variance harvesting through willing participation
- Create sustainable automation adoption patterns
- Measure and improve the human side of digital transformation
- Generate millions in value through accepted automations

AAR represents the human trust factor that determines whether theoretical automation capabilities become operational reality, making it essential for successful workforce transformation in the Collaborative Intelligence Era. Without strong AAR, even the most sophisticated automation systems fail to deliver value, as success ultimately depends on human acceptance and participation.

### Variance Capture Efficiency (VCE) Goal

Variance Capture Efficiency represents a transformative goal metric that quantifies how effectively an organization converts operational variance from a liability into productive value. This metric operationalizes the variance concepts established in {{< wikilink "probability-variance-goals" "Probability & Variance Goals" >}} by measuring the actual harvesting of available capacity fluctuations.

#### Core Definition

Variance Capture Efficiency is calculated as:

$\text{VCE} = \frac{\sum \text{Minutes of harvested activities}}{\sum \text{Minutes of available variance}} \times 100\%$

Where:

- **Harvested activities** = Productive work completed during variance windows (training, coaching, quality reviews, process improvements)
- **Available variance** = Positive staffing variance when actual staff exceeds required staff

#### Detailed Component Breakdown

##### Available Variance Calculation

Available variance per interval is determined by:

$\text{Available Variance}_i = \max(0, \text{Staffed}_i - \text{Required}_i) \times \text{Interval Minutes}$

Adjusted for occupancy bands:
$\text{Adjusted Variance}_i = \max(0, \text{Staffed}_i - \text{Required}_i) \times \text{Interval Minutes} \times \text{Occupancy Factor}$

Where Occupancy Factor = (Target Occupancy - Current Occupancy) / Target Occupancy

##### Harvested Activities Categories

| Activity Type         | Priority | Typical Duration | Value Multiplier |
|-----------------------|----------|------------------|------------------|
| Compliance Training   | 1        | 15-30 min        | 1.5x             |
| Skills Development    | 2        | 20-45 min        | 1.3x             |
| Quality Coaching      | 3        | 10-20 min        | 1.2x             |
| Process Documentation | 4        | 15-60 min        | 1.1x             |
| Peer Mentoring        | 5        | 10-30 min        | 1.0x             |
| Administrative Tasks  | 6        | 5-15 min         | 0.8x             |

#### Calculation Methodology

##### Step-by-Step VCE Calculation

1.  **Identify Variance Windows**: Calculate staffed vs required for each interval
2.  **Quantify Available Minutes**: Sum positive variance across time period
3.  **Track Harvested Activities**: Log all productive work delivered during variance
4.  **Apply Value Weighting**: Weight activities by priority/value
5.  **Calculate Efficiency**: Divide harvested by available

##### Sample Daily Calculation

| Interval       | Staffed | Required | Variance | Available Minutes | Harvested | Activity Type     |
|----------------|---------|----------|----------|-------------------|-----------|-------------------|
| 08:00-08:30    | 52      | 48       | +4       | 120               | 90        | Training modules  |
| 09:00-09:30    | 55      | 54       | +1       | 30                | 20        | Quality review    |
| 10:00-10:30    | 58      | 58       | 0        | 0                 | 0         | \-                |
| 11:00-11:30    | 54      | 51       | +3       | 90                | 75        | Coaching sessions |
| 13:00-13:30    | 50      | 45       | +5       | 150               | 120       | Skills training   |
| 14:00-14:30    | 48      | 47       | +1       | 30                | 15        | Documentation     |
| **Totals:**    |         |          |          | **420**           | **320**   |                   |
| **Daily VCE:** |         |          |          |                   |           | **76.2%**         |

#### VCE Maturity Levels

Organizations progress through distinct VCE maturity stages:

<table>
<thead>
<tr class="header">
<th><p>Maturity Level</p></th>
<th><p>VCE Range</p></th>
<th><p>Characteristics</p></th>
<th><p>Enabling Technologies</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>Reactive</strong></p></td>
<td><p>0-15%</p></td>
<td><p>• Manual variance identification<br />
• Ad-hoc activity assignment<br />
• No systematic tracking</p></td>
<td><p>Spreadsheets, manual logs</p></td>
</tr>
<tr class="even">
<td><p><strong>Managed</strong></p></td>
<td><p>15-30%</p></td>
<td><p>• Daily variance review<br />
• Pre-planned activity lists<br />
• Basic tracking metrics</p></td>
<td><p>WFM software, basic reporting</p></td>
</tr>
<tr class="odd">
<td><p><strong>Progressive</strong></p></td>
<td><p>30-45%</p></td>
<td><p>• Real-time variance monitoring<br />
• Automated activity queuing<br />
• Prioritized delivery</p></td>
<td><p>Real-time adherence, LMS integration</p></td>
</tr>
<tr class="even">
<td><p><strong>Advanced</strong></p></td>
<td><p>45-60%</p></td>
<td><p>• Predictive variance modeling<br />
• Dynamic activity routing<br />
• Personalized development paths</p></td>
<td><p>AI-powered automation, predictive analytics</p></td>
</tr>
<tr class="odd">
<td><p><strong>Optimized</strong></p></td>
<td><p>60%+</p></td>
<td><p>• Autonomous variance harvesting<br />
• Continuous micro-learning<br />
• Closed-loop optimization</p></td>
<td><p>ML-driven orchestration, adaptive systems</p></td>
</tr>
</tbody>
</table>

#### Setting VCE Goals

VCE targets should reflect organizational maturity and operational characteristics:

##### Baseline Assessment Factors

1.  **Current State Analysis**
    - Historical unutilized time percentage
    - Existing training completion rates
    - Coaching delivery frequency
    - Administrative task backlog

<!-- -->

1.  **Operational Characteristics**
    - Average interval variance volatility
    - Scheduling flexibility policies
    - Multi-skill coverage depth
    - Real-time management capabilities

##### Recommended VCE Targets by Context

| Operational Context            | Year 1 Target | Year 2 Target | Year 3 Target | Stretch Goal |
|--------------------------------|---------------|---------------|---------------|--------------|
| Single-skill, stable demand    | 20-25%        | 30-35%        | 40-45%        | 50%+         |
| Multi-skill, moderate variance | 25-30%        | 35-40%        | 45-50%        | 55%+         |
| Omnichannel, high variance     | 30-35%        | 40-45%        | 50-55%        | 60%+         |
| Blended work, dynamic routing  | 35-40%        | 45-50%        | 55-60%        | 65%+         |

#### VCE Value Quantification

##### Financial Impact Formula

$\text{VCE Value} = \text{Harvested Minutes} \times \text{Hourly Rate} \times \text{Activity ROI Factor}$

Where Activity ROI Factors are:

- **Training delivery**: 3.6x (productivity gains + reduced rework)
- **Coaching sessions**: 2.8x (quality improvements + retention)
- **Process improvement**: 2.2x (efficiency gains)
- **Administrative completion**: 1.5x (compliance + reduced backlog)

##### Example Annual Value Calculation

For a 1000-agent operation achieving 45% VCE:

| Component               | Calculation                            | Annual Value     |
|-------------------------|----------------------------------------|------------------|
| Available variance      | 1000 agents × 2.5 hours/day × 250 days | 625,000 hours    |
| Harvested @ 45% VCE     | 625,000 × 0.45                         | 281,250 hours    |
| Weighted activity value | 281,250 × \$25/hour × 2.5 ROI          | \$17,578,125     |
| Less: Delivery costs    | 281,250 × \$25/hour × 0.3              | \$(2,109,375)    |
| **Net VCE Value**       |                                        | **\$15,468,750** |

#### Measurement Framework

##### Key Performance Indicators

| KPI                          | Formula                                 | Target    | Frequency |
|------------------------------|-----------------------------------------|-----------|-----------|
| Overall VCE                  | Harvested / Available × 100%            | Per goals | Daily     |
| Activity Mix Quality         | High-value activities / Total harvested | \>60%     | Weekly    |
| Variance Prediction Accuracy | Predicted variance / Actual variance    | 85%+      | Weekly    |
| Harvest Execution Rate       | Executed activities / Queued activities | 90%+      | Daily     |
| Agent Participation Rate     | Participating agents / Available agents | 95%+      | Daily     |

##### Diagnostic Metrics

- **Variance Loss Analysis**: Reasons for unharvested variance
- **Activity Completion Rates**: % of started activities completed
- **Time-to-Harvest**: Lag between variance identification and harvest
- **Agent Preference Match**: Harvested activities matching development plans

#### Integration with Automation

VCE achievement directly correlates with automation maturity:

$\text{Achievable VCE} = \text{Base VCE} \times (1 + \text{Automation Factor})$

Where Automation Factors are:

- **Manual processes only**: 1.0x
- **Basic WFM tools**: 1.3x
- **Real-time adherence**: 1.6x
- **Dynamic automation**: 2.0x
- **AI orchestration**: 2.5x

#### Relationship to Other Goals

VCE creates synergies with established metrics:

- **Schedule Quality Index**: Higher SQI creates more predictable variance windows
- **Forecast Accuracy**: Better forecasts enable variance prediction
- **Attrition Reduction**: Development opportunities from VCE improve retention
- **Option Value of Flexibility**: VCE is the mechanism that captures OVF
- **Service Level Stability**: Variance harvesting smooths interval performance

#### Implementation Requirements

##### Technical Infrastructure

1.  **Variance Detection**
    - Real-time staffing vs. required calculation
    - Predictive variance modeling
    - Multi-horizon visibility (15-min to daily)

<!-- -->

1.  **Activity Management**
    - Dynamic activity queue/backlog
    - Personalized learning paths
    - Priority-based routing algorithms

<!-- -->

1.  **Delivery Mechanisms**
    - Push notifications to agents
    - Automated session launching
    - Progress tracking and reporting

<!-- -->

1.  **Measurement Systems**
    - Automated harvest tracking
    - Value attribution models
    - ROI calculation engines

##### Organizational Enablers

- **Policies**: Flexible adherence, micro-training approval, dynamic scheduling
- **Culture**: Continuous learning mindset, variance as opportunity
- **Leadership**: Supervisor coaching on variance harvesting
- **Technology**: LMS integration, real-time WFM, automation platform

#### VCE Improvement Roadmap

<table>
<thead>
<tr class="header">
<th><p>Quarter</p></th>
<th><p>Focus Area</p></th>
<th><p>Key Initiatives</p></th>
<th><p>Expected VCE Lift</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>Q1</p></td>
<td><p>Foundation</p></td>
<td><p>• Variance measurement<br />
• Activity inventory<br />
• Baseline establishment</p></td>
<td><p>+5-10%</p></td>
</tr>
<tr class="even">
<td><p>Q2</p></td>
<td><p>Process</p></td>
<td><p>• Harvest procedures<br />
• Queue management<br />
• Basic automation</p></td>
<td><p>+8-12%</p></td>
</tr>
<tr class="odd">
<td><p>Q3</p></td>
<td><p>Technology</p></td>
<td><p>• Real-time integration<br />
• Automated routing<br />
• Analytics platform</p></td>
<td><p>+10-15%</p></td>
</tr>
<tr class="even">
<td><p>Q4</p></td>
<td><p>Optimization</p></td>
<td><p>• AI enhancement<br />
• Predictive models<br />
• Closed-loop learning</p></td>
<td><p>+12-18%</p></td>
</tr>
</tbody>
</table>

#### Example VCE Dashboard

| Metric             | Today | MTD    | Target | Trend |
|--------------------|-------|--------|--------|-------|
| VCE %              | 47.3% | 45.8%  | 45.0%  | ↑     |
| Variance Hours     | 1,247 | 28,451 | 30,000 | →     |
| Harvested Hours    | 590   | 13,031 | 13,500 | ↑     |
| Training Delivered | 342   | 7,218  | 7,000  | ✓     |
| Coaching Sessions  | 127   | 2,847  | 3,000  | →     |
| Participation Rate | 94%   | 92%    | 95%    | →     |

#### Common VCE Barriers and Solutions

| Barrier                  | Impact   | Solution                                            |
|--------------------------|----------|-----------------------------------------------------|
| Rigid adherence policies | -20% VCE | Implement dynamic adherence with protection windows |
| Lack of ready content    | -15% VCE | Build modular micro-learning library                |
| Manual identification    | -25% VCE | Deploy real-time variance detection                 |
| No prioritization        | -10% VCE | Create value-weighted activity queue                |
| Supervisor resistance    | -30% VCE | Education on ROI + automated execution              |

#### Summary

Variance Capture Efficiency transforms the traditional view of overstaffing from waste to opportunity. By establishing VCE as a formal goal, organizations:

- Convert 40-60% of idle time into productive development
- Generate millions in value from existing resources
- Improve employee engagement through continuous learning
- Build resilience through enhanced workforce capabilities
- Create measurable ROI from workforce flexibility

VCE represents the operational mechanism through which theoretical flexibility becomes practical value, making it essential for achieving the full benefits of adaptive workforce management in the Collaborative Intelligence Era.

### Employee Experience Index (EEI) Goal

The Employee Experience Index represents a paradigm shift from annual employee surveys to dynamic wellbeing measurement that reads as continuously as Customer Experience metrics. This composite metric quantifies the lived experience of agents through observable behaviors and system interactions, enabling real-time intervention and sustainable workforce transformation in the Collaborative Intelligence Era.

#### Core Definition

Employee Experience Index is calculated as:

$\text{EEI} = \sum_{j=1}^{5} w_j \cdot \text{Component}_j$

Where:

- **w<sub>j</sub>** = Weight for component j (locally calibrated, summing to 1.0)
- **Component<sub>j</sub>** = Normalized score (0-100) for each of five experience dimensions

The five core components measure:

1.  **Schedule Control** - Autonomy over work timing and flexibility
2.  **Development Cadence** - Frequency and quality of growth opportunities
3.  **Stress Signals** - Inverse indicators of burnout and pressure
4.  **Growth Velocity** - Rate of capability expansion
5.  **Engagement Markers** - Voluntary participation and discretionary effort

#### Detailed Component Breakdown

##### 1. Schedule Control (Typical weight: 0.25)

Measures perceived and actual autonomy over work schedule:

| Sub-metric         | Measurement                          | Weight | Target Range   |
|--------------------|--------------------------------------|--------|----------------|
| Schedule Lead Time | Days advance notice for shifts       | 30%    | 14-21 days     |
| Change Flexibility | % shift change requests approved     | 25%    | 80-95%         |
| Preference Match   | % shifts matching stated preferences | 25%    | 70-85%         |
| VTO/Swap Access    | Availability of voluntary options    | 20%    | Daily offering |

**Calculation:**
$\text{Schedule Control} = \frac{\text{Lead Time Score} + \text{Flexibility Score} + \text{Preference Score} + \text{Options Score}}{4}$

##### 2. Development Cadence (Typical weight: 0.20)

Tracks delivery of growth opportunities:

| Element                | Frequency Target | Points             | Max Score |
|------------------------|------------------|--------------------|-----------|
| Micro-learning modules | Daily            | 2 pts/module       | 40        |
| Coaching touchpoints   | Weekly           | 10 pts/session     | 40        |
| Skills certification   | Monthly          | 15 pts/cert        | 15        |
| Career conversations   | Quarterly        | 5 pts/conversation | 5         |

**Formula:**
$\text{Development Cadence} = \min\left(100, \sum \text{Activity Points} \times \text{Completion Rate}\right)$

##### 3. Stress Signals (Typical weight: 0.20)

Inverse metric capturing burnout indicators:
$\text{Stress Signals} = 100 - \text{Stress Index}$

Where Stress Index includes:

- **Adherence pressure**: Exceptions, warnings, corrections (40%)
- **Escalation exposure**: Difficult customer interactions (25%)
- **Schedule volatility**: Last-minute changes, mandatory OT (20%)
- **System friction**: Tool failures, process blocks (15%)

##### 4. Growth Velocity (Typical weight: 0.20)

Measures capability expansion rate:
$\text{Growth Velocity} = \frac{\Delta \text{Skills} + \Delta \text{Performance} + \Delta \text{Responsibility}}{Time} \times 100$

Components:

- **Skills acquired**: New queues, channels, specializations
- **Performance gains**: AHT improvement, quality scores, FCR lift
- **Responsibility growth**: Mentoring, special projects, tier progression

##### 5. Engagement Markers (Typical weight: 0.15)

Voluntary participation indicators:

| Behavior                | Measurement                   | Value Weight |
|-------------------------|-------------------------------|--------------|
| Automation acceptance   | AAR above baseline            | 25%          |
| Peer assistance         | Help tickets created/resolved | 20%          |
| Idea submission         | Suggestions implemented       | 20%          |
| Community participation | Forums, events, groups        | 20%          |
| Recognition given       | Kudos, nominations            | 15%          |

#### Implementation Maturity Framework

##### EEI Evolution by Level

| Maturity Level | EEI Implementation    | Update Frequency | Use Cases               |
|----------------|-----------------------|------------------|-------------------------|
| **Level 1-2**  | Annual survey proxy   | Quarterly        | Baseline only           |
| **Level 3**    | 5-component composite | Weekly           | Trend analysis, alerts  |
| **Level 4**    | Predictive EEI        | Daily            | Proactive intervention  |
| **Level 5**    | Individual EEI        | Real-time        | Personalized experience |

##### Progressive Implementation Path

**Quarter 1: Foundation**

- Establish data sources for each component
- Define local weightings through stakeholder input
- Create baseline measurements
- Expected EEI: 45-55

**Quarter 2: Automation**

- Automate data collection
- Build dashboard visualizations
- Set alert thresholds
- Expected EEI: 50-60

**Quarter 3: Action**

- Link EEI drops to intervention protocols
- Create manager playbooks
- Implement improvement pilots
- Expected EEI: 55-65

**Quarter 4: Optimization**

- Machine learning for prediction
- Personalized interventions
- Closed-loop improvement
- Expected EEI: 65-75

#### Setting EEI Goals

##### Target Setting Framework

| Industry Context        | Baseline EEI | Year 1 Target | Year 2 Target | Best-in-Class |
|-------------------------|--------------|---------------|---------------|---------------|
| High-complexity support | 40-45        | 55-60         | 65-70         | 75+           |
| Transactional service   | 45-50        | 60-65         | 70-75         | 80+           |
| Sales/Revenue           | 50-55        | 65-70         | 75-80         | 85+           |
| Blended/Omnichannel     | 45-50        | 60-65         | 70-75         | 80+           |

##### Component-Specific Targets

Rather than single EEI target, set component goals:

- **Schedule Control**: Minimum 65, target 75+
- **Development Cadence**: Minimum 60, target 80+
- **Stress Signals**: Maximum 30 stress index (70+ score)
- **Growth Velocity**: Minimum 15% annual capability growth
- **Engagement**: Minimum 50% voluntary participation

#### Simplified Alternative: Employee Wellbeing Index (EWI)

For organizations with limited data availability, use the simplified EWI:

$\text{EWI} = 0.4 \cdot \text{SchedStability} + 0.3 \cdot \text{GrowthDelivered} + 0.3 \cdot (1 - \text{BurnoutRisk})$

Where:

- **SchedStability** = Consistency of schedules week-to-week (0-100)
- **GrowthDelivered** = Actual development hours vs promised (0-100)
- **BurnoutRisk** = Composite of overtime, adherence pressure, escalation exposure (0-100)

EWI provides 80% of EEI insight with 40% of the data requirements.

#### Measurement Framework

##### Real-Time Monitoring Dashboard

| Metric              | Current | 7-Day Avg | 30-Day Avg | Target | Alert  |
|---------------------|---------|-----------|------------|--------|--------|
| Overall EEI         | 67.3    | 65.8      | 64.2       | 70.0   | Watch  |
| Schedule Control    | 72.1    | 71.5      | 70.8       | 75.0   | Stable |
| Development Cadence | 68.4    | 66.2      | 63.7       | 80.0   | Action |
| Stress Signals      | 61.2    | 59.8      | 58.3       | 70.0   | Action |
| Growth Velocity     | 71.5    | 70.1      | 69.4       | 65.0   | Good   |
| Engagement          | 64.8    | 63.2      | 62.1       | 65.0   | Watch  |

##### Segmentation Analysis

Critical to segment EEI by:

- **Tenure**: New (\<90 days), Developing (3-12 months), Experienced (1-2 years), Veteran (2+ years)
- **Shift**: Day, Evening, Night, Weekend
- **Channel**: Voice, Chat, Email, Blended
- **Performance Tier**: Top, Middle, Bottom quartile
- **Location**: Site, Remote, Hybrid

Variance \>10 points between segments indicates systemic inequity requiring intervention.

#### Relationship to Business Outcomes

##### EEI Impact Correlations

| EEI Range | Attrition Rate | AHT Index | Quality Score | NPS Impact |
|-----------|----------------|-----------|---------------|------------|
| \<50      | 45-60%         | 110-120   | 75-80         | -10 to -5  |
| 50-60     | 30-45%         | 100-110   | 80-85         | -5 to 0    |
| 60-70     | 20-30%         | 95-100    | 85-90         | 0 to +5    |
| 70-80     | 10-20%         | 90-95     | 90-95         | +5 to +10  |
| 80+       | \<10%          | 85-90     | 95+           | +10 to +15 |

##### Financial Value of EEI Improvement

Each 10-point EEI increase typically delivers:

- \*\*15-20% attrition reduction\*\* → \$1-2M savings per 1000 agents
- \*\*5-7% productivity gain\*\* → \$2-3M capacity value
- \*\*8-10 NPS point lift\*\* → \$3-5M CLV impact
- \*\*25% reduction in absenteeism\*\* → \$500K-1M savings

Total value: **\$6.5-11M per 10-point improvement** for 1000-agent operation

#### Action Triggers and Interventions

##### Component-Based Response Matrix

| Component Drop   | Threshold       | Immediate Action        | Sustained Response                        |
|------------------|-----------------|-------------------------|-------------------------------------------|
| Schedule Control | -10 pts/week    | Review recent changes   | Policy adjustment, preference reset       |
| Development      | -15 pts/month   | Check delivery failures | Content refresh, supervisor training      |
| Stress Signals   | +20 stress/week | Reduce occupancy target | Process simplification, support resources |
| Growth Velocity  | -5 pts/quarter  | Audit skill progression | Career path review, opportunity creation  |
| Engagement       | -10 pts/month   | Focus groups            | Recognition program, community building   |

##### EEI Alert Protocols

- **Yellow Alert (EEI 55-60)**: Weekly monitoring, targeted interventions
- **Orange Alert (EEI 50-55)**: Daily monitoring, escalated support, action plans
- **Red Alert (EEI \<50)**: Executive attention, immediate relief measures, recovery program

#### Integration with Other Metrics

EEI serves as the human-side complement to operational metrics:

- **With VCE**: High EEI enables variance acceptance → higher capture rates
- **With AAR**: Trust (component of EEI) directly drives automation acceptance
- **With SCR**: Development cadence improves as supervisors shift to coaching
- **With Attrition**: EEI is the leading indicator (3-6 month advance warning)
- **With Service Level**: Sustainable performance requires EEI \>60
- **With Quality/CSAT**: Agent wellbeing translates to customer experience

#### Implementation Requirements

##### Technical Infrastructure

1.  **Data Integration Layer**
    - HRIS for schedule and development data
    - WFM for adherence and occupancy metrics
    - Quality systems for performance indicators
    - Collaboration platforms for engagement signals

<!-- -->

1.  **Calculation Engine**
    - Real-time component scoring
    - Weight calibration by segment
    - Trend analysis and predictions
    - Alert generation system

<!-- -->

1.  **Visualization Platform**
    - Individual agent dashboards
    - Team/supervisor views
    - Executive scorecards
    - Mobile accessibility

<!-- -->

1.  **Action Orchestration**
    - Intervention recommendation engine
    - Workflow automation for responses
    - Effectiveness tracking
    - Closed-loop optimization

##### Organizational Requirements

- **Governance**: EEI steering committee with HR, Operations, IT representation
- **Policy**: Clear guidelines on data use, privacy, and agent rights
- **Training**: Manager education on interpretation and action
- **Communication**: Transparent methodology and improvement focus
- **Culture**: Shift from surveillance to support mindset

#### Common Pitfalls and Mitigation

| Pitfall                         | Impact                  | Prevention Strategy                   |
|---------------------------------|-------------------------|---------------------------------------|
| Over-weighting single component | Skewed scores, gaming   | Balanced weights, regular calibration |
| Annual-only measurement         | Missed deterioration    | Weekly minimum frequency              |
| No action on low scores         | Cynicism, trust erosion | Mandatory intervention protocols      |
| One-size-fits-all targets       | Inequitable treatment   | Segmented goals by context            |
| Privacy concerns                | Resistance, legal risk  | Clear consent, aggregate reporting    |
| Manager punishment for scores   | Hidden problems         | Support-oriented accountability       |

#### Advanced Applications

##### Predictive EEI Modeling

Use machine learning to predict EEI changes:
$\text{EEI}_{t+30} = f(\text{Schedule}_{t}, \text{Workload}_{t}, \text{Training}_{t}, \text{Recognition}_{t}, \text{History})$

Enables proactive intervention before degradation occurs.

##### Personalized Experience Optimization

Individual preference learning creates custom weight vectors:
$\text{EEI}_{individual} = \sum_{j=1}^{5} w_{j,i} \cdot \text{Component}_{j}$

Where w<sub>j,i</sub> reflects individual i's revealed preferences through behavior and feedback.

#### Summary

The Employee Experience Index transforms workforce management from efficiency-focused to human-centered operations. By establishing EEI as a formal goal, organizations:

- Create continuous wellbeing measurement versus annual snapshots
- Enable proactive intervention before attrition or burnout
- Quantify the human impact of operational decisions
- Build sustainable performance through employee thriving
- Generate millions in value through retention and engagement

EEI represents the essential counterbalance to automation metrics, ensuring that workforce transformation enhances rather than diminishes the human experience. Organizations achieving EEI \>70 consistently demonstrate superior customer outcomes, financial performance, and competitive advantage in attracting and retaining talent.

### Supervisor Coaching Ratio (SCR) Goal

The Supervisor Coaching Ratio represents the fundamental transformation of supervisory work from administrative policing to developmental coaching in the Collaborative Intelligence Era. This metric quantifies the reallocation of supervisor time made possible by automation, measuring the shift from exception handling and schedule management to capability building and performance development. SCR serves as the critical indicator of whether automation truly enhances human work or merely speeds up administrative tasks.

#### Core Definition

Supervisor Coaching Ratio is calculated as:

$\text{SCR} = \frac{\text{Time on coaching/development}}{\text{Total supervisor time}} \times 100$

Where:

- **Coaching/Development Time** = Direct coaching, skills development, career conversations, performance feedback, team development activities
- **Total Supervisor Time** = All productive supervisor hours excluding breaks and meetings

The metric captures the profound shift enabled by Level 3 automation: from 30% coaching / 70% administration to 60%+ coaching / 40% administration.

#### Component Breakdown

##### Coaching & Development Activities (Numerator)

| Activity Category          | Examples                                                       | Time Attribution | Value Weight |
|----------------------------|----------------------------------------------------------------|------------------|--------------|
| **Direct Coaching**        | 1-on-1 performance conversations, call reviews, skill building | 100%             | 1.5x         |
| **Team Development**       | Group training, skills workshops, best practice sharing        | 100%             | 1.3x         |
| **Career Development**     | Growth planning, advancement discussions, mentoring            | 100%             | 1.4x         |
| **Quality Calibration**    | Joint call reviews, evaluation alignment, feedback delivery    | 75%              | 1.2x         |
| **Recognition Activities** | Performance celebrations, peer nominations, success stories    | 100%             | 1.1x         |
| **Knowledge Sharing**      | Creating job aids, documenting processes, peer teaching        | 50%              | 1.0x         |

##### Administrative Activities (Denominator Component)

| Activity Category               | Traditional Time % | Level 3 Target % | Automation Impact                      |
|---------------------------------|--------------------|------------------|----------------------------------------|
| **Schedule Exception Handling** | 25-30%             | \<5%             | 85% reduction via auto-adjustments     |
| **Adherence Management**        | 15-20%             | \<3%             | 90% reduction via dynamic adherence    |
| **Time-off Approvals**          | 10-12%             | \<2%             | 80% reduction via rule-based approval  |
| **Escalation Triage**           | 8-10%              | 5-7%             | 30% reduction via intelligent routing  |
| **Report Generation**           | 7-10%              | \<2%             | 80% reduction via automated dashboards |
| **Workforce Coordination**      | 5-8%               | 3-5%             | 40% reduction via automation           |

#### Maturity Progression

##### SCR Evolution by Level

<table>
<thead>
<tr class="header">
<th><p>Maturity Level</p></th>
<th><p>Typical SCR</p></th>
<th><p>Time Distribution</p></th>
<th><p>Key Characteristics</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>Level 1-2: Manual/Foundational</strong></p></td>
<td><p>20-30%</p></td>
<td><p>70-80% admin, 20-30% coaching</p></td>
<td><p>• Exception-driven supervision<br />
• Reactive firefighting<br />
• Schedule policing focus</p></td>
</tr>
<tr class="even">
<td><p><strong>Level 3: Progressive</strong></p></td>
<td><p>60-70%</p></td>
<td><p>30-40% admin, 60-70% coaching</p></td>
<td><p>• Automation handles exceptions<br />
• Proactive development<br />
• Performance partnership</p></td>
</tr>
<tr class="odd">
<td><p><strong>Level 4: Advanced</strong></p></td>
<td><p>70-80%</p></td>
<td><p>20-30% admin, 70-80% coaching</p></td>
<td><p>• Predictive interventions<br />
• Capability building focus<br />
• Strategic talent development</p></td>
</tr>
<tr class="even">
<td><p><strong>Level 5: Pioneering</strong></p></td>
<td><p>80%+</p></td>
<td><p>&lt;20% admin, 80%+ coaching</p></td>
<td><p>• Autonomous administration<br />
• Pure development role<br />
• Innovation facilitation</p></td>
</tr>
</tbody>
</table>

##### The Level 3 Transformation

**From Schedule Cop to Performance Coach:**

| Before (Level 2)              | After (Level 3)                  | Automation Enabler           |
|-------------------------------|----------------------------------|------------------------------|
| Approving break exceptions    | Coaching through difficult calls | Break protection rules       |
| Monitoring adherence          | Building new capabilities        | Dynamic adherence            |
| Processing time-off requests  | Conducting career planning       | Automated approval workflows |
| Generating compliance reports | Creating development paths       | Real-time dashboards         |
| Chasing attendance issues     | Preventing burnout               | Wellbeing alerts             |
| Coordinating schedule swaps   | Facilitating peer learning       | Self-service systems         |

#### Setting SCR Goals

##### Context-Specific Targets

| Operational Context        | Current State | Year 1 Target | Year 2 Target | Best Practice |
|----------------------------|---------------|---------------|---------------|---------------|
| High-volume transactional  | 15-25%        | 45-55%        | 65-75%        | 80%+          |
| Complex technical support  | 25-35%        | 50-60%        | 70-75%        | 80%+          |
| Sales/Revenue focused      | 30-40%        | 55-65%        | 70-80%        | 85%+          |
| Regulated/Compliance heavy | 20-30%        | 40-50%        | 60-70%        | 75%+          |
| Omnichannel operations     | 25-30%        | 50-60%        | 70-75%        | 80%+          |

**Key Principle:** Direction and magnitude matter more than universal targets. A shift from 30% to 60% SCR represents transformational change regardless of industry.

##### Progressive Implementation Path

**Quarter 1: Baseline & Quick Wins**

- Establish measurement through calendar tagging
- Implement first automation rules (break protection)
- Remove top 3 administrative time wasters
- Expected SCR: +10-15% improvement

**Quarter 2: Systematic Automation**

- Deploy adherence automation
- Automate standard approvals
- Introduce coaching appointment scheduling
- Expected SCR: +15-20% additional improvement

**Quarter 3: Role Redesign**

- Formalize "no-exceptions" policies
- Implement coaching playbooks
- Create development tracking systems
- Expected SCR: +10-15% additional improvement

**Quarter 4: Optimization**

- Personalized coaching algorithms
- Predictive intervention models
- Peer coaching programs
- Expected SCR: 60-70% total achievement

#### Measurement Framework

##### Data Collection Methods

| Method               | Accuracy         | Implementation Effort | Recommended For                    |
|----------------------|------------------|-----------------------|------------------------------------|
| **Calendar Tagging** | High (90%+)      | Medium                | Primary method - all organizations |
| **Workflow Logs**    | Very High (95%+) | High                  | Mature WFM systems                 |
| **ROC Tickets**      | Medium (70-80%)  | Low                   | Quick start measurement            |
| **Time Studies**     | High (85-90%)    | High                  | Validation and calibration         |
| **Self-Reporting**   | Low (60-70%)     | Low                   | Supplementary only                 |

##### Instrumentation Requirements

1.  **Calendar Integration**
    - Activity categorization taxonomy
    - Automated tagging rules
    - Mobile accessibility for floor coaching
    - Integration with WFM/HRIS

<!-- -->

1.  **Workflow Tracking**
    - Coaching session logging
    - Quality calibration tracking
    - Development conversation records
    - Exception handling logs

<!-- -->

1.  **Analytics Platform**
    - Real-time SCR calculation
    - Trend analysis by supervisor
    - Correlation with team performance
    - ROI demonstration tools

#### Value Quantification

##### Business Impact of SCR Improvement

For a 1,000-agent operation with 100 supervisors (10:1 ratio):

<table>
<thead>
<tr class="header">
<th><p>SCR Improvement</p></th>
<th><p>Coaching Hours Gained</p></th>
<th><p>Annual Value</p></th>
<th><p>Key Benefits</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>30% → 45%</p></td>
<td><p>31,200 hours</p></td>
<td><p>$1.56M</p></td>
<td><p>• 15% attrition reduction<br />
• 5% quality improvement</p></td>
</tr>
<tr class="even">
<td><p>45% → 60%</p></td>
<td><p>31,200 hours</p></td>
<td><p>$1.87M</p></td>
<td><p>• 20% development acceleration<br />
• 8% productivity gain</p></td>
</tr>
<tr class="odd">
<td><p>60% → 75%</p></td>
<td><p>31,200 hours</p></td>
<td><p>$2.18M</p></td>
<td><p>• 25% promotion readiness<br />
• 12% engagement lift</p></td>
</tr>
<tr class="even">
<td><p><strong>Total 30% → 75%</strong></p></td>
<td><p><strong>93,600 hours</strong></p></td>
<td><p><strong>$5.61M</strong></p></td>
<td><p>• Complete role transformation</p></td>
</tr>
</tbody>
</table>

**Calculation basis:** 100 supervisors × 2,080 hours/year × 15% improvement = 31,200 hours

##### Multiplier Effects

Each 10% SCR improvement typically generates:

- \*\*3-5% reduction in agent attrition\*\* through better support
- \*\*2-3% improvement in quality scores\*\* through consistent coaching
- \*\*5-7% increase in employee engagement\*\* through development focus
- \*\*4-6% acceleration in speed to proficiency\*\* for new agents

#### Relationship to Other Metrics

##### SCR as Enabler and Outcome

| Related Metric                  | Relationship                        | Correlation Strength |
|---------------------------------|-------------------------------------|----------------------|
| **AAR (Automation Acceptance)** | Higher AAR → More time for coaching | r = 0.75             |
| **VCE (Variance Capture)**      | Automated admin → Higher SCR        | r = 0.82             |
| **EEI (Employee Experience)**   | More coaching → Better experience   | r = 0.78             |
| **Attrition Rate**              | Higher SCR → Lower attrition        | r = -0.71            |
| **Quality Scores**              | More coaching → Higher quality      | r = 0.69             |
| **Adherence Exceptions**        | Fewer exceptions → Higher SCR       | r = -0.85            |

#### Implementation Playbook

##### Phase 1: Remove Administrative Burden

**Weeks 1-4: Foundation**

- Implement break/lunch auto-adjustment rules
- Deploy automated time-off approvals for standard requests
- Create self-service schedule swap system
- Expected Impact: +15-20% SCR

**Weeks 5-8: Exception Elimination**

- Introduce "no-exceptions" policy for protected activities
- Automate adherence tracking and reporting
- Implement intelligent escalation routing
- Expected Impact: +10-15% SCR

##### Phase 2: Enable Quality Coaching

**Weeks 9-12: Structure & Support**

- Deploy coaching appointment scheduling
- Create coaching playbook library
- Implement session tracking tools
- Build feedback capture systems
- Expected Impact: +10-15% SCR

**Weeks 13-16: Optimization**

- Personalize coaching recommendations
- Integrate quality scores with coaching priorities
- Launch peer coaching programs
- Measure coaching effectiveness
- Expected Impact: +5-10% SCR

#### Common Barriers and Solutions

<table>
<thead>
<tr class="header">
<th><p>Barrier</p></th>
<th><p>Impact on SCR</p></th>
<th><p>Solution Approach</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>Supervisor resistance</strong></p></td>
<td><p>-20-30%</p></td>
<td><p>• Show time savings first<br />
• Provide coaching skills training<br />
• Celebrate early adopters</p></td>
</tr>
<tr class="even">
<td><p><strong>Lack of coaching skills</strong></p></td>
<td><p>-15-20%</p></td>
<td><p>• Coaching certification program<br />
• Peer observation<br />
• External training investment</p></td>
</tr>
<tr class="odd">
<td><p><strong>Persistent manual processes</strong></p></td>
<td><p>-25-35%</p></td>
<td><p>• Automation audit<br />
• Process simplification<br />
• Technology investment</p></td>
</tr>
<tr class="even">
<td><p><strong>Cultural inertia</strong></p></td>
<td><p>-10-15%</p></td>
<td><p>• Leadership modeling<br />
• Success stories<br />
• Gradual transition</p></td>
</tr>
<tr class="odd">
<td><p><strong>Measurement gaps</strong></p></td>
<td><p>-5-10%</p></td>
<td><p>• Calendar discipline<br />
• Activity categorization<br />
• Regular audits</p></td>
</tr>
</tbody>
</table>

#### Supervisor Enablement Framework

##### From Cop to Coach Transformation

'''Mindset Shift Requirements:\*\*

| Old Mindset (Cop)       | New Mindset (Coach)       | Enabling Actions                         |
|-------------------------|---------------------------|------------------------------------------|
| "Enforcement focus"     | "Development focus"       | Remove enforcement burden via automation |
| "Exception management"  | "Capability building"     | Eliminate exceptions through rules       |
| "Compliance monitoring" | "Performance partnership" | Automate compliance tracking             |
| "Schedule police"       | "Career advocate"         | Deploy schedule self-service             |
| "Problem solver"        | "Potential developer"     | Provide coaching frameworks              |

##### Critical Success Factors

1.  **Leadership Commitment**: Executives must model and reward coaching behavior
2.  **Tool Investment**: Automation must genuinely remove administrative burden
3.  **Skill Development**: Supervisors need coaching capability training
4.  **Cultural Alignment**: Organization must value development over control
5.  **Measurement Discipline**: Consistent tracking and visibility of SCR

#### Advanced Applications

##### Predictive SCR Optimization

Use machine learning to predict optimal coaching allocation:
$\text{Coaching Priority}_{agent} = f(\text{Performance Gap}, \text{Potential}, \text{Risk Factors}, \text{Recent Coaching})$

This ensures supervisor time focuses on highest-impact coaching opportunities.

##### Personalized Coaching Effectiveness

Track not just time spent, but impact achieved:
$\text{Coaching ROI} = \frac{\Delta \text{Performance} \times \text{Value}}{\text{Coaching Hours Invested}}$

Enables supervisors to refine approaches based on what works for each individual.

#### ROC Integration

SCR visibility in the Real-time Operations Center:

- \*\*Real-time Display\*\*: Current coaching sessions active
- \*\*Daily Tracking\*\*: Cumulative SCR by supervisor
- \*\*Alert System\*\*: When SCR drops below target
- \*\*Opportunity Flags\*\*: When variance enables coaching time
- \*\*Session Protection\*\*: Blocks that prevent coaching interruption

#### Summary

The Supervisor Coaching Ratio represents the most visible transformation in the Collaborative Intelligence Era—the evolution from administrative oversight to human development. By establishing SCR as a formal goal, organizations:

- Quantify the value shift from policing to coaching
- Justify automation investments through time reallocation
- Transform supervisor role attractiveness and retention
- Build capability development into operational rhythm
- Create sustainable performance through human growth

The shift from 30% to 60%+ coaching time isn't just about efficiency—it fundamentally changes the supervisor-agent relationship from compliance-based to development-based, creating a multiplier effect on engagement, quality, and retention. SCR serves as both the proof point that automation works and the mechanism through which organizations build adaptive capability for continuous transformation.

### Service Level Stability (SLS)

*Definition* (authoritative structure): Use standard deviation (or coefficient of variation) of interval service levels as the stability measure; track daily/weekly SLS to quantify smoothness of delivery. *Example KPI*: **SLS (StDev)** \< 10%.

### Placeholders (Level 3 Adds)

- **TTS** — Placeholder metric (definition TBD per master list sequencing).
- **Dynamic Adherence** — Track rate of automated adherence adjustments accepted/applied (ties to AAR).

------------------------------------------------------------------------

## Level 4 — Advanced (Probabilistic Planning)

Level 4 replaces single‑point plans with bands and risk‑aware economics; we formalize variance ranges, risk ratings, and the value of flexibility.

### Probability & Variance Goals

In Forecast Accuracy Goals: Call Volume - we speak to the importance of maintaining forecast accuracy goals against metrics such as volume. By reflecting on how accurate our forecasts were, we drive critical conversations which uncover and address the drivers behind why a forecast was off. Yet, single point capacity plan inputs and outputs ignore the important nature our data – capacity plans aggregate *variables.* Variables change within the context of our capacity plans, and describing how these variables have a distribution of values, is key to enabling resilient capacity planning.

The future WFM standard seeks to directly incorporate variance ranges into the planning cycle and establish the initial goal of **conducting simulations to demonstrate the importance variance plays in evaluating risks** associated with the capacity plans. These goals can then be expanded to establish target goals for the distribution ranges themselves.

The legacy approach in capacity planning took input variables and sought to assign single-point outcomes. Leveraging a simple base FTE required calculation (not including turnover factors and speed to proficiency) – we calculate:

FTE Required = Annual Calls X AHT /3600 / Work Hours / Occupancy / (1-Shrink):
![Basic_fte_required.jpg](/img/mediawiki/Basic_fte_required.jpg)
This assumes no variance to our plan, and that we will need precisely 165 FTE to service the workload. Of course, there is little to no chance that our inputs will line up precisely; we accept that these are continuous variables that will take on a range of values. Yet, the legacy WFM capacity planning approach generally does not formalize a process to incorporate those ranges into our planning cycles.

The future WFM standard seeks to establish the goal of assigning ranges into our planning process by describing the distribution of these variables and conducting simulations (see process section X.X) to determine the probabilistic distribution of outcomes (FTE required, budget). The standard further seeks to expose how the inputs influence these outcome ranges.

The simple FTE required model described above is enhanced to acknowledge that each of these inputs (except for work hours) has a range of outcomes:
![FTE_range_required.jpg](/img/mediawiki/FTE_range_required.jpg)

And with that range of outcomes, you have a range of FTEs potentially required. Further, this range can be described by the distribution type assigned, such as AHT with a target of 600 seconds. With the triangular distribution and the PERT distribution, we see probabilities take shape based on the nature of their distribution density:

![Demonstrated from the RiskAMP website: https://www.riskamp.com/beta-pert|thumb](/img/mediawiki/Distribution_density.jpg)Establishing the goal of assigning ranges to variables in capacity planning facilitates the next section, establishing risk ratings.

### Risk Ratings

***The section seeks further feedback and input from WFM community.***

In a risk assessment, variance refers to the degree of uncertainty or unpredictability associated with a particular risk. The higher the variance, the greater the uncertainty and the more difficult it is to predict the likelihood and impact of a risk.

In general, higher variance implies higher risk, as there is a greater range of potential outcomes and a greater uncertainty about which outcome will occur. For example, if a risk has a high variance, it may be difficult to predict how likely it is to occur or how severe the consequences might be. This can make it difficult to effectively plan for and manage the risk.

On the other hand, a risk with low variance is more predictable and easier to plan for. For example, if a risk has a low variance, it may be more likely to occur, and the consequences may be more predictable and easier to mitigate.

In a risk assessment, it is important to consider the variance associated with a particular risk in order to accurately assess and manage the risk. This can help to identify strategies for mitigating or eliminating the risk, as well as to establish contingency plans in case the risk does materialize.

By introducing variance planning and variance goals associated with establishing variance ranges (rather than single-point outcomes), the future workforce operating model seeks to establish a qualitative risk rating system, one which leverages a consistent quantitative framework. This system would leverage structured ranges that focus on:

1.  **Service Level Risk:** The relationship between staffing levels set in the budget, and probabilities of achieving service level based on the variance distributions,
2.  **Financial Risk:** The relationship between the staffing levels set in the budget, and the corresponding budget allocated to service the capacity model,
3.  **Employee Risk:** The relationship between occupancy levels set, productive shrink investment, attrition rates, and the probability to deliver against the each (future development)
4.  **Overall Risk:** A combination of service level risk, financial risk, and employee risk to generate an overall rating.

#### Service Level Risk Rating

![FTE distribution](SL-Risk-Rating-Grades.jpg "FTE distribution")
The service level risk rating assumes variance planning is in place, and that the WFM team has presented a representative distribution of values associated each variable feeding the capacity model. Those inputs can then generate a range of staffing requirements with a plot representing what % of outcomes would be covered, based on the staffing levels established.

When the range of inputs is run through a Monte Carlo simulation, an output histogram / Pareto can be examined. By segmenting the % of scenarios covered across the Pareto range, one can then translate the final FTE set in the budget against the % of outcomes that staffing level covers. Ranges could be communicated as:

- FTE \>= 90% receives an A Rating,
- FTE \>=80% & \<90% receives a B Rating
- FTE \>=70% & \<80% receives a C Rating
- FTE \>=60% & \<70% receives a D Rating

... and so on, aligning to a traditional qualitative rating system.

#### Financial Risk Rating

Relative to how a financial department works with the data presented by workforce management, every organization treats capacity planning slightly different. In some cases, **finance may dictate a target budget expense**, independent of the staffing models presented. In far fewer cases, the **finance department may incorporate the staffing plan the WFM team develops**, establishing the budget from the recommended capacity plan outputs. In most organizations, the process lies between these two extremes, where finance and workforce management may go through multiple iterative rounds to land on a final staffing / expense value, with each round negotiating & justifying "why volume, handle time, shrink, occupancy, and attrition is X% higher or lower than last year"

To assign a qualitative risk score to the final budget value, we consider that it is less likely organizations operate purely on a "service level-first" model at any cost. If your organization simply staffs to any value presented, then assigning a financial risk rating has little meaning in this system; you would simply give your Service Level an "A" and if fully funded, Financial risk would be minimal (an A-Rating) so long as your capacity plan projections were sound.

Given that finance generally has a strong hand in many organizations, we'll assume for this risk rating system that there will be a gap between the desired WFM staffing levels generated with the FTE distribution, and the associated financial budget being allocated to staff the contact center. Within this approach, assigning a risk rating, or likelihood to achieve budget requires we take a true risk-assessed FTE distribution, and examine the ability to tune our staffing levels down when staffing variances run positive (FTE actual \> FTE required at any point in time).
![Financial distribution](Risk-rating-financial.jpg "Financial distribution")
Key points to stress before assigning financial risk rating:

1.  **The capacity plan** **should not incorporate unproven bets.** Example, in an initial round of modeling, AHT for tenured agents runs 600 seconds, with a minimum value of 570 and a maximum value 630, and the distribution is forecasted leveraging a PERT distribution described above. If in a subsequent round of planning, AHT is lowered to 580 with no corresponding reasoning (we'll just find a way to hit that number), then the associated risk rating system becomes invalid.
2.  **The capacity plan should assume right-sized staffing at the start of a planning cycle.** Entering a planning cycle short-staffed introduces instability into operations and again invalidates the logic leveraged to assign a risk rating.

To establish the financial risk rating, we examine the outputs of both our FTE distribution and the associated financial distributions charts. In a simple grid, we align the FTEs required to staff a plan with the associated SL risk ratings as such:

|         |       |             |
|---------|-------|-------------|
| **FTE** |       | **SL Risk** |
| 233.8   |       | A           |
| 229.8   | 233.7 | B           |
| 226.9   | 229.7 | C           |
| 224.5   | 226.8 | D           |
|         | 224.4 | F           |

In that a plan with 234 FTE would receive an "A Rating" against service level. We also see that this plan would translate into a budget of ~\$11.8 million. As we indicated, rarely does finance wish to cover all possible outcomes and simply assign the associated budget. For this exercise, we assume finance assigns a budget of \$11.225 million, presenting a budget gap, assuming we plan to staff to 234:

|       |       |         |               |
|-------|-------|---------|---------------|
| FTE   |       | SL Risk | Budget        |
| 233.8 |       | A       | \$ 11,788,284 |
| 229.8 | 233.7 | B       | \$ 11,580,815 |
| 226.9 | 229.7 | C       | \$ 11,415,519 |
| 224.5 | 226.8 | D       | \$ 11,284,090 |
|       | 224.4 | F       | less than     |
|       |       |         |               |
|       |       |         |               |
|       |       |         |               |
|       |       |         |               |

If we are positioned to be adequately staffed to 234 FTE, we have a budget gap of \$563k, or approximately 5%. While our scenarios modeled leveraging Monte Carlo simulation indicate 234 FTE would cover 90% of outcomes, that staff hedges to the right of the curve of the outcomes. To assess our financial risk, we introduce the degree to which we can remove costs consistently leveraging automation. These methods are a key enabler in the future WFM operating model; staffing above the mean, and leveraging natural variability plus automation to optimize service level and expense.

To generate a financial risk assumption, we categorize what real-time automations are in place & adoption rates to forecast the expense to be removed

|                     |               |                 |                 |                 |
|---------------------|---------------|-----------------|-----------------|-----------------|
| Automation Adoption | High          | Medium          | Low             | None            |
| VTO                 | \$ 117,882.84 | \$ 70,729.70    |                 |                 |
| Training            | \$ 259,342.25 | \$ 212,189.11   | \$ 165,035.98   |                 |
| Coaching            | \$ 141,459.41 |                 |                 |                 |
| AHT/ACW             | \$ 58,941.42  | \$ 23,576.57    | \$ 11,788.28    |                 |
| Adherence           | \$ 7,072.97   | \$ 5,894.14     |                 |                 |
| Total Automations   | \$ 584,698.89 | \$ 312,389.53   | \$ 176,824.26   | \$ -            |
|                     |               |                 |                 |                 |
| Adjusted Gap        | \$ 21,414.89  | \$ (250,894.47) | \$ (386,459.74) | \$ (563,284.00) |
| % Gap Budget        | 0.2%          | -2.2%           | -3.4%           | -5.0%           |
|                     | Meet          | Miss by 2.2%    | Miss by 3.4%    | Miss by 5%      |

Then the results are combined with the organization's threshold for budget achievement, example:

|                  |                |
|------------------|----------------|
| Budget           | Financial Risk |
| Meet or Exceed   | A              |
| Miss by up to 3% | B              |
| Miss by 4%-5%    | C              |
| Miss 6-7%        | D              |
| Miss \>7%        | F              |

In the above example, the FTE staffed was 234, however, automation reduced expenses in the high adoption category to meet budget.

#### Employee Risk

***The section seeks further feedback and input from WFM community. Future development.***

#### Overall Risk Rating

Currently, a combination of: Service Level Risk + Financial Risk + Employee Risk as described above.

### Option Value of Flexibility (OVF) Goal

The Option Value of Flexibility represents a new goal metric that quantifies the economic benefit of adaptive workforce planning versus rigid, deterministic planning. This metric directly builds upon the variance and probability concepts established above, translating operational flexibility into measurable financial value.

#### Core Definition

The Option Value of Flexibility is calculated as:

$\text{OVF} = \mathbb{E}[C_{\text{static}}] - \mathbb{E}[C_{\text{flexible}}]$

Where:

- **E\[C<sub>static</sub>\]** = Expected cost under static planning (fixed staffing with safety buffer)
- **E\[C<sub>flexible</sub>\]** = Expected cost under flexible planning (adaptive staffing bands)
- **E** = Expected value operator across probability-weighted scenarios

#### Component Breakdown

##### Static Planning Cost Function

Under static planning, organizations staff at a fixed level based on average demand plus a safety buffer:

$C_{\text{static}}(D_i) = \begin{cases}
C_{\text{regular}} & \text{if } D_i \leq S_{\text{static}} \\
C_{\text{regular}} + C_{\text{overtime}} + C_{\text{outsource}} + C_{\text{penalty}} & \text{if } D_i > S_{\text{static}}
\end{cases}$

Where:

- **D<sub>i</sub>** = Demand in scenario i
- **S<sub>static</sub>** = Static staffing level = μ<sub>demand</sub> × (1 + buffer%)
- **C<sub>regular</sub>** = Base wage costs
- **C<sub>overtime</sub>** = min(gap × 0.3, staff × 0.2) × wage × OT_multiplier
- **C<sub>outsource</sub>** = remaining_gap × wage × outsource_multiplier
- **C<sub>penalty</sub>** = abandonment_rate × calls × penalty_per_abandon

##### Flexible Planning Cost Function

Under flexible planning, organizations use probabilistic staffing bands:

$C_{\text{flexible}}(D_i) = \begin{cases}
C_{P50} & \text{if } D_i \leq P_{50} \\
C_{P80} & \text{if } P_{50} < D_i \leq P_{80} \\
C_{P95} & \text{if } P_{80} < D_i \leq P_{95} \\
C_{\text{surge}} & \text{if } D_i > P_{95}
\end{cases}$

Where:

- **P<sub>50</sub>, P<sub>80</sub>, P<sub>95</sub>** = Staffing levels at 50th, 80th, and 95th percentiles
- Each band has progressively lower adjustment costs due to preparation

#### Calculation Methodology

The OVF calculation follows these steps:

1.  **Generate Demand Scenarios**: Create n scenarios (typically 1000+) using the variance distributions established in {{< wikilink "probability-variance-goals" "Probability & Variance Goals" >}}
2.  **Calculate Costs**: For each scenario, calculate costs under both strategies
3.  **Weight by Probability**: Apply probability weights based on distribution parameters
4.  **Compute Expected Values**: Calculate E\[C<sub>static</sub>\] and E\[C<sub>flexible</sub>\]
5.  **Determine OVF**: Subtract flexible from static expected costs

##### Sample Calculation

| Scenario Type                    | Probability | Demand     | Static Cost | Flexible Cost | Weighted Savings |
|----------------------------------|-------------|------------|-------------|---------------|------------------|
| Low (P10)                        | 10%         | 180 agents | \$45,000    | \$38,000      | \$700            |
| Normal (P50)                     | 50%         | 200 agents | \$52,000    | \$48,000      | \$2,000          |
| High (P80)                       | 30%         | 220 agents | \$78,000    | \$61,000      | \$5,100          |
| Peak (P95)                       | 10%         | 240 agents | \$125,000   | \$82,000      | \$4,300          |
| **Total Expected OVF per Hour:** |             |            |             |               | **\$12,100**     |

**Annual OVF = \$12,100 × 12 hours × 250 days = \$36,300,000**

#### Setting OVF Goals

Organizations should establish OVF targets based on:

1.  **Current volatility levels** (from variance analysis)
2.  **Automation adoption rates** (VTO, training delivery, adherence management)
3.  **Organizational maturity** in variance harvesting
4.  **Risk tolerance** established in risk ratings

Recommended OVF targets by volatility:

| Demand Volatility (CoV) | Minimum OVF Target (per 1000 agents) | Stretch OVF Target |
|-------------------------|--------------------------------------|--------------------|
| Low (10-20%)            | \$400,000                            | \$600,000          |
| Medium (20-30%)         | \$800,000                            | \$1,200,000        |
| High (30-40%)           | \$1,500,000                          | \$2,100,000        |
| Very High (40%+)        | \$2,000,000                          | \$3,000,000        |

#### Relationship to Risk Ratings

OVF directly connects to the risk rating framework:

- **Higher OVF** = Greater resilience to variance = Lower service level risk
- **Flexible planning** = Better financial risk management through controlled cost escalation
- **Adaptive staffing** = Improved employee risk through predictable workload distribution

Organizations achieving high OVF demonstrate:

- Service level risk ratings improve by 1-2 grades
- Financial risk becomes more predictable (tighter confidence intervals)
- Employee satisfaction increases through reduced emergency overtime

#### Measuring OVF Achievement

Track OVF realization through:

1.  **Monthly variance capture rate**: Actual savings / Theoretical OVF
2.  **Automation effectiveness**: % of variance converted to productive activities
3.  **Cost avoidance tracking**: Overtime avoided, outsourcing reduced, penalties prevented
4.  **Service stability**: Standard deviation of interval service levels

##### OVF Realization Formula

$\text{OVF Realization Rate} = \frac{\text{Actual Cost Savings}}{\text{Theoretical OVF}} \times 100\%$

Target realization rates:

- **Year 1**: 40-50% (learning phase)
- **Year 2**: 60-70% (optimization phase)
- **Year 3+**: 75-85% (maturity phase)

#### Integration with Existing Goals

OVF complements and enhances traditional WFM goals:

- **Forecast Accuracy**: Higher accuracy increases OVF by reducing uncertainty premiums
- **Schedule Quality Index**: Flexible scheduling enables OVF capture
- **MTTR**: Faster response increases variance capture opportunities
- **Attrition Goals**: Lower attrition reduces the cost of flexibility

#### Implementation Requirements

To effectively track and achieve OVF goals:

1.  **Variance modeling capabilities** (Monte Carlo simulation)
2.  **Real-time variance harvesting tools** (automation platform)
3.  **Flexible workforce policies** (VTO, overtime, training delivery)
4.  **Measurement infrastructure** (cost tracking by scenario type)

#### Example OVF Dashboard Metrics

| Metric                      | Current     | Target      | Status    |
|-----------------------------|-------------|-------------|-----------|
| Theoretical OVF (Annual)    | \$1,247,000 | \$1,200,000 | Exceeding |
| Realization Rate            | 68%         | 70%         | On Track  |
| Variance Capture Efficiency | 42%         | 45%         | On Track  |
| Cost Avoidance YTD          | \$847,000   | \$800,000   | Exceeding |
| Service Stability (StDev)   | 8.2%        | \<10%       | Achieving |

#### Summary

The Option Value of Flexibility transforms variance from a problem to be minimized into an opportunity to be harvested. By establishing OVF as a formal goal, organizations:

- Quantify the business case for adaptive planning
- Justify investments in automation and flexibility tools
- Align stakeholders around variance as value
- Create measurable targets for transformation initiatives

OVF represents the bridge between traditional efficiency metrics and the adaptive, resilient operations required in the Collaborative Intelligence Era.

### Probabilistic Staffing Bands & Percentile Targets

- **Staffing Bands**: Report staffing and outcomes at P50/P80/P95, not single points.
- **Percentile Targets**: $\text{Target: } P_{80} \ge \text{threshold for } \ge 12 \text{ of } 13 \text{ weeks}$ (set realistic achievement for stochastic metrics).

### Scenario Robustness Score

$\text{Robustness} = \frac{\text{Scenarios meeting SLA}}{\text{Total scenarios tested}} \times 100\%$ (Monte Carlo fan‑chart context; pair with sensitivity analysis).

### Band Stability (KPI)

$\text{Band Stability} = \frac{\text{Intervals within band}}{\text{Total intervals}} \times 100\%$ — track adherence of SL/Occupancy/Adherence to agreed bands.

------------------------------------------------------------------------

## Level 5 — Pioneering (Autonomous Optimization)

At Level 5 we connect operations to enterprise value and codify governance for autonomy and safety.

### Customer Lifetime Value (CLV) Impact

Link workforce interventions to value:
$\Delta \text{CLV} = \frac{1}{|\text{treated}|} \sum_{i \in \text{treated}} (\text{CLV}_{i,\text{post}} - \text{CLV}_{i,\text{pre}})$.

### Learning Velocity

$\text{Learning Velocity} = \frac{\Delta \text{Capability}}{\Delta t} \times \text{Adoption Rate}$ (capability can be new skills mastered, AHT improvement, or quality gains).

### Fairness Index

$\text{Fairness} = 1 - \frac{\sigma(\text{outcomes by group})}{\mu(\text{outcomes overall})}$ — higher is more equitable; monitor across demographic or context groups.

### Time‑to‑Rollback (TTR)

$\text{TTR} = \text{Time}_{\text{issue detected}} \rightarrow \text{Time}_{\text{previous state restored}}$ — safety rail for autonomous/assistive systems.

### Decision Quality Score (DQS) — Placeholder

*Definition & weighting to be finalized* (captures decision outcomes quality under autonomy; pair with Explainability Coverage).

### Counter‑Metric Pairs (Governance)

Every efficiency metric needs a counterbalance (e.g., AHT vs FCR/CLV; Occupancy vs Burnout Risk; Adherence vs EEI). Align thresholds to value and safety.

------------------------------------------------------------------------

## Appendix: Complete Metrics Inventory

(List of all metrics referenced throughout reorganized Goals page, alphabetically)

- AAR — Automation Acceptance Rate
- ABA — Abandonment Rate
- Adherence — Schedule adherence percentage
- AHT — Average Handle Time
- ASA — Average Speed of Answer
- Attrition/Retention Forecast Accuracy
- Band Stability
- CLV Impact — Customer Lifetime Value change
- Decision Quality Score (DQS)
- Dynamic Adherence Rate
- EEI — Employee Experience Index
- EWI — Employee Wellbeing Index (simplified)
- Fairness Index
- Financial Risk Rating
- Forecast Accuracy (Volume)
- Learning Velocity
- Minimal Interval Error Rate
- MTTR — Mean Time to Respond/Repair
- Occupancy
- OVF — Option Value of Flexibility
- Overall Risk Rating
- Probabilistic Staffing Bands (P50/P80/P95)
- Scenario Robustness Score
- Schedule Control
- SCR — Supervisor Coaching Ratio
- Service Level
- Service Level Risk Rating
- Service Level Stability (SLS)
- SQI — Schedule Quality Index
- Time-to-Rollback (TTR)
- TTS — Placeholder metric
- VCE — Variance Capture Efficiency
- WAPE — Weighted Absolute Percentage Error
