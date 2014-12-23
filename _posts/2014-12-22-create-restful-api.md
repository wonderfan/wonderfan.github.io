---
layout: post
title: 使用Pecan创建restful API 服务
category: 技术
tags: Python
keywords: python,API,pecan,restful,服务，wonderfan
description: 使用Pecan创建restful API 服务
---

# 创建RESTFUL API服务

### 安装pecan包

    pin install pecan
    
### 创建rest api项目

    pecan create service rest-api
    
### 启动服务

    cd service
    pecan serve config.py
    
### 添加业务代码

* 在RestController的子类中添加get,post,put,delete等方法，并填充其业务意义
* 在model模块中添加业务模型和数据模型，以备控制器使用
