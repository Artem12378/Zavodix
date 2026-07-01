<template>
  <header class="sub-header">
    <div class="sub-header__container">
      <div class="sub-header__brand">
        <div class="sub-header__logo-icon">Z</div>
        <div class="sub-header__brand-text">
          <h1 class="sub-header__logo-name">Zavodix</h1>
          <span class="sub-header__logo-desc">Content Factory OS</span>
        </div>
      </div>
      <div class="sub-header__actions">
        <nav class="sub-header__nav">
          <router-link to="/dashboard" class="sub-header__link">Проекты</router-link>
          <router-link to="/runs" class="sub-header__link">Запуски</router-link>
          <router-link to="/users" class="sub-header__link">Пользователи</router-link>
        </nav>
        <div class="sub-header__profile">
          <div class="sub-header__avatar">A</div>
          <span class="sub-header__username">annelo@zavodix.ru</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.sub-header {
  width: 100%;
  height: 56px;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  /* НЕТ position: fixed – он теперь обычный блок */
}

.sub-header__container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sub-header__brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sub-header__logo-icon {
  width: 32px;
  height: 32px;
  background-color: #6366f1;
  color: #ffffff;
  font-weight: 800;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.sub-header__brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.sub-header__logo-name {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.sub-header__logo-desc {
  font-size: 0.75rem;
  color: #94a3b8;
}

.sub-header__actions {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.sub-header__nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.sub-header__link {
  font-size: 0.85rem;
  font-weight: 500;
  color: #64748b;
  text-decoration: none;
  transition: color 0.15s ease;
}

.sub-header__link:hover {
  color: #0f172a;
}

.sub-header__link.router-link-active {
  color: #2563eb;
  font-weight: 600;
}

.sub-header__profile {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #f1f5f9;
  padding: 0.25rem 0.75rem 0.25rem 0.35rem;
  border-radius: 9999px;
}

.sub-header__avatar {
  width: 24px;
  height: 24px;
  background-color: #dbeafe;
  color: #2563eb;
  font-weight: 700;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
}

.sub-header__username {
  font-size: 0.8rem;
  font-weight: 500;
  color: #334155;
}
</style>
