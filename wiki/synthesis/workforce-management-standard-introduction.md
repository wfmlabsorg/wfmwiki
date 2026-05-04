---
title: "Workforce Management Standard Introduction"
slug: workforce-management-standard-introduction
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
mediawiki_original: "Workforce Management Standard Introduction"
mediawiki_revision_date: 2025-02-15
---
## What is Workforce Management?

To anyone not closely aligned with the functions of traditional contact center workforce management, let’s outline the principles behind the job function. In the simplest sense, all customer service organizations attempt to align supply and demand, where “demand” is represented by customers seeking service, and “supply” is represented by the employees providing service. Whether in a physical or virtual queue seeking service, a universally understood dynamic plays out daily; customers seeking assistance are balanced against a supply of employees providing that service. This balancing act plays out physically in retail stores, financial institutions, medical facilities, airports, rail stations – any place you find queues form to match a customer with an employee. And it plays out virtually - queues are well understood each time you pick up the phone to call your bank, cable company, airline, insurance provider, or other institution seeking assistance from a customer service department.

### Contact Centers and Traditional WFM Approach

For the past three decades, contact centers have leveraged an approach to addressing queue systems to best service the needs of customers calling for service and the most efficient way to staff employees to service customer demand. The profession first evolved by leveraging special WFM software packages integrated with the phone ACD system to strike a balance of agents scheduled to service the demand. This software manages both the scheduling side for the supply of agents and the forward predictions of the demand (or calls) at a granular level, breaking weekly and daily data down to 15 minutes or 30 minutes intervals.
![Traditional WFM balance](../raw/assets/mediawiki/Open_Source_Maturity_Curve_12192022_balance2.png)
The associated processes of forecasting and scheduling (balancing demand and supply) placed a **heavier emphasis on pre-planning** or getting supply and demand just right ahead of time. By looking out days, weeks, months, and years, the WFM team runs a continuous cycle of predicting demand and adjusting supply (agents staffed and scheduled) so that when the day arrives, the contact center has an optimized plan.

Traditional WFM teams also manage a series of processes, but with a **lesser emphasis on real-time adjustments** to the plan or **making changes in real-time in reaction to variance.** Regardless of how good the pre-planning was, there always is variance. And this variance requires a response, canceling coaching or training when call volume is coming in heavier than forecasted or when agent supply is less than planned (absences). Real-time processes might include pursuing resources that aren't staffed as expected (adherence to schedule). Or when supply exceeds demand and agents idle, WFM may try to coordinate off-phone activity to keep agents busy.

A significant limitation of the traditional approach is that contact centers are dynamic, and WFM teams often can not react fast enough to take advantage of variance with supply and demand. Supply and demand always fluctuate, yet the limited ratio of WFM teams simply can not react quickly enough to address variance optimally. A second significant limitation is that many organizations place a **heavier emphasis on pre-planning** and leverage the software available to **attempt to get staffing "just right"**. By comparing the forecasted call volume and the scheduled agent supply at 15 or 30-minute intervals, WFM and teams leverage software to manage a "Net Line" to zero - the difference between forecasted required staff and scheduled staff. Driving to a "net zero" implies you're set up with just the correct number of staff, no more, no less than what is forecasted to be required.

While getting the staff level ahead of time "just right" would seem logical, one negative outcome is that the plan becomes "fragile" or likely to break when variance is introduced. And since WFM teams cannot react to real-time variance, contact centers and WFM teams spend significant time responding to variance. This leads to a classic use case for leveraging automation and technology to address variance, much like the contact center ACD distributes the calls leveraging automation.

#### Traditional WFM Approach and WFM Labs Maturity Model™

![WFM Labs Maturity Model™](../raw/assets/mediawiki/WFMLabsMaturityModel.png)The approach described in the rest of this section aligns has been plotted on an updated [[wfm-labs-maturity-model]] . We demonstrate the culmination of processes leveraged over the past three decades to be aligned with "Level 2 - Legacy WFM Practices. An organization having defined legacy WFM processes is far superior to Level 1 - manual processes which do not leverage WFM software. Yet, the updated maturity curve outlines 3 additional levels the Future WFM Operating Standard seeks in incorporate. The maturity curve levels are described in more detail [[wfm-labs-maturity-model|here.]]

The remainder of this section examines traditional contact center workforce management leveraging our GRPI-T model, the goals, roles, processes, interpersonal relationships, and the technology WFM teams have leveraged for the past few decades.

### Traditional Goals: Service Level & Expense

For years, a WFM team has been evaluated by their ability to deliver against two primary goals: service level and operational expense.
Service level goals are easy to understand from a customer’s point of view: how long did you have to wait before being served? For example, if you are in a queue in a contact center, you’ve experienced having to wait a period before an employee can take your call.

Most contact centers define that goal as “to answer some (X) percentage of calls in some (Y) number of seconds.” An example might be an airline that seeks to answer 80% of incoming calls in 30 seconds or less. When that organization makes its goal of 80% answering in 30 seconds or less, most people calling would be generally satisfied with the response time. However, many have experienced long hold times when contacting a company due to a mismatch in supply and demand. For example, if just a few employees were absent beyond what workforce management planned for, customers could hold far longer than 30 seconds, negatively impacting their experience.

Operational expense management has long been the second goal of workforce management organizations. WFM operates many processes described below to forecast demand accurately and optimally schedule employee supply. If forecasts are inaccurate or schedules are not optimized, you may end up short-staffed, negatively impacting service level and the customer experience. Implications are severe for the reverse; if you mismatch supply and demand with excess supply (excess employee staff), expenses will increase, impacting a company’s profitability.

WFM teams establish additional goals which help enable service level and expense management.

The most common is forecast accuracy, which measures the error rates between what was forecast and the actual results. A second supporting goal measures the quality of the schedules or how tightly the supply “fits” the demand.

### Traditional Roles: Forecasters, Schedulers & Real-Time Analysts

Employees who make up a WFM team have roles segmented to align against processes, often organized against three areas:

- Forecaster Role: Focuses on forecasting the customer demand and additional factors which establish the required staff
- Scheduler Role: Focuses on generating and maintaining employee schedules to meet the requirements developed by the forecasters
- Real-Time Analyst Role: Manages the intraday variance between customer demand and agent supply

While WFM’s job roles will vary across different industries and service environments, most organizations will hire staff to conduct processes across these three segments. The segments are interconnected in a continuous circle; forecasters generate demand and staffing requirements which are handed to schedulers. Schedulers design, implement and maintain employee schedules to match the staffing requirements provided by forecasters. Once the day begins, the real-time analysts monitor performance and adjust the plan as variance to the original plan is introduced, completing the cycle. After each day ends, the process begins again.

Forecasters and schedulers work across a wide range of time horizons, where real-time analysts are focused on optimizing the business continuously.

### Traditional Processes: Forecasting, Scheduling & Real-Time Management

Workforce management's processes generally fall into three buckets:

- Forecast Processes: Processes associated with forecasting the customer demand and other factors which calculate employee staff required to service the demand.
- Scheduling Processes: Processes associated with scheduling the employee supply
- Real-Time Processes: Processes that manage the real-time variance between customer demand and agent supply

#### Forecast Processes

The core forecasting responsibility is to conduct functional and analytical processes which take historical data and information for use in predicting what might happen in the future. These processes are essential to an organization's ability to correctly schedule and staff to meet customer expectations for timely call handling.

Forecast processes traditionally include, but are not limited to:

- Annual Forecast / Budget Planning Processes
- Monthly Forecast Processes
- Daily Forecast Processes
- Intraday Forecast Processes / WFM Software Loading & Extracting
- Vacation / Time-Off Allotment Forecast Processes
- Vendor / 3rd Party / Outsourcer Forecast Processes

Across time horizons, the forecasting process seeks to determine how many forecasted Full-time equivalent (FTEs) employees are required and compare this value to how many FTEs are projected to be available. A common metric leveraged is called "net line," which looks at the difference between FTEs required and FTEs available. This metric may also be referred to as "net staff" or "net FTEs," – but for this document, we will refer to it as "net line ."The forecasting processes seek to inform what this net line looks like across different time horizons and indicate whether an organization is understaffed, overstaffed, or right-sized.

Based on the position of a net line, decisions are made. For example, suppose an organization is running a monthly forecast process, and a negative net line (short staffing) occurs several months in the future. In that case, this may trigger the need for a new hire class, reallocating staff, or soliciting overtime. Conversely, if a positive net line is projected on an intraday forecast, this may trigger the early release for employees. Traditionally, a net line was the leading indicator of whether a call center was fully optimized, balancing service level and expense.
How WFM leverages net line is an important topic addressed in detail in the future workforce management model; planning to a fully optimized net line introduces risk to the future of contact center operations.

At the core of forecasting processes is the responsibility to conduct functional and analytical procedures which take historical data and information for use in predicting with high precision what might happen in the future. While accuracy is essential in the legacy and future model, single-point precision is examined and challenged with a new approach in the future WFM model.

#### Scheduling Processes

Scheduling processes begin when the forecast team's staffing requirements calculations are updated and handed off to the schedulers. Processes center around generating "schedules," which are distributed to employees. In addition, scheduling processes include maintaining data and business requests that impact schedules, such as time-off requests and off-phone events, such as a training module. These events require schedules to be updated with this information to maintain control over events that remove resources from the phone.

These processes seek to:

- Optimize the schedules and activities of the people servicing our customers, ensuring the optimal FTEs are in place to maintain Service Level and
- Balance the internal business needs of scheduling coaching, training, breaks, lunch, and employee requests while maintaining service level goal

Scheduling processes traditionally include, but are not limited to:

- Shift Bids & Shift Design Processes
- Schedule Generation Processes
- Schedule Tuning / Re-optimization Processes
- Schedule Maintenance Processes
  - Assigning activities to schedule (training, coaching, etc.)
  - Managing change requests to schedule (time-off, swaps)
  - Handling exceptions requests (adjustments to adherence)
- Vacation / Time-Off Management Processes

For decades in contact center operations, the WFM schedule processes were designed to optimize agent supply in advance. Schedules were pre-built with fixed periods to take breaks and lunch, to conduct coaching activities, and other off-phone assignments, such as learning and development. Heavy emphasis was also placed on agents strictly adhering to their schedules.

In the traditional scheduling approach, the schedule processes emphasized balancing the business's internal needs while servicing the customers' external needs. While the employees' needs are considered in the traditional approach, their needs were usually 3rd in priority, behind the "needs of the business" and "needs of the customer."

In the future WFM model, we prioritize the agents and leverage automation for dynamically assigning activities in real time rather than attempting to optimize in advance. By taking a new approach to scheduling, the goals, roles, processes, and interpersonal relationships change significantly, yielding benefits to the entire ecosystem.

#### Real-Time Processes

Real-time processes begin at the start of each new day. Once forecasters have established the required FTE needed and schedulers have aligned the staff against the incoming demand, the real-time team manages a series of processes to ensure the plan is executed successfully. Processes seek to support that each interval, customarily defined as a 15- or 30-minute segment of time, is run as efficiently as possible. In addition, real-time processes seek to adjust if the net line (number FTEs required vs. number of FTEs available) varies significantly from the plan.

Real-time processes traditionally include, but are not limited to:

- Monitoring Service Level Performance & Other KPIs
- Monitoring & Alerting Adherence ("scheduled" vs. "actual" activity by the agent within a call center)
- Monitoring & Adjusting Call Routing & Agent Skill Assignments
- Incident Management

Many organizations focus heavily on processes that manage employee adherence to schedule. Legacy real-time processes may have focused exclusively on "policing" and enforcing whether employees were aligned with the appropriate activity on their schedule. For example, has the employee shown up to start taking calls on time, taking their break when scheduled, taking their training when scheduled, etc.

In the future WFM model, we seek to leverage automation techniques to redefine many real-time processes, allowing "always on" technology to respond to variance in real time. Automation will enable many of these processes to be scripted, improving the speed at which variance can be addressed. These new processes will allow WFM teams to reassign real-time roles to higher-value activities, yielding benefits to the entire ecosystem.

### Traditional WFM Interpersonal Relationships

The workforce management team's interpersonal relationships vary again by function. For example, forecasters may have deeper relationships with senior management, finance, marketing, or other business functions that inform the forecast.

Schedulers and Real-Time Analysts have deeper interpersonal relationships with the frontline employees of the contact center. The entire team may report to the contact center leadership or be a part of a shared service function, working as a partner to the contact center leadership.
Many WFM organizations have contentious relationships with other functions of an organization, particularly with frontline employees. WFM teams have long focused on service level (serving the external customer) and expense management (serving the shareholder's interests), often at the frontline employee's expense. As a result, WFM teams may be forced to cancel off-phone training and coaching activities, deny requests from frontline employees for changes to their schedules or be viewed as "policing" policies around attendance and adherence to schedule.
Customer service organizations, particularly in contact center environments, have long faced the challenge of high employee turnover. Unfortunately, the traditional WFM model and interpersonal relationships behind the processes and roles played - at best, do not aid in solving the challenge of employee dissatisfaction and turnover. And at worst, traditional WFM practices can contribute to employee turnover. The future WFM model seeks to change these legacy relationships and, by doing so, targets a new set of processes geared toward a new goal; to attract, develop, grow, and retain frontline employees.

### Traditional WFM Technology

The traditional technology leveraged by most workforce management organizations spans three areas:

- Automated Call Distribution System (ACD): Hardware and software that answers and queues customer inquiries for distribution to agents within an organization.
- Workforce Management (WFM) Software Packages: The software leveraged to capture and forecast incoming calls and leveraged to schedule the employees to answer the incoming inquiries optimally
- Microsoft Excel: The industry standard package leveraged by WFM organizations to further model supply and demand scenarios outside the WFM Software package.

This WFM standard recognizes that there likely will be a high number of different technologies leveraged, including reporting & analytics applications, email/communication applications, monitoring tools, and more. While it is not in the scope of this standard to inventory all possible applications, the future WFM model seeks to add two technologies that are key to enabling and adopting this future WFM standard:

- Automation Technologies: Software designed to automate many functions conducted manually by WFM teams and serve the needs of frontline employees.
- Simulation Technologies: Software designed to simulate ranges of outcomes, highlight risk, and apply probability theory and risk ratings to processes and goals.

### Summary

In summary, traditional workforce management seeks to optimize supply and demand to achieve two outcomes continuously; maintain the stated service level for our customers and staff the precise number of employees required to optimize the expenses. The traditional model, which seeks to balance service level and expenditure, has served the contact center industry for several decades. While achieving service level and maintaining optimized expenses remains essential, the traditional WFM approach requires redesigning. The legacy WFM model never adequately addressed a long-standing problem in the contact center industry – high employee turnover rates. In addition, changes across colliding events leave the original model with significant gaps. If not addressed, the legacy WFM model will fail to deliver the traditional goal of providing service at an optimized expense and expose organizations to increased risk.
