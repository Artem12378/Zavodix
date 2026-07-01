<!-- src/widgets/project-card/ProjectCard.vue -->
<script setup lang="ts">
import { AppButton } from '@shared/ui/app-button'

// Описываем, какие данные принимает карточка
interface ProjectProps {
  id: string
  name: string
  url: string
  status: 'active' | 'idle' | 'error'
  articlesCount: number
  health: number // Процент успешных генераций ИИ (например, 94)
}

defineProps<{
  project: ProjectProps
}>()
</script>

<template>
  <div :class="['project-card', `project-card--${project.status}`]">
    <div class="project-card__header">
      <h3 class="project-card__title">{{ project.name }}</h3>
      <span :class="['project-card__status-badge', `status--${project.status}`]">
        {{
          project.status === 'active'
            ? 'Генерация'
            : project.status === 'error'
              ? 'Ошибка'
              : 'Пауза'
        }}
      </span>
    </div>

    <a :href="project.url" target="_blank" class="project-card__url">
      🔗 {{ project.url.replace('https://', '') }}
    </a>

    <!-- Тот самый health-bar из архитектурной схемы -->
    <div class="project-card__health">
      <div class="project-card__health-info">
        <span class="project-card__health-label">Успешность ИИ:</span>
        <span class="project-card__health-value">{{ project.health }}%</span>
      </div>
      <div class="project-card__health-bar-bg">
        <div
          class="project-card__health-bar-fill"
          :style="{
            width: `${project.health}%`,
            backgroundColor: project.health > 85 ? '#10b981' : '#f59e0b',
          }"
        ></div>
      </div>
    </div>

    <div class="project-card__meta">
      <span class="project-card__meta-item">
        📦 Статей: <strong>{{ project.articlesCount }}</strong>
      </span>
    </div>

    <div class="project-card__actions">
      <!-- Наша готовая кнопка из Shared UI -->
      <AppButton variant="secondary" class="project-card__btn"> Открыть пайплайн </AppButton>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: #ffffff;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* Выделение карточки по статусам */
.project-card--error {
  border-left: 4px solid var(--error-color, #ef4444);
}
.project-card--active {
  border-left: 4px solid #10b981;
}
.project-card--idle {
  border-left: 4px solid #6b7280;
}

.project-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.project-card__title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main, #111827);
}

.project-card__status-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
}

.status--active {
  background-color: #d1fae5;
  color: #065f46;
}
.status--idle {
  background-color: #f3f4f6;
  color: #374151;
}
.status--error {
  background-color: #fee2e2;
  color: #991b1b;
}

.project-card__url {
  font-size: 0.85rem;
  color: var(--primary-color, #2563eb);
  align-self: flex-start;
}

.project-card__url:hover {
  text-decoration: underline;
}

/* Стили для Health-bar */
.project-card__health {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.project-card__health-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
}

.project-card__health-label {
  color: var(--text-muted, #4b5563);
}

.project-card__health-value {
  font-weight: 600;
}

.project-card__health-bar-bg {
  width: 100%;
  height: 6px;
  background-color: #f3f4f6;
  border-radius: 9999px;
  overflow: hidden;
}

.project-card__health-bar-fill {
  height: 100%;
  border-radius: 9999px;
  transition: width 0.3s ease;
}

.project-card__meta {
  font-size: 0.85rem;
  color: var(--text-muted, #4b5563);
  border-top: 1px solid #f3f4f6;
  padding-top: 0.75rem;
}

.project-card__actions {
  margin-top: auto;
}

/* Перебиваем дефолтную кнопку под нужные нам размеры в карточке */
.project-card__btn {
  padding: 0.5rem 1rem !important;
  font-size: 0.85rem !important;
}
</style>
