<template lang="pug">
  #app
    router-view(:bikeData='bikeData')
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      bikeData: ''
    }
  },
  methods: {
    getApi() {
      axios.get('https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.gz')
        .then(res => {
          this.bikeData = res.data.retVal
          console.log('update !')
        })
    }
  },
  mounted() {
    this.getApi()
    setInterval(() => {
      this.getApi()
    }, 60000)
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
