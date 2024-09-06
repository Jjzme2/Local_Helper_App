import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '@/views/AboutView.vue'
import ServiceView from '@/views/ServiceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Home Page
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    // About Page
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },

    // Contact Page
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },

    // Service Page
    {
      path: '/service/:serviceId',
      name: 'service',
      component: ServiceView
    },

    // Blog Route
    // {
    //   path: '/thoughts',
    //   name: 'blog',
    //   component: BlogView
    // },

    // Catch All
    {
      path: '/:catchAll(.*)',
      name: 'error',
      redirect: { name: 'home' }
    }
  ]
})

export default router
