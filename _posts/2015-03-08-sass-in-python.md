---
layout: post
title: How to use SASS and Compass in Python?
category: 技术
tags: Python
keywords: css3,sass,compass,compressor,pyscss,django
description: use sass and pyscss in python
---

### Sass and Compass overview

Sass and Less are the awesome languages to write CSS for modern web development. The Compass is the powerful tool to compile these kinds of languages. 

### Python implementation

In the Python language, it also offers similar offering:pyScss.If you use Django framework, django-pyscss and django-compressor modules should be used to support this functionality.

### Take action

1. Install the modules:
```
pip install pyScss
pip install django-pyscss
pip install django-compressor
pip install django
```
2. Code Snippet
```
{% load compress %}

{% compress css %}
<link href='{{ STATIC_URL }}dashboard/scss/horizon.scss' type='text/scss' media='screen' rel='stylesheet' />
{% endcompress %}

{% compress css %}
<link href='{{ STATIC_URL }}dashboard/dashboard.scss' type='text/scss' media='screen' rel='stylesheet' />
{% endcompress %}
```

### Tricks and Tips
If you use them in the window environment, you have to replace the path separator `/` with `\`. There are two options: either py files or scss files 

