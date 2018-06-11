<template lang="pug">
  #app
    app-nav
    p(v-if='$store.state.isLoading') LOADING ...
    router-view(v-else)
</template>

<script>
import axios from 'axios'
import AppNav from './components/AppNav'

export default {
  name: 'app',
  components: {
    AppNav
  },
  mounted() {
    this.$store.dispatch('getApi')
    setInterval(() => {
      this.$store.dispatch('getApi')
      console.log('update !')
    }, 60000)
  }
}
</script>

<style lang="scss">
@import '../src/assets/scss/app.scss';
</style>
