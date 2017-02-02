---
layout: post
title: The net package in Go language
category: 英文
tags: Go
keywords: golang,wonderfan
description: the net package in golang
---

## The net package in Go language


### The objective of net package

Package net provides a portable interface for network I/O, including TCP/IP, UDP, domain name resolution, and Unix domain sockets.

Although the package provides access to low-level networking primitives, most clients will need only the basic interface provided by the Dial, Listen, and Accept functions and the associated Conn and Listener interfaces. The crypto/tls package uses the same interfaces and similar Dial and Listen functions.


### Code Anatomy

1. The Dial function connects to a server;
2. The Listen function creates servers;
3. Package http provides HTTP client and server implementations.
4. Package url parses URLs and implements query escaping.
5. Package rpc provides access to the exported methods of an object across a network or other I/O connection.
