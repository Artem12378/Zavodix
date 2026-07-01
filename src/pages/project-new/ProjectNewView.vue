<template>
  <div class="page-main">
    <!-- Хлебные крошки -->
    <div class="breadcrumbs">
      <router-link to="/dashboard">← Проекты</router-link>
    </div>

    <!-- Заголовок страницы -->
    <div class="page-head">
      <div>
        <h1 class="title">Новый проект</h1>
        <div class="subtitle">
          Создаёт project boundary, Qdrant collection, policy и стартовые знания.
        </div>
      </div>
    </div>

    <!-- Блоки формы -->
    <div class="stack">
      <!-- 1. Основные параметры -->
      <div class="card">
        <div class="card-header">
          <div>
            <div class="card-title">1. Основные параметры</div>
            <div class="card-desc">Минимальный набор, без которого конвейер не стартует.</div>
          </div>
          <span class="pill pill-blue">required</span>
        </div>
        <div class="form-grid">
          <div class="field">
            <label>ID проекта</label>
            <input value="blog_annelo_ru" />
            <span class="hint">Только строчные буквы, цифры, _</span>
          </div>
          <div class="field">
            <label>Название</label>
            <input value="Блог Annelo" />
          </div>
          <div class="field">
            <label>Домен</label>
            <input value="annelo.ru" />
          </div>
          <div class="field">
            <label>Ниша</label>
            <input value="IT / автоматизация / разработка" />
          </div>
          <div class="field">
            <label>Тон</label>
            <input value="экспертный, конкретный, без воды" />
          </div>
          <div class="field">
            <label>Язык</label>
            <select>
              <option>Русский</option>
              <option>Английский</option>
            </select>
          </div>
        </div>
      </div>

      <!-- 2. Политика источников -->
      <div class="card">
        <div class="card-title">2. Политика источников</div>
        <div class="card-desc">
          Эти настройки наследуются всеми статьями, но могут переопределяться в задаче.
        </div>
        <div class="form-grid" style="margin-top: 14px">
          <div class="field">
            <label>Мин. надёжность</label>
            <input type="number" min="1" max="10" value="4" />
          </div>
          <div class="field">
            <label>Мин. первоисточников</label>
            <input type="number" value="1" />
          </div>
          <div class="field">
            <label>Предпочитаемые домены</label>
            <textarea placeholder="site.ru&#10;docs.site.ru"></textarea>
          </div>
          <div class="field">
            <label>Запрещённые домены</label>
            <textarea placeholder="spam.example&#10;lowquality.example"></textarea>
          </div>
          <label class="check-row"><input type="checkbox" /> Допускать соцсети</label>
          <label class="check-row"><input type="checkbox" /> Допускать форумы</label>
        </div>
      </div>

      <!-- 3. Начальные знания и crawl -->
      <div class="card">
        <div class="card-title">3. Начальные знания и crawl</div>
        <div class="form-grid" style="margin-top: 14px">
          <div class="field col-2">
            <label>Стартовый контекст</label>
            <textarea
              style="min-height: 120px"
              placeholder="Описание бизнеса, факты, ограничения, CTA, стиль..."
            ></textarea>
          </div>
          <label class="check-row">
            <input type="checkbox" checked /> Запустить crawl sitemap после создания
          </label>
          <label class="check-row">
            <input type="checkbox" checked /> Построить link inventory
          </label>
        </div>
      </div>

      <!-- Кнопки действий -->
      <div class="row-between">
        <button class="btn btn-secondary" @click="$router.push('/dashboard')">Отмена</button>
        <button class="btn btn-primary">Создать и запустить bootstrap</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Позже здесь будет логика отправки формы
</script>
