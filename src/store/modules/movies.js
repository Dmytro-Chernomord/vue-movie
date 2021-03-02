import axios from '../../plugins/axios/index'
import IDs from '../mock/imdb_top250'
export default {
  namespaced: true,
  state: {
    top250: IDs,
    moviesPerPage: 12,
    currenPage: 1,
    moviesArray: [],
    moviesObj: {}
  },
  mutations: {
    setStateMoviesArray (state, arr) {
      state.moviesArray = arr
    },
    setStateMoviesObj (state, obj) {
      state.moviesObj = obj
    },
    setCurrentPage (state, value) {
      state.currenPage = value
    },
    async  deleteMovie (state, value) {
      // const findIndex = state.moviesArray.findIndex(el => value === el.imdbID)
      // console.log(findIndex)
      state.moviesArray = state.moviesArray.filter(el => value !== el.imdbID)
      state.top250 = state.top250.filter(el => value !== el)
      if (state.top250[(state.currenPage * state.moviesPerPage) - 1]) {
        const newMovie = await axios.get(`/?i=${state?.top250[(state.currenPage * state.moviesPerPage) - 1]}`)
        state.moviesArray.push(newMovie.data)
      }
    }
  },
  actions: {
    // changeCurrentPage ({ commit }, currentPage) { commit('setCurrentPage', currentPage) },
    pagination ({ commit, dispatch }, currentPage) {
      commit('setCurrentPage', currentPage)
      dispatch('fetchMovies')
    },
    // setStateMoviesArray ({ commit }, arr) {
    //   commit('setStateMoviesArray', arr)
    // },
    // setStateMoviesObj ({ commit }, obj) {
    //   commit('setStateMoviesObj', obj)
    // },
    async onSearch ({ commit }, query) {
      try {
        console.log('query', query)
        const promise = await axios.get(`/?s=${query}`).then(res => res.data)
        console.log(promise.Search)
        if (promise.Search) {
          commit('setStateMoviesArray', promise.Search)
        } else commit('setStateMoviesArray', [])
      } catch (error) {
        console.log(error)
      } finally {}
    },

    async   fetchMovies ({ getters, commit, dispatch }) {
      dispatch('setLoader', true, { root: true })
      function serialize (moviesArray) {
        const moviesObj = {}
        const movieArray = moviesArray.map(movie => {
          moviesObj[movie.data.imdbID] = movie.data
          return movie.data
        })
        return { moviesObj, movieArray }
      }
      const { getCurrentPage, moviesOnPage, slicedMovie } = getters
      const from = (getCurrentPage * moviesOnPage - moviesOnPage)
      const to = getCurrentPage * moviesOnPage
      const moviesToFetch = slicedMovie(from, to)
      //   const promise = []
      //   const start = Date.now()
      //   await moviesToFetch.map(async id => {
      //     const el = await axios.get(`/?i=${id}`).then(res => res.data)
      //     console.log(el, 'res')

      //     promise.push(el)
      //     console.log(start - Date.now())
      //   })
      //   console.log(promise)
      //   const res = moviesToFetch.map(async (id) => {
      //     console.log(id)
      //     await axios.get(`/?=${id}`).then(res => console.log(res.data))
      //   })
      //   //   const res = await axios.get('/?i=tt0111161')
      try {
        const promise = moviesToFetch.map(id => axios.get(`/?i=${id}`))
        const res = await Promise.all(promise)
        const stateRes = serialize(res)
        commit('setStateMoviesObj', stateRes.moviesObj)
        commit('setStateMoviesArray', stateRes.movieArray)
      } catch (error) {
        console.log(error)
      } finally {
        dispatch('setLoader', false, { root: true })
      }
    },
    deleteMovie ({ commit }, movieID) {
      commit('deleteMovie', movieID)
    }
  },
  getters: {
    getCurrentPage: ({ currenPage }) => currenPage,
    moviesOnPage: ({ moviesPerPage }) => moviesPerPage,
    slicedMovie: ({ top250 }) => (from, to) => top250.slice(from, to),
    getMoviesArray: ({ moviesArray }) => moviesArray,
    getMoviesObj: ({ moviesObj }) => moviesObj,
    getAllMovies: ({ top250 }) => top250
  }
}
