---
layout: post
title: The errors package in the Go language
category: 英文
tags: Go
keywords: golang,wonderfan
description: The errors package in the Go language
---

## The errors package in the Go language

### The purpose of errors package

Package errors implements functions to manipulate errors.


### Code Anatomy

1. The stuct errorString is a trivial implementation of error.
2. The function New returns an error that formats as the given text.
