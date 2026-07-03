<template>
  <div class="page-main">
    <!-- Заголовок -->
    <div class="page-head">
      <div>
        <h1 class="title">Запуски</h1>
        <div class="subtitle">Сводка по webhook, sub-workflow и callback событиям.</div>
      </div>
      <div class="row">
        <button class="btn btn-secondary btn-sm">Все</button>
        <button class="btn btn-ghost btn-sm">Активные</button>
        <button class="btn btn-ghost btn-sm">Ошибки</button>
      </div>
    </div>

    <!-- Таблица с запусками -->
    <div class="card" style="padding: 0; overflow: hidden">
      <table>
        <thead>
          <tr>
            <th>Run</th>
            <th>Проект</th>
            <th>Этап</th>
            <th>Статус</th>
            <th>Время</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="run in runs" :key="run.id">
            <td>
              <b>{{ run.name }}</b>
              <div class="tiny soft mono">{{ run.id }}</div>
            </td>
            <td>{{ run.project }}</td>
            <td>
              <span class="tag">{{ run.stage }}</span>
            </td>
            <td>
              <span :class="['pill', run.statusClass]">
                {{ run.status }}
              </span>
            </td>
            <td class="small muted">{{ run.date }}</td>
            <td>
              <a
                v-if="run.link"
                href="#"
                style="color: var(--primary); cursor: pointer"
                @click.prevent="router.push(run.link)"
              >
                {{ run.linkLabel || 'Статья →' }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const runs = ref([
  {
    id: '01HZART99...',
    name: 'article_package',
    project: 'blog_annelo_ru',
    stage: 'visual_retry',
    status: 'Ожидает действия',
    statusClass: 'pill-yellow',
    date: '29 июн, 14:22',
    link: '/article/detail',
    linkLabel: 'Статья →',
  },
  {
    id: '01HZIMG02...',
    name: 'image_generation',
    project: 'blog_annelo_ru',
    stage: 'vision_review',
    status: 'Rejected',
    statusClass: 'pill-red',
    date: '29 июн, 14:42',
    link: null,
  },
  {
    id: '01HZCRL03...',
    name: 'site_crawl',
    project: 'blog_annelo_ru',
    stage: 'sync',
    status: 'Завершён',
    statusClass: 'pill-green',
    date: '3 июн',
    link: null,
  },
])
</script>

<style scoped>
/* Все стили берутся из глобального main.css */
</style>
