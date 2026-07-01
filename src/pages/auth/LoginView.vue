<script setup lang="ts">
import { LoginForm } from '@widgets/login-form'
</script>

<template>
  <div class="login-page">
    <main class="login-page__content">
      <LoginForm />
    </main>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-bg, #f3f4f6);
  padding: 1rem;
}

.login-page__content {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
