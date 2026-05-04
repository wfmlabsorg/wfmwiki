---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
slug: "research-{{ .File.ContentBaseName }}"
type: "research"
domains: [methodology]
status: "active"
created: {{ .Date | time.Format "2006-01-02" }}
updated: {{ .Date | time.Format "2006-01-02" }}
date: {{ .Date }}
sources: []
related: []
tags: []
project: ""
lifecycle: "operational"
---

## Question

<!-- What question or hypothesis motivated this research? -->

## Sources

<!-- What sources were consulted?
- Source 1 — brief description
-->

## Findings

<!-- What did you find? Organize by theme. Include specific data points. -->

## Implications

<!-- How do these findings affect decisions, projects, or strategy? -->

## Open Questions

<!-- What remains unanswered? -->

## Related

<!-- {{< wikilink "projects/related-project" >}} -->
