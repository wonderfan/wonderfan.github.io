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
When there are multiple directives defined on a single DOM element, sometimes it is necessary to specify the order in which the directives are applied. The `priority` is used to sort the directives before their `compile` functions get called. Priority is defined as a number. Directives with greater numerical `priority` are compiled first. Pre-link functions
are also run in priority order, but post-link functions are run in reverse order. The order of directives with the same priority is undefined. The default priority is `0`.

#### `terminal`
If set to true then the current `priority` will be the last set of directives which will execute (any directives at the current priority will still execute as the order of execution on same `priority` is undefined)

#### `scope`
**If set to `true`,** then a new scope will be created for this directive. If multiple directives on the same element request a new scope, only one new scope is created. The new scope rule does not apply for the root of the template since the root of the template always gets a new scope.

**If set to `{}` (object hash),** then a new "isolate" scope is created. The 'isolate' scope differs from normal scope in that it does not prototypically inherit from the parent scope. This is useful when creating reusable components, which should not accidentally read or modify data in the parent scope.

The 'isolate' scope takes an object hash which defines a set of local scope properties derived from the parent scope. These local properties are useful for aliasing values for templates. Locals definition is a hash of local scope property to its source:

`@` or `@attr` - bind a local scope property to the value of DOM attribute. The result is always a string since DOM attributes are strings. If no `attr` name is specified  then the attribute name is assumed to be the same as the local name.
Given `<widget my-attr="hello {{name}}">` and widget definition of `scope: { localName:'@myAttr' }`, then widget scope property `localName` will reflect the interpolated value of `hello {{name}}`. As the `name` attribute changes so will the
`localName` property on the widget scope. The `name` is read from the parent scope (not component scope).

`=` or `=attr` - set up bi-directional binding between a local scope property and the parent scope property of name defined via the value of the `attr` attribute. If no `attr` name is specified then the attribute name is assumed to be the same as the local name.
Given `<widget my-attr="parentModel">` and widget definition of `scope: { localModel:'=myAttr' }`, then widget scope property `localModel` will reflect the value of `parentModel` on the parent scope. Any changes to `parentModel` will be reflected
in `localModel` and any changes in `localModel` will reflect in `parentModel`. If the parent scope property doesn't exist, it will throw a NON_ASSIGNABLE_MODEL_EXPRESSION exception. You can avoid this behavior using `=?` or `=?attr` in order to flag the property as optional.

`&` or `&attr` - provides a way to execute an expression in the context of the parent scope. If no `attr` name is specified then the attribute name is assumed to be the same as the local name. Given `<widget my-attr="count = count + value">` and widget definition of `scope: { localFn:'&myAttr' }`, then isolate scope property `localFn` will point to a function wrapper for the `count = count + value` expression. Often it's desirable to pass data from the isolated scope via an expression and to the parent scope, this can be done by passing a map of local variable names and values into the expression wrapper fn.
For example, if the expression is `increment(amount)` then we can specify the amount value by calling the `localFn` as `localFn({amount: 22})`.

#### `controller`
Controller constructor function. The controller is instantiated before the pre-linking phase and it is shared with other directives (see `require` attribute). This allows the directives to communicate with each other and augment each other's behavior. The controller is injectable (and supports bracket notation) with the following locals:

`$scope` - Current scope associated with the element
`$element` - Current element
`$attrs` - Current attributes object for the element
`$transclude` - A transclude linking function pre-bound to the correct transclusion scope.
The scope can be overridden by an optional first argument.
`function([scope], cloneLinkingFn)`.

#### `require`
Require another directive and inject its controller as the fourth argument to the linking function. The `require` takes a string name (or array of strings) of the directive(s) to pass in. If an array is used, the injected argument will be an array in corresponding order. If no such directive can be found, or if the directive does not have a controller, then an error is raised. 

#### `controllerAs`
Controller alias at the directive scope. An alias for the controller so it can be referenced at the directive template. The directive needs to define a scope for this configuration to be used. Useful in the case when directive is used as component.

#### `restrict`
String of subset of `EACM` which restricts the directive to a specific directive declaration style. If omitted, the default (attributes only) is used.

 * `E` - Element name: `<my-directive></my-directive>`
 * `A` - Attribute (default): `<div my-directive="exp"></div>`
 * `C` - Class: `<div class="my-directive: exp;"></div>`
 * `M` - Comment: `<!-- directive: my-directive exp -->`

#### `template`
replace the current element with the contents of the HTML. The replacement process migrates all of the attributes / classes from the old element to the new one. 

You can specify `template` as a string representing the template or as a function which takes two arguments `tElement` and `tAttrs` (described in the `compile` function api below) and returns a string value representing the template.
