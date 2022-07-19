import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Main, meta: { title: 'Main' },

  redirect:{
    path: '/v1/home',
  },
  children:[
    {
      path: '/v1/home',
      meta: { title: 'Home' },
       component: () => import('./views/Home.vue')
    },
    {
      path: '/v1/about-us',
      meta: { title: 'About-us' },
      component: () => import('./views/About.vue')
    },
    {
      path: '/v1/about-app',
      meta: { title: 'About-App' },
      component: () => import('./views/About_App.vue')
    },
    {
      path: '/v1/about-software',
      meta: { title: 'About-Software' },
      component: () => import('./views/About_SoftWare.vue')
    },
  ]
},


  { path: '/:path(.*)', component: NotFound },
]
