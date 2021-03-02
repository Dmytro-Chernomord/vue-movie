<template>
<BContainer class="movie-list">
    <h3 class="list-title">{{title}}</h3>
    <BRow>
    <template v-if="getMoviesArray.length">
    <BCol cols="3" v-for="(movie) in getMoviesArray" :key='movie.imdbID' >
    <MovieItem :movie="movie"></MovieItem>
    </BCol>
    </template>
    <template v-else>
  <span class="noResult">  No film found</span>
    </template>
    </BRow>
</BContainer>
</template>

<script>
import { mapGetters } from 'vuex'
import MovieItem from './MovieItem'
export default {
  name: 'MovieList',
  computed: {
    ...mapGetters('movies', ['getMoviesArray'])
  },
  props: {
    title: {
      type: String,
      default: 'IMDB Top 250'
    }
  },
  components: { MovieItem }
}

</script>

<style lang="css" scoped>
.list-title{
font-size: 50px;
margin-bottom: 30px;
}
.movie-list{
height: 100vh;
}
.noResult{
  font-size: 30px;
  margin-top: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;

}
</style>
