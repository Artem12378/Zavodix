<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const conceptItems = [
  { to: '/auth', label: 'Вход' },
  { to: '/dashboard', label: 'Проекты' },
  { to: '/project/new', label: 'Новый проект' },
  { to: '/project/detail', label: 'Дашборд проекта' },
  { to: '/article/new', label: 'Новая статья' },
  { to: '/article/detail', label: 'Статья / Package' },
  { to: '/pipeline', label: 'Запуски' },
  { to: '/users', label: 'Пользователи' },
]
</script>

<template>
  <!-- 1. Фиксированный концепт-бар -->
  <div class="fixed-top-container">
    <div class="concept-bar">
      <span class="concept-label">Концепт</span>
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
  </div>

  <!-- 2. Белый саб-хедер – НЕ показывается на странице входа -->
  <header v-if="route.path !== '/auth'" class="sub-header">
    <div class="sub-header__container">
      <div class="sub-header__brand">
        <div class="sub-header__logo-icon">Z</div>
        <div class="sub-header__brand-text">
          <h1 class="sub-header__logo-name">Zavodix</h1>
          <span class="sub-header__logo-desc">Content Factory OS</span>
        </div>
      </div>
      <div class="sub-header__actions">
        <nav class="nav-links">
          <RouterLink to="/dashboard" class="nav-link" active-class="active">Проекты</RouterLink>
          <RouterLink to="/pipeline" class="nav-link" active-class="active">Запуски</RouterLink>
          <RouterLink to="/users" class="nav-link" active-class="active">Пользователи</RouterLink>
        </nav>
        <div class="user-badge">
          <div class="user-badge__avatar">A</div>
          <span class="user-badge__name">annelo@zavodix.ru</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Фиксируем ТОЛЬКО концепт-бар */
.fixed-top-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 36px;
}

.concept-bar {
  width: 100%;
  height: 36px;
  background: #111827;
  color: #cbd5e1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 20px;
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

/* БЕЛЫЙ САБ-ХЕДЕР – В ПОТОКЕ (уплывает при скролле) */
.sub-header {
  width: 100%;
  height: 56px;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  margin-top: 36px; /* отступ от фиксированного концепт-бара */
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
}

.sub-header__container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sub-header__brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sub-header__logo-icon {
  width: 32px;
  height: 32px;
  background-color: #6366f1;
  color: #ffffff;
  font-weight: 800;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.sub-header__brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.sub-header__logo-name {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.sub-header__logo-desc {
  font-size: 0.75rem;
  color: #94a3b8;
}

.sub-header__actions {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
  text-decoration: none;
}

.nav-link:hover {
  color: #0f172a;
}

.nav-link.active {
  color: #6366f1;
  font-weight: 600;
}

.user-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #f1f5f9;
  padding: 0.25rem 0.75rem 0.25rem 0.35rem;
  border-radius: 9999px;
}

.user-badge__avatar {
  width: 24px;
  height: 24px;
  background-color: #dbeafe;
  color: #2563eb;
  font-weight: 700;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
}

.user-badge__name {
  font-size: 0.8rem;
  font-weight: 500;
  color: #334155;
}
</style>
