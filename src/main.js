import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@materializecss/materialize/dist/css/materialize.min.css'
import '@materializecss/materialize/dist/js/materialize.min.js'
import 'aos/dist/aos.css'

import 'material-icons/iconfont/material-icons.css';

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
