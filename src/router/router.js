import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: () => import('@/views/CategoryView.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/SearchView.vue'),
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/views/ListView.vue'),
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('@/views/ListView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
