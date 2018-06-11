<template lang="pug">
  main
    h1 BIKE
    .spot(v-for='bike in bikeData')
      p {{bike.sna}}
</template>

<script>
export default {
  name: 'index',
  props:['bikeData'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
