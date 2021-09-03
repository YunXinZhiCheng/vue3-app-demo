import { createStore } from 'vuex'
// 导入封装好的方法:存储、获取、删除
import { setItem, getItem, removeItem } from '../utils/storage'

// 定义Tokend的KEY属性
const TOKEN_KEY = 'TOUTIAO_USER'
// 定义状态管理的容器
const store = createStore({
  // 定义
  state: {
    // user: JSON.parse(window.localStorage.getItem(TOKEN_KEY)),

    // 持久化：获取数据 参数Key
    user: getItem(TOKEN_KEY),
  },
  // 修改
  mutations: {
    setUser(state, data) {
      state.user = data
      // 持久化：存储到本地 localStorage.setItem()
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))

      // 持久化：存储到本地，使用封装好的方法，参数1 Key，参数2 Value
      setItem(TOKEN_KEY, state.user)
    },
  },
})
export default store
