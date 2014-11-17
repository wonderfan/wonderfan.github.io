---
layout: post
title: Celery的世界
category: 技术
tags: Python
keywords: celery用法宝典
description: 使用celery做任务队列
author: wonderfan
---

### Celery任务队列

任务队列是在不同的线程和机器分派任务的一种机制。任务队列的输入是任务单元。专属的worker会处理这些任务，并不间断的监控队列，随时待命处理新的任务。

在Celery中，通信是通过消息来实现的。client和worker之间通过消息broker建立联系。client把任务以消息的形式放入队列，broker会把任务消息送达到worker，最后由worker完成任务。

在Celery系统中，包括多种worker和broker，从而保证了高可用性和水平拓展。在messagebroker方面，与RabbitMQ,Redis结合的比较好，在本地开发中，可以使用SQLite替代messagebroker作为消息存储。Celery可以在单台机器上运行，也可以在多台机器上运行，甚至可以跨数据中心运行。

### 创建Celery Instance

Application是Celery的实例，它是线程安全的，从而不同配置的多个Celery Application是可以共存在一个进程中。

创建Celery实例代码如下

   from celery  import Celery
   app = Celery()
