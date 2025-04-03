
import { createRouter, createWebHistory } from 'vue-router'
import OrderList from './views/OrderList.vue'
import CreateOrder from './views/CreateOrder.vue'

const routes = [
  { path: '/', name: 'Orders', component: OrderList },
  { path: '/create', name: 'CreateOrder', component: CreateOrder }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
