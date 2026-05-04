---
title: "Experiment: {{ replace .File.ContentBaseName "-" " " | title }}"
slug: "experiment-{{ .File.ContentBaseName }}"
type: "experiment"
domains: [tars-development]
status: "active"
created: {{ .Date | time.Format "2006-01-02" }}
updated: {{ .Date | time.Format "2006-01-02" }}
date: {{ .Date }}
verdict: ""
verdict_date: ""
sources: []
related: []
tags: []
lifecycle: "operational"
---

## Hypothesis

<!-- What we were testing. -->

## Setup

<!-- What we tried, how we configured it. -->

## Results

<!-- What happened. -->

## Verdict

<!-- retained | demoted | reversed | inconclusive. Why. -->

## Lessons

<!-- What we learned regardless of verdict. -->
