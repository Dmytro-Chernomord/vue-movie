<template>
<BContainer>
    <h3 class="list-title">{{title}}</h3>
    <BRow>
    <template v-if="getMoviesArray.length">
    <BCol cols="3" v-for="(movie) in getMoviesArray" :key='movie.imdbID' >
    <MovieItem :movie="movie"></MovieItem>
    </BCol>
    </template>
    <template v-else>
    No film
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
</style>
