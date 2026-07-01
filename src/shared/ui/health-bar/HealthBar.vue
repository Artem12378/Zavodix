<!-- shared/ui/health-bar/HealthBar.vue -->
<script setup lang="ts">
defineProps<{ value: number; label?: string; status?: 'green' | 'warn' | 'red' }>()
</script>
<template>
  <div class="health-row">
    <span v-if="label">{{ label }}</span>
    <div class="health-bar">
      <div class="health-fill" :class="status || ''" :style="{ width: `${value}%` }"></div>
    </div>
    <b>{{ value }}%</b>
  </div>
</template>
