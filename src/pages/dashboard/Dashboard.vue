<template>
  <div class="page-main">
    <!-- Заголовок и кнопка: структура 1-в-1 с DevTools -->
    <div class="page-head">
      <div>
        <h1 class="title">Проекты</h1>
        <div class="subtitle">Контент-пакеты, базы знаний, адаптеры и краулинг.</div>
      </div>
      <button class="btn btn-primary" @click="$router.push('/project/new')">+ Новый проект</button>
    </div>

    <!-- Статистика (ваши глобальные классы .stats-grid и .stat) -->
    <div class="stats-grid" style="margin-bottom: 24px">
      <div class="stat">
        <div class="stat-label">Проекты</div>
        <div class="stat-value">{{ projects.length }}</div>
        <div class="stat-sub">{{ activeProjects }} активных</div>
      </div>
      <div class="stat">
        <div class="stat-label">Article packages</div>
        <div class="stat-value">{{ totalArticles }}</div>
        <div class="stat-sub">{{ totalArticles }} готовы</div>
      </div>
      <div class="stat">
        <div class="stat-label">Visual backlog</div>
        <div class="stat-value" style="color: var(--orange, #ea580c)">7</div>
        <div class="stat-sub">картинки требуют проверки</div>
      </div>
      <div class="stat">
        <div class="stat-label">Ошибки за сутки</div>
        <div class="stat-value" style="color: var(--green, #16a34a)">0</div>
        <div class="stat-sub">конвейер стабилен</div>
      </div>
    </div>

    <!-- Сетка проектов -->
    <div class="project-grid">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '@widgets/project-card/ProjectCard.vue'

const projects = ref([
  {
    id: '1',
    name: 'Блог Annelo',
    url: 'blog_annelo_ru · annelo.ru',
    status: 'active' as const,
    articlesCount: 14,
    adaptersCount: 5,
    crawlDate: '3 июня',
    healthDetails: [
      { label: 'Knowledge', value: 92, status: 'green' as const },
      { label: 'Links', value: 86, status: 'green' as const },
      { label: 'Visual', value: 64, status: 'warn' as const },
    ],
  },
  {
    id: '2',
    name: 'Zavodix Marketing',
    url: 'zavodix_mkt · zavodix.ru',
    status: 'idle' as const,
    articlesCount: 2,
    adaptersCount: 5,
    crawlDate: '3 июня',
    healthDetails: [
      { label: 'Knowledge', value: 38, status: 'warn' as const },
      { label: 'Links', value: 22, status: 'warn' as const },
      { label: 'Visual', value: 0, status: 'red' as const },
    ],
  },
  {
    id: '3',
    name: 'Demo Project',
    url: 'demo_project · demo.example.com',
    status: 'error' as const,
    articlesCount: 0,
    adaptersCount: 0,
    healthDetails: [
      { label: 'Knowledge', value: 0, status: 'red' as const },
      { label: 'Links', value: 0, status: 'red' as const },
      { label: 'Visual', value: 0, status: 'red' as const },
    ],
    alert: 'Проект создан, но база знаний ещё пустая. Можно запускать только тестовый режим.',
  },
])

const totalArticles = computed(() => projects.value.reduce((sum, p) => sum + p.articlesCount, 0))
const activeProjects = computed(() => projects.value.filter((p) => p.status === 'active').length)
</script>

<style scoped>
/*
  Мы убрали старые .dashboard-page__title и .dashboard-page__subtitle.
  Все стили для .title, .subtitle и .page-head теперь живут в глобальном main.css,
  чтобы они работали и на десктопе, и на мобильных устройствах.
*/
</style>
