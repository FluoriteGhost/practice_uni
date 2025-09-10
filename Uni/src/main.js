
import { createApp } from 'vue'
import App from './App.vue'

import {createMemoryHistory, createRouter } from 'vue-router'

import department from './components/department.vue'
import disciplines from './components/disciplines.vue'
import extrawork from './components/extrawork.vue'


const routes = [
  { path: '/', component: department },
  { path: '/disciplines', component: disciplines },
  { path: '/extrawork', component: extrawork },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')