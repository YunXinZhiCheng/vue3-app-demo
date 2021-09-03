<template>
  <div class="my-container">
    <!-- 未登录布局 -->
    <div class="header not-login">
      <!-- 登录注册按钮 -->
      <div class="login-btn" @click="this.$router.push('/login')">
        <img class="mobile-img" src="../../assets/mobile.png" alt="" />
        <span class="text">注册 / 登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.my-container .header {
  height: 361px;
  background: url('../../assets/banner.png') no-repeat;
  background-size: cover;
}
.my-container .not-login {
  /* 没有登录的效果样式 */
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 未登录按钮 */
.my-container .not-login .login-btn {
  display: flex;
  flex-direction: column;
}
/* 图片 */
.my-container .not-login .login-btn .mobile-img {
  width: 140px;
  height: 140px;
}
/* 文本 */
.text {
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 100px;
}
</style>
