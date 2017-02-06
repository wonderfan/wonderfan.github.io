---
layout: post
title: The basic content of D3 library
category: 英文
tags: JavaScript
keywords: wonderfan
description: how to use D3?
---


### The significant role of D3 library

It can bring data to life with SVG, Canvas and HTML.

### The elements and perspectives in D3 world:

- start
- compat
- arrays
- behavior
- color
- core
- dsv
- event
- format
- geo
- geom
- interpolate
- layout
- math
- scale
- selection
- svg
- time
- transition
- xhr
- end;

### Code Anatomy

1. create d3 object in the start.js file and assign the version property to the d3 object;
2. detect the runtime environment(browser or nodejs) and add the d3 object to the specific environment's root global object in the end.js file;
3. In the compat directory, it adds compatible functions for array, date and style objects and operations.
4. In the core directory, It mainly solves the issues of how to change class constructor's prototype and rebind the function from source object to target object.
