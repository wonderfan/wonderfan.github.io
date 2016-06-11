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

### DB Action

- UserVmManagerImpl.java
```
    @DB
    protected UserVm createVirtualMachine(DataCenter zone, ServiceOffering serviceOffering, VirtualMachineTemplate tmplt, String hostName, String displayName, Account owner,
            Long diskOfferingId, Long diskSize, List<NetworkVO> networkList, List<Long> securityGroupIdList, String group, HTTPMethod httpmethod, String userData,
            String sshKeyPair, HypervisorType hypervisor, Account caller, Map<Long, IpAddresses> requestedIps, IpAddresses defaultIps, Boolean isDisplayVm, String keyboard,
            List<Long> affinityGroupIdList, Map<String, String> customParameters, String customId) throws InsufficientCapacityException, ResourceUnavailableException,
            ConcurrentOperationException, StorageUnavailableException, ResourceAllocationException {
            
            UserVmVO vm = commitUserVm(zone, template, hostName, displayName, owner, diskOfferingId, diskSize, userData, caller, isDisplayVm, keyboard, accountId, userId, offering,
                isIso, sshPublicKey, networkNicMap, id, instanceName, uuidName, hypervisorType, customParameters);
    }
```

- CloudOrchestrator.java
```
@Component
public class CloudOrchestrator implements OrchestrationService {
    
    @Override
    public VirtualMachineEntity createVirtualMachine(String id, String owner, String templateId, String hostName, String displayName, String hypervisor, int cpu){
        _itMgr.allocate(vm.getInstanceName(), _templateDao.findById(new Long(templateId)), computeOffering, rootDiskOfferingInfo, dataDiskOfferings, networkIpMap, plan,hypervisorType);   
    }
    
}
```
