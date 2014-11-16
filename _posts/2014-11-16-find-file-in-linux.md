---
layout: post
title: Linux下如何快速查找文件和内容
category: 技术
tags: Linux
description: 快速查找linux文件的方法和步骤
---

### 快速查找文件内容

快速查找文件内容可以使用grep命令，grep命令的使用方法如下：

     grep [OPTION]... PATTERN [FILE]...
     
grep命令常用的命令参数：
    
    -i, --ignore-case         ignore case distinctions
    -n, --line-number         print line number with output lines
    -H, --with-filename       print the file name for each match
    -r, --recursive           like --directories=recurse
    --colour[=WHEN]           use markers to highlight the matching strings;
    
### 快速查找文件

find命令可以帮助快速找到你想要找到的文件，其用法如下：

    find [-H] [-L] [-P] [-Olevel] [-D help|tree|search|stat|rates|opt|exec] [path...] [expression]
    
常用的命令参数有：

    -ilname PATTERN -iname PATTERN -inum N -iwholename PATTERN -iregex PATTERN
    -links N -lname PATTERN -mmin N -mtime N -name PATTERN -newer FILE
    -nouser -nogroup -path PATTERN -perm [+-]MODE -regex PATTERN
    -readable -writable -executable
    -wholename PATTERN -size N[bcwkMG] -true -type [bcdpflsD] 

