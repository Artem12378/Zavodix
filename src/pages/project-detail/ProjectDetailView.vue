<template>
  <div class="page-main">
    <!-- Хлебные крошки -->
    <div class="breadcrumbs">
      <router-link to="/dashboard">← Проекты</router-link>
    </div>

    <!-- Заголовок -->
    <div class="page-head">
      <div>
        <h1 class="title">Блог Annelo</h1>
        <div class="subtitle">
          <span class="tag">blog_annelo_ru</span> · annelo.ru · IT / разработка
        </div>
      </div>
      <div class="row">
        <span class="pill pill-green">Инициализирован</span>
        <button class="btn btn-primary" @click="$router.push('/article/new')">
          + Новая статья
        </button>
      </div>
    </div>

    <!-- Статистика -->
    <div class="stats-grid" style="margin-bottom: 16px">
      <div class="stat">
        <div class="stat-label">Статьи</div>
        <div class="stat-value">14</div>
        <div class="stat-sub">12 package ready</div>
      </div>
      <div class="stat">
        <div class="stat-label">Link inventory</div>
        <div class="stat-value">142</div>
        <div class="stat-sub">138 OK</div>
      </div>
      <div class="stat">
        <div class="stat-label">Visual slots</div>
        <div class="stat-value" style="color: #ea580c">7</div>
        <div class="stat-sub">требуют действия</div>
      </div>
      <div class="stat">
        <div class="stat-label">Последний crawl</div>
        <div class="stat-value" style="font-size: 18px">3 июн</div>
        <div class="stat-sub">1 ошибка</div>
      </div>
    </div>

    <!-- Вкладки -->
    <div class="tabs">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        class="tab"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </div>
    </div>

    <!-- Содержимое вкладок -->
    <div v-for="tab in tabs" :key="tab.id" v-show="activeTab === tab.id">
      <!-- Статьи -->
      <div v-if="tab.id === 'pd-articles'" class="card" style="padding: 0; overflow: hidden">
        <table>
          <thead>
            <tr>
              <th>Статья</th>
              <th>Package</th>
              <th>Картинки</th>
              <th>Адаптер</th>
              <th>Дата</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr style="cursor: pointer" @click="$router.push('/article/detail')">
              <td>
                <b>Как выбрать CRM для отдела продаж</b>
                <div class="tiny soft">задача #99 · source review OK</div>
              </td>
              <td><span class="pill pill-orange">Preview stale</span></td>
              <td><span class="pill pill-yellow">4/6</span></td>
              <td><span class="tag">wordpress_seo</span></td>
              <td class="small muted">29 июн, 14:22</td>
              <td><a style="color: var(--primary)">Открыть →</a></td>
            </tr>
            <tr>
              <td>
                <b>Топ-10 инструментов для удалённой команды</b>
                <div class="tiny soft">задача #97</div>
              </td>
              <td><span class="pill pill-green">Ready</span></td>
              <td><span class="pill pill-green">5/5</span></td>
              <td><span class="tag">default_article</span></td>
              <td class="small muted">27 июн</td>
              <td><a style="color: var(--primary)">Открыть →</a></td>
            </tr>
            <tr>
              <td><b>Автоматизация маркетинга: с чего начать</b></td>
              <td><span class="pill pill-red">Failed</span></td>
              <td><span class="pill pill-gray">0/0</span></td>
              <td><span class="tag">dzen</span></td>
              <td class="small muted">25 июн</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Контент-план -->
      <div v-if="tab.id === 'pd-plan'" class="card">
        <div class="card-title">Контент-план</div>
        <div class="card-desc">
          Пока это ручная очередь. Позже сюда можно подключить генератор тем.
        </div>
        <div class="form-grid" style="margin-top: 14px">
          <div class="field col-2">
            <label>Тема</label>
            <input placeholder="Интеграция CRM и мессенджеров" />
          </div>
          <div class="field">
            <label>Целевой запрос</label>
            <input placeholder="CRM интеграция" />
          </div>
          <div class="field">
            <label>Дедлайн</label>
            <input placeholder="2026-07-15" />
          </div>
          <div class="field col-2">
            <label>Требования</label>
            <textarea placeholder="Обязательные блоки, запреты, CTA..."></textarea>
          </div>
        </div>
        <div class="spacer"></div>
        <button class="btn btn-secondary btn-sm">Добавить в очередь</button>
      </div>

      <!-- Краулинг -->
      <div v-if="tab.id === 'pd-crawl'" class="card">
        <div class="row-between">
          <div>
            <div class="card-title">Краулинг сайта</div>
            <div class="card-desc">Sitemap → Playwright → Qdrant/Postgres → link inventory.</div>
          </div>
          <button class="btn btn-secondary">Запустить crawl</button>
        </div>
        <div class="stats-grid" style="margin-top: 14px">
          <div class="stat">
            <div class="stat-label">Найдено</div>
            <div class="stat-value">142</div>
          </div>
          <div class="stat">
            <div class="stat-label">Загружено</div>
            <div class="stat-value">138</div>
          </div>
          <div class="stat">
            <div class="stat-label">Пропущено</div>
            <div class="stat-value">3</div>
          </div>
          <div class="stat">
            <div class="stat-label">Ошибки</div>
            <div class="stat-value" style="color: var(--red)">1</div>
          </div>
        </div>
      </div>

      <!-- Ссылки -->
      <div v-if="tab.id === 'pd-links'" class="card" style="padding: 0; overflow: hidden">
        <div style="padding: 14px 16px" class="row-between">
          <div>
            <div class="card-title">Инвентарь ссылок</div>
            <div class="card-desc">Проверенные внутренние URL для адаптеров и перелинковки.</div>
          </div>
          <span class="pill pill-green">Загружен</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Статус</th>
              <th>Страница</th>
              <th>URL</th>
              <th>Тип</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="pill pill-green">OK</span></td>
              <td><b>Как выбрать CRM</b></td>
              <td class="small" style="color: var(--primary)">annelo.ru/blog/kak-vybrat-crm</td>
              <td><span class="tag">article</span></td>
            </tr>
            <tr>
              <td><span class="pill pill-red">404</span></td>
              <td>old-page</td>
              <td class="small" style="color: var(--primary)">annelo.ru/old-page</td>
              <td><span class="tag">broken</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Адаптеры -->
      <div v-if="tab.id === 'pd-adapters'" class="card">
        <div class="row-between">
          <div>
            <div class="card-title">Адаптеры</div>
            <div class="card-desc">
              Последний этап до готовой статьи. Получает черновик + рекомендации → возвращает
              форматированный результат.
            </div>
          </div>
          <button class="btn btn-secondary btn-sm">+ Добавить</button>
        </div>
        <div class="spacer"></div>
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Формат</th>
              <th>Images</th>
              <th>Preview</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>WordPress SEO</b>
                <div class="tiny soft">Yoast, Gutenberg blocks, FAQ</div>
              </td>
              <td><span class="tag">gutenberg_blocks</span></td>
              <td><span class="pill pill-green">Да</span></td>
              <td><span class="pill pill-green">Да</span></td>
              <td><button class="btn btn-secondary btn-sm">Изменить</button></td>
            </tr>
            <tr>
              <td>
                <b>Habr</b>
                <div class="tiny soft">техничный markdown</div>
              </td>
              <td><span class="tag">markdown</span></td>
              <td><span class="pill pill-gray">частично</span></td>
              <td><span class="pill pill-blue">Да</span></td>
              <td><button class="btn btn-secondary btn-sm">Изменить</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Visual policy -->
      <div v-if="tab.id === 'pd-visual'" class="card">
        <div class="card-title">Visual policy</div>
        <div class="card-desc">Дефолтные правила генерации картинок для всех статей проекта.</div>
        <div class="form-grid" style="margin-top: 14px">
          <div class="field">
            <label>Стиль</label>
            <select>
              <option>Editorial realistic + HTML infographics</option>
              <option>Только фотореализм</option>
              <option>Только инфографика</option>
            </select>
          </div>
          <div class="field">
            <label>Слотов по умолчанию</label>
            <select>
              <option>auto</option>
              <option>3</option>
              <option>5</option>
              <option>8</option>
            </select>
          </div>
          <div class="field">
            <label>Negative prompt</label>
            <textarea>no watermark, no fake text, no logos, no distorted hands</textarea>
          </div>
          <div class="field">
            <label>Vision retry</label>
            <input type="number" value="2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tabs = [
  { id: 'pd-articles', label: 'Статьи' },
  { id: 'pd-plan', label: 'Контент-план' },
  { id: 'pd-crawl', label: 'Краулинг' },
  { id: 'pd-links', label: 'Ссылки' },
  { id: 'pd-adapters', label: 'Адаптеры' },
  { id: 'pd-visual', label: 'Visual policy' },
]

const activeTab = ref('pd-articles')
</script>

<style scoped>
/* Все стили берутся из глобального main.css, ничего не переопределяем */
</style>
