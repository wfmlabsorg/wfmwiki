---
title: "Decision: {{ replace .File.ContentBaseName "-" " " | title }}"
slug: "decision-{{ .File.ContentBaseName }}"
type: "decision"
domains: [architecture]
status: "active"
created: {{ .Date | time.Format "2006-01-02" }}
updated: {{ .Date | time.Format "2006-01-02" }}
date: {{ .Date }}
decision_status: "accepted"
sources: []
related: []
tags: []
project: ""
lifecycle: "operational"
---

## Context

<!-- What situation forced a decision? 2-4 sentences. -->

## Options Considered

1. **Option A** — Pros, cons, why rejected/accepted
2. **Option B** — ...

## Decision

<!-- What was chosen, in one paragraph. -->

## Consequences

<!-- What this enables, what it costs, what we're committed to. -->

## Revisit Triggers

<!-- What would make us reconsider this decision? -->
