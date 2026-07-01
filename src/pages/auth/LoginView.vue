<script setup lang="ts">
import { LoginForm } from '@widgets/login-form'
</script>

<template>
  <div class="login-page-wrap">
    <div class="login-box">
      <div class="login-logo">
        <div class="brand-mark">Z</div>
        <h1 class="title" style="font-size: 26px">Zavodix</h1>
        <div class="subtitle">Операторская панель контент-завода</div>
      </div>
      <LoginForm />
    </div>
  </div>
</template>

<style scoped>
/* Центрирование и фон – в точности как в макете */
.login-page-wrap {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 30px;
  background:
    radial-gradient(circle at 25% 20%, rgba(37, 99, 235, 0.14), transparent 24%),
    radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.12), transparent 22%),
    var(--bg, #f6f7fb);
}

.login-box {
  width: 380px;
  max-width: 100%;
}

.login-logo {
  text-align: center;
  margin-bottom: 20px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 13px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 18px;
  margin: 0 auto 10px;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
}

.title {
  font-size: 26px;
  line-height: 1.2;
  margin: 0;
  letter-spacing: -0.03em;
}

.subtitle {
  color: var(--muted, #64748b);
  margin-top: 5px;
  font-size: 13px;
}
</style>
