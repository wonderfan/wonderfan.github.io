---
layout: post
title: The code anatomy of flag package in Go language
category: 英文
tags: Anatomy
keywords: openstack,cloudstack,wonderfan
description: how to use the flag module in the Go language?
---

# An overview of flag package in Go language


### What is the purpose of the flag package?

Package flag implements command-line flag parsing.


### How to use the flag package?

Define flags using flag.String(), Bool(), Int(), etc.


### Code Anatomy

1. file name: flag.go
2. file location: go/src/flag/flag.go
3. file content:
  - use the comment statement to describe the package details;
  - declare the package name and use import keyword to load other packages;
  - use the New function of errors package to create a new error variable;
  - define Set and Get function for bool and int type variables;
  - create two structure types: FlagSet and Flag;
  - get the command line arguments from the os package's Args variable;
  - use the instance of FlagSet to parse the arguments and build the mapping between the variable and flag
  

### Wrap Up

This package is used in the command line domain. It is deserved for usage when you wan to get the parameters from command line. The arguments from command line will determine and affect your code execution.
