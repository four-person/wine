import Vue from 'vue'
import Router from 'vue-router'
import Head from 'components/head'
import Search from 'components/search'
import Shoptype from 'views/shoptype'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Head
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/shoptype',
      component: Shoptype
    }
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
  ]
})
