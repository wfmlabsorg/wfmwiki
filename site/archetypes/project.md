---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
slug: "project-{{ .File.ContentBaseName }}"
type: "project"
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

## Overview

<!-- 2-4 sentences: what is this project, why does it exist, what's the scope -->

## Architecture

<!-- Key components, tech stack, design decisions. Adapt heading:
     Consulting: "Scope & Findings"
     Software: "Architecture"
     Content: "Structure"
     Data: "Methodology" -->

## Current State

<!-- What's happening now. Active work, blockers, next steps. -->

## Key Decisions

<!-- Link to decision records that shaped this project
{{< wikilink "decisions/YYYY-MM-DD-decision" >}}
-->

## Learnings

<!-- Insights extracted from working on this project. -->

## Related

<!-- Wikilinks to related projects, decisions, research
{{< wikilink "projects/related-project" >}}
-->
