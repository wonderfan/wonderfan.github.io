---
layout: post
title: Sails使用手册
category: 中文
tags: NodeJS Sails
keywords: node,node.js,Sails,阿樊提,wonderfan
description: Sails best practise
---

### 准备工作

1. 安装Sails: `npm install sails --global`
2. 创建工程: `sails new yourapp`
3. 创建API: `cd youapp;  sails generate api user`

### 数据模型

在api/models目录下，定义User模型

```js
module.exports = {
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    name: 'string',
    city: 'string'
  }
};
```

### Controller

在api/controllers目录下，定义controller中的action
```js
module.exports = {
  users: function (req, res) {
    User.find({id:1}).exec(function(err,user){
      if(err){
        return res.json({data:"no data"});
      }else{
        return res.json(user);
      }
    });
  }
};
```

### 必要配置

- local.js

```js
module.exports = {
   host: '0.0.0.0',
   port: process.env.PORT || 8080,
   environment: process.env.NODE_ENV || 'development'
};
```

- connections.js

```js
module.exports.connections = {
  mysql: {
    adapter: 'sails-mysql',
    user: 'root',
    host: '0.0.0.0',
    database: 'c9'
  },
};
```

- models.js

```js
module.exports.models = {
  connection: 'mysql',
  migrate: 'alter'
};
```

- routes.js

```js
module.exports.routes = {
  '/': {
    view: 'homepage'
  },
  '/user':"UserController.users"
};
```

### API验收

1. 启动应用: `sails lift`
2. 使用curl或者browser访问API
