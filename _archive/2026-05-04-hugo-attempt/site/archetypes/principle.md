---
title: "Principle: {{ replace .File.ContentBaseName "-" " " | title }}"
slug: "principle-{{ .File.ContentBaseName }}"
type: "principle"
domains: [philosophy]
status: "active"
created: {{ .Date | time.Format "2006-01-02" }}
updated: {{ .Date | time.Format "2006-01-02" }}
date: {{ .Date }}
sources: []
related: []
tags: []
lifecycle: "operational"
---

## Statement

<!-- One sentence. -->

## Why This Matters

<!-- 2-3 sentences on why this principle exists. -->

## How It Manifests

<!-- Concrete examples.
- Example 1
- Example 2
-->

## Exceptions

<!-- When this principle should be violated, if ever. -->
