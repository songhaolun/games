/* eslint-disable no-new */
import Vue from 'vue'
import 'babel-polyfill'
import 'lib-flexible/flexible'
import ElementUI from 'element-ui'
import 'element-theme-chalk'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
// import store from './store'
import 'font-awesome/css/font-awesome.min.css'
import '@/theme/index.css'
// import '@/utils/fun'
import {default as api} from './utils/api'
// import {init} from '@/icons' // icon
// import axios from 'axios'
import {baseUtil} from '@/model/function/functions'
import {objTrans} from '@/model/function/objectTransfer'
import { unsyncCheckUtil } from './model/function/unsyncCheckUtil'

// import '@/style/index.scss'

// 初始化icons
// init()
Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(api)
Vue.prototype.api = api
// Vue.prototype.axios = axios
Vue.prototype.baseUtil = baseUtil
Vue.prototype.objTrans = objTrans
Vue.prototype.unsyncCheckUtil = unsyncCheckUtil

new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  render: h => h(App)
  // components: {App}
})
