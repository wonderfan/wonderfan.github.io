---
layout: english
title: Explain Angular's Directive
category: 英文
tags: JavaScript
keyword: angular,directive,wonderfan
description: the directive usage in AngularJS
---

### Directive Definition Object

The directive definition object provides instructions to the ` ng.$compile  compiler`. The attributes are:

#### `priority`
When there are multiple directives defined on a single DOM element, sometimes it
is necessary to specify the order in which the directives are applied. The `priority` is used
to sort the directives before their `compile` functions get called. Priority is defined as a
number. Directives with greater numerical `priority` are compiled first. Pre-link functions
are also run in priority order, but post-link functions are run in reverse order. The order
of directives with the same priority is undefined. The default priority is `0`.

#### `terminal`
If set to true then the current `priority` will be the last set of directives
which will execute (any directives at the current priority will still execute
as the order of execution on same `priority` is undefined)

