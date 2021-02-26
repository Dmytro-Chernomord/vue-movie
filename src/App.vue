<template>
  <div>
    <template v-if="isLoaderShow">
    <Loader />
    </template>
    <PosterBG>
    <Modal/>
      <NavBar/>
  <!-- <div id="app">App</div> -->
  <MovieList :title="$route.query.q? 'Your search result': 'Top 250'"/>
  <MoviePagination v-if="!$route.query.q"></MoviePagination>
    </PosterBG>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MovieList from './components/MovieList'
import PosterBG from './components/PosterBG'
import MoviePagination from './components/MoviePagination'
import Loader from './components/Loader'
import NavBar from './components/NavBar'
import Modal from './components/Modal'

export default {
  name: 'App',
  components: { Modal, MovieList, PosterBG, MoviePagination, Loader, NavBar },
  watch: {
    '$route.query': {
      handler: 'watchPage',
      immediate: true,
      deep: true
    }
  },
  // mounted () {
  //   // console.log(this.$route.query)
  // },
  // created () {
  //   console.log(this.getCurrentPage)
  //   console.log('this.$route.query.page', this.$route.query.page)
  //   if (this.getCurrentPage === +this.$route.query.page || !this.$route.query.page) {
  //     this.fetchMovies()
  //   }
  //   this.pagination(+this.$route.query.page)
  // },
  methods: {
    ...mapActions('movies', ['fetchMovies', 'pagination', 'onSearch']),
    // ...mapActions(['setModal']),

    watchPage ({ page = 1, q }) {
      if (!q) {
        this.pagination(Number(page))
        return
      }
      if (q) {
        console.log('$route.query.q', this)
        this.onSearch(q)
      }
    }
    // onModal (e) {
    //   console.log(e)
    //   return true
    // }
  },
  computed: {
    // ...mapGetters('movies', ['getMoviesArray', 'getMoviesObj', 'getCurrentPage']),
    ...mapGetters(['isLoaderShow', 'isModalShow'])
    // onModal () {
    //   if (this.isModalShow) {
    //     return true
    //   }
    //   return false
    // }

  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica,  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  background-image: url();
}
</style>
