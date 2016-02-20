---
layout: english
title: Understand the element object in AngularJS world
category: 英文
tags: JavaScript
keywords: angular,wonderfan
description: understand the element object in AngularJS world
---


### AngularJS - angular.element
---

angular.element acts as the interface between jQuery/jqLite and AngularJS. The docs on the angular.element API are excellent for furthering understanding. Something to note is that all element references in Angular are always wrapped with jQuery or jqLite; they are never raw DOM references.


### Accessing jQuery or jQuery Lite
---

jQuery is accessed from the AngularJS code using the element attribute of the angular variable available when AngularJS is bootstrapped. Essentially, angular.element will be an alias for the jQuery variable that is normally used in jQuery applications. 

```js
angular.element() === jQuery() === $()
```


