import Application from '@/views/Application.vue'
import LoginView from '@/views/LoginView.vue'
import ForbiddenView from '@/views/ForbiddenView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { appRoutes } from './app/index'
import { guardDefaultAuth } from './guards'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/',
      component: Application,
      beforeEnter: guardDefaultAuth,
      children: appRoutes
    },{
      path: '/login',
      name: 'login',
      component: LoginView
    }, {
      path: '/forbidden',
      name: 'forbidden',
      component: ForbiddenView
    }
  ]
})

export default router