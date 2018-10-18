<template lang="pug">
  main.index
    .container
      map-pannel(name='example')
      #mobile_menu_btn(
        @click='mobileToggleFilter',
        :class='{isOpen: $store.state.isMobileFilterOpen}')
        i.fas(:class='$store.state.isMobileFilterOpen ? "fa-times" : "fa-filter"')
      filter-pannel
      .bikes_container
        p.empty_text(v-if='filteredData.length === 0') 嘿～沒有腳踏車想讓你騎喔！
        .columns.is-multiline(v-if='filteredData.length !== 0')
          bike-brief(
            v-for='bike in filteredData', 
            :key='bike.sno',
            :bike='bike')
        pagination(v-if='filteredData.length !== 0')
</template>

<script>
import FilterPannel from '@/components/FilterPannel'
import BikeBrief from '@/components/BikeBrief'
import Pagination from '@/components/Pagination'
import MapPannel from '@/components/MapPannel'

export default {
  name: 'Index',
  components: {
    FilterPannel, BikeBrief, Pagination, MapPannel
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
