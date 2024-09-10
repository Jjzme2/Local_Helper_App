import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// import hljs from 'highlight.js'
import hljsVuePlugin from '@highlightjs/vue-plugin'

const app = createApp(App)

const appName = import.meta.env.VITE_APP_NAME || 'ILYTAT'

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || appName // Set the title from the route meta or use a default title

  // Check that the route exists, otherwise redirect to the 404 page
  if (!to.matched.length) {
    next({ name: 'NotFound' })
  }
  next()
})

router.onError((error, to, from) => {
  const errorMessage = `There was an error loading the page ${to.name} from ${from.name}: ${error.message}`
  console.error(errorMessage, error)
})

app.use(createPinia()).use(router).use(hljsVuePlugin).mount('#app')
