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
    <!-- 已登录布局 -->
    <div class="header user-info">
      <!-- 基本信息：左右 -->
      <div class="base-info">
        <div class="left">
          <van-image
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            class="avatar"
            round
            fit="cover"
          />
          <span class="name">陨星之城头条号</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <!-- 数据信息 -->
      <div class="data-stats">
        <!-- 数据项 -->
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">头条</span>
        </div>
        <!-- 数据项 -->
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">关注</span>
        </div>
        <!-- 数据项 -->
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">粉丝</span>
        </div>
        <!-- 数据项 -->
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">获赞</span>
        </div>
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
  justify-content: center;
  align-items: center;
}
/* 图片 */
.mobile-img {
  width: 132px;
  height: 132px;
  margin-bottom: 15px;
}
/* 文本 */
.text {
  color: #fff;
  font-size: 18px;
}

/* 已经登录样式 */
.user-info .base-info {
  height: 131px;
  padding: 70px 32px 23px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-info .left {
  display: flex;
  align-items: center;
}
/* 用户头像 */
.user-info .left .avatar {
  width: 132px;
  height: 132px;
  margin-right: 13px;
  border: 1px solid #fff;
  box-sizing: border-box;
}
.user-info .left .name {
  color: #fff;
  font-size: 16px;
}
/* 编辑资料 */
.user-info .right span{
  height: 16px;
  font-size: 10px;
  color: #666;
  text-align: center;
  line-height: 16px;
}
/* 数据信息 */
.data-stats {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/* 数据信息项 */
.data-stats .data-item{
  height: 100px;
  color: #fff;
}
.data-stats .data-item .count {
  font-size: 18px;
}
.data-stats .data-item .text {
  font-size: 11px;
}
</style>
