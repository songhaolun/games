import apis from './api'

const install = Vue => {
  if (install.installed) { return }

  install.installed = true

  Object.defineProperties(Vue.prototype, {
    $api: {
      get () {
        return apis
      }
    }
  })
}

export default install
