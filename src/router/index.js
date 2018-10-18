import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Geomap from '@/views/Geomap'

Vue.use(Router)

export default new Router({
  base: '/v-filter/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/map',
      name: 'Geo-map',
      component: Geomap
    }
  ]
})
