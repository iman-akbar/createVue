import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Navigation from '../components/Navigation'
import Page from '../components/Page'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/',
  //   name: 'Navigation',
  //   component: Navigation,
  //   children: [
  //     {path: '/Page',
  //     name: 'Page',
  //     component: Page,}
  //   ]
  // },
  {
    path: '/',
    name: 'Navigation',
    component: Navigation,
    children: [
      {
        path: '/Page',
        name: 'Page',
        component: Page
      }
    ]
  },
  {
    path: '/Page2',
    name: 'Page',
    component: Page
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
