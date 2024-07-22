import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router.js'
import store from './store'
const app=createApp(App)
app.use(router);
app.mount('#app')
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })