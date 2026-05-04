---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
slug: "glossary-{{ .File.ContentBaseName }}"
type: "glossary"
domains: [tars-development]
status: "active"
created: {{ .Date | time.Format "2006-01-02" }}
updated: {{ .Date | time.Format "2006-01-02" }}
date: {{ .Date }}
sources: []
related: []
tags: []
lifecycle: "operational"
---

## Definition

<!-- One paragraph definition. -->

## Context

<!-- Where and how this term is used in TARS. -->

## See Also

<!-- Cross-references.
{{< wikilink "path" >}}
-->
