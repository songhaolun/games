import Mock from 'mockjs'
import { baseUrl } from '@/utils/global'
import * as login from './modules/login'
import * as user from './modules/user'
import * as menu from './modules/menu'
// 开启/关闭设置
fnCreate(login, true)
fnCreate(user, true)
fnCreate(menu, true)

function fnCreate (mod, isOpen = false) {
  if (isOpen) {
    for (var key in mod) {
      ((res) => {
        if (res.isOpen !== false) {
          let url = baseUrl
          if (!url.endsWith('/')) {
            url = url + '/'
          }
          url = url + res.url
          Mock.mock(new RegExp(res.url), res.type, (opts) => {
            opts['data'] = opts.body ? JSON.parse(opts.body) : null
            delete opts.body
            //batchconsole.log('\n')
            //batchconsole.log('%cmock拦截, 请求: ', 'color:blue', opts)
            //batchconsole.log('%cmock拦截, 响应: ', 'color:blue', res.data)
            return res.data
          })
        }
      })(mod[key]() || {})
    }
  }
}
