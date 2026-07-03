<template>
  <header class="app-header">
    <div class="app-header-inner">
      <!-- Левая часть: бренд -->
      <div class="brand">
        <div class="brand-mark">Z</div>
        <div>
          <div class="brand-name">Zavodix</div>
          <div class="brand-sub">Content Factory OS</div>
        </div>
      </div>

      <!-- Правая часть: навигация и профиль (ТОЧНО КАК В МАКЕТЕ) -->
      <nav class="top-nav">
        <router-link to="/dashboard" active-class="active">Проекты</router-link>
        <router-link to="/runs" active-class="active">Запуски</router-link>
        <router-link to="/users" active-class="active">Пользователи</router-link>
        <div class="user-chip">
          <div class="avatar">A</div>
          <span>annelo@zavodix.ru</span>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* ===== ТОЧНЫЕ СТИЛИ ИЗ МАКЕТА ===== */
.app-header {
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid var(--line, #e2e8f0);
  backdrop-filter: blur(14px);
}

.app-header-inner {
  max-width: var(--max, 1280px);
  margin: 0 auto;
  padding: 13px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-mark {
  width: 30px;
  height: 30px;
  border-radius: 9px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 800;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
}

.brand-name {
  font-weight: 750;
  letter-spacing: -0.02em;
}

.brand-sub {
  font-size: 11px;
  color: var(--soft, #94a3b8);
  margin-top: -2px;
}

/* ===== НАВИГАЦИЯ (top-nav) ===== */
.top-nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.top-nav a {
  padding: 7px 10px;
  border-radius: 8px;
  color: var(--muted, #64748b);
  font-size: 11px;
  text-decoration: none;
  transition:
    background 0.15s,
    color 0.15s;
}

.top-nav a:hover {
  background: var(--surface-3, #f1f5f9);
  color: var(--text, #0f172a);
}

.top-nav a.active {
  background: #eff6ff;
  color: var(--primary, #2563eb);
  font-weight: 650;
}

/* ===== USER CHIP ===== */
.user-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 14px;
  margin-left: 8px;
  border-left: 1px solid var(--line, #e2e8f0);
  color: var(--muted, #64748b);
  font-size: 12px;
}

.avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #e0e7ff;
  color: #4338ca;
  display: grid;
  place-items: center;
  font-weight: 700;
}
</style>
