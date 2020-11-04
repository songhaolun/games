import Vue from 'vue'
import Router from 'vue-router'
// import NotFound from '@/views/errorpage/404'
// import Home from '@/views/home'
// import Login from '@/views/login'
// import Expense from '@/views/Expense'
// import Loan from '@/views/Loan'
// import Frozen from '@/views/Frozen'
// import api from '@/http/api'
// import { getIFramePath, getIFrameUrl } from '@/utils/iframe'
// import store from '@/store'
// import Fss from '@/views/Fss'
// import DocRpt from '@/views/DocRpt'
// import download from '@/views/PDF/download'
// import Repay from './views/Repay'
// import PDF from '@/views/PDF'
// import {Message} from 'element-ui'
// import {
//   base64decode
// } from '../utils/base64'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/game',
      name: 'game',
      component: () => import('@/views/game/game')
    },
    {
      path: '/pushBox',
      name: 'pushBox',
      component: () => import('@/views/pushBox/pushBox')
    },
    {
      path: '*',
      component: () => import('@/views/errorpage/404')
    }
  ]
})

// router.beforeResolve((to, from, next) => {
//   console.log('At beforeResolve')
//   console.log(from)
//   console.log(to)
//   next()
// })

router.beforeEach((to, from, next) => {
  // batchconsole.log('At BeforeEach')
  // batchconsole.log(from)
  // batchconsole.log(to)
  // next()
  // let para = {}
  // 解密
  // if (to.query.val && to.query.val !== 'dev') {
  //   // let vals = base64decode(to.query.val)
  //   // let array = vals.split('&')
  //   // array.forEach(v => {
  //   //   let n = v.split('=')[0]
  //   //   para = Object.assign({}, para, {[n]: v.split('=')[1]})
  //   // })
  //   let vals = window.atob(to.query.val)
  //   console.log(vals)
  //   next(vals)
  // } else {
  next()
  // }
})

// router.beforeEach((to, from, next) => {
//   console.log(from)
//   console.log(to)
//   // let userName = sessionStorage.getItem('user')
//   // if (to.path === '/login') {
//   //   if (userName) {
//   //     next({ path: '/' })
//   //   } else {
//   //     next()
//   //   }
//   // } else {
//   //   if (!userName) {
//   //     next({ path: '/login' })
//   //   } else {
//   //     addDynamicMenuAndRoutes(userName, to, from)

//   // 浏览器限制
//   // let val = getBrowserInfo()
//   // if (val !== 'firefox' && val !== 'chrome') {
//   //   // const h = this.$createElement
//   //   Message({
//   //     message: '<h3 style="line-height:20px;text-align:center">尊敬的用户，您好，报销系统目前支持火狐、谷歌，' +
//   //              '</br>非上述浏览器可能会导致显示异常，建议切换成以上浏览器。' +
//   //              '</br><a href="\/\/pan.countrygarden.com.cn\/file\/a6m5w9git2pzr77djf66qz1n4p6hdzjb#" target="_blank" style="color:#F6AD12;">浏览器下载</a></h3>',

//   //     type: 'info',
//   //     duration: 0,
//   //     showClose: true,
//   //     dangerouslyUseHTMLString: true
//   //   })
//   //   next(false)
//   //   return
//   // }

//   next()
// })

// function addDynamicMenuAndRoutes (userName, to, from) {
//   handleIFrameUrl(to.path)
//   if (store.state.app.menuRouteLoaded) {
//     console.log('动态菜单和路由已经存在.')
//     return
//   }
//   api.menu.findNavTree({'userName': userName})
//     .then(res => {
//       let dynamicRoutes = addDynamicRoutes(res.data)
//       router.options.routes[0].children = router.options.routes[0].children.concat(dynamicRoutes)
//       router.addRoutes(router.options.routes)
//       store.commit('menuRouteLoaded', true)
//       store.commit('setMenuTree', res.data)
//     }).then(res => {
//       api.user.findPermissions({'name': userName}).then(res => {
//         store.commit('setPerms', res.data)
//       })
//     })
//     .catch(function (res) {
//     })
// }

// function handleIFrameUrl (path) {
//   let url = path
//   let length = store.state.iframe.iframeUrls.length
//   for (let i = 0; i < length; i++) {
//     let iframe = store.state.iframe.iframeUrls[i]
//     if (path != null && path.endsWith(iframe.path)) {
//       url = iframe.url
//       store.commit('setIFrameUrl', url)
//       break
//     }
//   }
// }
export default router
// function addDynamicRoutes (menuList = [], routes = []) {
//   var temp = []
//   for (var i = 0; i < menuList.length; i++) {
//     if (menuList[i].children && menuList[i].children.length >= 1) {
//       temp = temp.concat(menuList[i].children)
//     } else if (menuList[i].url && /\S/.test(menuList[i].url)) {
//       menuList[i].url = menuList[i].url.replace(/^\//, '')
//       var route = {
//         path: menuList[i].url,
//         component: null,
//         name: menuList[i].name
//       }
//       let path = getIFramePath(menuList[i].url)
//       if (path) {
//         route['path'] = path
//         route['component'] = resolve => require([`@/views/iframe`], resolve)
//         let url = getIFrameUrl(menuList[i].url)
//         console.log(11111111111111111111111111111111111111111111111111)
//         console.log(menuList[i].url)
//         console.log(url)
//         let iFrameUrl = {'path': path, 'url': url}
//         store.commit('addIFrameUrl', iFrameUrl)
//       } else {
//         try {
//           let array = menuList[i].url.split('/')
//           let url = ''
//           for (let i = 0; i < array.length; i++) {
//             url += array[i].substring(0, 1).toUpperCase() + array[i].substring(1) + '/'
//           }
//           url = url.substring(0, url.length - 1)
//           route['component'] = resolve => require([`@/views/${url}`], resolve)
//         } catch (e) {}
//       }
//       routes.push(route)
//     }
//   }
//   if (temp.length >= 1) {
//     addDynamicRoutes(temp, routes)
//   } else {
//     console.log('动态路由加载...')
//     console.log(routes)
//     console.log('动态路由加载完成.')
//   }
//   return routes
// }

// function getBrowserInfo () {
//   var ua = navigator.userAgent.toLocaleLowerCase()
//   var browserType = null
//   if (ua.match(/firefox/) != null) {
//     browserType = 'firefox'
//   } else if (ua.match(/chrome/) != null) {
//     var is360 = _mime('type', 'application/vnd.chromium.remoting-viewer')
//     function _mime (option, value) {
//       var mimeTypes = navigator.mimeTypes
//       for (var mt in mimeTypes) {
//         if (mimeTypes[mt][option] == value) {
//           return true
//         }
//       }
//       return false
//     }
//     if (is360) {
//       browserType = '360'
//     } else {
//       if (ua.indexOf('se 2.x') > -1) {
//         browserType = 'sogou'
//       } else {
//         browserType = 'chrome'
//       }
//     }
//   }
//   return browserType
// }
