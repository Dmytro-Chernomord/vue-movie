<template>
    <div class="bg">
<slot></slot>
    </div>
</template>

<script>
export default {
  name: 'PosterBG'
}
</script>

<style lang="css" scoped>
.bg{
background-image: linear-gradient(45deg, rgba(0,0,0,0.7), rgba(1,1,1,0.2));
/* background-color: rgba(3, 0, 0, 0.7); */
}
</style>
