---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
slug: "tool-{{ .File.ContentBaseName }}"
type: "tool"
domains: [tools-layer]
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

## Purpose

<!-- What this tool does. -->

## Usage

```bash
# bun run path/to/tool.ts --help
```

## Options

<!-- CLI flags and arguments. -->

## Related

<!-- Link to skills that use this tool, infrastructure.
{{< wikilink "skills/skill-name" >}}
-->
