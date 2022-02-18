import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store' // 状态管理

const app = createApp(App)

setupStore(app) // 引入状态管理

app.mount('#app')
