---
layout: post
title: 剖析cloudstack中虚机的创建过程
category: 中文
tags: CloudStack
keywords: cloudstack,wonderfan
description: 剖析cloudstack中虚机的创建过程
---

### UI Action

```
    var clientApiUrl = "/client/api";
	
    function createURL(apiName, options) {
        if (!options) options = {};
        var urlString = clientApiUrl + "?" + "command=" + apiName + "&response=json";
        if (g_sessionKey) {
            urlString += "&sessionkey=" + g_sessionKey;
        }

        if (cloudStack.context && cloudStack.context.projects && !options.ignoreProject) {
            urlString = urlString + '&projectid=' + cloudStack.context.projects[0].id;
        }

        return urlString;
    }

	$.ajax({
	   url: createURL('deployVirtualMachine'),
	   data: deployVmData
	})
```

### API Service

- ApiServlet.java
```
@Component("apiServlet")
@SuppressWarnings("serial")
public class ApiServlet extends HttpServlet {
    @Inject
    ApiServerService apiServer;
}
```

- ApiServer.java
```
@Component
public class ApiServer extends ManagerBase implements HttpRequestHandler, ApiServerService {
    @Inject
    private ApiDispatcher dispatcher;
}
```

- ApiDispatcher.java
```
public class ApiDispatcher {
     public void dispatch(final BaseCmd cmd, final Map<String, String> params, final boolean execute) throws Exception {
         cmd.execute();
     }
}
```

- DeployVMCmdByAdmin.java
```
@APICommand(name = "deployVirtualMachine", description = "Creates and automatically starts a virtual machine based on a service offering, disk offering, and template.", responseObject = UserVmResponse.class, responseView = ResponseView.Full, entityType = {VirtualMachine.class},requestHasSensitiveInfo = false, responseHasSensitiveInfo = true)
public class DeployVMCmdByAdmin extends DeployVMCmd {
    .......
}
```

