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

app.use(router)
app.use(store)
app.mount('#app')
