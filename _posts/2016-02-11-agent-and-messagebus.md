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

agent manage 提供了两个机制，一个是attach agent，另外一个机制是提供manager server和agent之间的通信。attach agent的目的是使用正确和合适的agent去处理command request。 在agent中，server resource对象会被加载进来。 server resource对象是每个虚拟化实现的封装，通过它可以操作底层的虚拟化资源。

### Message Bus

cloudstack中的message bus设置的主要目的是解决底层资源和数据库中资源的同步问题，使用的机制主要是topic。message bus 提供的四种机能，可以根据不同的应用场景而使用。这四种功能分别是rpc call，publish message，subscribe message 和 message listener。
