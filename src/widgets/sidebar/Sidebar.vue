<script setup lang="ts">
import { RouterLink } from 'vue-router'

const conceptItems = [
  { to: '/auth', label: 'Вход' },
  { to: '/dashboard', label: 'Проекты' },
  { to: '/project/new', label: 'Новый проект' },
  { to: '/project/detail', label: 'Дашборд проекта' },
  { to: '/article/new', label: 'Новая статья' },
  { to: '/article/detail', label: 'Статья / Package' },
  { to: '/runs', label: 'Запуски' },
  { to: '/users', label: 'Пользователи' },
]
</script>

<template>
  <div class="concept-bar">
    <span class="concept-label">КОНЦЕПТ</span>
    <nav class="concept-nav">
      <RouterLink
        v-for="item in conceptItems"
        :key="item.to"
        :to="item.to"
        class="concept-btn"
        active-class="active"
      >
        <span class="concept-btn__text">{{ item.label }}</span>
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.concept-bar {
  width: 100%;
  background: #111827;
  color: #cbd5e1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
  overflow-x: auto;
}
.concept-label {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #94a3b8;
  white-space: nowrap;
  margin-right: 4px;
  font-weight: 700;
}
.concept-nav {
  display: flex;
  align-items: center;
  gap: 8px;
}
.concept-btn {
  border: 1px solid rgba(148, 163, 184, 0.25);
  background: rgba(51, 65, 85, 0.75);
  color: #dbeafe;
  border-radius: 999px;
  padding: 4px 11px;
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  transition:
    background 0.15s,
    color 0.15s;
}
.concept-btn:hover {
  background: rgba(71, 85, 105, 0.9);
}
.concept-btn.active {
  background: var(--primary, #2563eb);
  color: #fff;
  border-color: var(--primary, #2563eb);
}
</style>
