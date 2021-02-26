import Vue from 'vue'
import Vuex from 'vuex'
import movies from './modules/movies'
import loaderStore from './modules/loader'
import modalStore from './modules/modal'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    movies, loaderStore, modalStore
  }
})
