<template>
    <div>
<b-modal size="xl"
v-model="onModal"
  :hide-footer="true" :centered="true" id="info-modal">
  <div class="card-modal">
  <img v-if="getModalContent" :src="getModalContent.Poster" :alt="getModalContent.Title" srcset="">
<div class="card-item">
<h5 v-if="getModalContent && getModalContent.Title">{{getModalContent.Title}}</h5>
<span v-if="getModalContent && getModalContent.Released"><span class="bold"> Released:</span> {{date}}</span>
<span v-if="getModalContent && getModalContent.Runtime"><span class="bold">Runtime:</span>  {{getModalContent.Runtime}}</span>
<span v-if="getModalContent && getModalContent.Genre"><span class="bold">Genre:</span>  {{getModalContent.Genre}}</span>
<span v-if="getModalContent && getModalContent.Actors"><span class="bold">Actors: </span> {{getModalContent.Actors}}</span>
<span v-if="getModalContent && getModalContent.Plot"><span class="bold">Description: </span> {{getModalContent.Plot}}</span>
<b-rating v-if="getModalContent &&getModalContent.imdbRating" v-model="getModalContent.imdbRating" readonly show-value precision="1" stars="10" show-value-max no-border/>
</div>

  </div>
</b-modal>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Modal',
  computed: {
    ...mapGetters(['getModalContent', 'isModalShow']),
    onModal: {
      get () {
        return this.isModalShow
      },
      set (value) {
        this.setModal(value)
        // setTimeout(() => {
        //   this.setModalContent(null)
        // }, 500)
        // this.setModalContent(null)
      }
    },
    date () {
      return this.getModalContent.Released.slice(-4)
    }
  },
  methods: {
    ...mapActions(['setModal', 'setModalContent'])

  },
  destroyed () {
    this.setModalContent(null)
  }

}
</script>

<style lang="css" scoped>
.card-modal{
    display: flex;

    /* width: 100%; */
}
.card-item{
    display: flex;
    flex-direction: column;
    width: 70%;
}
.card-modal >img{
    max-width: 200px;
    margin-right: 20px;
}
.bold{
    font-size: 18px;
    font-weight: bold;
}
</style>
