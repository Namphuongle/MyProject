import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import './assets/main.css'
import route from '../src/route'

const app = createApp(App)
app.use(route).mount("#app");
