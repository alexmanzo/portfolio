import Vue from 'vue'
import Router from 'vue-router'
import ContactPage from '@/views/ContactPage.vue'
import Home from '@/views/Home.vue'
import ResumePage from '@/views/ResumePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumePage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
  ],
})
