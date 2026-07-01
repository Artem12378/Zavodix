<script setup lang="ts">
defineProps<{
  variant?: 'green' | 'blue' | 'yellow' | 'orange' | 'red' | 'gray' | 'indigo' | 'purple'
}>()
</script>
<template>
  <span :class="['pill', variant ? `pill-${variant}` : '']">
    <slot />
  </span>
</template>
