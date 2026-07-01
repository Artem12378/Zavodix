import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@pages/auth/LoginView.vue'
import DashboardView from '@pages/dashboard/Dashboard.vue' // <-- Исправили имя файла здесь!

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: LoginView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    // Редирект на дашборд для всех остальных тестовых страниц
    {
      path: '/:pathMatch(.*)*',
      redirect: '/dashboard',
    },
    {
      path: '/project/new',
      name: 'project-new',
      component: () => import('@pages/project-new/ProjectNewView.vue'),
    },
    {
      path: '/runs',
      name: 'runs',
      component: DashboardView, // временная заглушка
    },
    {
      path: '/users',
      name: 'users',
      component: DashboardView, // временная заглушка
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/dashboard',
    },
  ],
})

export default router
