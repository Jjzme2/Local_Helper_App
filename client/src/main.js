import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const appName = import.meta.env.VITE_APP_NAME || 'ILYTAT'

router.beforeEach((to, from, next) => {
	document.title = to.meta.title || appName // Set the title from the route meta or use a default title
	next()
})

app.use(createPinia()).use(router).mount('#app')
