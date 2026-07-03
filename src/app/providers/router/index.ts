import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/pages/auth/LoginView.vue'
import DashboardView from '@/pages/dashboard/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 👇 ЯВНЫЙ РЕДИРЕКТ КОРНЯ НА ДАШБОРД
    {
      path: '/',
      redirect: '/dashboard',
    },
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
      path: '/project/:id',
      name: 'project-detail',
      component: () => import('@/pages/project-detail/ProjectDetailView.vue'),
      props: true,
    },
    {
      path: '/article/new',
      name: 'article-new',
      component: () => import('@/pages/article-new/ArticleNewView.vue'),
    },
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
    {
      path: '/users',
      name: 'users',
      component: () => import('@/pages/users/UsersView.vue'),
    },
    // Если путь не совпал ни с чем – редирект на дашборд
    {
      path: '/:pathMatch(.*)*',
      redirect: '/dashboard',
    },
  ],
})

export default router
