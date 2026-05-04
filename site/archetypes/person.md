---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
slug: "person-{{ .File.ContentBaseName }}"
type: "person"
domains: [external-influence]
status: "active"
created: {{ .Date | time.Format "2006-01-02" }}
updated: {{ .Date | time.Format "2006-01-02" }}
date: {{ .Date }}
sources: []
related: []
tags: []
lifecycle: "operational"
---

## Who

<!-- Role, background, why they matter to TARS. -->

## Key Contributions

<!-- Ideas, frameworks, or works that shaped TARS. -->

## Influence on TARS

<!-- Specific ways their work manifests in TARS architecture.
{{< wikilink "principles/principle-name" >}}
-->
