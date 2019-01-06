import Vue from 'vue'
import Router from 'vue-router'
import PlantillaCV1 from '@/components/PlantillaCV1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/PlantillaCV-1',
      name: 'PlantillaCV1',
      component: PlantillaCV1
    }
  ]
})
