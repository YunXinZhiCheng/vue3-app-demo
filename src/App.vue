<template>
  <router-view></router-view>
</template>
<script>
// 导入store容器
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    // 打印已经存储到store容器里面的数据
    // console.log(store.state.user)
    return {
      store,
    }
  },
}
</script>
<style></style>
