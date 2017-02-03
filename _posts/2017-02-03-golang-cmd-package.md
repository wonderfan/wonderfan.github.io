---
layout: post
title: The cmd package in Go language
category: 英文
tags: Go
keywords: wonderfan
description: how to use cmd package in Go language
---

### What does cmd package do?

The cmd package is a tool for managing Go source code.


### What kinds of commands does the cmd package contain?

- build       compile packages and dependencies
- clean       remove object files
- doc         show documentation for package or symbol
- env         print Go environment information
- bug         start a bug report
- fix         run go tool fix on packages
- fmt         run gofmt on package sources
- generate    generate Go files by processing source
- get         download and install packages and dependencies
- install     compile and install packages and dependencies
- list        list packages
- run         compile and run Go program
- test        test packages
- tool        run specified go tool
- version     print Go version
- vet         run go tool vet on package


### Code Anatomy

1. Use the main package and main function to process the commands;
2. define one command structure type to stand for the element composition of commands;
3. use array to contain each instance of specified command;
4. use flag package to get the arguments from the command line;
5. iterate the commands collection and find the matched one against the arguments
6. conduct the Run function of target command instance.
