---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
slug: "learning-{{ .File.ContentBaseName }}"
type: "learning"
domains: [tars-development]
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

## Phase

<!-- observe | build — how was this learning discovered? -->

**Phase:** observe

## Context

<!-- What were you doing when this learning emerged? -->

## Insight

<!-- The learning itself. Be specific and concrete. -->

## Evidence

<!-- What supports this learning? Data, observations, results, references. -->

## Application

<!-- How does this change future behavior? Be specific: "Next time X happens, do Y instead of Z" -->

## Related

<!-- {{< wikilink "projects/related-project" >}} -->
