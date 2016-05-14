---
layout: post
title: 在NodeJS中使用Sqlite
category: 中文
tags: NodeJS
keywords: node,node.js,sqlite,阿樊提,wonderfan
description: sqlite best practise
---

### 安装模块

-  `npm install sqlite3 --save`
-  `npm install uuid  --save`


### 代码实操

```js
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('dev.db');
var uuid = require('uuid');
db.serialize(function() {
    var sql_schema = "CREATE TABLE user( \
            id integer, \
            name text, \
            city text \
        )";
    db.run(sql_schema);
    var stmt = db.prepare("INSERT INTO user(id,name,city) VALUES (?,?,?)");
    for (var i = 1; i < 10; i++) {
        stmt.run([i,uuid.v4(),uuid.v4()]);
    }
    stmt.finalize();
    
    db.each("SELECT id,name,city FROM user", function(err, row) {
        console.log(row.id + ": " + row.name + ":" + row.city);
    });
});

db.close();
```
