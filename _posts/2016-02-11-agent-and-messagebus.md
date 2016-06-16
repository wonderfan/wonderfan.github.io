---
layout: post
title: How agent and message bus work in the CloudStack platform?
category: 中文
tags: Python
keywords: cloudstack,wonderfan
description: How agent and message bus work in the CloudStack platform?
---

### Agent and Agent Manager

数据流会通过ui,api servlet,api server, api dispatcher转换成具体的command类，是一个request handler的入口解决了所有的request，只是每个request中的cmd参数的值不同。

dispatcher中根据是否为create action和其他action进行了异步和同步的两种不同的处理，属于优化流程的范畴。

在获得具体的command实体类以及做完必要的数据库存储后，request会传递到agent manager。agent manager负责管理agent以及处理command的request。
