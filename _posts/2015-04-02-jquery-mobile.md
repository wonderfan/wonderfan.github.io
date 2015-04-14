---
layout: english
title: How to use jQuery mobile?
category: 英文
tags: JavaScript
keywords: jquery,mobile,jquery mobile,wonderfan
description: jquery mobile guides
---

### What Is jQuery Mobile?
---
jQuery Mobile is just a user interface framework — nothing less, nothing more. It uses jQuery’s core framework as a requirement, but definitely doesn’t replace it. It’s a UI layer on top of it. 

jQuery Mobile is a framework that delivers Web app experiences to mobile and tablet devices, mainly ones with touch interfaces; it is effort-less and multiplatform, and it uses only HTML5 standard code.

### COMPATIBILITY
---
Every tablet and smartphone in the world today is supported by jQuery Mobile, including browsers such as iOS, Android, Chrome, Firefox, BlackBerry and Symbian and native platforms such as Apache Cordova (PhoneGap).

### MAIN FEATURES

- Open-source and free for all kind of usages
- Cross-platform, cross-device and cross-browser compatible
- The UI is optimized for touch devices.
- The design is themable and customizable.
- Only non-intrusive semantic HTML5 code is used, without the need for any knowledge of JavaScript, CSS or API.
- AJAX calls are made automatically to load dynamic content.
- It’s built on the well-known and well-supported jQuery core.
- Lightweight in size — 12 KB compressed
- Progressive enhancement is used. Even if the framework can’t load properly, your Web app will work without any enhancements.
- Accessibility support

### Code Show

```html
<!DOCTYPE html> 
<html> 
  <head> 
       <meta charset="utf-8"> 
       <title>My first jQuery Mobile code</title> 
       <link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css">
       <script src="http://code.jquery.com/jquery-1.8.2.min.js"></script> 
       <script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
       <meta name="viewport" content="width=device-width, initial-scale=1">
 </head> 
 <body> 
    <div data-role="page" data-theme="a"> 
         <div data-role="header"> 
               <h1>jQuery Mobile</h1> 
         </div> 
         <div data-role="content">      
               <ul data-role="listview" data-inset="true" data-dividertheme="b"> 
                     <li data-role="list-divider">Options</li> 
                     <li><a href="option1.html">Option 1</a></li> 
                     <li><a href="option2.html">Option 2</a></li> 
                     <li><a href="option3.html">Option 3</a></li> 
                     <li><a href="option4.html">Option 4</a></li> 
               </ul>           
         </div>   
        <div data-role="footer">
         <h4>&copy; 2012 Smashing Magazine</h4>
        </div> 
    </div> 
    </body> 
    </html>
```
