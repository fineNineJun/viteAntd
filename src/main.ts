import {createApp} from 'vue'
import App from './App.vue'
import {setupStore} from './store' // 状态管理
import router, {setupRouter} from "./router" // 路由管理

const app = createApp(App)

setupStore(app) // 引入状态管理
setupRouter(app) // 引入路由管理

router.isReady().then(() => {
    app.mount('#app')
})
