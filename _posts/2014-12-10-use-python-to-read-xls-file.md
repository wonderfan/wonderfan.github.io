---
layout: post
title: 使用python语言操作excel文件
category: 技术
tags: Python
keywords: python,openpyxl,xlrd
description: 使用python语言读取excel文件
---

# 解析excel文件，读取其数据

### 可以选用的包有：xlrd和openpyxl

    pip install xlrd
    pip install openpyxl
    
### 打开excel文件

    import xlrd
    excel_sheet = xlrd.open_workbook('demo.xls')
    
### 打开excel文件中的work sheet

    sheet_one = excel_sheet.sheet_by_name('one')
    print excel_sheet.sheet_names()
   
### 读取每行和每列中的值

    curr_row_index = 0
    max_rows = sheet_one.nrows
    max_cols = sheet_one.ncols
    while curr_row_index < max_rows:
        curr_col_index = 0
        while curr_col_index < max_cols:
            value = sheet_one.row(curr_row_index,curr_col_index)
        curr_row_index+=1
