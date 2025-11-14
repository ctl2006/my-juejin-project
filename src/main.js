import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import * as Icons from '@element-plus/icons-vue'; // 导入所有图标


const app = createApp(App)

// 全局注册图标组件
for (const [key, component] of Object.entries(Icons)) {
  app.component(key, component)
}

app.use(router)

app.use(ElementPlus)

import 'virtual:windi.css'

app.mount('#app')
