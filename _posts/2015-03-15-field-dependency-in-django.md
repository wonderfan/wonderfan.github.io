---
layout: english
category: 英文
title: How to solve the field dependency in Django Form?
tags: Django
keywords: django,field, form,dependency,wonderfan,阿樊提
description: use wizard form or model relation to solve the form field dependency
---

### Two possible solutuons:

- Use wizard form
- Use model relation

### The wizard form approach

In this approach, the fields are placed into different parts, therefore, one field's value can be retrieved and used by another field. 

```python
class FormWizard(SessionWizardView):

    def get_form_kwargs(self, step=None):
        kwargs = {}
        if step == '2':
            site_num = self.get_cleaned_data_for_step('1')['site_num']
            kwargs.update({'site_num': site_num,})
        return kwargs 
        
class MyForm(forms.Form):
    #some fields

class MyForm1(forms.Form):
    site_num = forms.IntegerField()

class MyForm2(forms.Form):
    def __init__(self, *args, **kwargs):
        extra = kwargs.pop('site_num')
        super(MyForm2, self).__init__(*args, **kwargs)

        for i in range(extra):
            self.fields['site_name_%s' % i] = forms.CharField()        
```

### The model relationship way

The dependency replation are setup in the model definiton and the form are generated from the model.

```python
class Address(models.Model):

    contact = models.ForeignKey(Contact)
    address_type = models.CharField(
        max_length=10,
    )

    address = models.CharField(
        max_length=255,
    )
    city = models.CharField(
        max_length=255,
    )
    state = models.CharField(
        max_length=2,
    )
    postal_code = models.CharField(
        max_length=20,
    )

    class Meta:
        unique_together = ('contact', 'address_type',)
        
from django.forms.models import inlineformset_factory

from contacts.models import (
    Contact,
    Address,
)

# inlineformset_factory creates a Class from a parent model (Contact)
# to a child model (Address)
ContactAddressFormSet = inlineformset_factory(
    Contact,
    Address,
)        

```
