---
layout: post
title: 在NodeJS中使用MySQL数据库
category: 中文
tags: NodeJS,Cloud9
keywords: node,node.js,mysql,阿樊提,wonderfan
description: mysql best practise
---

### C9 MySQL 数据库

- 控制工具：`mysql-ctl --help`
- 启动：`mysql-ctl start`
- 命令行：`mysql-ctl cli`
- 默认配置：`{user:'root',database:'c9',password:''}`


### 模块依赖

```json
{
  "main": "index.js",
  "dependencies": {
    "sails-mysql": "^0.12.1",
    "uuid": "^2.0.2",
    "waterline": "^0.12.1"
  }
}
```


### 代码演练

```node
var Waterline = require('waterline');
var mysqlAdapter = require('sails-mysql');
var orm = new Waterline();
var uuid = require('uuid');

var config = {
  adapters: {
    'default': mysqlAdapter,
     mysql: mysqlAdapter
  },
  connections: {
    mysql: {
      adapter: 'mysql',
      host: '0.0.0.0',
      user: 'root',
      password: '',
      database: 'c9'
    }
  },
  defaults: {
    migrate: 'alter'
  }
};

var User = Waterline.Collection.extend({
  identity: 'user',
  connection: 'mysql',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    name: 'string',
    city: 'string'
  }
});

orm.loadCollection(User);

orm.initialize(config, function(err, models) {
  if(err) throw err;
  var user_model = models.collections.user;
  var data = {name:uuid.v4(),city:uuid.v4()};
  user_model.create(data).then(function(user){
       console.log(user)
  });
});

```
