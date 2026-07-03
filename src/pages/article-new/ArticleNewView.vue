<template>
  <div class="page-main">
    <!-- Хлебные крошки -->
    <div class="breadcrumbs">
      <router-link to="/project/detail">← Блог Annelo</router-link>
    </div>

    <!-- Заголовок -->
    <div class="page-head">
      <div>
        <h1 class="title">Новая статья</h1>
        <div class="subtitle">
          Создать черновик, адаптировать, сгенерировать visual plan и собрать package.
        </div>
      </div>
    </div>

    <!-- Основные блоки -->
    <div class="stack">
      <!-- Режим генерации -->
      <div class="card">
        <div class="card-title">Режим генерации</div>
        <div class="card-desc">Для экономии времени можно запускать не весь конвейер.</div>
        <div class="form-grid-3" style="margin-top: 14px">
          <label
            class="card flat"
            style="cursor: pointer; border-color: #bfdbfe; background: #eff6ff"
          >
            <input type="radio" name="mode" checked /> <b>Full package</b>
            <div class="small muted" style="margin-top: 4px">
              Черновик → адаптер → visual plan → preview
            </div>
          </label>
          <label class="card flat" style="cursor: pointer">
            <input type="radio" name="mode" /> <b>Draft + Adapter</b>
            <div class="small muted" style="margin-top: 4px">Без генерации изображений</div>
          </label>
          <label class="card flat" style="cursor: pointer">
            <input type="radio" name="mode" /> <b>Только черновик</b>
            <div class="small muted" style="margin-top: 4px">Быстро, без package</div>
          </label>
        </div>
      </div>

      <!-- Тема и требования -->
      <div class="card">
        <div class="card-title">Тема и требования</div>
        <div class="form-grid" style="margin-top: 14px">
          <div class="field col-2">
            <label>Тема</label>
            <input value="Как выбрать CRM для отдела продаж" />
          </div>
          <div class="field">
            <label>Ключевые слова</label>
            <input value="CRM, отдел продаж, воронка продаж" />
          </div>
          <div class="field">
            <label>Аудитория</label>
            <input value="руководители продаж, собственники малого бизнеса" />
          </div>
          <div class="field col-2">
            <label>Дополнительное ТЗ</label>
            <textarea placeholder="Обязательные блоки, тон, запреты, конкуренты, CTA..."></textarea>
          </div>
        </div>
      </div>

      <!-- Адаптер и визуальный пакет -->
      <div class="card">
        <div class="card-title">Адаптер и визуальный пакет</div>
        <div class="form-grid" style="margin-top: 14px">
          <div class="field">
            <label>Адаптер</label>
            <select>
              <option>WordPress SEO</option>
              <option>Habr</option>
              <option>Dzen</option>
              <option>VC.ru</option>
            </select>
          </div>
          <div class="field">
            <label>Профиль preview</label>
            <select>
              <option>Desktop + Mobile + Social</option>
              <option>Только Desktop</option>
              <option>Только Social</option>
            </select>
          </div>
          <div class="field">
            <label>Visual slots</label>
            <select>
              <option>auto</option>
              <option>3</option>
              <option>5</option>
              <option>8</option>
            </select>
          </div>
          <div class="field">
            <label>Visual style</label>
            <select>
              <option>mixed: hero + section + HTML infographic</option>
              <option>editorial realistic</option>
              <option>HTML infographic only</option>
            </select>
          </div>
          <label class="check-row">
            <input type="checkbox" checked /> Генерировать HTML-инфографику
          </label>
          <label class="check-row">
            <input type="checkbox" checked /> Авто-регенерация failed images
          </label>
        </div>
      </div>

      <!-- Кнопки действий -->
      <div class="row-between">
        <span class="small muted">Ожидаемое время: 4–9 минут. Картинки могут уйти в retry.</span>
        <div class="row">
          <button class="btn btn-secondary" @click="$router.push('/project/detail')">Отмена</button>
          <button class="btn btn-primary" @click="$router.push('/article/detail')">
            Запустить full package
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Позже здесь будет логика отправки формы
</script>
