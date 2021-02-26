<template>
    <div class="movies-pagination">
<BPagination v-model="currentPage" :per-page="moviesOnPage" :total-rows="getAllMovies.length" prev-text="Prev" next-text="Next"></BPagination>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'MoviePagination',
  computed: {
    ...mapGetters('movies', ['getCurrentPage', 'moviesOnPage', 'getAllMovies']),
    currentPage: {
      get () {
        return this.getCurrentPage
      },
      set (value) {
        // console.log(value)
        this.$router.push({ query: { page: value } })
        this.pagination(value)
      }
    }
  },
  methods: {
    ...mapActions('movies', ['pagination'])
  }

}
</script>

<style lang="css" scoped>
.movies-pagination{
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
.movies-pagination >>> .pagination .page-item .page-link{
background-color: transparent;
font-size: 12px;
color: #fff;
box-shadow: none;
}
.movies-pagination >>> .pagination .page-item.active .page-link {
    background-color: #fff;
    color: #000;
    border-color: #fff;
}
.movies-pagination >>> .pagination .page-item.disabled .page-link{
color: lightgrey
}
</style>
