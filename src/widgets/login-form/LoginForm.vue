<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('annelo@zavodix.ru')
const password = ref('00000000')
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
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push('/dashboard')
  } catch {
    error.value = 'Неверный логин или пароль'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="card">
    <div class="field">
      <label>Электронная почта</label>
      <input
        type="email"
        v-model="username"
        :disabled="isLoading"
        placeholder="Введите ваш email"
      />
    </div>
    <div class="spacer"></div>
    <div class="field">
      <label>Пароль</label>
      <input type="password" v-model="password" :disabled="isLoading" placeholder="••••••••" />
    </div>
    <div class="spacer"></div>

    <p v-if="error" class="alert alert-error" style="margin-bottom: 12px">
      {{ error }}
    </p>

    <button type="submit" class="btn btn-primary w-full" :disabled="isLoading">
      {{ isLoading ? '⏳ Вход...' : 'Войти' }}
    </button>

    <div class="small soft" style="text-align: center; margin-top: 12px">
      Read-only preview · UI concept
    </div>
  </form>
</template>

<style scoped>
/* Все стили берутся из глобального main.css – здесь ничего не переопределяем */
</style>
