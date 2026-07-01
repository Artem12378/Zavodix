<!-- src/widgets/project-card/ProjectCard.vue -->
<script setup lang="ts">
import { AppButton } from '@shared/ui/app-button'

// Тип для элемента health-бара
interface HealthDetail {
  label: string
  value: number
  status?: 'green' | 'warn' | 'red'
}

// Пропсы карточки проекта
interface ProjectProps {
  id: string
  name: string
  url: string
  status: 'active' | 'idle' | 'error'
  articlesCount: number
  health: number // общий процент (для краткого отображения)
  healthDetails?: HealthDetail[] // детальные бары (если есть)
}

defineProps<{
  project: ProjectProps
}>()
</script>

<template>
  <div :class="['project-card', `project-card--${project.status}`]">
    <!-- Верхняя часть: название, тег, статус-пил -->
    <div class="row-between">
      <div>
        <div class="card-title">{{ project.name }}</div>
        <div class="card-desc">
          <span class="tag">{{ project.id }}</span>
          <span class="soft">· {{ project.url.replace('https://', '') }}</span>
        </div>
      </div>
      <span
        :class="[
          'pill',
          project.status === 'active'
            ? 'pill-green'
            : project.status === 'error'
              ? 'pill-red'
              : 'pill-gray',
        ]"
      >
        {{
          project.status === 'active' ? 'Готов' : project.status === 'error' ? 'Ошибка' : 'Ожидает'
        }}
      </span>
    </div>

    <!-- Health-бары: если переданы детали, показываем их, иначе один общий -->
    <div v-if="project.healthDetails && project.healthDetails.length" class="health-list">
      <div v-for="item in project.healthDetails" :key="item.label" class="health-row">
        <span>{{ item.label }}</span>
        <div class="health-bar">
          <div
            class="health-fill"
            :class="item.status || ''"
            :style="{ width: `${item.value}%` }"
          ></div>
        </div>
        <b>{{ item.value }}%</b>
      </div>
    </div>
    <div v-else class="health-row">
      <span>Успешность ИИ</span>
      <div class="health-bar">
        <div
          class="health-fill"
          :class="project.health > 85 ? 'green' : project.health > 60 ? 'warn' : 'red'"
          :style="{ width: `${project.health}%` }"
        ></div>
      </div>
      <b>{{ project.health }}%</b>
    </div>

    <!-- Нижняя мета-информация -->
    <div class="project-meta-list">
      <span>{{ project.articlesCount }} статей</span>
      <span>5 адаптеров</span>
      <span>Краулинг: 3 июня</span>
    </div>

    <!-- Кнопка действия -->
    <div class="project-card__actions">
      <AppButton variant="secondary" size="sm">Открыть пайплайн</AppButton>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: 13px;
  cursor: pointer;
  transition: 0.15s ease;
  position: relative;
  overflow: hidden;
  background: var(--bg-card, #ffffff);
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: var(--radius, 14px);
  padding: 18px;
  box-shadow: var(--shadow, none);
  min-height: 170px;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color, #2563eb), #7c3aed);
  opacity: 0;
  transition: 0.15s ease;
}

.project-card:hover {
  transform: translateY(-2px);
  border-color: #93c5fd;
}
.project-card:hover::before {
  opacity: 1;
}

.project-card--error {
  border-left: 4px solid var(--red, #dc2626);
}
.project-card--active {
  border-left: 4px solid var(--green, #16a34a);
}
.project-card--idle {
  border-left: 4px solid #6b7280;
}

.project-meta-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;
  color: var(--soft, #94a3b8);
  font-size: 12px;
  margin-top: auto;
}

.project-card__actions {
  margin-top: auto;
}
</style>
