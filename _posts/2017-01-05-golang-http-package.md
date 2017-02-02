---
layout: post
title: The http package in Go language
category: 英文
tags: Go
keywords: golang,wonderfan
description: how to use http package
---

## The http package in Go language


### The primary role of http package

Package http provides HTTP client and server implementations.


### Code Anatomy

1. Get, Head, Post, and PostForm make HTTP (or HTTPS) requests.
2. The client must close the response body when finished with it.
3. For control over HTTP client headers, redirect policy, and other settings, create a Client;
4. For control over proxies, TLS configuration, keep-alives, compression, and other settings, create a Transport.
5. Clients and Transports are safe for concurrent use by multiple goroutines and for efficiency should only be created once and re-used.
6. ListenAndServe starts an HTTP server with a given address and handler. The handler is usually nil, which means to use DefaultServeMux. Handle and HandleFunc add handlers to DefaultServeMux.
7. More control over the server's behavior is available by creating a custom Server.
8. Package httputil provides HTTP utility functions, complementing the more common ones in the net/http package.
