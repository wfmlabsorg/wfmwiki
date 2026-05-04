---
title: "Pattern: {{ replace .File.ContentBaseName "-" " " | title }}"
slug: "pattern-{{ .File.ContentBaseName }}"
type: "pattern"
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

## Problem

<!-- What problem does this pattern solve? -->

## Solution

<!-- The pattern itself. -->

## Examples

<!-- Concrete instances where this pattern is used.
- {{< wikilink "skills/skill-name" >}} uses this pattern by...
-->

## When to Use

<!-- Conditions where this pattern applies. -->

## When NOT to Use

<!-- Conditions where it doesn't apply or actively hurts. -->
