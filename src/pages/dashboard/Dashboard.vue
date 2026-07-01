<template>
  <div class="page-main">
    <header class="dashboard-page__header">
      <div>
        <h1 class="dashboard-page__title">Проекты</h1>
        <p class="dashboard-page__subtitle">Контент-пакеты, базы знаний, адаптеры и краулинг.</p>
      </div>
      <button class="btn btn-primary" @click="$router.push('/project/new')">+ Новый проект</button>
    </header>

    <!-- Статистика -->
    <div class="stats-grid" style="margin-bottom: 16px">
      <div class="stat">
        <div class="stat-label">Проекты</div>
        <div class="stat-value">{{ projects.length }}</div>
        <div class="stat-sub">{{ activeProjects }} активных</div>
      </div>
      <div class="stat">
        <div class="stat-label">Article packages</div>
        <div class="stat-value">{{ totalArticles }}</div>
        <div class="stat-sub">готово</div>
      </div>
      <div class="stat">
        <div class="stat-label">Visual backlog</div>
        <div class="stat-value" style="color: #ea580c">7</div>
        <div class="stat-sub">картинки требуют проверки</div>
      </div>
      <div class="stat">
        <div class="stat-label">Ошибки за сутки</div>
        <div class="stat-value" style="color: #16a34a">0</div>
        <div class="stat-sub">конвейер стабилен</div>
      </div>
    </div>

    <!-- Карточки проектов -->
    <div class="project-grid">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" class="card" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ProjectCard } from '@widgets/project-card'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = useRouter()

const projects = ref([
  {
    id: '1',
    name: 'Блог Annelo',
    url: 'https://annelo.ru',
    status: 'active' as const,
    articlesCount: 14,
    health: 96,
    healthDetails: [
      { label: 'Knowledge', value: 92, status: 'green' as const },
      { label: 'Links', value: 86, status: 'green' as const },
      { label: 'Visual', value: 64, status: 'warn' as const },
    ],
  },
  // ... остальные проекты
])

const totalArticles = computed(() => projects.value.reduce((sum, p) => sum + p.articlesCount, 0))
const activeProjects = computed(() => projects.value.filter((p) => p.status === 'active').length)
</script>

<style scoped>
/* Удаляем старые отступы – теперь всё идёт от .page-main */
.dashboard-page__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
}

.dashboard-page__title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-main, #111827);
  letter-spacing: -0.02em;
}

.dashboard-page__subtitle {
  color: var(--text-muted, #4b5563);
  font-size: 0.95rem;
  margin-top: 0.25rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}
</style>
