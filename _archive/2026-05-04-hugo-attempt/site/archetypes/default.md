---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
slug: "{{ .Section }}-{{ .File.ContentBaseName }}"
type: "{{ .Section }}"
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

<!-- Summary of what this page covers -->

## Details

<!-- Main content -->

## Related

<!-- {{< wikilink "path" >}} -->
