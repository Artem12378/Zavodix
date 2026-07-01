<!-- shared/ui/app-button/AppButton.vue -->
<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md'
  disabled?: boolean
  loading?: boolean
}
withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
})
</script>

<template>
  <button
    :type="type"
    :class="['btn', `btn-${variant}`, `btn-${size}`]"
    :disabled="disabled || loading"
  >
    <span v-if="loading" class="btn__loader">⏳</span>
    <slot v-else />
  </button>
</template>

<style scoped>
.btn {
  border: 1px solid transparent;
  border-radius: 9px;
  padding: 8px 13px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  font-size: 13px;
  font-weight: 650;
  cursor: pointer;
  transition: 0.15s ease;
  white-space: nowrap;
}
.btn-sm {
  padding: 5px 9px;
  font-size: 12px;
  border-radius: 8px;
}
.btn-primary {
  background: var(--primary-color, #2563eb);
  color: #fff;
  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.2);
}
.btn-primary:hover:not(:disabled) {
  background: var(--primary-hover-color, #1d4ed8);
  transform: translateY(-1px);
}
.btn-secondary {
  background: var(--surface-3, #f1f5f9);
  color: #334155;
  border-color: #e2e8f0;
}
.btn-secondary:hover:not(:disabled) {
  background: #e2e8f0;
}
.btn-ghost {
  background: transparent;
  color: var(--muted, #4b5563);
}
.btn-ghost:hover:not(:disabled) {
  background: var(--surface-3, #f1f5f9);
  color: var(--text-main, #111827);
}
.btn-danger {
  background: var(--red-bg, #fee2e2);
  color: #b91c1c;
}
.btn-danger:hover:not(:disabled) {
  background: #fecaca;
}
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.btn__loader {
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
