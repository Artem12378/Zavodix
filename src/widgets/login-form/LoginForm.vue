<script setup lang="ts">
import { ref } from 'vue'
import { AppButton } from '@shared/ui/app-button'
import { AppInput } from '@shared/ui/app-input'

const username = ref('')
const password = ref('')
const error = ref('')
const isLoading = ref(false)

const onSubmit = async () => {
  if (!username.value || !password.value) {
    error.value = 'Заполните все поля'
    return
  }

  error.value = ''
  isLoading.value = true

  try {
    console.log('Отправка данных:', { username: username.value, password: password.value })
    // Имитация сетевого запроса к бэкенду zavodix
    await new Promise((resolve) => setTimeout(resolve, 1500))
    alert('Успешный вход!')
  } catch {
    error.value = 'Неверный логин или пароль'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="login-form-widget">
    <h2 class="login-form-widget__title">Войти в Zavodix</h2>
    <p class="login-form-widget__subtitle">Панель управления конвейером ИИ</p>

    <form @submit.prevent="onSubmit" class="login-form-widget__form">
      <AppInput
        v-model="username"
        label="Логин или Email"
        placeholder="Введите ваш логин"
        type="text"
        :disabled="isLoading"
      />

      <AppInput
        v-model="password"
        label="Пароль"
        placeholder="••••••••"
        type="password"
        :disabled="isLoading"
      />

      <p v-if="error" class="login-form-widget__error-msg">{{ error }}</p>

      <AppButton type="submit" :loading="isLoading"> Войти в систему </AppButton>
    </form>
  </div>
</template>

<style scoped>
.login-form-widget {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 400px;
}

.login-form-widget__title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  text-align: center;
}

.login-form-widget__subtitle {
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 2rem;
  text-align: center;
}

.login-form-widget__form {
  display: flex;
  flex-direction: column;
}

.login-form-widget__error-msg {
  color: #ef4444;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  font-weight: 500;
}
</style>
