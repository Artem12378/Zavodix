// src/main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './app/providers/router'
import './app/styles/main.css' // Импортируем стили из правильного слоя app

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
