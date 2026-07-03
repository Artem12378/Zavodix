<template>
  <div class="page-main">
    <!-- Заголовок -->
    <div class="page-head">
      <div>
        <h1 class="title">Пользователи</h1>
        <div class="subtitle">Роли для оператора, редактора и наблюдателя.</div>
      </div>
      <button class="btn btn-primary">+ Новый пользователь</button>
    </div>

    <!-- Таблица пользователей -->
    <div class="card" style="padding: 0; overflow: hidden">
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Имя</th>
            <th>Роль</th>
            <th>Статус</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.email">
            <td>{{ user.email }}</td>
            <td>{{ user.name }}</td>
            <td>
              <span :class="['pill', user.roleClass]">{{ user.role }}</span>
            </td>
            <td>
              <span :class="['pill', user.statusClass]">{{ user.status }}</span>
            </td>
            <td class="small muted">{{ user.note || '' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const users = ref([
  {
    email: 'annelo@zavodix.ru',
    name: 'Annelo',
    role: 'Администратор',
    roleClass: 'pill-purple',
    status: 'Активен',
    statusClass: 'pill-green',
    note: 'это вы',
  },
  {
    email: 'editor@zavodix.ru',
    name: 'Иван Петров',
    role: 'Редактор',
    roleClass: 'pill-blue',
    status: 'Активен',
    statusClass: 'pill-green',
    note: '',
  },
  {
    email: 'viewer@zavodix.ru',
    name: 'Мария',
    role: 'Читатель',
    roleClass: 'pill-gray',
    status: 'Активен',
    statusClass: 'pill-green',
    note: '',
  },
])
</script>

<style scoped>
/* Все стили берутся из глобального main.css */
</style>
