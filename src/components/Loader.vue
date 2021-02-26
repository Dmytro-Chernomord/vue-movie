<template>
    <div class="loader">
<BSpinner type="grow" variant="light" label="loading..."/>
    </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="css" scoped>
.loader{
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.7);
    font-size: 100px;
    z-index: 999;
}
</style>
