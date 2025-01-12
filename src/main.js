import './assets/main.css'
import 'vue3-toastify/dist/index.css'
import '../node_modules/nprogress/nprogress.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)
app.use(router)
app.use(VueApexCharts)
app.mount('#app')
