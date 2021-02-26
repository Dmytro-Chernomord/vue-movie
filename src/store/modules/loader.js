const loaderStore = {
  state: {
    LoaderShow: false
  },
  mutations: {
    setLoader (state, bool) {
      state.LoaderShow = bool
    }
  },
  getters: {
    isLoaderShow: ({ LoaderShow }) => LoaderShow
  },
  actions: {
    setLoader ({ commit }, bool) { commit('setLoader', bool) }
  }
}

export default loaderStore
