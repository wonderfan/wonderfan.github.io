---
layout: english
title: Python Data Visualization By pygal
category: 英文
tags: Python
keywords: pygal,svg,python,wonderfan,阿樊提
description: pygal - A python svg graph plotting library - A python SVG Charts Creator
---


### What is pygal?

**pygal** is a dynamic SVG charting library written in python. All the documentation is on <http://pygal.org>

It features various graph types:

- Bar charts
- Line charts
- XY charts
- Pie charts
- Radar charts
- Box plot
- Dot charts
- Pyramid charts
- Funnel charts
- Gauge charts
- Worldmap charts
- Country charts


### How to install?

As simple as:

```
$ pip install pygal
```

### How to use it?

```
import pygal                                                       # First import pygal
bar_chart = pygal.Bar()                                            # Then create a bar graph object
bar_chart.add('Fibonacci', [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55])  # Add some values
bar_chart.render_to_file('bar_chart.svg')                          # Save the svg to a file
```

### What are behind the scenes?

- Create different graph types and offer the data methods;
- Use lxml library to output the data as xml as svg is xml markup element;
- JavaScript and CSS are harnessed to decorate the skin and theme.
