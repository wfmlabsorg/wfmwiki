---
title: "WFM Processes"
slug: wfm-processes
type: synthesis
domains: [org-design, contact-center]
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
mediawiki_original: "WFM Processes"
mediawiki_revision_date: 2025-10-11
---
This future WFM standard outlines functional processes for serving the next-generation needs of contact centers.  The functions are the high-level activities managed by the WFM organization, mapped back to the [[wfm-roles|three primary roles.]] The following section, Role Function Detail, provides additional information about the functions or tasks that make up each role.

[[level-1-process-templates|Process templates from Adaptive Chapter 7]]

### Forecasting Processes

#### Budgeting / Capacity Plans

This standard recognizes the WFM team as the primary owner of establishing the models required to inform supply and demand requirements for contact center operations. While budgeting processes are led by finance teams, WFM organizations have the data and models to best inform the costs associated with staffing, often the most significant portion of a contact center budget. WFM teams need to partner with other segments of the business when analyzing demand drivers and assumptions to be incorporated into the budget model. Some examples include:

- Contact Center Leadership: Changes to vendor mix, call types, coaching & training targets, other off-phone allocations impacting shrink, cross-skilling assumptions impacting occupancy, etc.
- Business Owners: Segments of the company that drive customer growth, assumptions impacting contact rate. These segments may include sales organizations, marketing organization, or functional leaders tasked with growing (or shrinking) a business segment.
- Learning & Development: Changes to the length of onboarding classes, changes impacting speed to proficiency, training initiatives
- Technology Teams: Changes to channels (IVR, Online, etc) which may impact live agent demand

There may be a significant number of organizations which hold data assumptions key to influencing the budget and capacity plan.

##### Budget Time Horizons

This standard recognizes each company has different time time horizons on which budget models are refreshed. Common horizons include:

- Calendar year - 12 consecutive months beginning January 1 and ending December 31.
- Fiscal year - 12 consecutive months ending on the last day of any month except December.
- Rolling Budget - updated semi-annual or quarterly, with budget targets refreshed more than annually

The approaches discussed in this standard can be leveraged independent of budget time horizon is in place.

##### Top Down & Bottom Up Budget Builds

Staffing budgets can be designed by building up from granular data (bottom up) or from aggregating the granular data into a fully annualized view. This standard recommends starting a budget process with an aggregated view, which facilitates ease of simulating outcomes. Once a budget is agreed upon, the data can be broken out to a 52-week or 12-month view for modeling employee attrition and backfill patterns.

##### Staffing Requirement Calculations

The core calculations leveraged in this standard focus on live agent inbound call handling, and describe the agents needed to service live call volume given a target service level. The staffing calculations start at **agent offered** recognizing there may be additional layers of calculations influencing agent offered, notably IVR containment rates. Areas stressed in calculations leveraged:

- All demand requirements are expressed as ***agent offered***, as opposed to **agent answered**. **Agent answered** is occasionally leveraged by organizations that assume abandon rates need not be incorporated into the staffing requirements. This is a faulty approach that leaves an organization short-staffed.
- Shrinkage is broken into **productive** and **non-productive** shrink. The staffing requirements still combined the values to calculate the appropriate staff needed based on off-phone activity, but is segmented into two values to allow future attrition modeling to draw relations between productive shrink (investments such as training, coaching, etc) and non-productive (such as absenteeism or unaccountable time).
- **Base Required FTEs** is calculated leveraging workload (volume & handle time) and overhead (shrink and occupancy) and separated from staffing required to cover annual attrition. **Training FTEs** incorporates the turnover rate and factors speed to proficiency to adjust the proper FTE needed to account for their learning curve. **Total FTEs** combines Base FTEs + Training FTEs. When assigning financial values to a capacity plan, you also want to consider training length, training attrition and onboarding costs per agent.

The calculation leveraged for Base Required FTEs is:

Base Required FTEs = Agent Calls Offered x Average Handle Time / 3600 / Annual Hours / Occupancy / (1-(Productive Shrink + Non-Productive Shrink)

|                           |           |
|---------------------------|-----------|
| Annual Hours              | 2030      |
| Agent Offered             | 1,000,000 |
| Average Handle Time (AHT) | 460       |
| Productive Shrink         | 15%       |
| Non-Productive Shrink     | 20%       |
| Occupancy                 | 85%       |
| Base Required FTE         | 114       |

Given the table above, 1,000,000 x 460 / 3600 / 2030 / .85 / 1-(.15 + .20) = 114 FTE

This is a straight-forward, commonly used method align the staff required to service the workload presented. Base required FTE does not account for turnover, which needs to be calculated separately to account for replacing staff.

For top-down budget modeling, and model simulation leveraged in the following section, we present a method below to adjust for agent turnover:

|                               |      |
|-------------------------------|------|
| Annual Attrition              | 40%  |
| Training Length (weeks)\*     | 6    |
| Training Attrition\*          | 25%  |
| Speed to Proficiency (months) | 6    |
| AHT Day 1 (2x = 2)            | 2.00 |
| Training FTEs                 | 53   |

\*Training length and training attrition leveraged to calculate financial impact of attrition.

To account for speed to proficiency, we create a table that is populated by the number of months required to become proficient, and the curve to reach proficiency. For simplicity, we model a straight line leaning curve with 2x AHT on day 1, with a 6 month speed to proficiency:

|                    |       |        |             |
|--------------------|-------|--------|-------------|
| AHT Learning Curve | Curve | Tenure | Proficiency |
| 1                  | 920   | 460    | 50%         |
| 2                  | 789   | 460    | 58%         |
| 3                  | 690   | 460    | 67%         |
| 4                  | 613   | 460    | 75%         |
| 5                  | 552   | 460    | 83%         |
| 6                  | 502   | 460    | 92%         |
| 7                  | 460   | 460    | 100%        |
| 8                  | 460   | 460    | 100%        |
| 9                  | 460   | 460    | 100%        |
| 10                 | 460   | 460    | 100%        |
| 11                 | 460   | 460    | 100%        |
| 12                 | 460   | 460    | 100%        |
| Average            | 569   | 460    | 85%         |
| Adjusted AHT       | 491   |        |             |

When we average the proficiency factor across the year, this gives us the ability to adjust for longer AHTs for new hires. In the table above, we see annualized, new hire replacements are 85% as efficient as tenured AHTs. To account for these inefficiencies, we calculate:
Training FTEs = Base FTEs Required x Annual Attrition / Proficiency Factor

In the example above, 114 x 40% / 85% = 54 Training FTEs

Total FTEs required is Base FTEs + Training FTEs, or 114 + 54 = 168 FTEs.

Note: This facilitates top-down model simulation, described below, but does not account for other costs of attrition, notably onboarding costs (HR, IT, Recruiting) and Training attrition costs.

#### Monte Carlo Simulation & Risk Modeling

> *"First, the only certainty is that there is no certainty. Second, every decision, as a consequence, is a matter of weighing probabilities. Third, despite uncertainty we must decide and we must act. And lastly, we need to judge decisions not only on the results, but on how they were made."*

\- Robert Rubin, Remarks to New York University Commencement, New York, NY, May 13, 1999

The next-generation WFM standard introduces Monte Carlo simulation and risk modeling to combat the legacy challenge of fragile capacity plans.

Traditional capacity plans leverage single point, finite inputs to generate staffing requirements, ignoring that the variables listed in the previous section have a range of possible outcomes. Capacity plans are developed and budgets are established to reflect the total FTEs needed, based on the calculations described in the previous section. These plans often "break" as variation to the plan is introduced.

Monte Carlo simulations expand our capacity plans from **fixed point inputs** to expressing a **range of inputs, defined by a probability distribution**, to generate a **range of possible outcomes,** also defined by a probability distribution.

To illustrate, we use a simple example with the Base FTE Required inputs table below:

|                           |                   |
|---------------------------|-------------------|
|                           | Most Likely Value |
| Annual Hours              | 2032              |
| Agent Offered             | 1,000,000         |
| Average Handle Time (AHT) | 460               |
| Productive Shrink         | 15%               |
| Non-Productive Shrink     | 20%               |
| Occupancy                 | 85%               |

And expand the table which includes the "most likely value" from the original table, to include the **minimal feasible value** and the **maximum feasible value** for the inputs:

|                           |                   |         |           |
|---------------------------|-------------------|---------|-----------|
|                           | Most Likely Value | Minimum | Maximum   |
| Annual Hours              | 2032              | 2032    | 2032      |
| Agent Offered             | 1,000,000         | 990,000 | 1,100,000 |
| Average Handle Time (AHT) | 460               | 430     | 500       |
| Productive Shrink         | 15%               | 13%     | 17%       |
| Non-Productive Shrink     | 20%               | 18%     | 22%       |
| Occupancy                 | 85%               | 88%     | 83%       |

By replacing single value inputs (example, AHT = 460 seconds) to a range (AHT could be as low as 430 or as high as 500) - we take the **initial step to acknowledge uncertainty.**
![AHT described by a PERT distribution](AHT-PERT.jpg "AHT described by a PERT distribution")
Next, to generate a Monte Carlo simulation, we must assign a probability distribution to the minimum and maximum range. Distributions can be either discrete or continuous, and the distribution type can vary based on the type of exhibited by each variable (normal, beta, erlang, Bernoulli, binomial, etc). Determining the distribution depends on data sampled from your environment. In the case of average handle time with a "most likely value" = 460 seconds, you could download call detail from the ACD to find the how often you have very short calls and very long calls, and plot the frequency to create a manually binned distribution, or apply the appropriate curve (erlang, normal, beta, etc). A [PERT distribution](https://en.wikipedia.org/wiki/PERT_distribution) (often used in project planning) is similar to a triangular distribution, allowing you to create a minimum, most likely and maximum value, but smoothing the distribution.

But for AHT, a [PERT distribution](https://en.wikipedia.org/wiki/PERT_distribution) as such may not represent the true distribution of the length of your calls. As described in a Call Centre Helper article titled "[How is Average Handling Time (AHT) Distributed? It is Not How you Think!](https://www.callcentrehelper.com/how-is-average-handling-time-distributed-it-is-not-how-you-think-97688.htm)" - we know there can be significant numbers of short calls and few (but meaningful) very long calls. By graphing a specific call types distributions, we may find alternative distributions may better inform how we apply the range to our capacity model. Modified PERTs, ERLANG, or simply binning call lengths and examining what leads to either longer or shorter call lengths may better inform how a bucket of calls may be distributed. ![A Modified PERT for AHT over the course of a day](AHT-ModPERT-JohnsonB.jpg "A Modified PERT for AHT over the course of a day")Finally, when establishing ranges of outcomes for variables such as handle time in Monte Carlo simulation, keep in mind the **time horizon you are modeling against**. For example, while a single day of calls for a group may have many calls that are \<2 minutes, with the longest calls extending to 20 minutes, following a curve illustrated by the [Modified PERT](https://en.wikipedia.org/wiki/PERT_distribution), with an average of ~7.5 minutes, distribution should not necessarily be leverage to simulate all possible outcomes for an aggregated month or year of results when doing capacity planning. Simply because a **single day** may have 5% of calls \<60 seconds **does no**t necessarily translate to a "5% chance of AHT being \<60 seconds" **for the year.**

After establishing our minimum and maximum ranges for input variables, we can leverage one of many software plugins (or design your own) to run 1000's of iterations of outcomes based on the probability variance of each input.

##### Running Capacity Simulations

![Simulation of calculating FTEs required](Simulation.gif "Simulation of calculating FTEs required")
By introducing ranges to outputs we can begin presenting staffing models which permit us to conduct risk analysis. Much is written on [Monte Carlo methods](https://en.wikipedia.org/wiki/Monte_Carlo_method) and why simulation is leveraged across many industries to forecast a wide range of possible outcomes. For contact centers and capacity planning, running simulations which incorporate variance ranges for volume, handle time, shrink and additional inputs allow us to express a *range of outcomes*, and the associated staff required to cover those possible outcomes.

After loading up a capacity model with your ranges and distributions, you can simulate 1000's of outcomes, and graph a range of staffing possibilities, expressing the % of outcomes that range covers. A Monte Carlo simulations will randomly draw a number from each input distribution and calculate the result. As the simulation repeats and saves these individual iterations, we can approximate the probability distribution of the final result. In our case for capacity planning, the output results we're seeking to express is a range of FTEs required to maintain the appropriate service level.
![Outcome plot of FTEs required](../raw/assets/mediawiki/Outcome_Plot_FTEs.jpg)
The output of FTEs required when compiled by running 1000's of iterations can be displayed graphically, with the 50% mark representing the mid-point of all possible outcomes based on our ranges for each input value, and the associated distribution of those ranges. In the example displayed to the right, after running 5000 simulations, we see our total FTE's required:

- Mean of 222
- Min 196
- Max of 253

With a table representing the percentiles of outcomes covered by a specific staffing level:

- 237 FTE covers 95% of the possible outcomes
- 228 FTE covers 75% of the possible outcomes
- 219 FTE covers 35% of the possible outcomes

and so on.

By expressing a range of outcomes, simulations can facilitate a change in how we introduce a new goal for the Future WFM model: [[wfm-goals-risk-ratings|Risk Ratings.]]

#### Long-Term, Mid-Term & Short-Term Forecasting

![Forecast Cycle](WFM_Forecast_Cycle.png "Forecast Cycle")
The core forecasting responsibility is to conduct functional and analytical processes which take historical data and information for use in predicting what will happen in the future. This process is key to the ability to correctly schedule and staff to meet customer's expectations of their call being answered in a timely fashion. Forecasting activities are generally broken into several time-based components; Long Range, Mid-Range, and Short Range Forecasts.  The process is cyclical and continuous:

- **Long-Term:** Annual budgets and capacity plans are established for year / years. Annual plans are then broken down to monthly and/or weekly plans
- **Mid-Term:** Monthly and/or weekly plans are leveraged to establish more granular planning for supply (agent staffing, agent hiring, and staff reallocations) and for demand forecasting
- **Short-Term:** Daily plans are generated from the mid-term data. These daily plans are then loaded into a WFM software package to further separate the data into interval level arrival patterns at 15-minute, 30-minute or 60-minute segments

After the data is separated to its most granular planning level and the associated time period passes, "actual" results are collected. Variance to the plan, or forecast vs. actual is analyzed, and then levered to make adjustments to future plans. This cycle repeats across time horizons, with hourly results informing a daily plan, daily results informing the short-term forecast, and short-term results informing the mid-term forecast, and so on. Ultimately, results accumulate and are leveraged when the annual planning cycle is refreshed.
![Time Series Decomposition: Addressing Seasonality](Decomposition.png "Time Series Decomposition: Addressing Seasonality")

##### Baseline, Seasonality & Trend

Key tasks leveraged through the forecast cycle:

- **Establishing baseline:** Leveraging historical data to establish baseline for agent offered call volume, handle time, shrinkage, occupancy, staffing available/attrition
- **Accounting for seasonality:** Leveraging historical data to isolate seasonality in data sets. Seasonality references patterns which repeat over a period of time. Seasonality exists in intraday, daily, weekly, and monthly time horizons.
- **Identify trend:** After isolating seasonality, trend defines whether a time series data set is increasing, decreasing, or remaining flat.
- **Noise:** After decomposing a data set (isolating seasonality and trend), and residual difference is known as noise, or the random variance in the series.
- 

##### Trends and Driver Variable Correlation

After isolating trends, WFM forecasters should validate (or seek new relationships) with variables that may be informative in predicting future trends. A common example would be a relationship between "customers" and "calls offered". In this example, a call group may have a historical understanding of how any growth or decline in the number of customers a company has correlates strongly with calls offered to the contact center.

A second example leveraged is trending average handle time for a unit once a new class of employees enters production. New employees have a learning curve that describes the time required to become proficient in handle time. Mixing new employees with tenured employees has a predictable impact on overall handle time, and should be accounted for in the forecast models.

##### Event Driven Adjustments

After establishing a baseline, accounting for seasonality & identifying trends, forecasting must incorporate events into the forecasting model. Examples of events might include:

- Planned product mailings (promotions, change in service plans, etc)
- Marketing events
- Rate changes
- New product enchantments or releases
- Known events (predictable weather event, ie hurricane)

When incorporating known event drivers into the forecast, the critical question for forecasters is whether the event is already baked into the established baseline or seasonality trend. For example, if a rate change happens every January and is known to drive 10% more calls for the month, and the historical baseline / seasonality already incorporates this 10%, then we do not add this in again for the following January, as it should be reflected in the trend. However, if a rate change was last done 5 years ago, and our baseline only leverages the last 3 years of January patterns, we would need to incorporate into the next cycle.

Event driver adjustments should be surfaced through collaboration with the appropriate departments. If marketing regularly drops material that influences call volume, forecasters should have marketing join forecast review sessions as to capture pertinent data from their department.

##### Variance Factor

![Variance Factor](5percent_overhead.jpg "Variance Factor")
New to the future workforce operating standard is the introduction of a **variance factor**. Variance factors can be thought of as an extension of the Monte Carlo simulations in budget planning. Rather than planning to a single output such as "FTEs Required" for a set of inputs (Volume, AHT, Shrink & Occupancy), the Monte Carlo simulations suggest a *range of possible FTEs Required.* In the previous example, where we expressed 222 FTE Required in a model, representing the mid-point (50% mark) of outcomes, we can think of a variance factor of 5% equating to a total required of 233 FTE.

Introducing a variance factor is much the same as introducing a staffing absence factor when we build schedules in our WFM software package. If on a given day the workload demand indicated we would need 202 FTE to service the volume and account for other off-phone activities, and we normally experienced a 10% absence rate on that day of the week, we incorporate that into the plan, elevating the staff level to 222 FTE.

Incorporating a variance factor can be addressed both from a "top down" perspective leveraging the Monte Carlo simulations described in capacity planning, and from a "bottom up" perspective, examining variance at the lowest interval level. In fact, for agent offered call volume at the most granular level, we can mathematically describe the minimum interval variance possible leveraging a simple formula. Described in the [[wfm-goals-variance-goals|Goals Section]] - we see the following formula, which represents the **minimum absolute error rate:**![Minimum Interval Variance Plot](Min-error-rate-curve.jpg "Minimum Interval Variance Plot")![](Min_error_formula.jpg "Min_error_formula.jpg")
Using the formula to calculate the minimal absolute error rate, we get a sense of the degree of natural error that can not be “forecasted away” through any means.  The formula can easily be leveraged to plot a minimum interval variance rate based on the call volume forecasted for any interval, with an example pictured to the right. For agent offered call volume, this minimum variance can be quite significant for very small queues, but reduces rapidly to +/-8% for 100 calls per interval, +/-5% for 250 calls per interval and +/- 4% for queues with 400 calls per interval.
![Service Level Risk](Service-level-risk.gif "Service Level Risk")
Depending on the volatility of average handle time, one may consider a variance factor which incorporates variance factor for AHT. While not as easily described by a formula similar to Forecast Call volume, AHT variance patterns can be exposed by extracting AHT fluctuations from interval WFM detail. Having a sense of how volatile AHT is will influence the type of variance overhead you wish to build into your forecast models.
![Expense Risk](Expense_Risk.gif "Expense Risk")
When considering granular forecast variance at the interval level, it is important to recognize the variance is both positive and negative to the mean target staff value. All other factors remaining equal, 50% of the time the variance factor would swing "against" your plan, requiring additional staff to service the call volume. When the variance swings against you and you are not staffed adequately for the interval, you introduce service level risk, as illustrated to the right.

The other 50% of the time, you would get a favorable variance, leaving you with more staff than is required. If your minimum variance was calculated at 5% and you simply added 5% overhead to your capacity plan, you would likely have some financial inefficiencies introduced. Hence, to adequately manage both sides of variance, you need a mechanism for optimizing your staffing plans in real time with automation.

Finally, some members of an organization may advocate for "letting the results level themselves out" - in other words, your positive and negative variances will offset. While your aggregate service level results to benefit from the favorable variance, if you staff exactly to net-zero, with no variance overhead, you would mathematically miss service level. This is due to the nature of the power of one and the slope of the service level curve, best described when examining service level results when a queue is +5 overstaffed and -5 understaffed. While the +5 overstaff may deliver 10 ppts higher service level for that interval, the corresponding -5 understaff will always impact service level greater than the 10 ppts. ![Service Level + and - 5 FTE](Service-level-plus-minus-5.gif "Service Level + and - 5 FTE")This can be demonstrated by an example where a queue receiving 400 calls per interval, 500 second AHT and 80%/30 second target requires 120 agents. This will yield a service level of 82%. If we remove 5 agents from the staff, we see we end up with a service level of ~50%, losing 30ppts of service level. Yet, when overstaffed by the same 5 agents, we only receive a service level benefit of ~12ppts.

##### Capacity Optimization

To build variance factors into forecasting allows us to combat the legacy problem of fragile capacity plans. Yet, WFM will likely meet resistance from finance organizations and leadership if the introduction of variance factors are viewed simply as unnecessary overhead, introducing additional expense to the organization. And without a methodology to address for "favorable" variance, where supply is in excess of demand, one would correctly view this as potential waste.

To solve fragile capacity plans the forecasting team needs a two-prong solution:

1.  Introducing variance factors, leveraging simulations as described, and
2.  Automating the optimization of the capacity plan in real-time, when variance factors lead to overstaffed intervals.

To account for automation, we must leverage tools to monitor in real-time when variance leads to overstaffing, and take actions (again, in real-time) to allocate the overstaffed agents to productive activities. These activities could be thought of as:

- Off-phone training
- Coaching / development activities
- Reallocation of resources to additional work queues (email, Backoffice, call-backs)

By leveraging automation to reassign activities in real-time, your plan can be fully optimized, resulting in protecting service level and optimizing expenses. In turn, by reassigning resources to conduct activities normally accounted for in productive shrinkage, the WFM team can reduce the percentages incorporated into shrink capacity plans. By shifting the positive shrink variance into time harvested from favorable demand variance, your plan becomes more resilient, delivering against a third (and often neglected) area of agent development. This area is discussed further in Schedule Generation processes below.

##### Volatility Factors

Beyond minimal interval variance, one should consider how to incorporate volatility into the build-up of capacity plans. Incorporating a volatility index or factor into a call center demand forecast is a helpful way to account for fluctuations in call volume due to external events or changing market conditions. A sample approach to doing so is as follows:

1.  **Identify relevant volatility factors:** Start by identifying the volatility factors that may impact your call center demand. These could include macroeconomic indicators, industry-specific factors, or company-specific events. Common examples are stock market indices, changes in regulations, and product launches.
2.  **Collect historical data:** Gather historical data on the identified factors and your call center demand. Ensure that the data is collected at the same frequency and time frame as your forecast, such as daily or weekly.
3.  **Analyze the data:** Conduct a statistical analysis to determine the relationship between the volatility factors and call center demand. Common methods include correlation analysis, regression analysis, or time series analysis (e.g., ARIMA or exponential smoothing models). You may also want to use machine learning techniques like neural networks or random forests to capture complex relationships.
4.  **Incorporate the volatility factor into your forecast model:** Based on your analysis, incorporate the volatility factor(s) into your forecasting model. This could involve adjusting your baseline forecast for each period based on the expected change in the factor(s), or including the factor(s) as an input to your model.
5.  **Monitor and adjust:** Continuously monitor the accuracy of your forecast and the relevance of the volatility factor(s). Adjust your model as needed to ensure it remains accurate and responsive to changes in the external environment.

#### Productive Shrink & Non-Productive Shrink Shrinkage

Another concept new to the WFM operating standard is the segmentation of "productive" vs. "non-productive" shrinkage inputs. While the capacity planning to determine FTEs required remains the same whether segmenting shrink or not, by assigning shrink categories to either "productive" vs. "non-productive" activities, we enable examining trends that lead to agent retention and attrition.

Shrinkage factors in contact centers can run from the mid-20% range up to the high-40% range, depending on a wide range of factors. When productive and non-productive shrink values are aggregated to a single planning number, we have limited vision on whether the value represents "good" or "bad" trends in performance. As an example, take two call segments:

- Call Group A: 35% Shrink
- Call Group B: 30% Shrink

On the surface, call group B appears to have a "better" shrink result than A. However, if we examine the categories leading up to each total:

| Scenario 1         | Call Group A | Call Group B |
|--------------------|--------------|--------------|
| Training           | 3%           | 1%           |
| Coaching           | 3%           | 1.5%         |
| Planned PTO        | 6.5%         | 3%           |
| Meetings           | 3%           | 1%           |
| Breaks             | 6.25%        | 6.25%        |
| Absenteeism        | 6%           | 9%           |
| Disability         | 2%           | 2%           |
| Unaccountable Time | 2%           | 3%           |
| System Issue       | 1.25%        | 1.25%        |
| Early/Late Arrival | 2%           | 2%           |
| **TOTAL**          | 35%          | 30%          |

In the case above... we see significantly higher investments in training and coaching in call group A, along with lower absenteeism and accountable time. Group B may have 5pts lower total shrink, but non-productive shrink is 3pts higher in absenteeism and 1pt higher in unaccountable time. Less investments are made in group B in the areas of training, coaching and meetings. While group A may be running a higher shrink, viewed "negatively" - in fact their results are more desirable than group B.

Yet, the case could be just as easily reversed, where B is in fact a more desired result (lower non-productive categories like absenteeism and unaccountable time, and higher productive categories such as training and coaching):

| Scenario 2         | Call Group A | Call Group B |
|--------------------|--------------|--------------|
| Training           | .5%          | 2%           |
| Coaching           | 1%           | 2.5%         |
| Planned PTO        | 3%           | 3%           |
| Meetings           | 1%           | 1%           |
| Breaks             | 6.25%        | 6.25%        |
| Absenteeism        | 12%          | 7%           |
| Disability         | 2%           | 2%           |
| Unaccountable Time | 5%           | 3%           |
| System Issue       | 1.25%        | 1.25%        |
| Early/Late Arrival | 3%           | 2%           |
| **TOTAL**          | 35%          | 30%          |

To drive transparency between "good" and "bad" shrink, we segment shrinkage into productive and non-productive categories by simply taking an inventory your off-phone agent states and categorizing into two buckets:

| Productive Shrink | Non-Productive Shrink        |
|-------------------|------------------------------|
| Training          | Absenteeism                  |
| Coaching          | Disability                   |
| Planned PTO       | Unaccountable Time           |
| Meetings          | System Issues                |
| Breaks            | Leaving Early / Late Arrival |

Now, leveraging scenario 1 above, we see the following shrink results:

| Scenario 1            | Call Group A | Call Group B |
|-----------------------|--------------|--------------|
| Productive Shrink     | 21.75%       | 12.75%       |
| Non-Productive Shrink | 13.25%       | 17.25%       |
| **Total Shrink**      | 35%          | 30%          |

It becomes clear that group A has more desirable results than group B in scenario 1. If we repeat the process for Scenario 2:

| Scenario 2            | Call Group A | Call Group B |
|-----------------------|--------------|--------------|
| Productive Shrink     | 11.75%       | 14.75%       |
| Non-Productive Shrink | 23.25%       | 15.25%       |
| **Total Shrink**      | 35%          | 30%          |

Where in scenario 2, group B is investing in people at a higher relative rate than group A, while simultaneously maintaining lower non-productive time.

In the future WFM standard, enabling productive vs. non-productive shrink is a straight-forward exercise of categorizing time into two buckets, and incorporating this view into your planning data. By showing two extra lines in capacity calculations by segmenting these codes, we can leverage productive & non-productive shrink values to uncover correlations between investments in agents and attrition rates.

#### Occupancy Threshold Limits & Multi-skilled Calibration

The future WFM standard also highlights the importance of occupancy threshold limits, and outlines the establishment of processes that test whether a capacity plan is at risk due to aggressively set occupancy inputs. As a function of the forecasting role, we establish a testing protocol for exposing:

- Actual occupancy input for a call segment
- Theoretical maximum occupancy to achieve service level
- Occupancy discount, the gap between the actual input and theoretical maximum

Further, this standard sets out conduct multi-skilled calibrations, the need to look at occupancy outputs (the actual occupancy of a call segment after a time period has passed) and compare these values against the actual service level achieved. This is done in multi-skilled call groups to further support what occupancy value can be achieved without creating risk to the overall capacity plan.

##### Occupancy Threshold Limits

All contact centers must leverage occupancy planning assumptions to maximize operational efficiency. Traditional WFM planning attempts to get the occupancy "just right" - a task far more difficult than is understood by many. And getting occupancy wrong can have serious consequences to an entire customer service organization. Set your occupancy too low, and you introduce costly waste through overstaffing. Set your occupancy too high and you your service level goals will be missed.

A well-known fact is that missing your service level leads to long wait-times for your customers and negatively impacts customer satisfaction. When service levels are missed frequently, your customers take their business elsewhere.
![[Power of One Tool](https://tedlango.shinyapps.io/powerofone/)](Occupancy_Max_Erlang.jpg "Power of One Tool")
Less understood is the material impact occupancy has on your employees' well-being. When occupancy is running too high, employees begin to experience burn-out. And employee burn-out leads to:

- Longer call handle times
- Higher absence rates
- Increased disability claims
- Lower employee moral and satisfaction, and
- Most significant - **employee attrition**

To understand the occupancy threshold limit, we look at three variables at the lowest interval level:

- Agents Calls Offered
- Average Handle Time
- Service Level Target

And calculate the maximum occupancy leveraging either an Erlang-C calculation or simulating with Poisson and EXP functions in excel. To do so, one can examine the [Power of One Erlang-C Tool](https://tedlango.shinyapps.io/powerofone/) constructed with R-Studio and hosted on Shinyapps or can construct the calculation leveraging Excel:
![Occupancy_Max_Erlang_Excel2.jpg](../raw/assets/mediawiki/Occupancy_Max_Erlang_Excel2.jpg)

To create an excel version to test your occupancy limits, leverage the following formulas:

**Input Values**

- A: Calls per interval
- B: Interval Seconds (ie a 30 minute interval = 1800 seconds)
- C: Call Duration (AHT in seconds)
- D: Number of Agents (leave blank - this will be the final step)
- E: Target Answer Time: if your service level is 80% in 30 seconds, enter the seconds here)

**Working Values - Calculations**

- F: Traffic Intensity: =(A/B)\*C
- G: Agent Occupancy = F/D
- H: Erlang-C Function = +POISSON(D,F,FALSE)/(POISSON(D,F,FALSE)+(1-G)\*POISSON(D-1,F,TRUE))
- I: SLVL (Service Level) = 1-H\*EXP(-(D-F)\*E/C)

**Results**

- J: Agent Occupancy = G\*100
- K: Immediate Answer = +(1-H)\*100
- L: Service Level = I \*100
- M: Average Speed of Answer = +H\*C/(D\*(1-G))
- N: Calls Per Productive Half Hour = =A/D

After entering your variables A, B, C, E and writing the working value equations, you can enter values in cell D until you have sufficient agents staffed to exceed your service level target:
![Excel_max_occ_gif.gif](../raw/assets/mediawiki/Excel_max_occ_gif.gif)

In the example above, we see 70 agents gets us above 80% service level (assuming that is our target). The resulting Agent Occupancy (89.3%) then becomes the theoretical maximum occupancy possible for this interval. As we begin to understand an average interval occupancy, we can establish some initial parameters around whether occupancy is set too high or too low, expressing points of discount from the theoretical maximum. A 5 ppt and 10 ppt discount from maximum is the starting point for testing whether occupancy assumptions are contributing to capacity plan risk:
![Occupancy Discount](../raw/assets/mediawiki/Occupancy_headroom.jpg)

The second step to testing occupancy threshold limits is to expand from an "average interval" to mapping out a full day (or days) of interval arrival patterns. The length of your hours of operation, days of week, and the associated distribution of traffic can easily skew the "average interval" view in establishing occupancy thresholds. After understanding how traffic intensity, your service level objective and how demand is distributed, we can next test with a historical review. This is particularly useful in multi-skilled call groups, where occupancy levels can be influenced by the complexity of cross-skilling, and the frequency in which skill assignments are changed.

##### Multi-skilled Calibration

Conducting multi-skilled calibration helps further refine whether occupancy levels are introducing risk into your capacity planning. This is conducted after historical results are generated and requires you to source the resulting occupancy for a call group and compare it to the service level delivered for that time period. It is recommended that when initially conducting this analysis, you export data on a weekly basis for calibration. As you develop confidence in the analysis, you may consider reviewing monthly results.

By extracting and comparing occupancy results and service level results, it becomes easy to identify occupancy results that are associated with achieving service level:
![Calibrate-weekly.jpg](../raw/assets/mediawiki/Calibrate-weekly.jpg)

We see weeks where service level is green, or close (ex. 19-Mar), but not significantly overdelivered (ex. 26-Feb). Weeks more than 1 to 2 ppts above or below should be excluded. When we examine weeks where service level was achieved (+/- 2ppts) we are able to uncover what occupancy levels were sustainable when delivering appropriate service level results.

By leveraging the both limit testing and historical calibration, we can begin to assess whether an environment has planning inputs for occupancy values that are too aggressive introducing risk to the capacity model. These data points can also be leveraged to further evaluate impacts on agent attrition; are hot occupancy results leading to agent burn-out and employee attrition.

#### Forecasting Attrition: Employee Retention and Turnover Models

Traditional WFM processes have historically trended attrition rates as part of the forecasting process. Given that the key output of forecasting activities is designed to inform the FTEs required at any given time (next interval, next week, next month), the logical component to compare to the FTEs required is the FTEs available. The difference between FTEs required and FTEs available is commonly referred to as "net staff" or "net line". A positive net staff value indicates you potentially have excess staff, a negative net staff indicates you potentially have a staff shortage.

To begin shifting from trending attrition to predicting attrition, the future WFM model introduces processes to **forecast attrition.** Predicting the rate at which employees are likely to leave (or stay) is a logical extension of predicting our core time series data associated with call volume, handle times, shrinkage and occupancy. The same methods we leverage for the demand side can be expanded to forecast the supply side:

- **Establishing baseline:** Leveraging historical data to establish baseline for agent attrition
- **Accounting for seasonality:** Leveraging historical data to isolate seasonality in data sets. Seasonality references patterns which repeat over a period of time. Seasonality may exist if agents are regularly hired/released around particular periods of time
- **Identify trend:** After isolating seasonality, trend defines whether a time series data set is increasing, decreasing, or remaining flat.
- **Noise:** After decomposing a data set (isolating seasonality and trend), and residual difference is known as noise, or the random variance in the series.

After segmenting baseline from any seasonality in attrition, consideration should be given for any event drivers. Examples might include:

- A reduction in workforce due to an unplanned business segment reduction
- A reduction in workforce due to shifting of work to an outsourced partner
- A migration of work and the associated workforce to a different department / partner

When isolating for any event drivers, WFM can begin to focus on attrition trends and develop hypotheses on what other variables may be correlated to the attrition trend. The list of potential variables is long, as employee turnover has many factors, both internal and external to the organization. A starting list might include:

- Occupancy
- Coaching
- Training
- Tenure
- Location
- Office/Hybrid/Remote
- Supervisor
- Mandatory Overtime
- C-Sat Scores
- Shift (Desired vs. Actual)
- Skills (# of) and skill types

The future WFM standard sets forth a framework to identify factors to study for correlation, and ultimately seeks to isolate variables with strong correlation relationships to prove causation. Contact centers have the strongest data sets to understand relationships between employees and employers, and can leverage those data sets to understand relationships between employee burnout and attrition, employee engagement (coaching, training, meetings) and attrition, and a vast number of other variables which can be analyzed and isolated to develop causal models.

The processes and approach to forecasting attrition will be incorporated into the new WFM standard, but will have a distinct set of documents, tools, tests and discussions on how to address. Within this wiki, we are dedicating another set of resources to address this in deeper detail.

#### Vacation & PTO Allotments

Forecasting processes include assignments of vacation/PTO slots, generally done annually with the budget process, and refreshed quarterly. The future WFM standard does not propose change to the core traditional processes, which typically are represented by a series of steps:

- Budget process is iterated to approximate final stage, typically in November-December
- Forecasting team has identified the approximate days employees are eligible for PTO for any given call segment
- Productive shrink incorporates this value in the budget planning
- Forecasters separate hours by day/week available to bid against
- Process is initiated to rank employees (performance, tenure, or combination) for queuing time-off requests
- Bid is initiated to allow employees to select days off based on rank order

Many additional factors may be considered in the Vacation bid process, depending on a company's policies:

(Insert company specific processes for PTO Allotment)

### Scheduling Processes

Scheduling involves the calculation of staffing requirements from forecast data, and generating "schedules" which are distributed to employees. The traditional goal of the scheduling resources is to generate schedules as efficiently as possible in order to maintain consistent and planned service level across all 30 minute intervals (or 15 minute if your WFM software scheduling package is configured as such). Supplemental responsibilities include maintaining data and business requests that impact schedules, such as time-off requests and off phone events such as coaching sessions or taking a training course. These events require schedules to be updated with this information so as to maintain control over events that remove resources from the phone. Traditionally, the act of scheduling activities was done ahead of time, requiring significant effort to plan the right types of activities at the right time. Often, due to variance in the plan, scheduled activities would require adjustments or be cancelled altogether in the name of making service level.

Legacy scheduling processes focused on maximizing three goals:

1.  To optimize the schedules and activities of the people servicing our customers, ensuring the optimal FTEs in order to maintain Service Level (optimal customer experience),
2.  To optimize the schedules and activities of the people servicing our customers, ensuring the optimal FTEs in order to manage costs (optimal expense), and
3.  To deliver internal business needs of scheduling breaks, coaching, training, lunch and employee requests while our still balancing expense and customer experience goals.

![Employee First: Service Profit Chain](Employee-first-chain.gif "Employee First: Service Profit Chain")
Unfortunately, the internal needs of the business for critical tasks such as coaching and training were often sacrificed in the name of maintaining service level and optimizing expenses. Hence, the investment in employees, who directly impact both customer experience and operational expense, are the last to be cared for.

In the Future WFM Operating Standard, we make **significant changes** in our **approach to scheduling processes**. In the new approach, scheduling processes **focus first on the employee's needs**, which in turn drives improved customer experience results, and lowers operational expenses. This model reflects [Putting the Service-Profit Chain to Work](https://hbr.org/2008/07/putting-the-service-profit-chain-to-work), originally published in 1994 by James L. Heskett, W. Earl Sasser, and Leonard Schlesinger,[^1]

> *"Top-level executives of outstanding service organizations spend little time setting profit goals or focusing on market share, the management mantra of the 1970s and 1980s. Instead, they understand that in the new economics of service, frontline workers and customers need to be the center of management concern. Successful service managers pay attention to the factors that drive profitability in this new service paradigm: investment in people, technology that supports frontline workers, revamped recruiting and training practices, and compensation linked to performance for employees at every level."*[^2]

 Two important factors in the Future WFM Operating standard:

1.  Focusing WFM efforts on the employee first does not imply we do so at the cost of either the customer experience (service level) or the optimization of schedules to optimal expense. In fact, the approach enhances both customer experience and expense management.
2.  The processes outlined below are enabled by resilient capacity planning and new technology solutions focusing on automation techniques benefiting the employee.

The building of resilient, risk assessed capacity plans, and the ability to leverage technology to automate real-time scheduling activities are required to fully recognize the benefits associated with repositioning employee-first scheduling processes.

#### Shift Design, Gap Analysis, Bids & Backfill Recruiting

![Schedule Quality Index](Schedule_quality_index.jpg "Schedule Quality Index")
Shift design is the process schedulers take to simulate what types of shift patterns best align to the projected arrival patterns in the contact center. This process is conducted by creating various types of shift patterns and analyzing how well the shifts "fit" the demand curve for each day of the week. The fit can then generate a score reflecting the tightness of the fit against the demand curve, or [[wfm-goals-schedule-quality-index-goals|schedule quality index]]. Below outlines a 4-stage cycle to facilitate shift design.

##### Determine Shift Gap

The initial step in shift design is to evaluate whether shift bidding is required at all, or if the WFM team can simply offer agent desired schedules, while still delivering service level and optimized expenses.

To evaluate the gap, or how tight schedules fit a demand curve requires evaluation of:

- the hours of operation by days of week you service demand
- the arrival pattern of traffic by hour / day of week,
- company policies for when employees can work, and
- the types of shifts you design.

![Shifts desired vs. shifts needed](Shift-Overlap_-_Color.jpg "Shifts desired vs. shifts needed")
After outlining your hours of operation, arrival patterns and company policies, shifts can be built to develop the optimal fit. Designing shift patterns can be viewed from two perspectives:

- what works best for the company
- what works best for individual agents

Following the employee first model described in the previous section, the Future WFM Operating Standard advocates for **developing shifts by first seeking input from each frontline agent**. By polling each agent for their optimal shifts (collecting at least 2-4 desired patterns from employees) - we begin a cycle by identifying the gap between **what shift the employees desires** and **what the company needs**. This cycle encourages open engagement across multiple parties; the agents themselves, workforce management, operations management, recruiting and human resources.

When polling employees for desired shift, it critical that a high degree of transparency exists, exposing the cycle described in this section. Employees need to understand that while we're positioning WFM as "employee-first" - there are realities to address. The overall objective should be expressed as a strong desire to provide the shift that works for the employee. Yet, the organization may not be able to offer everyone the exact shift they desire; if you are open 7 days per week, 24 hours per day, and everyone wishes to work 9-5 Monday through Friday, a compromise must occur. Explaining that the poll is leveraged to understand the gap, followed by a cyclical process that seeks to close that gap, is critical to addressing agent attrition. Employees should understand whether a gap exists, and if significant, that formal bid process is conducted. This bid process is followed by opportunities created through backfilling slots open through attrition, and that their vacated slots ultimately are filled by onboarding new hires.

However, before conducting the bid, scheduling and operations should evaluate the magnitude of the gap and evaluate the schedule quality index if agents are offered their one of their desired schedules. For example, if 95% of agents can get the schedule they wish, and you evaluate your SQI as \>90%, you have a **significant opportunity to simply distribute schedules without a full bid**. The ability to do so is further informed by the **resilience and risk-rating of your capacity plan** and number of **real-time automation rules** in place to dynamically deliver training, coaching & schedule adjustments as well as dynamically offer time off and request overtime. A resilient capacity plan backed with real-time automation may facilitate justification for accepting a lower agent match-rate and SQI.

##### Shift Bids

![Shift Bid Cycle](../raw/assets/mediawiki/Shift-Bid_Cycle.jpg)
If after completing a gap analysis, too significant a gap is present, shift bidding is conducted to align agents with the shifts needed for servicing customers. This standard advocates for performance based or performance + tenure based bidding, where tenure may be leveraged as a component (or tie breaker) incorporated into an agent's performance. Unless restricted by legal or union requirements, the Future WFM Operating Standard does not recommend tenure-only based bidding, as organizations generally seek to reward employees with factors such as excellent C-Sat scores, attendance, First Call Resolution, or other metrics which help recognize company objectives. Performance management is outside the scope of this standard, however, WFM advocates that policies leveraged to determine shift-bid order be viewed as equitable & fair.

Conducting bids requires that after shift tours are designed, that a bidding process be established to distribute the shifts. This process may be designed with a variety of tools or techniques. Frequency of these bids are determined by company/call segment, often conducted annually, or as the measure of schedule quality index drops below a threshold. It may be possible to avoid shift bids depending on how backfill bids for attrition are conducted, a direct function of agent turnover.

*(Company specific bid process)*

Clear expectations should be set throughout the employee's lifecycle (beginning during the recruiting cycle) of how often shift bids are conducted, and when the next bid is planned. Again, transparency is key to maintaining internal employee satisfaction, since undesirable schedules have traditionally been a factor leading to agent turnover.

##### Backfill Bids & Mini-Bids

Throughout the year, two scenarios arise which trigger the need for schedule adjustments:

- As employees are promoted, released, retire or resign, slots for their open shift are created
- As demand patterns change, the schedule quality index may justify a need to realign some portion of schedules.

Once a threshold of open slots are opened or a mismatch in supply and demand occur, a bid process can be initiated based again on the schedule quality index. With an employee-first approach, shifts vacated by employees can be offered through a bid process. Likewise, even with no employee attrition, it may be desirable to offer new shifts to realign some number of employees. This process mimics the full shift-bid process, but is conducted in a voluntary fashion where employees may chose to participate.

By shifting current employees into more desirable shifts through a backfill bid process, the remaining shifts inform HR & Recruiting.

##### Gap Recruiting

As attrition is forecasted, target new hire classes are proposed by WFM. As the target onboarding dates are established by the forecasting team, the scheduling team informs the open shifts needed to be filled. Timing on informing HR & Recruiting of the mix of shifts required is important; scheduling should ensure any backfill or mini bid process has completed, leaving adequate time to inform the approximate quantity of shift tours to be offered to new hire employees. Establishing the expectation of what shifts may be available to the new hire class is critical for supporting an employee-first organization.

How new hire shifts are distributed will vary based on gap needs. For example, a company may have "less desirable shifts" such as overnight shifts that are always leveraged for onboarding new hires. In other cases, a mix of weekend, evening, and weekday shifts may be needed, prompting a "training class" bid process, where shifts are distributed in a similar fashion to a full shift bid. A training class may have a end-course exam, where those evaluated with the highest scores receive their choice of shift first.

*(Company specific shift recruiting & training bid process)*

Again, clear expectations should be set during the recruiting cycle and reiterated in training of both the onboarding shift assignment process, as well as the full cycle process (how often shift bids are conducted, and when the next bid is planned). Again, transparency is key to maintaining internal employee satisfaction, since undesirable schedules have traditionally been a factor leading to agent turnover.

#### Schedule generation

##### Legacy Schedule Generation

Schedule generation is the process designed to create and distribute employee schedules. Schedule generation is company specific, usually conducted weekly or bi-weekly (occurring every two weeks), or more rarely, once a month. While an employee understands their shift from the shift bid process (or simply are assigned their desired shift if supported by the gap analysis), schedules still need to be generated to service the forecasted demand. Schedules must incorporate certain activities that require that the activity be "pre-planned", including;

- Breaks & Lunches
- Time-Off Requests
- Group Meetings
- Coaching
- Training
- Off-phone activities

Legacy schedule practices attempted to schedule all activity ahead of time, so that all parties knew when off-phone activities were to be conducted. Legacy scheduling practices also attempted to schedule to a net staffing level of zero, where some intervals that end up overstaffed are offset by other intervals which were understaffed. This concept to staffing to net zero acknowledges that there will be variance in our plan, and settles on interval variance working itself out by the end of day. Unfortunately, while the concept behind this approach was to optimize staffing levels ahead of time, the approach does not sufficiently account for the true impact variance has on the overall operation. Variance to the plan occurs continuously, and to varying degrees, across both the supply and demand side of the plan:

- Agent offered call volume always has variance at the most granular, interval level. Variance, discussed in WFM Goals, can not simply be "forecast away" - there lives a minimal level of variance an agent offered, described by a simple equation
- Handling time varies continuously; every interaction with a customer varies in length
- Agents introduce variance on the supply side; agents call in sick, arrive late or may leave early, and adhere to their planned schedule to varying degrees

These factors compound, with variance causing WFM and operations to take actions which are detrimental employee well-being:

- Short-supply of agents vs. demand leads to rescheduling or cancelling meetings, coaching, training or other off-phone activities
- Regular cancellation of events due to supply-demand mismatch leads to agents burnout, which in turn leads to higher handling time, absenteeism, and attrition
- Variance causes calls to run into breaks and lunches, triggering the need to request adherence adjustments, with agents worried about being penalized

##### Future Schedule Generation

![Optimize each interval with risk assessed plans and automation](Optimize-every-interval.gif "Optimize each interval with risk assessed plans and automation")
The Future WFM Operating Standard takes a fresh approach to schedule generation, leveraging resilient capacity planning & automation. The approach seeks to **minimize as much "pre-scheduled" activity as possible**, leveraging automation to tune capacity plans by dynamically delivering activities based on **variance as it happens.** In the new model, we pre-plan specific types of events:

- Breaks and Lunches
- Time-Off Requests
- Group Meetings

The only pre-schedule training or off-phone activities are ones requiring a **continuous significant length of off-phone time,** determined by the variance factor and risk-rating/resilience of the capacity plan itself. To successfully deliver activities in real-time, your capacity plan must have a sufficient risk-rating to account for variance, and must leverage ACD & WFM integrated automation to trigger events in real-time in response to variance. By leveraging automation, unscheduled (but planned) activities can be dynamically delivered to fine tune the capacity model, dramatically reducing the negative consequences resulting from the legacy schedule generation approach.

##### Eliminate Adherence To Schedule Metric

The Future WFM Operating Standard eliminates the traditional metrics of adherence to schedule, a draconian practice which forces agents to monitor whether or not they are "adhering" every minute of the day to activities assigned to their schedule. Enabled by [[wfm-processes-real-time-automation|real-time automation]], adherence scores are replaced with agent assisted routines that monitor the state an agent is in, and makes adjustments to support both the agent and ensure staffing levels are optimized.

The legacy practice of managing a person to an adherence metric was born out of the notion that all activities were optimized ahead of time, and that if an agent didn't execute their part of adhering to those activities at precisely the right time, that service level would be negatively impacted. This concern is valid in the legacy approach, where WFM seeks to optimize ahead of time. But in the Future WFM Operating Standard, automation is leveraged to dynamically deliver and adjust events, eliminating the need for agents to focus on whether they will be penalized if they don't take their break precisely at 10:20am. Instead, automation can easily monitor whether a call has run into a break, prompt the agent that their schedule will be adjusted to reflect as such. Or if a call ends at 10:18am, 2 minutes ahead of break, automation can prompt the agent that now would be appropriate to take their break.

Since coaching, training and other off-phone activities will be scheduled dynamically with automation, there also is no need to measure adherence to an activity presented in real-time. Finally, rules can be written to account for alerts for late arrivals, and to even log agents out at the end of shift, again, eliminating the need for measuring "adherence to schedule".

Yet, it is still important that agents arrive on time, and that they do accept dynamically assigned activities. Therefore, this standard recommends establishing thresholds of accepted behavior, and coaching to outlier quartiles based on any areas of concern. Policies and practices that address late arrivals, not taking a break when scheduled, or continuously declining to participate in dynamically delivered coaching or training sessions may align closer to the company's absence policies. If someone is consistently \>X minutes late to the start of the shift, this behavior be managed in a manner consistent with other behavioral issues, such as unexcused absences.

#### Schedule optimization

Schedules are optimized initially when designed, but once schedules are in production cycle, built, and deployed weekly (or every other week), there is an opportunity to further optimize schedules across shorter time horizons. Two processes to evaluate when an organization seeks to further optimize schedules include:

- Two week outlook process: Schedules are extracted from the WFM software package, net staff levels are examined at an interval level, and pre-scheduled activities adjusted where significant surplus/deficit situations exist.
- Day of optimization: As agents call out absent the day-of work, WFM software packages allow the reallocation of breaks & lunches to address absenteeism.

Both of these activities are recommended for review, based on an organization/call group's schedule quality index, and the automations in place to dynamically adjust staff & the dynamic delivery of off-phone activities.

#### Activity management (manual & automated)

In addition to shift generation processes, schedule generation and optimization, the scheduling role performs a series of processes under the umbrella of "activity management". These process respond to field a wide range of requests from frontline agents, supervisors, managers or other supporting organizations, such as knowledge management, learning and development or human resources. A list of examples includes:

- Scheduling, changing or cancelling training
- Scheduling, changing or cancelling coaching sessions
- Scheduling, changing or cancelling meetings
- Scheduling, changing or cancelling off-phone activities
- Borrowing / loaning employees from different call group/business segment
- Employees requesting partial or full day(s) off (Doctors, dentist, school, or other last minute needs)
- Employees requesting vacation outside the vacation bid process
- Employees requesting shift swaps
- Employees reporting they will be absent
- Employees reporting they will be late
- And many additional scenarios exist where schedulers must establish processes for managing activities impacting agent schedules.

The activity management process buckets the inventory of request types into two categories; manual processing and automated processing. This follows the theme behind schedule generation, where WFM seeks to minimize as much "pre-scheduled" activity as possible, leveraging automation to tune capacity plans by dynamically delivering activities based on variance as it happens. Hence, all activity types should be inventoried, then segmented between what can not be automated (manual processes) and those activity requests which either are automated, or can scheduled (assumed in backlog of activities yet to be automated).
![Manual Activity Management Process](Schedule-Manual-Ticket.jpg "Manual Activity Management Process")

##### Manual Activity Management

There will always be certain activity types which schedulers will pre-build into a schedule, and address any changes or cancellations of. However, we continuously seek to eliminate human intervention, as to focus schedulers on higher value activities. As an example, we will assume:

- Borrowing / loaning employees from different call group/business segment

... to be a process which requires a scheduler to manually intervene. For all such manual processes, this standard outlines a basic ticket intake system, facilitated through the application leveraged by the company to manage intake requests. The process is illustrative, but standard where a ticket is submitted through a system, validated for assignment, assigned to a work group to pick up, monitored for being assigned, and then worked through resolution.

The inventory of manual activities managed by schedulers should be periodically reviewed. Ticket types with high frequency should be evaluated for the ability to automate, freeing schedulers to focus on the most valuable activities requiring human intervention.

##### Automated Activity Management

![Automated Activity: Intake + Automated Delivery](Schedule-Automated-Ticket.jpg "Automated Activity: Intake + Automated Delivery")
In the Future WFM Operating Standard, we have a far wider array of possible scheduling activities which can be fully automated. Automation of these activities not only releases schedulers to focus on more valuable tasks, but is core to achieving an organization's most strategic objectives. The processes established to automate schedule activity management leverage a similar intake method as the manual process, but focus:

- Creating new automations to support activity management
- Feeding existing automations with content
- Adjusting automations to accommodate business needs

To illustrate how an automated activity management process works, we will assume:

- Scheduling, changing or cancelling training

... to be a process where we have already designed an automation to dynamically deliver training content. This process falls under the scenario

- Feeding existing automations with content

In this process, we leverage again a simple intake process flow to accept then new training material to be delivered to the agent pool. In this case, Learning and Development (L&D) may have a new 15-minute compliance module, required to be assigned and completed by all agents. As such, the L&D department is the customer filling out a form, supplying details about the training course, such as the link to the course, the anticipated time to complete, the priority, and the agent group(s) required to take the course.

Traditionally, schedulers would take such a request and work to manually assign the course as an activity code in each agent's schedule. Automation replaces that task and has the appropriate WFM resource load the course in an automation application, and close the request. The automation engine then dynamically monitors queue health and agent availability and assigns the training activity based on real-time queue conditions. With the automated process, the training can also be paused and dynamically re-delivered if queue health deteriorates while a session is in progress. The automated activity diagram appends the intake request with the automation engine completing 99% of the work.

### Real-Time Processes

As a forecast is developed projecting demand and schedules are designed to best match demand with agent supply at an interval level, processes leveraged in real-time address *variance to the plan* throughout the day.

Legacy WFM real-time processes placed a heavy emphasis on "adherence to schedule" and maintained processes for policing whether individual agents were in compliance with their scheduled activity. Real-time teams may have managed exceptions to scheduled activity, processing requests for relief from being penalized for their adherence. Furthermore, legacy real-time processes may have emphasized service level delivery over employee investment, with processes designed to cancel or move activities such as coaching or training as to protect service level results.

Legacy WFM practices were reactive in nature, with WFM teams responding with manual adjustments to the plan, after variance was introduced. The reactive nature results in sub-optimal supply and demand situations, and pushes the real-time teams into a defensive mode of operation.

The Future WFM Operating Standard leverages **automation**, **incident management** and **visual communication** to prioritize new processes which are **proactive in addressing variance**, while seeking to **protect investments in frontline employees**. The processes and roles supporting the real-time function leverage a **command center approach** to centralize command and control for executing real-time processes. Whether physical or virtual, the command center integrates automation, incident management and visual communication to monitor, identify, analyze, and adjust the plan in real-time to address variance. For purposes of this standard, we will leverage the term "Resource Optimization Center", or "ROC" to represent either a physical or virtual command center, where real-time processes are coordinated. The terminology for the command center varies across industries; Network Operations Centers (NOC), Tactical Operations Centers (TOC), Emergency Operations Centers (EOC) as a few examples. The terminology behind ROC is leveraged to emphasize a command center principle focused on optimizing our operations.

#### Real-Time Automation

Real-time automation processes are a critical, core component for the Future WFM Operating Standard. Without automation, WFM teams are severely hampered by the speed and volume of change being introduced at any given time. Intelligent automation enables thousands of adjustments to be executed against the plan to further optimize service level, operational expense, and investments in frontline employees.

In the future generation scheduling practices, we indicate that only activities requiring long periods of off-phone activity be pre-scheduled. Real-time automation is leveraged in the Future WFM Operating Standard to capture available time as it arises naturally through variation to deliver activities such as training, coaching, and the delivery of communications. Rather than try to pre-schedule these activities, intelligent automation continuously monitors call demand, and agent supply, and delivers these productive off-phone activities in real-time.

Real-time automation leverages integrations between the contact center's Automatic Call Distributor (ACD) and the Workforce Management software platform, reading conditional states of both supply and demand in the contact center. The automation leverages if-then decision logic rules to manage processes without human intervention. Processes include, but are not limited to:

##### Training Automation

Automated process to detect opportune moments and automatically deliver training.

Sample Rule Conditions:

- Number of Agents Available \> “X”
- Agent’s AUX State = Available
- Agent Assignment = Compliance Training

<!-- -->

- Send desktop prompt to begin training
  - “Please complete your Compliance Training. Your Phone will be set to Training when you hit Start”
- Change State to Unavailable – Training Update WFM with Training segment

Interrupt rules are embedded in the decision logic flow to ensure if another factor, such as calls in queue \> "Y", that the agent is interrupted from training, and that the training segment be flagged as incomplete.

##### Coaching Sessions

Automated process to detect opportune moments for coaching or connection sessions. Coaching automation process leverages supervisor control to specify when they supervisor is prepared to coach, and allow the supervisor to prioritize agents and the associated time block they wish to spend with each on a coaching or connection session.

Sample Rule Conditions:

- Number of Agents Available \> “X”
- Agent’s AUX State = Available or ACW
- No pre-scheduled events for next two hours
- Send desktop prompt to begin coaching session
  - "It’s time for your Coaching Session. Click Start and report to your Supervisor.”
- Change State to Unavailable – Coaching Update WFM with Coaching segment

Similar to training, interrupt rules can be embedded in the decision logic flow to ensure if another factor, such as calls in queue \> "Y", that the agent and/or supervisor is alerted and/or interrupted to protect service level.

##### Communications Delivery

Automated process to detect opportune moments and automatically deliver communications. This process permits many types of agent communication to be delivered leveraging logic similar to training:

Sample Rule Conditions:

- Number of Agents Available \> “X”
- Agent’s AUX State = Available
- Agent Communication = Review Quarterly Results Video

<!-- -->

- Send desktop prompt to begin Communication review
  - “Please take a moment to review our quarterly results at (link). Your Phone will be set to Aux (Z) when you hit Start”
- Change State to Unavailable – Update WFM system with Communication segment

Interrupt rules are embedded in the decision logic flow to ensure if another factor, such as calls in queue \> "Y", that the agent is interrupted from reviewing specified communication, and that the communication material be flagged as incomplete for this agent.

##### Aux State Conditions

Automated process to monitor agent's time in a specific Aux state which may be indicative of a problem, or support required.

Sample Rule Conditions:

- Monitors Agent’s time in AUX state (i.e. System Issues or Unauthorized AUX)

<!-- -->

- If threshold \> X, takes targeted action: Offers assistance, Provides direction, Delivers intervention
  - Primary Action: Deliver desktop prompt "You are in a system Issue Aux State, do you need technical assistance?"

<!-- -->

- If response = No and threshold continues to \>Y, trigger alert
  - Inform supervisor of agent aux state \> Y to reach out to agent.

Aux state condition monitoring should be written where the agent messaging is directed in a supportive fashion.

##### Wellness Breaks

Automated process to offer time outside pre-scheduled breaks & lunch to maintain agent wellness.

Sample Rule Conditions:

- Number of Agents Available \> “X”
- Agent’s Call State = (multiple back-to-back calls, long call(s))
  - Send desktop prompt to take a wellness break
  - “Thank you for your hard work. You deserve a wellness break.
  - Please finish your call, switch to X Aux Code, and then click start.”
- Change State to Unavailable – Break Update WFM with Wellbeing Break segment

##### Outbound Activity

Automated process to switch agents to/from outbound activities to perform call backs or other outbound activities as required by call group.

Sample Rule Conditions:

- Number of Agents Available \> “X”
- Agent’s AUX State = Available
- Agent Profile = IB/OB Blended Agent
  - Send desktop prompt to begin Outbound Calling
  - “Your assistance is needed for outbound calling. Please set your phone to Outbound after you hit Start”
- Change State to Outbound
- Update WFM with Outbound Segment

##### AHT, ACW & HOLD Assistant

Automated process to monitor agent level handle time, after call work and hold conditions in real-time to trigger assistance requests.

Sample Rule Conditions:

- Monitors AHT / ACW / Hold condition \> X
- Offer assistance
  - Send desktop prompt for targeted intervention
  - "You've exceeded time in ACW. Do you need assistance?"
- If YES, alert supervisor
- If NO, and agent state no longer = ACW in \<Y seconds, end
- Else if No, and agent state still = ACW \>Y seconds, alert supervisor

Rules should be designed to dynamically trigger for outliers quartiles or quintiles, and should be leveraged in a supportive fashion. Rules can be individually tailored for handle time limits (short or long), hold time limits (long), and ACW limits (short & long)

##### Break & Lunch Automation

In scheduling processes, the Future WFM Operating Standard proposes [[wfm-processes-eliminate-adherence-to-schedule-metric|eliminating the traditional performance of adherence to schedule]]. This does not suggest that agents not adhere to their schedule, but instead replaces the practice with real-time processes for more effective in managing both the optimization of supply & demand, and the importance of how we interact with frontline agents. Break & lunch automation processes seek to adjust these scheduled segments in real-time to address when calls run into a break or lunch, releasing the need for the agents, supervisors and WFM team members to track.

Sample Rule Conditions:

- Agent break start time is 3 minutes past and AUX State = Busy
- Send desktop prompt to leave for break upon completing call
  - “Please take your break after completing your call. Your schedule will be adjusted. Thank you for providing great customer service!”
- Agent completes call
- Change State to Unavailable – Break Update WFM with adjusted Break segment

The rules can also be run for break or lunch segments coming up, but not yet arrived:

- Agent break start time is coming up in \< 3 minutes and Agent State = Available
- Send desktop prompt to leave for break early
- “Please take your upcoming break now. Your schedule will be adjusted. Thank you for providing great customer service!”
- Change State to Unavailable – Break Update WFM with adjusted Break segment

##### Microbreak Automation

The concept of microbreaks is straightforward: an automation triggered by X consecutive back-to-back calls to allow the agent the option of a very short “breather” of Y length. It is very similar to a smart-watch or wrist device which detects you’ve been sitting too long, and for your health/well-being, you should stand, stretch, take a short walk. This automation would support the attrition product itself, since it would offer a tactical action to address burnout at a granular, real-time level.

Sample Rule Conditions:

- Agent has received 3 consecutive calls with ACD state = Available \<x seconds
- Send desktop prompt to informing of short break
  - “We see you have been on consecutive calls, please take a moment to reset.
- Agent state change to Break Aux
- Y minutes of time passes in Aux Break
- Send desktop prompt to informing end of short break
  - “Thank you for taking a breather. Click yes to acknowledge ready for next call"
- Change State to Available – Break Update WFM with adjusted Break segment

##### End of Shift Automation

Similar to lunch and break, then end of shift automated process monitors agent activity as their time to end of shift \< X minutes. This automation triggers logging agents out in order to not incur overtime, allowing the agent to leave when originally scheduled (or a few minutes early):

- Agent’s AUX State = Available
- End of Shift Time within “x” Minutes
- Send desktop prompt to leave for break early
  - “You may leave work early today. Please finish any work and then log out. Thank you for hard work today!”
- Optionally, system can be set to change agent state to logout in ACD automatically

##### Voluntary Time Off & Voluntary Overtime

Automated process to proactively solicit both voluntary time off (VTO) and voluntary overtime (VOT). Sample rule conditions can be leveraged on a variety of conditions including:

- Cumulative service level
- Future net staffing levels
- Current net staffing levels
- End of shift proximity

Sample Rule Conditions:

- Future net staffing levels \> X for next Y intervals
- Cumulative service level \> X
- Choose from optimized list of most eligible agents to offer VTO
- Send desktop alert:
  - "You have been selected for VTO. Would you like to take the rest of our shift off?"
- If Yes, logout agent, remove from eligible list and continue eligible list until eligible = 0
- If No, cycle rest of eligible list until eligible = 0

##### Late and Absence Automation

Automated process to monitor agent attendance, and to account for late arrivals and absence (no show). Process facilitates the ability for WFM to re-run intraday break and lunch re-optimization earlier, smoothing out break/lunch patterns based on both reported absences and no call/no show.

Sample Late Rule Conditions:

- Late arrival automation Auto update WFM with Late Segment for “X” amount of time, when X\>Threshold
- Notify Planner and Supervisor – (Email/Desktop/Mobile App)
  - “John Smith has not logged on. A late segment as been added to the schedule and an alert has been sent via mobile.”
  - Send Mobile Alert to Agent – “You are late logging in. Your Supervisor has been notified. Please log in or contact your Supervisor immediately.”

Sample Absence Rule Conditions:

- Absence automation Auto updates WFM with Absence Segment when no start of shift login \> “X” amount of time
- Notify Planner and Supervisor – (Email/Desktop/Mobile App)
  - “John Smith has not logged on and is absent. A absence segment as been added to the schedule and an alert has been sent via mobile.”
- If agent logs in subsequently, absence segment is removed and replaced with late segment for "X" amount of time.

##### Unauthorized Login

Automated process to monitor agent login when not on schedule.

Sample Rule Conditions:

- Agent login = yes and WFM indicates not on schedule
  - Send notification to Supervisor and Planner (Email/Desktop)
  - “John Smith attempted to login when not on schedule.”
- Optionally, automatically change agent state to logout

#### Incident management

An incident is an event that could lead to the loss, disruption or degradation of the services our organization provides to our customers. The Future WFM Operating Standard leverages an incident management process to identify, analyze, and take corrective actions to return service delivery to acceptable levels of service. While the ROC and real-time team may not be the direct fix agent for correcting the incident, the incident management process tasks the team with a standard process flow to manage incidents for the contact center organization.

Incidents can be caused by a wide range of factors, which we'll segment into planned events or unplanned incidents,

##### Planned Events

For purposes of this standard, we define an Event as a known activity or issue that will likely have direct impacts to service levels or other parts of the contact center impacting the service to be provided to customers.  As a known input, the WFM team will attempt to adjust forecasts and schedules to accommodate known events.
Examples of known events may include:

- Billing drop cycles
- Rate change events
- Promotional or Marketing events
- Scheduled maintenance or outages of services provided
- Other events, which may be thought of as unplanned, but have sufficient lead time as to be planned for. Examples might include a weather event with \> 1 day forewarning, such as a hurricane.

##### Incidents

Incidents occur when either a planned event or unplanned event that negatively impacts service level or the services being provided to our customers.  Depending on the company leveraging the Future WFM Operating Standard, some events may be more applicable than others. For example, a power utility will be far more concerned with Natural Events likely to impact power to its customer base, where a telecommunications firm may focus more on unplanned technical and equipment failure incidents:

| Natural Events                   | Human-Casued Events          | Technical Events                 | Equipment Failures           |
|----------------------------------|------------------------------|----------------------------------|------------------------------|
| Avalanche: Rock                  | Air Piracy                   | Accidental Explosion: Off Site   | Alarm System Access          |
| Avalanche: Snow                  | Arson                        | Accidental Explosion: On Site    | Alarm System Fire            |
| Blizzard                         | Bomb Threat                  | Aircraft Crash                   | Copier/Facsimile             |
| Cold Wave                        | Bomb (unexploded)            | Ancillary Equipment Failure      | Elevator                     |
| Crop Failure                     | Bombing                      | Central Computer Failure         | Heating Air Conditioning     |
| Drought                          | Epidemic: Animal             | Chemical Contamination           | Host Computer Failure        |
| Earthquake (Richter 5 or more)   | Epidemic: Human              | Dam/Reservoir Failure            | Host Computer Peripherals    |
| Electrical Storm/Lightning: Fire | Epidemic: Plant              | Derailment                       | Local Area/Wide Area Network |
| Flood: Dam Burst                 | Fraud/Embezzlement           | Explosions                       | Manufacturing Equipment      |
| Flood: Dam Burst                 | Hostage Taking               | Fire/Smoke:                      | Media (Tape, Disk, etc.)     |
| Flood: Flash                     | Human Error:                 | External                         | Parking Access               |
| Flood: Predicable/Seasonal       | Maintenance                  | Internal - Catastrophic          | Production Facilities        |
| Flood: Sea and Lake Surges       | Operation-Response           | Gas Leak                         | Security Cameras             |
| Flood: Tsunami (Tidal Wave)      | Programmers                  | HVAC Failure                     | Telecommunications - Data    |
| Fog                              | Users                        | Ice Jams in Shipping Lanes       | Telecommunications - Voice   |
| Forest Fire/Smoke                | International Strife         | Mine Failure                     |                              |
| Frost                            | Internet Attacks             | Nuclear Reactor Accident         |                              |
| Hail                             | Labor Dispute/Strike         | Power Flux                       |                              |
| Heat Wave                        | Loss of Key Staff            | Power Outage: Utility & Internal |                              |
| High Winds (70= mph)             | Media Failure                | Purchased Software Failure       |                              |
| Hurricane/Typhoon                | Medical Emergency            | Radioactive Contamination        |                              |
| Ice Storm                        | Misuse of Resources          | Road Closure                     |                              |
| Land Subsidence /Liquefaction    | Property Theft / Burglary    | Ship Accident                    |                              |
| Landslide/Mudslide               | Riot/Civil Disorder          | Sprinkler System activated       |                              |
| Lightning: Electrical Disruption | Sabotage:                    | Structural Failure of Building   |                              |
| Magnetic Storms (Sun Spots)      | External - Data and Software | Telecommunications Failure:      |                              |
| Sandstorm                        | External - Physical          | Data                             |                              |
| Snow Storm/Blizzard              | Internal - Data and Software | Voice                            |                              |
| Thunder/Electrical Storm         | Internal - Physical          | Toxic Gas Release (off site)     |                              |
| Tornado                          | Terrorism                    | Toxic Gas Release (on site)      |                              |
| Torrential Rains                 | Theft of Data/Information    | Toxic Spills (enroute)           |                              |
| Volcanic Activity                | Unauthorized Access          | Toxic Spills (on site)           |                              |
|                                  | Vandalism                    | Water: Leak/Plumbing Failure     |                              |
|                                  | Workplace Violence           | Water: Supply Limitation/Failure |                              |

##### Incident Process Flow

![Incident Management Flow](Basic_Incident_Mgmt.jpg "Incident Management Flow")
Once an incident is witnessed, reported, or is the result of a known planned event, the incident management process follows a series of standard steps:

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:---------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|    **Step**     |                                                                                                                                                                                                                                                                                                                                      **Description**                                                                                                                                                                                                                                                                                                                                      |
| Identification  |                                                                                                                        Through continuous monitoring of call volumes, service levels, staffing levels, calls in queue and longest call holding, the ROC identifies a potential incident when metrics deviate from normal operating parameters. Incidents may also be identified by by direct report via phone, email, instant messaging from frontline agents and/or supervisors experiencing an issue directly. Incidents may also be triggered by known events.                                                                                                                         |
|     Ticket      |                                                                                                                                                                                                                                                      The ROC opens a ticket through a ticketing system, capturing the initial diagnosis and default severity assignment & communicates incident launch with appropriate team members                                                                                                                                                                                                                                                      |
|    Severity     |                                                                                                                                                                                                                                           The ROC validates incident impact and classifies the incident's severity based on customer impact guidelines. Severity level may dictate an immediate escalation based on severity impact assessment.                                                                                                                                                                                                                                           |
| Fault Diagnosis |                                                                                                                                                         The ROC utilizes a method to engage fix parties, diagnose and determine when the incident occurred. Tools and methods to diagnose include a review of the current WFM IDP reports, service level impacts, communication with the call centers, remote call monitoring and monitoring communications from IT, telephony, and other relevant internal and external sources                                                                                                                                                          |
|     Actions     | Probable causes are identified and corrective actions are taken to mitigate impact to the business. Examples may include IVR broadcast messaging, reallocation of resources, all-hands-on-deck automations, securing additional resources via automation. Ticket updated to ensure continuous communication, and real-time automations checked to ensure properly functioning / not impacted by incident. Note; [[wfm-processes-real-time-automation|real-time automations]] listed in in the process section should automatically account for incident impacts - Ex. coaching and training should automatically be cancelled if an incident has created excessive call queues. |
|     Monitor     |                                                                                                                                                                                                                                                               The ROC monitors whether improvements are recognized through actions, adjusts as needed, updates ticket with actions taken & communicates status via ticket.                                                                                                                                                                                                                                                                |
|      Close      |                                                                                                                                                                                                                                                                                                  ROC closes ticket when incident has resolved and service level shows path to recovery.                                                                                                                                                                                                                                                                                                   |
|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

##### Severity Matrix

Within the initial identification of an incident, it may be difficult to assess whether the correct severity level to assign to the ticket. This standard recommends a default assignment of medium, followed by a severity assessment after the ticket is open. In some cases, it may be clear when first opening the ticket that the impact of the incident is critical, or a Severity 1; for example, all lines are down and customers are not able to reach live agents. But often, the severity requires analysis of the impact, with the severity being adjusted after the ticket is opened.

Leveraging a severity matrix allows clear guidelines around assigning the proper severity level:

|                                                                                                                                                                                            |                                                                                                                              |                                                                                                                                                                                                                                |                                                                                                                     |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------:|
|                                                                                 **Severity 1 (Critical)**                                                                                  |                                                    **Severity 2 (High)**                                                     |                                                                                                    **Severity 3 (Medium)**                                                                                                     |                                                **Severity 4 (Low)**                                                 |
|                                                                            **Business and financial exposure**                                                                             |                                                                                                                              |                                                                                                                                                                                                                                |                                                                                                                     |
|                                                               The failure creates a serious business and financial exposure.                                                               |                                The failure creates a serious business and financial exposure.                                |                                                                                   The failure creates a low business and financial exposure.                                                                                   |                                   Minimal or no business and financial exposure.                                    |
|                                                                                      **Work Outage**                                                                                       |                                                                                                                              |                                                                                                                                                                                                                                |                                                                                                                     |
| The failure causes an entire call center or multiple centers to be unable to work or perform some significant portion of their job, such as call routing, networking or facility failures. | The failure causes significant degradation to service level; however, call routing, network and facility are all functional. | The failure causes service level to slip below an acceptable threshold. All call center facilities are operational, but volume and/or resource planning does not match forecasted arrivals, causing Service Level degradation. | Does not reflect outage. Severity 4 is associated with questions, requests for information, or requests for change. |
|                                                                                     **Service Level**                                                                                      |                                                                                                                              |                                                                                                                                                                                                                                |                                                                                                                     |
|                                                                       0% due to routing, facility or network failure                                                                       |                                               \<30% sustained for \>60 minutes                                               |                                                                                                \<60% sustained for \>30 minutes                                                                                                |                                                         N/A                                                         |
|                                                                                     **Response Time**                                                                                      |                                                                                                                              |                                                                                                                                                                                                                                |                                                                                                                     |
|                                                                                     Within 5 minutes.                                                                                      |                                                      Within 30 minutes.                                                      |                                                                                                         Within 1 hour.                                                                                                         |                                                   Within two days                                                   |
|                                                                                    **Resolution Time**                                                                                     |                                                                                                                              |                                                                                                                                                                                                                                |                                                                                                                     |
|                                                       The maximum acceptable resolution time is 1 hour, after initial response time                                                        |                                      The maximum acceptable resolution time is 4 hours.                                      |                                                                                   The maximum acceptable resolution time is 1 business day.                                                                                    |                             The maximum acceptable resolution time is 5 business days.                              |

#### Intraday reforecasting & re-optimization

Intraday reforecasting and re-optimization of pre-scheduled break and lunch activities remains a core legacy process in the future WFM standard, but is enhanced with automation. As agents call in absent, depending on the specifics of each absent agents breaks & lunches, it is often necessary to redistribute the timing on breaks and lunches. With intraday absence automation, the re-optimization of breaks and lunches can be conducted earlier in the day. The legacy approach required waiting for absences to be reported, processing them in the WFM software package, and then re-optimizing.

In the Future WFM operating standard, re-optimization can be set to happen automatically, based on hours of operation and when a critical mass of employees would have arrived independent of manual call-outs.

#### Intraday traffic management

Intraday traffic management has historically been a function aligned to real-time WFM teams. As variance is introduced throughout the day, there may become needs to shift either resources or route traffic to address variance. The future WFM operating standard leverages automation to reallocate either supply or demand to smooth out variance.

For reallocation of resources within the same channel (moving agents from one voice skill to another), as much of this should be pre-designed any occur automatically leveraging the native capabilities of the core channel component. The most prevalent example of this automation is skill based routing for voice traffic in traditional voice ACDs. In this example, agents taking the calls are automatically switched between skills based on skills assigned and how those skills are prioritized on the agents profile.

When it becomes necessary to allocate resources to other channels, the operating standard again suggests automation to continuously monitor the primary channel (for example voice: calls in queue, or voice: agents available) to trigger automations to reallocate to a secondary channel when conditions are met. This is similar automations listed [[wfm-processes-real-time-automation|Real-Time Automation]].

Automated process to detect opportune moments to shift channels.

Sample Rule Conditions:

- Number of Agents Available \> “X”
- Agent’s AUX State = Available
- Agent Assignment = Email Channel Backlog

<!-- -->

- Send desktop prompt to shift to Email Channel
  - “Please shift to working email service queue. Your Phone will be set to Email when you hit Start”
- Change State to Unavailable – Update WFM with Working Email Queue

Further details of standard applied based environmental specifics (ACD & alternative channel design, channel priority, etc).

## References

[^1]: James L. Heskett, W. Earl Sasser, Leonard Schlesinger *The Service Profit Chain: How Leading Companies Link Profit and Growth to Loyalty, Satisfaction, and Value*. New York: The Free Press, 1997.

[^2]: Except from HBR article republished July, 2008:<https://hbr.org/2008/07/putting-the-service-profit-chain-to-work>
