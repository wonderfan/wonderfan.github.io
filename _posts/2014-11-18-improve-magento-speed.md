---
layout: post
title: Magento性能调优
category: 技术
tags: Magento
keywords: magento,speed,优化
description: magento性能调优
---

# Magento性能调优的几种方法

### 清理数据库日志

    SET foreign_key_checks = 0;
    TRUNCATE dataflow_batch_export;
    TRUNCATE dataflow_batch_import;
    TRUNCATE log_customer;
    TRUNCATE log_quote;
    TRUNCATE log_summary;
    TRUNCATE log_summary_type;
    TRUNCATE log_url;
    TRUNCATE log_url_info;
    TRUNCATE log_visitor;
    TRUNCATE log_visitor_info;
    TRUNCATE log_visitor_online;
    TRUNCATE report_viewed_product_index;
    TRUNCATE report_compared_product_index;
    TRUNCATE report_event;
    TRUNCATE index_event;
    TRUNCATE catalog_compare_item;
    SET foreign_key_checks = 1;
    
    php -f shell/log.php clean
    
### 使用缓存

    File System => APC => Memcached => Redis cache => Varnish cache
    
### MySQL优化

    query_cache_type = 1
    query_cache_size = 32M
    query_cache_limit=2M

### 使用Magento性能模块

    http://www.magentocommerce.com/magento-connect/pagecache-powered-by-varnish.html
    
    
