import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"

createApp(App).use(router).use(createPinia()).mount('#app')
