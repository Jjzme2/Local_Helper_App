import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/AboutView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogRenderView from '@/views/BlogRenderView.vue'
import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'

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

    // Blog Route
    {
      path: '/thoughts',
      name: 'blog',
      component: BlogView
    },

    // Specific Post Route
    {
      path: '/thoughts/:postId',
      name: 'post',
      component: BlogRenderView
    },

    // Catch All
    {
      path: '/:catchAll(.*)',
      name: 'error',
      redirect: { name: 'home' }
    }
  ]
})

export default router
