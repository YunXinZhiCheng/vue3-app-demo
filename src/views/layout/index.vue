<template>
  <div>
    <router-view></router-view>
    <!-- 标签导航栏 TabBar
         启动路由导航跳转属性 route与to
     -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/qa">问答</van-tabbar-item>
      <van-tabbar-item icon="video-o" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="contact" to="my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    // 选中状态：第1个
    const active = ref(0)
    return { active }
  },
}
</script>

<style></style>
