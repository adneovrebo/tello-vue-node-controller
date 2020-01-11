import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Controls from '../views/Controls.vue'
import RouterPlanner from '../views/RouterPlanner.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/controls',
    name: 'controls',
    component: Controls
  },
  {
    path: '/routerplanner',
    name: 'routerplanner',
    component: RouterPlanner
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
