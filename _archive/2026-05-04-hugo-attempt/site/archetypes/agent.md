---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
slug: "agent-{{ .File.ContentBaseName }}"
type: "agent"
domains: [agents-layer]
status: "stub"
created: {{ .Date | time.Format "2006-01-02" }}
updated: {{ .Date | time.Format "2006-01-02" }}
date: {{ .Date }}
sources: []
related: []
tags: []
project: "tars-development"
lifecycle: "operational"
---

## Role

<!-- What this agent does, its personality, operating standards. -->

## Skills Access

<!-- Which skills this agent can invoke. -->

## Output Format

<!-- Required output template for this agent's findings. -->

## Trigger Phrases

<!-- When this agent activates. -->

## Related

<!-- Link to skills, patterns, decisions.
{{< wikilink "skills/skill-name" >}}
-->
