import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/pages/auth/LoginView.vue'
import DashboardView from '@/pages/dashboard/Dashboard.vue'

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
    {
      path: '/project/new',
      name: 'project-new',
      component: () => import('@/pages/project-new/ProjectNewView.vue'),
    },
    {
      path: '/project/:id', // или '/project/detail/:id'
      name: 'project-detail',
      component: () => import('@/pages/project-detail/ProjectDetailView.vue'),
      props: true, // Эта строчка позволит передать параметры в компонент как пропсы
    },
    {
      path: '/article/new',
      name: 'article-new',
      component: () => import('@/pages/article-new/ArticleNewView.vue'),
    },
    // 👇 ЭТОТ МАРШРУТ БЫЛ ПРОПУЩЕН – ДОБАВЛЯЕМ
    {
      path: '/article/detail',
      name: 'article-detail',
      component: () => import('@/pages/article-detail/ArticleDetailView.vue'),
    },
    {
      path: '/runs',
      name: 'runs',
      component: () => import('@/pages/runs/RunsView.vue'),
    },
    // Редирект для всех несуществующих путей
    {
      path: '/:pathMatch(.*)*',
      redirect: '/dashboard',
    },
    // ... другие импорты и маршруты
    {
      path: '/users',
      name: 'users',
      component: () => import('@/pages/users/UsersView.vue'),
    },
  ],
})

export default router
