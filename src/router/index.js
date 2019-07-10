import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/pages/AA/First'
import AddPages from '@/pages/AA/AddPages'
import EchartsPhoto from '@/pages/BB/EchartsPhoto'
import Line from '@/pages/BB/Line'
import Pie from '@/pages/BB/Pie'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/first',
      name: 'First',
      component: First
    },
    {
      path: '/addpages',
      name: 'AddPages',
      component: AddPages
    },
    {
      path: '/echartsPhoto',
      name: 'EchartsPhoto',
      component: EchartsPhoto
    },
    {
      path: '/line',
      name: 'Line',
      component: Line
    },
    {
      path: '/pie',
      name: 'Pie',
      component: Pie
    }

  ]
})


