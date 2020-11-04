import Vue from 'vue'
import vuex from 'vuex'

import appStore from './modules/appStore.js'
import menu from './modules/menu.js'
import user from './modules/user'
import iframe from './modules/iframe'

Vue.use(vuex)

const store = new vuex.Store({
  modules: {
    app: appStore,
    iframe: iframe,
    user: user,
    menu: menu
  }
})

export default store
