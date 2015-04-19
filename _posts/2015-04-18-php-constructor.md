---
layout: english
titile: A glimpse of PHP Constructor
category: 英文
tags: PHP
keywords: PHP,constructor,wonderfan
description: declare constructor methods for classes
---

### Constructor
---
```php
void __construct ([ mixed $args = "" [, $... ]] )
```
PHP 5 allows developers to declare constructor methods for classes. Classes which have a constructor method call this method on each newly-created object, so it is suitable for any initialization that the object may need before it is used.

For backwards compatibility, if PHP 5 cannot find a __construct() function for a given class, and the class did not inherit one from a parent class, it will search for the old-style constructor function, by the name of the class. Effectively, it means that the only case that would have compatibility issues is if the class had a method named __construct() which was used for different semantics.
```php
<?php

class MyTest {

    function __construct() {
        print "Hello Constructor";
    }

    function MyTest($name = "MyTest") {
        print "Hello ".$name;
    }

}

$test = new MyTest();
```

### New changes
---
As of PHP 5.3.3, methods with the same name as the last element of a namespaced class name will no longer be treated as constructor. This change doesn't affect non-namespaced classes.

```php
<?php
namespace Foo;
class Bar {
    public function Bar() {
        // treated as constructor in PHP 5.3.0-5.3.2
        // treated as regular method as of PHP 5.3.3
    }
}
?>
```
