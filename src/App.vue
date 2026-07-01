<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Sidebar } from '@widgets/sidebar'
</script>

<template>
  <div class="app-layout">
    <Sidebar />
    <div class="app-viewport">
      <RouterView />
    </div>
  </div>
</template>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg, #f6f7fb);
}

.app-layout {
  display: flex;
  flex-direction: column;
}

.app-viewport {
  width: 100%;
  padding-top: 36px; /* отступ для фиксированного концепт-бара */
  flex: 1;
}
</style>
