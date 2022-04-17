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
    name: '',
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
      },
      {
        path: '/todo',
        name: 'todo',
        component: () => import('@/components/todo-list/Todo.vue')
      },
      {
        path: '/drag',
        name: 'drag',
        component: () => import('@/views/todo/TodoList.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
