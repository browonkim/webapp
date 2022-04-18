import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n'
import { ko } from '@/i18n/ko'

const i18n = createI18n({
  locale: 'ko',
  messages: { ko }
})

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(i18n)
  .mount('#app')
