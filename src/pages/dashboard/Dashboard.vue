<!-- src/pages/dashboard/Dashboard.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { ProjectCard } from '@widgets/project-card'

// Тестовые данные для отображения карточек в админке
const projects = ref([
  {
    id: '1',
    name: 'Zavodix Tech Blog',
    url: 'https://zavodix.com',
    status: 'active' as const,
    articlesCount: 142,
    health: 96,
  },
  {
    id: '2',
    name: 'AI Crypto Portal',
    url: 'https://crypto-news.ai',
    status: 'idle' as const,
    articlesCount: 89,
    health: 91,
  },
  {
    id: '3',
    name: 'Auto-SEO Affiliate',
    url: 'https://best-vpn-reviews.net',
    status: 'error' as const,
    articlesCount: 34,
    health: 54,
  },
])
</script>

<template>
  <div class="dashboard-page">
    <header class="dashboard-page__header">
      <div>
        <h1 class="dashboard-page__title">Наши проекты</h1>
        <p class="dashboard-page__subtitle">Мониторинг состояния автоматических ИИ-пайплайнов</p>
      </div>
    </header>

    <main class="dashboard-page__content">
      <div class="project-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.dashboard-page {
  padding: 2rem 1.5rem;
}

.dashboard-page__header {
  margin-bottom: 2rem;
}

.dashboard-page__title {
  font-size: 1.75rem;
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
