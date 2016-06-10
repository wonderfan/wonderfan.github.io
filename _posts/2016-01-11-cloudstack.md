---
layout: post
title: 剖析cloudstack中虚机的创建过程
category: 中文
tags: CloudStack
keywords: cloudstack,wonderfan
description: 剖析cloudstack中虚机的创建过程
---

### UI Side

```
$.ajax({
	   url: createURL('deployVirtualMachine'),
	   data: deployVmData
})
```
