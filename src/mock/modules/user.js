// 保存
export function save () {
  return {
    url: 'user/save',
    type: 'post',
    data: {
      'code': 200,
      'msg': null,
      'data': 1
    }
  }
}
// 删除
export function del () {
  return {
    url: 'http://localhost:8080/user/delete',
    type: 'post',
    data: {
      'code': 200,
      'msg': null,
      'data': 1
    }
  }
}
// 批量删除
export function batchDelete () {
  return {
    url: 'user/delete',
    type: 'post',
    data: {
      'code': 200,
      'msg': null,
      'data': 1
    }
  }
}
// 分页查询
let findPageData = {
  'code': 200,
  'msg': null,
  'data': {}
}
let current = 3
let size = 8
let total = 42
let totalPages = 9
findPageData.data.current = current
findPageData.data.size = size
findPageData.data.total = total
findPageData.data.totalPages = totalPages
let content = []
for (let i = 0; i < size; i++) {
  let obj = {}
  obj.id = i + 1
  obj.name = 'galaxy' + (i + 1)
  obj.password = '9ec9750e709431dad22365cabc5c625482e574c74adaebba7dd02f1129e4ce1d'
  obj.salt = 'YzcmCZNvbXocrsz9dm8e'
  obj.email = 'galaxy' + (i + 1) + '@qq.com'
  obj.mobile = '18688982323'
  obj.status = 1
  obj.deptId = 12
  obj.deptName = 'Dev'
  content.push(obj)
}
findPageData.data.content = content
export function findPage (params) {
  return {
    url: 'user/findPage',
    type: 'post',
    data: findPageData
  }
}
export function findPermissions () {
  let permsData = {
    'code': 200,
    'msg': null,
    'data': [
      null,
      'sys:user:view',
      'sys:menu:delete',
      'sys:dept:edit',
      'sys:dict:edit',
      'sys:dict:delete',
      'sys:menu:add',
      'sys:user:add',
      'sys:log:view',
      'sys:dept:delete',
      'sys:role:edit',
      'sys:role:view',
      'sys:dict:view',
      'sys:user:edit',
      'sys:user:delete',
      'sys:dept:view',
      'sys:dept:add',
      'sys:role:delete',
      'sys:menu:view',
      'sys:menu:edit',
      'sys:dict:add',
      'sys:role:add'
    ]
  }
  return {
    url: 'user/findPermissions',
    type: 'get',
    data: permsData
  }
}
