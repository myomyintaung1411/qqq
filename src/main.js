import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// import Global from "/public/global.js";
import store from './store'
const app = createApp(App)

/**
 * 全区变量
 */


// app.provide("global", Global);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

/* Default title tag */
const defaultDocumentTitle = global.siteName || '大雁'

router.afterEach(to => {
  /* Set document title from route meta */
  if (to.meta && to.meta.title) {
    document.title = `${defaultDocumentTitle} - ${to.meta.title}`
  } else {
    document.title = defaultDocumentTitle
  }
})

app.use(router)
app.use(store)
app.mount('#app')
