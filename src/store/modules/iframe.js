export default {
  state: {
    iframeUrl: [],
    iframeUrls: []
  },
  getters: {
  },
  mutations: {
    setIFrameUrl (state, iframeUrl) {
      state.iframeUrl = iframeUrl
    },
    addIFrameUrl (state, iframeUrl) {
      state.iframeUrls.push(iframeUrl)
    }
  },
  actions: {
  }
}
