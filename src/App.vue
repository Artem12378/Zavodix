<!-- src/App.vue -->
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Sidebar } from '@widgets/sidebar'
</script>

<template>
  <div class="app-layout">
    <!-- Наша новая верхняя шапка-меню -->
    <Sidebar />

    <!-- Контент страниц теперь аккуратно смещен вниз под шапку -->
    <main class="app-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: var(--secondary-bg, #f9fafb);
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-content {
  flex: 1;
  padding-top: 45px; /* Изменили с 60px на 45px под новую высоту шапки */
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
