---
title: "Power of One"
slug: "power-of-one"
type: "calculator"
domains: ["capacity-planning", "contact-center"]
status: "draft"
created: "2026-05-04"
updated: "2026-05-04"
tags: ["migrated-mediawiki"]
---
# Achieving Service Level

WFM teams strive to meet service level goals throughout every interval of the day, even when unexpected situations arise. Automation is critical for intraday management tactics to mitigate unforeseen events such as frontline staff calling in sick, weather events, sudden technical troubles, or unexpectedly high call volumes. While WFM teams take action to make adjustments to maintaining service levels in the face of these events, WFM teams can not respond quickly enough alone, without automation, to maximize opportunities to optimize service levels when variance is introduced.

The "Power of One" was a book published originally by Penny Reynolds and the Call Center School in 2005. Within the book were a few short chapters on "Staffing for Speed" and "sharing the Workload." These concepts demonstrated the importance of everyone playing their role, being available to handle the next call, and general adherence to their schedule. Even with automation, the power of one is an important concept for leadership to understand.

One of the most substantial concepts in the "Power of One" stresses how in a queue of 50 people, the difference of just a single person can impact service level.

## Why Service Level?

{{< wikilink "image-pow1-jpg" "300px\|thumb\|right\|Power of One - Small Queues" >}}
Service level is considered the call center industry-standard performance metric.

By monitoring service levels and adjusting staff levels by interval, a contact center operation can ensure it operates optimally when measuring customer availability.

The power of the service level metric is derived by its sensitivity for interval level performance to alert to either poor customer performance or potential waste in over-staffing.

## What do we mean by service level sensitivity?

WFM teams leverage software systems that use various statistical models, the most popular being [Erlang-C](https://en.wikipedia.org/wiki/Erlang_(unit)), to predict the waiting time and staffing required to meet the service level objective.

Erlang-C expresses the probability that an arriving customer will be offered to a queue vs. being immediately answered.

For forecasting activities, the Erlang formula is used to determine the precise number of customer service representatives needed to staff a queue based on a specified target probability of queuing or service level.

For managing real-time operations, if a queue is overstaffed or understaffed by a single representative, the interval service level will alert operations to potential waste in expenses (overstaffed) or the negative impact of availability to customers (understaffed).

## How significant is the impact?

If we examine a queue requiring 50 people to staff, using a demand interval that requires 175 calls with an AHT of 450 seconds, we see we'd need 50 reps to achieve an 80% of calls answered within 30 seconds. We would reach an 82% service level in this scenario, illustrated below. If we lose just a single resource, we see with 49 agents, the service level will drop to 76% and continues to decline rapidly as 2, 3, or more agents are not staffed and ready to take the next call.

In addition, the average speed of answer grows dramatically. If the queue were staffed missing five agents, the average speed of answer would increase by almost 5x, growing from 19 seconds to 285 seconds:

{{< wikilink "image-pow2-jpg" "Impact to SL & ASA" >}}

This is a static view based on 175 calls with an AHT of 450 seconds - but what if I want to model a different size queue or different service level objectives? Below is a tool for dynamically calculating different size queues:

# Shiny & R Studio

[300px\|thumb\|right\|[Power of One - Small Queues](https://tedlango.shinyapps.io/powerofone/)](image:pow-small.jpg "wikilink")

R Studio and Shinyapps allow dynamic visualization and working models, exposing to an online interface. In this example, we've created an online visualization of the "{{< wikilink "calculators/power-of-one" >}}" - showing the importance of how losing (or gaining) a single call center rep can dramatically impact interval service level.

- [Power of One - Small Queues](https://tedlango.shinyapps.io/powerofone/)
- [Power of One - Longer AHT Queues](https://tedlango.shinyapps.io/powerofone-long/)
- [Power of One - Japanese](https://tedlango.shinyapps.io/japan-powerofone/)
