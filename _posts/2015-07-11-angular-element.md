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

### Methods and Events Added to jQuery Lite Objects

```html
$destroy

A ngularJS intercepts all jQuery or jQuery lite DOM destruction calls and fires this event on all DOM nodes being removed. This can be used to clean up any third-party bindings to the DOM element before it is removed.

controller(name)

Returns the controller object of the current element or its parent. If no name is specified, the controller associated with the ngController direc-tive is returned. If a name is provided as a directive name, the controller for this directive is returned.

injector()

Returns the injector object of the current element or its parent.

scope()

Returns the scope object of the current element or its parent.

isolateScope()

Returns an isolate scope object if one is attached directly to the current element. This works only on elements that contain a directive that starts a new isolate scope.

inheritedData()

Works the same as the jQuery data() method, but walks up the DOM until a value is found or the top parent element is reached.
```
