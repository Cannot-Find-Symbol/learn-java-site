import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LiveHelp from '../views/LiveHelp.vue'
import FAQ from '../views/FAQ.vue'
import Lesson from '@/views/Lesson'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/livehelp',
    name: 'LiveHelp',
    component: LiveHelp
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/getting-started/:source',
    component: Lesson,
    props: route => ({ source: route.params.source })

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
