---
layout: post
title: The runtime package in Go language
category: 英文
tags: Go
keywords: golang,wonderfan
description: how to use runtime package in go language
---

## The runtime package in Go language


### What does the runtime package contain?

Package runtime contains operations that interact with Go's runtime system, such as functions to control goroutines. It also includes the low-level type information used by the reflect package; see reflect's documentation for the programmable interface to the run-time type system.


### Code Anatomy

1. In the compiler.go file, the constant variable is used to specifiy the compiler type;
2. The file in the directory internal/sys tells us the runtime architecture and system information;
3. The alg.go file includes various hash generation function.
4. The cgocall.go file provides a way to call the c functions through go language;
5. The cgo directory encompasses go compiling functionalities.
