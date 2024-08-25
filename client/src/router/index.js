import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import UnlistedServiceView from '../views/UnlistedServiceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Home Page
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    // Contact Page
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },

    // Unlisted Service Page
    {
      path: '/unlisted',
      name: 'unlistedService',
      component: UnlistedServiceView
    },

    // Schedule Route
    // {
    // path: '/calendar',
    // name: 'schedule',
    // component: SchedulerView
    // }

    // Blog Route
    // {
    //   path: '/thoughts',
    //   name: 'blog',
    //   component: BlogView
    // },

    // Catch All
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'home' }
    }
  ]
})

export default router
