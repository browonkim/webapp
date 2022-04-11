import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/AppMain.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home-layout/HomeLayout.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'guest',
    component: () => import('@/views/AppMain.vue'),
    children: [
      {
        path: '/guest',
        name: 'guest',
        component: () => import('@/views/common-layout/CommonLayout.vue'),
        children: [
          {
            path: '/guest',
            name: 'guest',
            component: () => import('@/views/guest-book/GuestBook.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
