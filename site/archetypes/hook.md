---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
slug: "hook-{{ .File.ContentBaseName }}"
type: "hook"
domains: [hooks-layer]
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

## Event

<!-- Which Claude Code event triggers this hook (SessionStart, UserPromptSubmit, Stop, SubagentStop, SessionEnd). -->

## Purpose

<!-- What this hook does and why it exists. -->

## Implementation

<!-- Key logic, file path, timeout settings. -->

## Related

<!-- Link to infrastructure, skills, decisions.
{{< wikilink "infrastructure/hooks" >}}
-->
