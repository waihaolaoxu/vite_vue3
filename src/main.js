import { createApp } from 'vue'
import { Button } from 'vant';
import router from './routers/index'
import store from './store/index'
import App from './App.vue'
const app = createApp(App)
app.use(store)
app.use(Button)
app.use(router)
app.mount('#app')
