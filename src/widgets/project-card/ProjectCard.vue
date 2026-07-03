<template>
  <div class="card" :class="{ 'card--error': project.status === 'error' }">
    <!-- Header -->
    <div class="card-header">
      <div class="stack" style="gap: 2px">
        <span class="card-title">{{ project.name }}</span>
        <span class="muted small truncate">{{ project.url }}</span>
      </div>
      <span class="pill" :class="pillClass">{{ pillLabel }}</span>
    </div>

    <!-- Body -->
    <div class="card-body">
      <!-- Progress Bars -->
      <div v-if="project.healthDetails" class="health-list">
        <div v-for="detail in project.healthDetails" :key="detail.label">
          <div class="health-row">
            <span>{{ detail.label }}</span>
            <span>{{ detail.value }}%</span>
          </div>
          <div class="health-bar">
            <div
              class="health-fill"
              :class="healthClassMap[detail.status]"
              :style="{ width: detail.value + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Alert warning (как у Demo Project) -->
      <div v-if="project.alert" class="alert alert-warn">
        {{ project.alert }}
      </div>
    </div>

    <!-- Footer -->
    <div
      class="card-footer row-between"
      style="flex-wrap: wrap; color: var(--muted); font-size: 13px; gap: 8px; margin-top: 16px"
    >
      <span>{{ project.articlesCount }} {{ pluralizeArticle(project.articlesCount) }}</span>
      <span
        >{{ project.adaptersCount || 0 }} {{ pluralizeAdapter(project.adaptersCount || 0) }}</span
      >
      <span v-if="project.crawlDate" class="soft small">Краулинг: {{ project.crawlDate }}</span>
      <span v-else class="soft small">Нет адаптеров</span>
    </div>

    <!-- Actions -->
    <div class="card-actions" style="margin-top: 12px">
      <button class="btn btn-secondary btn-sm">Открыть пайплайн</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  project: {
    name: string
    url: string
    status: 'active' | 'idle' | 'error'
    articlesCount: number
    adaptersCount?: number
    crawlDate?: string
    alert?: string
    healthDetails?: Array<{
      label: string
      value: number
      status: 'green' | 'warn' | 'red'
    }>
  }
}>()

// Маппинг статуса на ваши глобальные CSS-классы pill-*
const statusConfig: Record<string, { label: string; class: string }> = {
  active: { label: 'Готов', class: 'pill-green' },
  idle: { label: 'Инициализация', class: 'pill-blue' },
  error: { label: 'Ожидает', class: 'pill-gray' },
}

const pillLabel = computed(() => statusConfig[props.project.status]?.label || 'Неизвестно')
const pillClass = computed(() => statusConfig[props.project.status]?.class || 'pill-gray')

// Маппинг цветов для health-fill
const healthClassMap = {
  green: 'green',
  warn: 'warn',
  red: 'red',
}

// Плюрализация (можно вынести в общую утилиту)
const pluralizeArticle = (count: number) => {
  if (count % 10 === 1 && count % 100 !== 11) return 'статья'
  if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) return 'статьи'
  return 'статей'
}
const pluralizeAdapter = (count: number) => {
  if (count % 10 === 1 && count % 100 !== 11) return 'адаптер'
  return 'адаптеров'
}
</script>

<style scoped>
.card--error {
  border-color: var(--red, #dc2626);
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Небольшая правка, чтобы разделить строку с процентами и сам бар (ваши глобальные стили не ломаются) */
.health-row + .health-bar {
  margin-top: 4px;
}
</style>
