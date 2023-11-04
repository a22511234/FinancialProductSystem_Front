import { createRouter} from 'vue-router'
import index from '../views/index.vue'
const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
    },
    {
      path: '/addproduct',
      name: 'add',
      component: () => import('../views/AddProduct.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/UpdateProduct.vue')
    }
  ]
})

export default router