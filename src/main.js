import { createApp } from 'vue'
import { Button,NavBar } from 'vant';
import router from './routers/index'
import store from './store/index'
import App from './App.vue'
const app = createApp(App)
app.use(store)
app.use(Button)
app.use(NavBar)
app.use(router)
app.mount('#app')
