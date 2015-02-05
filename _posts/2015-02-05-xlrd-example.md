---
layout: post
title: 代码实战xlrd
category: 技术
tags: Python
keywords: 阿樊提,xlrd,python,,wonderfan
description: 如何使用xlrd
---

### 简单例子阐释xlrd用法

'''
import xlrd
import os

data_mapper ={
	'CFTS_Customer_Number':(1,10),#the first parameter is row position, the second parameter is column position
	'Compute_Node_Type':(1,33),
	'Block_Storage_Type':(1,36),
	'Object_Storage_Type':(1,37),
	'CUSTOMER_EMAIL':(1,41),
	'CUSTOMER_USERNAME':(1,42),
	'VM_Customer_Provided_Subnet':(1,49),
	'Enable_SL_Private_Subnet_Access':(1,50),
	'Enable_Internet_Access':(1,51),
	'Openvpn_Shortname':(1,52),
	'ipsec_customer_peer_ip':(1,53),
	'ipsec_customer_peer_subnet':(1,54),
	'ipsec_presharedsecret':(1,55),
	'ipsec_vti_subnet':(1,56),
	'CFTS_contract_number':(1,227),
	'CFTS_work_number':(1,228)
}

def get_data_from_excel(excel_file):
	excel_sheet = xlrd.open_workbook(excel_file)
	if excel_sheet is None:
		print('The excel file can not be opened')
		return False	
	if excel_sheet.nsheets > 2:
		print('There are more than one sheet in the excel file')
		return False
	sheet = excel_sheet.sheet_by_index(0)
	if sheet is None:
		print('There is no sheet in the excel file')
		return False
	rows = sheet.nrows
	if rows == 0:
		print('There is no record in the sheet')
		return False
	if rows > 2:
		print('There are more than one record in the sheet')
		return False
	target_data = {}
	for k,v in data_mapper.iteritems():
		target_data[k.upper()] = sheet.cell(v[0],v[1]).value
	
	print target_data
		
	excel_sheet.release_resources()

def get_file_info(form_file):
	if form_file is None:
		print('The file name is empty')
		return False
	if not os.path.exists(form_file):
		print('The file %s does not exist' % form_file)
		return False
	list_file_name = form_file.split('.')
	file_type = list_file_name.pop()
	if file_type is None:
		print('The file name %s is invalid ' % form_file)
		return False
	file_info = {'file_type':file_type,'file_name':form_file}
	return file_info
	
	
if __name__ == '__main__':
	excel_file = 'data.xls'
	file_info = get_file_info(excel_file)
	if not file_info:
		print("Unable to get the file information")
		import sys
		sys.exit()
	file_type = file_info.get('file_type')
	if file_type=='json':
		print 'json'
	elif file_type == 'xls':
		get_data_from_excel(excel_file)
	else:
		print('The file type %s is not supported' % file_type)
	

'''
