---
layout: english
title: Get started with Ionic mobile
category: 英文
tags: JavaScript
keywords: angular,angularjs,ionic,mobile,wonderfan
description: Ionic is the open source HTML5 Mobile Framework
---

### What is Ionic?
---
Ionic is the open source HTML5 Mobile Framework for building amazing, cross-platform hybrid native apps with HTML, JavaScript, and CSS.

It's important to realize that Ionic is not a replacement for frameworks used for building mobile web apps. There are a lot of great solutions that work well for websites, like jQuery Mobile.

Ionic is also not a good solution if you need to support older generation devices. Our compatibility starts at iOS 6 and Android 4.1. We will never support versions earlier than those. This is a framework for the future.


### Quick Start

To start using ionic, you have two options: copy over the built JS and CSS files, or use the `ionic` tool (ionic-cli) which can be installed through npm

```
$ npm install -g ionic
```

Then, you can start a new ionic project by running:

```
$ ionic start myproject
```

### Code Show

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <title>Ionic Mobile</title>

    <link href="lib/ionic/css/ionic.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

    <!-- IF using Sass (run gulp sass first), then uncomment below and remove the CSS includes above
    <link href="css/ionic.app.css" rel="stylesheet">
    -->

    <!-- ionic/angularjs js -->
    <script src="lib/ionic/js/ionic.bundle.js"></script>
    <script src="lib/ionic/js/angular/angular-resource.min.js"></script>

    <!-- cordova script -->
    <script src="cordova.js"></script>
    
    <!-- your app's js -->
    <script src="js/config.js"></script>
    <script src="js/push.js"></script>
    <script src="js/app.js"></script>

  </head>

  <body ng-app="wonderfan">
    <ion-nav-view></ion-nav-view>
  </body>
```
