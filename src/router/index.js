import { createRouter, createWebHistory } from 'vue-router'
import ViewPatients from '../views/ViewPatients.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewPatients
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: () => import('../views/AddProduct.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/UpdateProduct.vue')
    },
    {
      path: '/edituser/:id',
      name: 'edituser',
      component: () => import('../views/UpdateUser.vue')
    },
    {
      path: '/editlist/:id',
      name: 'editlist',
      component: () => import('../views/UpdateLikelist.vue')
    }
  ]
})

export default router
