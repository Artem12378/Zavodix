<script setup lang="ts">
interface Props {
  modelValue: string
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  label?: string
  error?: string
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="app-input-wrapper">
    <label v-if="label" class="app-input-label">{{ label }}</label>
    <input
      :type="type || 'text'"
      :value="modelValue"
      :placeholder="placeholder"
      :class="['app-input', { 'app-input--error': error }]"
      @input="onInput"
    />
    <span v-if="error" class="app-input-error-text">{{ error }}</span>
  </div>
</template>

<style scoped>
.app-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;
  margin-bottom: 1rem;
}

.app-input-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted, #4b5563);
}

.app-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color, #d1d5db);
  border-radius: 6px;
  font-size: 0.95rem;
  background-color: var(--input-bg, #ffffff);
  color: var(--text-main, #111827);
  outline: none;
  transition: border-color 0.2s;
}

.app-input:focus {
  border-color: var(--primary-color, #2563eb);
}

.app-input--error {
  border-color: var(--error-color, #ef4444);
}

.app-input-error-text {
  font-size: 0.75rem;
  color: var(--error-color, #ef4444);
}
</style>
