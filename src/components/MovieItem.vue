<template>
  <div class="movie-item mb-3">
    <div
      class="movie-item-poster"
      :style="`background-image: url(${movie.Poster})`"
    >
      <div class="movie-info-wrap">
        <div class="movie-item-info">
          <h3 class="movie-title">{{ movie.Title }}</h3>
          <span class="movie-year">{{ movie.Year }}</span>
          </div>
          <div class="movie-item-controls row no-gutters">
            <div class="col pr-2">
              <BButton @click="showModal(movie.imdbID)" size="mb" block variant="outline-light">Info</BButton>
            </div>
            <!-- <div class="col pl-2">
              <BButton @click="onConfirm(movie.imdbID, movie.Title)" size="mb" block variant="outline-light">Remove</BButton>
            </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'MovieItem',
  props: {
    movie: {
      type: Object
    }
  },
  methods: {
    ...mapActions('movies', ['deleteMovie']),
    ...mapActions(['setModalContent', 'setModal']),
    async onConfirm (id, title = 'this Film') {
      const isConfirm = await this.$bvModal.msgBoxConfirm(`Are you sure want delete ${title} ?`)
      console.log(id, title, isConfirm)
      this.deleteMovie(id)
    },
    async showModal (id) {
      await this.setModalContent(id)
      this.setModal(true)
      // this.$bvModal.show('info-modal')
    }
  }
}
</script>

<style lang="css" scoped>
.movie-item {
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 200ms ease-in;
  height: 400px;
}
.movie-item:hover {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.1);
}
.movie-item-poster {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.movie-info-wrap {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  padding: 10px 20px;
  opacity: 0;
  transition: all 200ms ease;
}
.movie-info-wrap:hover{
    opacity: 1;
    background-color: rgba(0,0,0,0.7);
}
.movie-title{
    font-size: 16px;
    color: #fff;
}
.movie-year{
    font-size: 14px;
    color: #fff;
}
</style>
