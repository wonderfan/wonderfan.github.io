---
layout: post
title: LoopBack实战
category: 中文
tags: NodeJS
keywords: node,node.js,阿樊提,wonderfan
description: LoopBack实战
---

### 准备工作

-  : `npm install strongloop --global`
-  : `slc loopback:app yourapp`
-  : `cd yourapp`
-  : `slc loopback:datasource`
-  : `slc loopback:model`

### Auto Migration/Update

```js
module.exports = function(app) {
  var modelNames = Object.keys(app.models);
  var models = [];
  modelNames.forEach(function(m) {
    var modelName = app.models[m].modelName;
    if (models.indexOf(modelName) === -1) {
      models.push(modelName);
    }
  });
  app.dataSources.mysql.automigrate(models);
  console.log('Models:', models);
  
};
```

### Remote Method

```js
module.exports = function(Contact) {
    Contact.getName = function(id,cb){
        Contact.findOne({where:{id:id}},function(err,contact){
            if(err) throw err;
            cb(null,contact);
        });
    };

    Contact.remoteMethod('getName', 
        {
            http: {path:'/name', verb:'post'},
            accepts:{ arg:'id', type:'number'},
            returns:{arg:'contact', type:'object'}
        }
    );    
};
```
