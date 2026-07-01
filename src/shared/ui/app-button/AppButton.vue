<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
  loading?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  disabled: false,
  loading: false,
})
</script>

<template>
  <button
    :type="type"
    :class="['app-button', `app-button--${variant}`]"
    :disabled="disabled || loading"
  >
    <span v-if="loading" class="app-button__loader">⏳</span>
    <span v-else class="app-button__content">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  width: 100%;
}

.app-button--primary {
  background-color: var(--primary-color, #2563eb);
  color: #ffffff;
}
.app-button--primary:hover:not(:disabled) {
  background-color: var(--primary-hover-color, #1d4ed8);
}

.app-button--secondary {
  background-color: var(--secondary-bg, #f3f4f6);
  color: var(--secondary-text, #1f2937);
}

.app-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.app-button__loader {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
