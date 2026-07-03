<template>
  <div class="page-main">
    <!-- Хлебные крошки -->
    <div class="breadcrumbs">
      <a href="#" @click.prevent="$router.push('/project/detail')">← Блог Annelo</a> / Статья #99
    </div>

    <!-- Заголовок -->
    <div class="page-head">
      <div style="min-width: 0">
        <h1 class="title truncate">Как выбрать CRM для отдела продаж</h1>
        <div class="subtitle">
          task #99 · WordPress SEO · начато 29 июн, 14:22 · <span class="tag">blog_annelo_ru</span>
        </div>
      </div>
      <div class="row">
        <span class="pill pill-orange">Preview stale</span>
        <button class="btn btn-primary">Собрать package</button>
      </div>
    </div>

    <!-- Pipeline (прогресс) -->
    <div class="card" style="margin-bottom: 16px">
      <div class="row-between" style="margin-bottom: 12px">
        <div>
          <div class="card-title">Article Package pipeline</div>
          <div class="card-desc">Один экран, чтобы сразу видеть, где конвейер просит внимания.</div>
        </div>
        <span class="pill pill-yellow">4/7 этапов готовы</span>
      </div>
      <div class="pipeline">
        <div class="pipe-step done">
          <div class="pipe-name">ТЗ</div>
          <div class="pipe-status">принято</div>
          <div class="pipe-score">OK</div>
        </div>
        <div class="pipe-step done">
          <div class="pipe-name">Источники</div>
          <div class="pipe-status">4 приняты, 3 отклонены</div>
          <div class="pipe-score">9/10</div>
        </div>
        <div class="pipe-step done">
          <div class="pipe-name">Черновик</div>
          <div class="pipe-status">grounded critic OK</div>
          <div class="pipe-score">8/10</div>
        </div>
        <div class="pipe-step done">
          <div class="pipe-name">Адаптер</div>
          <div class="pipe-status">wordpress_seo</div>
          <div class="pipe-score">OK</div>
        </div>
        <div class="pipe-step warn">
          <div class="pipe-name">Visual Plan</div>
          <div class="pipe-status">6 слотов, 2 pending</div>
          <div class="pipe-score">4/6</div>
        </div>
        <div class="pipe-step active">
          <div class="pipe-name">Preview</div>
          <div class="pipe-status">устарел после slot retry</div>
          <div class="pipe-score">stale</div>
        </div>
        <div class="pipe-step">
          <div class="pipe-name">Export</div>
          <div class="pipe-status">не собран</div>
          <div class="pipe-score">—</div>
        </div>
      </div>
    </div>

    <!-- Основной лейаут с сайдбаром и контентом -->
    <div class="article-layout">
      <!-- Левый сайдбар -->
      <aside class="card sticky" style="padding: 10px">
        <nav class="side-nav">
          <div
            v-for="item in sideItems"
            :key="item.id"
            class="side-item"
            :class="{ active: activeTab === item.id }"
            @click="activeTab = item.id"
          >
            <span>{{ item.icon }} {{ item.label }}</span>
            <span :class="['badge-dot', item.badge]"></span>
          </div>
        </nav>
      </aside>

      <!-- Основной контент -->
      <section>
        <!-- Вкладка Preview -->
        <div v-show="activeTab === 'art-preview'" class="article-tab">
          <div class="card">
            <div class="preview-toolbar">
              <div>
                <div class="card-title">Preview итоговой статьи</div>
                <div class="card-desc">
                  Показывает адаптированный материал с изображениями, alt и captions.
                </div>
              </div>
              <div class="device-switch">
                <button class="device-btn active">Desktop</button>
                <button class="device-btn">Mobile</button>
                <button class="device-btn">VK</button>
                <button class="device-btn">WP</button>
              </div>
            </div>
            <div class="alert alert-warn" style="margin-bottom: 14px">
              <b>Preview устарел.</b> Один visual slot был перегенерирован после последней сборки.
              Нужно пересобрать preview.
            </div>
            <article class="article-preview">
              <h1>Как выбрать CRM для отдела продаж: практическое руководство</h1>
              <div class="preview-img">HERO · sales dashboard · 16:9</div>
              <div class="caption">Alt: Команда продаж анализирует данные в CRM-системе</div>
              <p>
                CRM-система помогает отделу продаж видеть всю историю коммуникаций, управлять
                сделками и не терять заявки между каналами. Но выбирать её по списку функций —
                плохая идея: сначала нужно понять, какие процессы она должна закрыть.
              </p>
              <h2>Когда компании действительно нужна CRM</h2>
              <p>
                CRM нужна, когда заявок становится больше, чем менеджеры способны удерживать в
                голове, а руководителю важно видеть воронку, прогноз выручки и причины потерь.
              </p>
              <div class="infographic">
                <b>Мини-чеклист выбора</b>
                <div class="info-grid">
                  <div class="info-cell">
                    <b>1. Процесс</b><br />
                    <span class="small muted">Опиши этапы сделки</span>
                  </div>
                  <div class="info-cell">
                    <b>2. Интеграции</b><br />
                    <span class="small muted">Проверь телефонию, почту, мессенджеры</span>
                  </div>
                  <div class="info-cell">
                    <b>3. Стоимость</b><br />
                    <span class="small muted">Считай владение на 12 месяцев</span>
                  </div>
                </div>
              </div>
              <h2>Критерии выбора CRM</h2>
              <ul>
                <li>простота внедрения и обучения команды;</li>
                <li>интеграции с текущими каналами заявок;</li>
                <li>контроль качества работы менеджеров;</li>
                <li>стоимость владения с учётом внедрения и поддержки.</li>
              </ul>
              <h2>Частые ошибки</h2>
              <p>
                Главная ошибка — покупать самую функциональную систему без описанного процесса
                продаж. В итоге CRM превращается в дорогой блокнот, а не в управляемую воронку.
              </p>
            </article>
          </div>
        </div>

        <!-- Вкладка Visual Plan -->
        <div v-show="activeTab === 'art-visual'" class="article-tab">
          <div class="card">
            <div class="row-between">
              <div>
                <div class="card-title">Visual Plan</div>
                <div class="card-desc">
                  Слоты изображений на всю статью. Генерируется из финальной структуры после
                  адаптера.
                </div>
              </div>
              <div class="row">
                <button class="btn btn-secondary btn-sm">Пересоздать план</button>
                <button class="btn btn-primary btn-sm">Сгенерировать failed/pending</button>
              </div>
            </div>
          </div>
          <div class="spacer"></div>
          <div class="slot-grid">
            <!-- Слот 1 -->
            <div class="slot-card">
              <div class="slot-image ready">hero · approved</div>
              <div class="slot-body">
                <div class="row-between">
                  <b>Hero image</b>
                  <span class="pill pill-green">9/10</span>
                </div>
                <div class="small muted">После H1 · 16:9 · editorial realistic</div>
                <div class="slot-meta">
                  <span class="tag">alt ready</span>
                  <span class="tag">caption ready</span>
                  <span class="tag">no text</span>
                </div>
                <div class="slot-actions">
                  <button class="btn btn-secondary btn-sm">Открыть</button>
                  <button class="btn btn-ghost btn-sm">Реген</button>
                </div>
              </div>
            </div>
            <!-- Слот 2 -->
            <div class="slot-card">
              <div class="slot-image ready">html infographic · ready</div>
              <div class="slot-body">
                <div class="row-between">
                  <b>Checklist infographic</b>
                  <span class="pill pill-green">10/10</span>
                </div>
                <div class="small muted">После H2 “Критерии выбора” · HTML/SVG → PNG</div>
                <div class="slot-meta">
                  <span class="tag">text safe</span>
                  <span class="tag">responsive</span>
                </div>
                <div class="slot-actions">
                  <button class="btn btn-secondary btn-sm">Preview</button>
                  <button class="btn btn-ghost btn-sm">Редактировать данные</button>
                </div>
              </div>
            </div>
            <!-- Слот 3 -->
            <div class="slot-card">
              <div class="slot-image warn">section image · pending</div>
              <div class="slot-body">
                <div class="row-between">
                  <b>CRM integration map</b>
                  <span class="pill pill-yellow">pending</span>
                </div>
                <div class="small muted">После H2 “Интеграции” · 4:3</div>
                <div class="slot-meta">
                  <span class="tag">needs prompt</span>
                  <span class="tag">diagram</span>
                </div>
                <div class="slot-actions">
                  <button class="btn btn-primary btn-sm">Сгенерировать</button>
                  <button class="btn btn-secondary btn-sm">Промпт</button>
                </div>
              </div>
            </div>
            <!-- Слот 4 -->
            <div class="slot-card">
              <div class="slot-image error">mistakes card · rejected</div>
              <div class="slot-body">
                <div class="row-between">
                  <b>Common mistakes card</b>
                  <span class="pill pill-red">4/10</span>
                </div>
                <div class="small muted">Vision: найден кривой текст на изображении</div>
                <div class="slot-meta">
                  <span class="tag">fake text</span>
                  <span class="tag">retry 1/2</span>
                </div>
                <div class="slot-actions">
                  <button class="btn btn-primary btn-sm">Регенерировать</button>
                  <button class="btn btn-danger btn-sm">Отклонить слот</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Вкладка Quality -->
        <div v-show="activeTab === 'art-quality'" class="article-tab">
          <div class="stack">
            <div class="card">
              <div class="card-title">Quality gates</div>
              <div class="stats-grid" style="margin-top: 14px">
                <div class="stat">
                  <div class="stat-label">Content QC</div>
                  <div class="stat-value" style="color: var(--green)">8/10</div>
                  <div class="stat-sub">факты и структура OK</div>
                </div>
                <div class="stat">
                  <div class="stat-label">Source QC</div>
                  <div class="stat-value" style="color: var(--green)">9/10</div>
                  <div class="stat-sub">4 источника приняты</div>
                </div>
                <div class="stat">
                  <div class="stat-label">Visual QC</div>
                  <div class="stat-value" style="color: #ea580c">6/10</div>
                  <div class="stat-sub">2 слота не готовы</div>
                </div>
                <div class="stat">
                  <div class="stat-label">Adapter QC</div>
                  <div class="stat-value" style="color: var(--green)">OK</div>
                  <div class="stat-sub">WP структура валидна</div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Замечания</div>
              <ul class="small muted">
                <li>
                  Visual slot <span class="tag">mistakes_card</span> отклонён из-за текста на
                  изображении.
                </li>
                <li>Preview stale: пересобрать после регенерации картинок.</li>
                <li>Рекомендуется добавить 1 внутреннюю ссылку из link inventory.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Вкладка Черновик -->
        <div v-show="activeTab === 'art-draft'" class="article-tab">
          <div class="card">
            <div class="row-between">
              <div>
                <div class="card-title">Обогащённый черновик</div>
                <div class="card-desc">
                  Это не финальная публикация, а фактурный набросок для адаптера.
                </div>
              </div>
              <button class="btn btn-secondary btn-sm">Редактировать</button>
            </div>
            <div class="article-preview">
              <h1>Как выбрать CRM для отдела продаж</h1>
              <p>
                Черновик содержит структуру, факты, источники, внутренние ссылки, спорные места и
                рекомендации по визуальным блокам.
              </p>
              <h2>Сводка</h2>
              <p>
                Основной интент: помочь руководителю выбрать CRM без переплаты и провала внедрения.
              </p>
              <h2>Факты</h2>
              <ul>
                <li>CRM централизует коммуникации и историю сделок.</li>
                <li>Для оценки стоимости важно считать не только лицензии, но и внедрение.</li>
                <li>Команде нужен пилотный сценарий на 2–4 недели.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Вкладка Источники -->
        <div v-show="activeTab === 'art-sources'" class="article-tab">
          <div class="card">
            <div class="card-title">Источники</div>
            <div class="form-grid" style="margin-top: 14px">
              <div>
                <div
                  class="tiny"
                  style="
                    color: var(--green);
                    font-weight: 800;
                    text-transform: uppercase;
                    margin-bottom: 8px;
                  "
                >
                  Принятые
                </div>
                <div class="stack">
                  <div class="alert alert-ok">
                    <b>Salesforce</b><br />
                    <span class="small">salesforce.com · reliability 9/10 · primary</span>
                  </div>
                  <div class="alert alert-ok">
                    <b>HubSpot</b><br />
                    <span class="small">blog.hubspot.com · reliability 8/10</span>
                  </div>
                  <div class="alert alert-ok">
                    <b>Forbes</b><br />
                    <span class="small">forbes.com · reliability 9/10</span>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="tiny"
                  style="
                    color: var(--red);
                    font-weight: 800;
                    text-transform: uppercase;
                    margin-bottom: 8px;
                  "
                >
                  Отклонённые
                </div>
                <div class="stack">
                  <div class="alert alert-error">
                    <b>Reddit thread</b><br />
                    <span class="small">форум ниже политики проекта</span>
                  </div>
                  <div class="alert alert-error">
                    <b>Unknown CRM blog</b><br />
                    <span class="small">нет автора и первичных данных</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Вкладка Адаптер -->
        <div v-show="activeTab === 'art-adapter'" class="article-tab">
          <div class="card">
            <div class="row-between">
              <div>
                <div class="card-title">Адаптер результата</div>
                <div class="card-desc">Черновик + рекомендации → готовая статья под платформу.</div>
              </div>
              <button class="btn btn-primary btn-sm">Запустить адаптер заново</button>
            </div>
            <div class="spacer"></div>
            <!-- Здесь пока оставляем таблицу (позже заменим на грид) -->
            <table>
              <thead>
                <tr>
                  <th>Версия</th>
                  <th>Адаптер</th>
                  <th>Статус</th>
                  <th>Preview</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#12</td>
                  <td><span class="tag">wordpress_seo</span></td>
                  <td><span class="pill pill-green">Готов</span></td>
                  <td><span class="pill pill-orange">stale</span></td>
                  <td><button class="btn btn-secondary btn-sm">Открыть</button></td>
                </tr>
                <tr>
                  <td>#11</td>
                  <td><span class="tag">default_article</span></td>
                  <td><span class="pill pill-gray">Архив</span></td>
                  <td><span class="pill pill-green">OK</span></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Вкладка Package -->
        <div v-show="activeTab === 'art-package'" class="article-tab">
          <div class="card">
            <div class="row-between">
              <div>
                <div class="card-title">Article Package</div>
                <div class="card-desc">
                  Единый объект для передачи в публикацию, экспорт или ручную проверку.
                </div>
              </div>
              <button class="btn btn-primary btn-sm">Создать ZIP package</button>
            </div>
            <div class="spacer"></div>
            <div class="package-tree">
              <div class="ok">✓ article.html</div>
              <div class="ok">✓ article.md</div>
              <div class="ok">✓ metadata.json</div>
              <div class="ok">✓ sources.json</div>
              <div class="warn">⚠ preview.html <span class="muted">stale</span></div>
              <div class="ok">✓ images/hero.webp</div>
              <div class="warn">
                ⚠ images/mistakes_card.webp <span class="muted">rejected</span>
              </div>
              <div class="muted">— exports/wordpress.zip not built</div>
            </div>
          </div>
        </div>

        <!-- Вкладка Журнал -->
        <div v-show="activeTab === 'art-log'" class="article-tab">
          <div class="card">
            <div class="card-title">Журнал конвейера</div>
            <div class="event-list" style="margin-top: 14px">
              <div class="event">
                <div class="event-dot ok"></div>
                <div class="small soft">14:22</div>
                <div>
                  <b>ТЗ принято</b>
                  <div class="small muted">project_id=blog_annelo_ru · adapter=wordpress_seo</div>
                </div>
                <span class="pill pill-green">done</span>
              </div>
              <div class="event">
                <div class="event-dot ok"></div>
                <div class="small soft">14:24</div>
                <div>
                  <b>Источники одобрены</b>
                  <div class="small muted">4 accepted, 3 rejected, min primary passed</div>
                </div>
                <span class="pill pill-green">done</span>
              </div>
              <div class="event">
                <div class="event-dot ok"></div>
                <div class="small soft">14:30</div>
                <div>
                  <b>Черновик создан</b>
                  <div class="small muted">grounding critic score 8/10</div>
                </div>
                <span class="pill pill-green">done</span>
              </div>
              <div class="event">
                <div class="event-dot warn"></div>
                <div class="small soft">14:42</div>
                <div>
                  <b>Vision отклонил mistakes_card</b>
                  <div class="small muted">Причина: fake text on image · retry 1/2</div>
                </div>
                <span class="pill pill-yellow">action</span>
              </div>
              <div class="event">
                <div class="event-dot run"></div>
                <div class="small soft">14:46</div>
                <div>
                  <b>Preview помечен stale</b>
                  <div class="small muted">Нужно пересобрать после visual retry</div>
                </div>
                <span class="pill pill-blue">running</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Правая колонка -->
      <aside class="article-right sticky">
        <div class="card">
          <div class="card-title">Операторские действия</div>
          <div class="stack" style="margin-top: 12px">
            <button class="btn btn-primary w-full">Сгенерировать failed images</button>
            <button class="btn btn-secondary w-full">Пересобрать preview</button>
            <button class="btn btn-secondary w-full">Принять visual plan</button>
            <button class="btn btn-secondary w-full">Создать export package</button>
            <button class="btn btn-ghost w-full" style="color: var(--red)">
              Вернуть на ручную проверку
            </button>
          </div>
        </div>
        <div class="card" style="margin-top: 14px">
          <div class="card-title">Package health</div>
          <div class="health-list" style="margin-top: 12px">
            <div class="health-row">
              <span>Text</span>
              <div class="health-bar"><div class="health-fill green" style="width: 85%"></div></div>
              <b>8</b>
            </div>
            <div class="health-row">
              <span>Sources</span>
              <div class="health-bar"><div class="health-fill green" style="width: 90%"></div></div>
              <b>9</b>
            </div>
            <div class="health-row">
              <span>Visual</span>
              <div class="health-bar"><div class="health-fill warn" style="width: 60%"></div></div>
              <b>6</b>
            </div>
            <div class="health-row">
              <span>Adapter</span>
              <div class="health-bar">
                <div class="health-fill green" style="width: 100%"></div>
              </div>
              <b>OK</b>
            </div>
          </div>
        </div>
        <div class="card" style="margin-top: 14px">
          <div class="card-title">Текущие проблемы</div>
          <div class="stack" style="margin-top: 10px">
            <div class="alert alert-warn">2 visual slots не готовы</div>
            <div class="alert alert-warn">Preview устарел</div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const sideItems = [
  { id: 'art-preview', label: 'Preview', icon: '👁', badge: 'warn' },
  { id: 'art-visual', label: 'Visual Plan', icon: '🧩', badge: 'warn' },
  { id: 'art-quality', label: 'Quality', icon: '✅', badge: 'ok' },
  { id: 'art-draft', label: 'Черновик', icon: '📄', badge: 'ok' },
  { id: 'art-sources', label: 'Источники', icon: '🔗', badge: 'ok' },
  { id: 'art-adapter', label: 'Адаптер', icon: '🔧', badge: 'ok' },
  { id: 'art-package', label: 'Package', icon: '📦', badge: 'warn' },
  { id: 'art-log', label: 'Журнал', icon: '📋', badge: 'run' },
]

const activeTab = ref('art-preview')
</script>

<style scoped>
/* Все стили берутся из глобального main.css – ничего не переопределяем */
</style>
