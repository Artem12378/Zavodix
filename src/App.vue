<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Sidebar } from '@widgets/sidebar'
import { AppHeader } from '@widgets/app-header'
</script>

<template>
  <div class="app-layout">
    <Sidebar />
    <AppHeader v-if="$route.path !== '/auth'" />
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
  flex: 1;
}
</style>
