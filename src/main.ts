import { createApp } from 'vue'
import Home from './page/Home.vue'
import router from './router/router'
import axios from './axios/axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'

const pinia = createPinia()
import '@/style/entry.ts'

createApp(Home).use(pinia).use(VueAxios, axios).use(router).mount('#app')
