import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'

const app = createApp(App)

app.config.globalProperties.$moment=moment

app.use(store).use(router).use(moment).mount('#app')

import "bootstrap/dist/js/bootstrap.js"
