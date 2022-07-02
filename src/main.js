import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.scss'
// Vue-select
import CustomSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

const app = createApp(App)

app.component('CustomSelect', CustomSelect)

app.mount('#app')
