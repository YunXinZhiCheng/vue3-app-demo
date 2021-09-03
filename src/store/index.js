import { createStore } from 'vuex'

// 定义Tokend的KEY属性
const TOKEN_KEY = 'TOUTIAO_USER'
// 定义状态管理的容器
const store = createStore({
  // 定义
  state: {
    user: JSON.parse(window.localStorage.getItem(TOKEN_KEY)),
  },
  // 修改
  mutations: {
    setUser(state, data) {
      state.user = data
      // 持久化：存储到本地 localStorage.setItem()
      window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
    },
  },
})
export default store
