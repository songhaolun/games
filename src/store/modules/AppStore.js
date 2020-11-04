export default {
  state: {
    appName: 'Galaxy',
    themeColor: '#545c64',
    oldThemeColor: '#545c64',
    collapse: false,
    menuRouteLoaded: false
  },
  getters: {
    collapse (state) {
      return state.collapse
    }
  },
  mutations: {
    onCollapse (state) {
      state.collapse = !state.collapse
    },
    themeColor (state, themeColor) {
      state.themeColor = themeColor
    },
    oldThemeColor (state, oldThemeColor) {
      state.oldThemeColor = oldThemeColor
    },
    menuRouteLoaded (state, menuRouteLoaded) {
      state.menuRouteLoaded = menuRouteLoaded
    }
  },
  actions: {
    onThemeChange ({ commit, state }, data) {
      commit('themeColor', data.themeColor)
      commit('oldThemeColor', data.oldThemeColor)
    }
  }
}
