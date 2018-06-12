<template lang="pug">
  main.index
    .container
      #mobile_menu_btn(
        @click='mobileToggleFilter',
        :class='{isOpen: $store.state.isMobileFilterOpen}')
        i.fas(:class='$store.state.isMobileFilterOpen ? "fa-times" : "fa-filter"')
      filter-pannel
      .bikes_container
        .columns.is-multiline
          bike-brief(
            v-for='bike in filteredData', 
            :key='bike.sno',
            :bike='bike')
</template>

<script>
import FilterPannel from './FilterPannel'
import BikeBrief from './BikeBrief'

export default {
  name: 'index',
  components: {
    FilterPannel, BikeBrief
  },
  data () {
    return {
    }
  },
  methods: {
    mobileToggleFilter() {
      this.$store.commit('mobileToggleFilter')
    }
  },
  computed: {
    filteredData() {
      return this.$store.getters.filteredData 
    }
  },
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
