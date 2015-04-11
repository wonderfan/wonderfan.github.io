---
layout: english
title:  Get started with SVG
category: 英文
tags: [HTML, CSS,JavaScript]
keywords: 阿樊提,wonderfan,javascript,css,html,svg,
description: use table in the markdown file
---

### What is SVG?

> Scalable Vector Graphics (SVG) is an XML markup language for describing two-dimensional vector graphics. SVG is essentially to graphics what XHTML is to text.

### The popular SVG library

+ <http://svgjs.com>
  - A lightweight library for manipulating and animating SVG
  
+ <http://snapsvg.io>
  - The JavaScript library for modern SVG graphics.
  
### The basic usage of snapsvg library

```javascript
// First lets create our drawing surface out of existing SVG element
// If you want to create new surface just provide dimensions
// like s = Snap(800, 600);
var s = Snap("#svg");
// Lets create big circle in the middle:
var bigCircle = s.circle(150, 150, 100);
// By default its black, lets change its attributes
bigCircle.attr({
    fill: "#bada55",
    stroke: "#000",
    strokeWidth: 5
});
// Now lets create another small circle:
var smallCircle = s.circle(100, 150, 70);
// Lets put this small circle and another one into a group:
var discs = s.group(smallCircle, s.circle(200, 150, 70));
// Now we can change attributes for the whole group
discs.attr({
    fill: "#fff"
});
// Now more interesting stuff
// Lets assign this group as a mask for our big circle
bigCircle.attr({
    mask: discs
});
// Despite our small circle now is a part of a group
// and a part of a mask we could still access it:
smallCircle.animate({r: 50}, 1000);
```
