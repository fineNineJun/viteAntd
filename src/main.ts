import {createApp} from 'vue'
import {setupStore} from './store' // 状态管理
import router, {setupRouter} from "./router" // 路由管理
import {setupAntd} from "./libs/antdv"; // Antd
import {setupAntdIcon} from "./libs/antdvIcons"; // AntdIcon
import App from './App.vue'

const app = createApp(App)

setupStore(app) // 引入状态管理
setupRouter(app) // 引入路由管理
setupAntd(app) // 引入Antd
setupAntdIcon(app) // 引入AntdIcon

router.isReady().then(() => {
    app.mount('#app')
})
