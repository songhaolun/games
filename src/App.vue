<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      
      if (document.body.clientWidth < 800) {
        document.body.style.zoom = 0.6;
      } else
      if (document.body.clientWidth < 1100) {
        document.body.style.zoom = 0.7;
      } else
      if (document.body.clientWidth < 1500) {
        document.body.style.zoom = 0.8;
      } else
      if (document.body.clientWidth < 1800) {
        document.body.style.zoom = 0.9;
      }
    }
  }

</script>

<style lang="scss">
  @import './style/index.scss';

</style>
