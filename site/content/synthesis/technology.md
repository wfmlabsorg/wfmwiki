---
title: "Technology"
slug: "technology"
type: "synthesis"
domains: ["org-design", "contact-center"]
status: "draft"
created: "2026-05-04"
updated: "2026-05-04"
tags: ["migrated-mediawiki"]
---
Technology supporting contact center organizations has evolved since the earliest call distributors of the 1960's. For purposes of the Future WFM Operating Standard, we outline a slice of the overall ecosystem, touching on technologies that have a strong, interconnected relationship with the goals, roles, processes and interpersonal relationship approach of standard. This section acknowledges there are many parallel technology systems the WFM team may leverage or interface with. An example; WFM may exchange forecasting data with finance leveraging Oracle Essbase, yet, that multidimensional database management system is out of scope for the core operating standard.

This section is furthered positioned from the workforce management point of view; since WFM focuses on the workforce, we approach the standard from a dominant voice channel, live interactions over the phone between a company employee and a customer. The standard can be forked to reprioritize an alternative channel (such as chat, live video, or messenger apps) but should recognize as written with time-sensitive queue systems (customers in queues) being served by employees. For this reason, we limit documentation of core technologies outlined below.

#### Automatic Call Distributor (ACDs)

An **automated call distribution system**, commonly known as **automatic call distributor** (**ACD**), is a telephony device that answers and distributes incoming calls to a specific group of terminals or agents within an organization. ACDs direct calls based on parameters that may include the caller's telephone number, the number they dialed, the time of day or a response to an automated voice prompt. Advanced ACD systems may use digital technologies such as Computer telephony integration (CTI), computer-supported telecommunications applications (CSTA) or IVR as input to determine the route to a person or voice announcement that will serve the caller. Experts claim that "the invention of ACD technology made the concept of a call center possible[^1]

From the 1960s up through the end of the century, ACDs were premise-based equipment; a contact center either had a physical telephone device where the agents resided, or a gateway connecting the contact center to another physical company location which housed the telephony equipment. From 2000 forward, cloud-based technology began to emerge, and contact centers leveraging an ACD in the cloud began. While in the 2000-2020 time period, the majority of contact centers remained premise based, from 2020 forward, the pace of contact centers switching to cloud-based ACDs has accelerated.

#### Workforce Management Software (WFM or WFO)

Workforce management (WFM) software represents a class computer programs designed to integrate to a contact center's ACD, and provides a WFM team capabilities to forecast demand, schedule agents, and monitor real-time performance. This is a unique class of software, not to be confused with other workforce management systems sometimes referred to as HRM systems, or Workforce asset management, or part of ERP systems. Examples of WFM Software packages include but are not limited to NICE IEX WFM, Alvaria Workforce (formerly Aspect), Verint WFM, Genesys WFM, and Calbrio Workforce Optimization.

Similar to ACDs, these software packages historically (pre-2000) ran on premise based servers, integrated to premise based ACDs. However, with the acceleration of migrating ACDs to the cloud, WFM software has followed. While an ACD is the core foundational component required to have a contact center, WFM software is a necessary foundational component to match customer demanded forecasts with the supply of agents scheduled.

#### Interactive Voice Response (IVR)

**Interactive voice response** (**IVR**) is a technology that allows telephone users to interact with a computer-operated telephone system through the use of voice and DTMF tones input with a keypad. In telecommunications, IVR allows customers to interact with a company's host system via a telephone keypad or by speech recognition, after which services can be inquired about through the IVR dialogue. IVR systems can respond with pre-recorded or dynamically generated audio to further direct users on how to proceed. IVR systems deployed in the network are sized to handle large call volumes and also used for outbound calling as IVR systems are more intelligent than many predictive dialer systems.

IVR systems can be used stand-alone to create caller self-service solutions for instance for mobile purchases, banking payments, services, retail orders, utilities, travel information and weather conditions. In combination with systems such an automated attendant and ACD, call routing can be highly optimized for a better caller experience and workforce efficiency. A common misconception refers to an automated attendant as an IVR. The terms are distinct and mean different things to traditional telecommunications professionals—the purpose of an IVR is to take input, process it, and return a result, whereas that of an automated attendant is to route calls. Having said that, since commercially available call handling systems cover both functionalities, they are often referred to as IVR. The term **voice response unit** (**VRU**) is sometimes used as well.[^2]

#### Automation Software: Robotic Process Automation and Intelligent Automation and (RPA and IA)

**Robotic process automation** (**RPA**) is a form of business process automation technology based on metaphorical software robots (bots) or on artificial intelligence (AI)/digital workers. It is sometimes referred to as *software robotics* (not to be confused with robot software).

In traditional workflow automation tools, a software developer produces a list of actions to automate a task and interface to the back end system using internal application programming interfaces (APIs) or dedicated scripting language. In contrast, RPA systems develop the action list by watching the user perform that task in the application's graphical user interface (GUI), and then perform the automation by repeating those tasks directly in the GUI. This can lower the barrier to the use of automation in products that might not otherwise feature APIs for this purpose.

RPA tools have strong technical similarities to graphical user interface testing tools. These tools also automate interactions with the GUI, and often do so by repeating a set of demonstration actions performed by a user. RPA tools differ from such systems in that they allow data to be handled in and between multiple applications, for instance, receiving email containing an invoice, extracting the data, and then typing that into a bookkeeping system.[^3]

**Intelligent Automation (IA)** for WFM Labs references a specialized subset of process automation targeting integration to a contact center's ACD system and WFM system. Intelligent automation leverages real-time streaming data from the ACD and WFM components to automate processes that were either 1) formally {{< wikilink "workforce-management-standard-introduction-contact-centers-and-traditional-wfm-approach" "pre-planned" >}}, or 2) were unable to be captured due to the time and human bandwidth constraints. IA can thus be used to continuously monitor the contact centers ACD and WFM software, as well as the Agent current state to execute rules designed to impact efficiency, experience and engagement.

#### Simulation Software

Simulation software is based on the process of modeling a real phenomenon with a set of mathematical formulas. It is, essentially, a program that allows the user to observe an operation through simulation without actually performing that operation. Simulation software is used widely to design equipment so that the final product will be as close to design specs as possible without expensive in process modification. Simulation software with real-time response is often used in gaming, but it also has important industrial applications. When the penalty for improper operation is costly, such as airplane pilots, nuclear power plant operators, or chemical plant operators, a mock up of the actual control panel is connected to a real-time simulation of the physical response, giving valuable training experience without fear of a disastrous outcome.[^4]

For the purposes of developing the next generation of WFM processes, we introduce simulation software to model a series of forecasting and scheduling outcomes by utilizing Monte Carlo simulation via software plug-ins that allow WFM teams to include uncertainty in their models. WFM teams can replace fixed model input values (volume, AHT, shrinkage, occupancy, attrition) and replace these with quantitative probability distribution functions. This then allows thousands of capacity plan scenarios to be run which demonstrate the uncertainty about those values based on the distribution function. Examples of such software include Vose ModelRisk and Palisade @RISK.

#### Contact Center as a Service (CCaaS)

As ACDs and WFM Software packages began migrating the the cloud, the concept of Contact Center as a Service (CCaaS) began to emerge. CCaaS is simply a cloud-based contact center. Companies recognized that by maintaining components required to run a contact center in the cloud allows organizations to scale and maintain flexibility, while not having their IT department manage complex infrastructure programs.

Conceptually, vendors allow an option to operate as an all-in-one service for customer interactions. In addition to routing calls and managing WFM packages, CCaaS can offer CRM solutions to track customer details, integrate additional channels (Live chat, chat bots, social media), conduct surveys, manage knowledge systems, provide quality and compliance recordings and more.

#### Resource Optimization Center (ROC)

The next-generation workforce management standard requires command and control to systematically address intraday variance. While automation software is key to addressing intraday variance, there will be times when events and incidents require additional levels of coordination. Leveraging a command center, **whether physical or virtual,** exposes the **real-time health of the organization**, and ensures **variance is being mitigated is a coordinated fashion**. A **command center model and the associated technologies** are a foundational component of the next generation WFM operating standard.

For the purposes of this standard, we leverage the term ROC, resource optimization center, as the environment where all real-time processes are monitored, coordinated, controlled and communicated. The ROC is not a specific process, but an environment where technologies are leveraged to conduct incident management processes, traffic management processes, and real-time automations. The ROC environment and members of the real-time team place a critical role in proactively exposing the health of the environment, communicating when performance thresholds are breached, and coordinating the activities required to return operations to acceptable performance thresholds.

##### Primary Monitoring

![Monitoring Dashboards](Monitoring_SL.jpg "Monitoring Dashboards")The most direct indication of an incident in progress comes from someone reporting directly that there is trouble; a frontline agents indicating a critical system is down, when validated by multiple agents, is a rapid way to understand an incident has begun. Aside from direct agent reports, IT organizations should have monitoring tools which can also automatically trigger an incident. But when an incident goes either undetected or unreported, monitoring the real-time performance of KPIs can help identify an incident. Monitoring the call center's service level, number of calls in queue, and longest call holding are "primary monitoring" considerations leveraged to trigger an incident. By also examining your WFM systems forecast vs. actual, your can quickly identify trends where either demand or agent supply are deviating significantly.

Monitoring the speed and severity in which service level begins to decline is the primary flag for incident detection. Through real-time monitoring tools such as the dashboard depicted, service level "history" can be monitored determine whether the incident is sustained over multiple intervals, or whether the call center is recovering.![Monitoring US Power outages via [PowerOutage.us](https://poweroutage.us/)](Poweroutageus.jpg "Monitoring US Power outages via PowerOutage.us")

##### Secondary Monitoring

Additional real-time monitoring tools may be leveraged based on the industry, and impact various types of incidents may have on your contact center operations. Organizations sensitive to power outages may monitor utility services and various weather monitoring services to anticipate and react to impacts on either contact center staff, or impacts to customer demand associated with loss of power.

A wide range of resources is listed (here) ---\> TBD to to monitor weather, traffic, financial resources, and events that may be trigger incidents for your organization

#### Next-Generation Routing

The {{< wikilink "methods/next-generation-routing" >}} represents the evolution from traditional skills-based routing to **intelligent workload orchestration** powered by real-time operational context and autonomous decision-making capabilities. This advancement fundamentally transforms how contact centers distribute work by leveraging **Model Context Protocol (MCP)** to access live system state across the entire workforce management ecosystem, enabling routing decisions that simultaneously optimize for agent wellness, business priorities, and customer satisfaction.

Unlike conventional routing systems that rely on static rules and historical data patterns, next-generation routing utilizes streaming operational intelligence to make autonomous adjustments within seconds of detecting variance events. The technology integrates seamlessly with **[Resource Optimization Center (ROC)](Resource_Optimization_Center_(ROC) "wikilink")** operations, **[Intelligent Automation](Automation_Software:_Robotic_Process_Automation_and_Intelligent_Automation_and_(RPA_and_IA) "wikilink")** platforms, and **[Workforce Management Software (WFM or WFO)](Workforce_Management_Software_(WFM_or_WFO) "wikilink")** systems to create a unified operational intelligence capability.

The implementation of next-generation routing typically delivers 200-350% ROI improvement while reducing operational response times from hours to under 60 seconds. Organizations deploying these capabilities report significant improvements in agent retention, customer satisfaction, and operational efficiency through wellness-aware workload distribution and predictive intervention before service level degradation occurs.

Key technological differentiators include real-time agent capability assessment, multi-objective optimization algorithms, and business value-driven routing that considers customer lifetime value, retention risk, and revenue optimization opportunities. The system's **Model Context Protocol** architecture enables sub-50ms routing decisions based on live operational context rather than the 200-500ms latency typical of **Retrieval-Augmented Generation (RAG)** approaches used in basic AI-enhanced routing systems.

Next-generation routing serves as a foundational component for achieving Level 4 and Level 5 **{{< wikilink "synthesis/future-wfm-operating-standard" >}}** maturity, where workforce management functions evolve from reactive operational management to proactive strategic optimization that delivers competitive advantage through superior operational intelligence and autonomous optimization capabilities.

[^1]: Wikipedia: [Automatic call distributor](https://en.wikipedia.org/wiki/Automatic_call_distributor)

[^2]: Wikipedia: [Interactive voice response](https://en.wikipedia.org/wiki/Interactive_voice_response)

[^3]: Wikipedia: [Robotic process automation](https://en.wikipedia.org/wiki/Robotic_process_automation)

[^4]: Wikipedia: [Simulation software](https://en.wikipedia.org/wiki/Simulation_software)
