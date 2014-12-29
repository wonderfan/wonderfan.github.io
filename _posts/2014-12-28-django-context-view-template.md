---
layout: post
title: 上下文中给模板中的变量赋值
category: 技术
tags: Python
keywords: python,API,django,view,template,wonderfan
description: 正确使用django中的view，context和template
---

#  在上下文中给模板中的变量赋值

### 方法一：在URL的定义中,使用kwargs

    urlpatterns = patterns('',
        url(r'^$', HomeView.as_view(),{'my_name':'wonderfan'}, name='home'),
    )


### 方法二: 在view 类中,使用get_context_data()

    from django.views.generic import TemplateView

    class HomeView(TemplateView):
        template_name = 'templates/home.html'
    
        def get_context_data(self, **kwargs):
            context = super(HomeView, self).get_context_data(**kwargs)
            context['my_name'] = 'wonderfan'
            return context
            
### 模板取值

```
<p>This is my test</p>
<p>The value is { my_name } </p>
```
