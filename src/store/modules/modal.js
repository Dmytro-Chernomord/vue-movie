import axios from '../../plugins/axios'

const modalStore = {
  state: {
    modalShow: false,
    modalContent: null
  },
  mutations: {
    setModal (state, bool) {
      state.modalShow = bool
    },
    setModalContent (state, data) {
      state.modalContent = data
    }
  },
  getters: {
    isModalShow: ({ modalShow }) => modalShow,
    getModalContent: ({ modalContent }) => modalContent
  },
  actions: {
    setModal ({ commit }, bool) { commit('setModal', bool) },
    async setModalContent ({ commit, dispatch }, id) {
      if (id) {
        try {
        //   dispatch('setLoader', true, { root: true })
          const info = await axios.get(`/?i=${id}`).then(res => res.data)
          commit('setModalContent', info)
        } catch (error) {
          console.log(error)
        } finally {
        //   dispatch('setLoader', false, { root: true })
        }
      } else commit('setModalContent', null)
    }
  }
}

export default modalStore
