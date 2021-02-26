<template>
    <header class="header">
  <b-navbar class="nav-bar" type="dark" variant="dark">
      <b-container>
          <b-navbar-brand @click="topShow" href="#">MovieDB</b-navbar-brand>
           <!-- <b-navbar-brand href="">top 250</b-navbar-brand> -->
    <b-nav-form>
      <b-form-input v-model="SearchInput" debounce="500" class="mr-sm-2 search-input" placeholder="Search"></b-form-input>
    </b-nav-form>
    </b-container>
  </b-navbar>
    </header>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'NavBar',
  data: () => ({
    SearchInput: ''
  }),
  //   computed: {
  //     onChangeInput: {
  //       get () {
  //         return this.SearchInput
  //       },
  //       set (value) {
  //         // console.log(value)
  //         this.SearchInput = value
  //       }
  //     }
  //   },
  watch: {
    SearchInput: function () {
      if (this.SearchInput) {
        this.SendSearch(this.SearchInput)
      }
      return this.SearchInput
    }
  },
  methods: {
    ...mapActions('movies', ['onSearch', 'fetchMovies']),
    SendSearch (q) {
      this.$router.push({ query: { q } })
      if (this.SearchInput) {
        console.log('Send')
        this.onSearch(this.SearchInput)
      }
    },
    topShow () {
      this.$router.push({ query: { } })
      this.fetchMovies()
    }
  }
}
</script>

<style lang="css" scoped>
.header{
    margin-bottom: 30px;
}
.nav-bar{
    color: rgba(0, 0, 0, 0.7)!important
}
.search-input{
    /* color: #fff; */
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(0,0,0,0.6);
}
.search-input:focus{
    box-shadow: none;
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(0,0,0, 0.6);
}
</style>
