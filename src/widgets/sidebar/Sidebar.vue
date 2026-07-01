<!-- src/widgets/sidebar/Sidebar.vue -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'

// Массив меню с маршрутами
const menuItems = [
  { to: '/auth', label: 'Вход', icon: '🔑' },
  { to: '/dashboard', label: 'Проекты', icon: '📁' },
  { to: '/project/new', label: 'Новый проект', icon: '➕' },
  { to: '/project/detail', label: 'Дашборд проекта', icon: '📊' },
  { to: '/article/new', label: 'Новая статья', icon: '✍️' },
  { to: '/article/detail', label: 'Статья / Package', icon: '📦' },
  { to: '/pipeline', label: 'Запуски', icon: '🚀' },
  { to: '/users', label: 'Пользователи', icon: '👥' },
]
</script>

<template>
  <header class="app-header">
    <div class="app-header__container">
      <!-- Брендинг панели Zavodix -->
      <div class="app-header__brand">
        <span class="app-header__logo">Zavodix</span>
        <span class="app-header__badge">panel</span>
      </div>

      <!-- Навигационная панель из макета -->
      <nav class="concept-bar">
        <span class="concept-label">Концепт</span>

        <RouterLink
          v-for="item in menuItems"
          :key="item.to"
          :to="item.to"
          class="concept-btn"
          active-class="active"
        >
          <span class="concept-btn__icon">{{ item.icon }}</span>
          <span class="concept-btn__text">{{ item.label }}</span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Узкая и аккуратная шапка-контейнер */
.app-header {
  width: 100%;
  height: 45px; /* Уменьшили высоту с 60px до 45px, чтобы она не занимала много места */
  background-color: #1e1e2e;
  border-bottom: 1px solid #2d2d3f;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.app-header__container {
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

/* Логотип */
.app-header__brand {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-shrink: 0;
}

.app-header__logo {
  font-size: 1.1rem; /* Слегка уменьшили размер */
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.025em;
}

.app-header__badge {
  font-size: 0.65rem;
  background-color: #313244;
  color: #cdd6f4;
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
}

/* Концепт-бар навигации */
.concept-bar {
  display: flex;
  align-items: center;
  gap: 0.25rem; /* Уменьшили расстояние между кнопками */
  overflow-x: auto;
  scrollbar-width: none;
}

.concept-bar::-webkit-scrollbar {
  display: none;
}

.concept-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #6c7086;
  margin-right: 0.35rem;
  letter-spacing: 0.05em;
}

/* Более мелкие и круглые кнопки (в стиле Pill/Пилюля) */
.concept-btn {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.75rem; /* Уменьшили внутренние отступы */
  color: #a6adc8;
  text-decoration: none;
  font-size: 0.8rem; /* Сделали шрифт кнопок мельче */
  font-weight: 500;
  border-radius: 9999px; /* Сделали кнопки полностью круглыми по бокам */
  border: 1px solid transparent;
  background: transparent;
  transition: all 0.15s ease;
  white-space: nowrap;
  cursor: pointer;
}

.concept-btn:hover {
  background-color: #313244;
  color: #ffffff;
}

/* Активное состояние кнопки */
.concept-btn.active {
  background-color: var(--primary-color, #2563eb);
  color: #ffffff;
  font-weight: 600;
  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.2);
}

.concept-btn__icon {
  font-size: 0.85rem;
}
</style>
