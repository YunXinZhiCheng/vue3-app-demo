import { createApp } from 'vue'
import App from './App.vue'

// 导入Vant与Vant样式：导入所有
import Vant from 'vant'
import 'vant/lib/index.css'

// 导入amfe-flexible:用于Rem适配
import 'amfe-flexible'

// 导入路由
import router from './router/index.js'

// 导入全局样式
import './styles/index.css'

// 导入状态管理
import store from './store/index.js'

// 使用Vant组件,use一下：链式编程
createApp(App).use(router).use(store).use(Vant).mount('#app')
