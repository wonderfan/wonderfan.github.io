---
layout: post
title: Python Guide
category: 英文
tags: Python
keywords: golang,wonderfan
description: docker compose
---

### Modules

Python modules are one of the main abstraction layers available and probably the most natural one. Abstraction layers allow separating code into parts holding related data and functionality.

For example, a layer of a project can handle interfacing with user actions, while another would handle low-level manipulation of data. The most natural way to separate these two layers is to regroup all interfacing functionality in one file, and all low-level operations in another file. In this case, the interface file needs to import the low-level file. This is done with the import and from ... import statements.

As soon as you use import statements you use modules. These can be either built-in modules such as os and sys, third-party modules you have installed in your environment, or your project's internal modules.

To keep in line with the style guide, keep module names short, lowercase, and be sure to avoid using special symbols like the dot (.) or question mark (?). So a file name like :file:`my.spam.py` is one you should avoid! Naming this way will interfere with the way Python looks for modules.

In the case of my.spam.py Python expects to find a :file:`spam.py` file in a folder named :file:`my` which is not the case. There is an example of how the dot notation should be used in the Python docs.

If you'd like you could name your module :file:`my_spam.py`, but even our friend the underscore should not be seen often in module names.

Aside from some naming restrictions, nothing special is required for a Python file to be a module, but you need to understand the import mechanism in order to use this concept properly and avoid some issues.

Concretely, the import modu statement will look for the proper file, which is :file:`modu.py` in the same directory as the caller if it exists. If it is not found, the Python interpreter will search for :file:`modu.py` in the "path" recursively and raise an ImportError exception if it is not found.

Once :file:`modu.py` is found, the Python interpreter will execute the module in an isolated scope. Any top-level statement in :file:`modu.py` will be executed, including other imports if any. Function and class definitions are stored in the module's dictionary.

Then, the module's variables, functions, and classes will be available to the caller through the module's namespace, a central concept in programming that is particularly helpful and powerful in Python.

In many languages, an include file directive is used by the preprocessor to take all code found in the file and 'copy' it into the caller's code. It is different in Python: the included code is isolated in a module namespace, which means that you generally don't have to worry that the included code could have unwanted effects, e.g. override an existing function with the same name.

It is possible to simulate the more standard behavior by using a special syntax of the import statement: from modu import *. This is generally considered bad practice. Using import * makes code harder to read and makes dependencies less compartmentalized.

Using from modu import func is a way to pinpoint the function you want to import and put it in the global namespace. While much less harmful than import * because it shows explicitly what is imported in the global namespace, its only advantage over a simpler import modu is that it will save a little typing.

### Packages

Python provides a very straightforward packaging system, which is simply an extension of the module mechanism to a directory.

Any directory with an :file:`__init__.py` file is considered a Python package. The different modules in the package are imported in a similar manner as plain modules, but with a special behavior for the :file:`__init__.py` file, which is used to gather all package-wide definitions.

A file :file:`modu.py` in the directory :file:`pack/` is imported with the statement import pack.modu. This statement will look for an :file:`__init__.py` file in :file:`pack`, execute all of its top-level statements. Then it will look for a file named :file:`pack/modu.py` and execute all of its top-level statements. After these operations, any variable, function, or class defined in :file:`modu.py` is available in the pack.modu namespace.

A commonly seen issue is to add too much code to :file:`__init__.py` files. When the project complexity grows, there may be sub-packages and sub-sub-packages in a deep directory structure. In this case, importing a single item from a sub-sub-package will require executing all :file:`__init__.py` files met while traversing the tree.

Leaving an :file:`__init__.py` file empty is considered normal and even a good practice, if the package's modules and sub-packages do not need to share any code.

Lastly, a convenient syntax is available for importing deeply nested packages: `import very.deep.module as mod`. This allows you to use mod in place of the verbose repetition of very.deep.module
