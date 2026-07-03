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
      <!-- Статьи (Grid вместо таблицы) -->
      <div v-if="tab.id === 'pd-articles'">
        <div class="articles-grid">
          <div v-for="article in articles" :key="article.id" class="card article-item">
            <div class="article-item__row">
              <div class="article-item__info">
                <div class="article-item__title">{{ article.title }}</div>
                <div class="article-item__meta tiny soft">{{ article.meta }}</div>
              </div>
              <span :class="['pill', article.packageClass]">{{ article.package }}</span>
            </div>
            <div class="article-item__details">
              <span class="tag">Картинки: {{ article.images }}</span>
              <span class="tag">Адаптер: {{ article.adapter }}</span>
              <span class="soft small">{{ article.date }}</span>
            </div>
            <div class="article-item__actions">
              <a
                href="#"
                class="btn btn-secondary btn-sm"
                @click.prevent="$router.push('/article/detail')"
                >Открыть →</a
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Контент-план (без изменений) -->
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

      <!-- Краулинг (без таблиц) -->
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

      <!-- Ссылки (Grid вместо таблицы) -->
      <div v-if="tab.id === 'pd-links'">
        <div class="card">
          <div class="row-between" style="margin-bottom: 12px">
            <div>
              <div class="card-title">Инвентарь ссылок</div>
              <div class="card-desc">Проверенные внутренние URL для адаптеров и перелинковки.</div>
            </div>
            <span class="pill pill-green">Загружен</span>
          </div>
          <div class="links-grid">
            <div v-for="link in links" :key="link.url" class="link-item">
              <span :class="['pill', link.statusClass]">{{ link.status }}</span>
              <span class="link-item__page"
                ><b>{{ link.page }}</b></span
              >
              <span class="link-item__url small" style="color: var(--primary)">{{ link.url }}</span>
              <span class="tag">{{ link.type }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Адаптеры (Grid вместо таблицы) -->
      <div v-if="tab.id === 'pd-adapters'">
        <div class="card">
          <div class="row-between" style="margin-bottom: 12px">
            <div>
              <div class="card-title">Адаптеры</div>
              <div class="card-desc">
                Последний этап до готовой статьи. Получает черновик + рекомендации → возвращает
                форматированный результат.
              </div>
            </div>
            <button class="btn btn-secondary btn-sm">+ Добавить</button>
          </div>
          <div class="adapters-grid">
            <div v-for="adapter in adapters" :key="adapter.name" class="adapter-item">
              <div class="adapter-item__header">
                <b>{{ adapter.name }}</b>
                <div class="tiny soft">{{ adapter.desc }}</div>
              </div>
              <div class="adapter-item__tags">
                <span class="tag">{{ adapter.format }}</span>
                <span :class="['pill', adapter.imagesClass]">{{ adapter.images }}</span>
                <span :class="['pill', adapter.previewClass]">{{ adapter.preview }}</span>
              </div>
              <button class="btn btn-secondary btn-sm">Изменить</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Visual policy (без изменений) -->
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

// Данные для сеток
const articles = ref([
  {
    id: 1,
    title: 'Как выбрать CRM для отдела продаж',
    meta: 'задача #99 · source review OK',
    package: 'Preview stale',
    packageClass: 'pill-orange',
    images: '4/6',
    adapter: 'wordpress_seo',
    date: '29 июн, 14:22',
  },
  {
    id: 2,
    title: 'Топ-10 инструментов для удалённой команды',
    meta: 'задача #97',
    package: 'Ready',
    packageClass: 'pill-green',
    images: '5/5',
    adapter: 'default_article',
    date: '27 июн',
  },
  {
    id: 3,
    title: 'Автоматизация маркетинга: с чего начать',
    meta: '',
    package: 'Failed',
    packageClass: 'pill-red',
    images: '0/0',
    adapter: 'dzen',
    date: '25 июн',
  },
])

const links = ref([
  {
    status: 'OK',
    statusClass: 'pill-green',
    page: 'Как выбрать CRM',
    url: 'annelo.ru/blog/kak-vybrat-crm',
    type: 'article',
  },
  {
    status: '404',
    statusClass: 'pill-red',
    page: 'old-page',
    url: 'annelo.ru/old-page',
    type: 'broken',
  },
])

const adapters = ref([
  {
    name: 'WordPress SEO',
    desc: 'Yoast, Gutenberg blocks, FAQ',
    format: 'gutenberg_blocks',
    images: 'Да',
    imagesClass: 'pill-green',
    preview: 'Да',
    previewClass: 'pill-green',
  },
  {
    name: 'Habr',
    desc: 'техничный markdown',
    format: 'markdown',
    images: 'частично',
    imagesClass: 'pill-gray',
    preview: 'Да',
    previewClass: 'pill-blue',
  },
])
</script>

<style scoped>
/* Сетка для статей */
.articles-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.article-item {
  padding: 12px 16px;
}
.article-item__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.article-item__title {
  font-weight: 700;
}
.article-item__meta {
  margin-top: 2px;
}
.article-item__details {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 6px;
}
.article-item__actions {
  margin-top: 8px;
}

/* Сетка для ссылок */
.links-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}
.link-item {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 6px 0;
  border-bottom: 1px solid var(--line-soft);
}
.link-item:last-child {
  border-bottom: none;
}
.link-item__page {
  min-width: 120px;
}
.link-item__url {
  flex: 1;
  min-width: 150px;
}

/* Сетка для адаптеров */
.adapters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 14px;
  margin-top: 8px;
}
.adapter-item {
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.adapter-item__header {
  display: flex;
  flex-direction: column;
}
.adapter-item__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* Адаптив для сеток */
@media (max-width: 600px) {
  .article-item__row {
    flex-direction: column;
    align-items: stretch;
  }
  .link-item {
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
  }
  .adapters-grid {
    grid-template-columns: 1fr;
  }
}
</style>
