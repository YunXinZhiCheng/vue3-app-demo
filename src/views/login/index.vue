<template>
  <div>
    <!-- NavBar 导航栏 -->
    <van-nav-bar title="登录" class="page-nav-bar" />
    <!-- Form 表单 -->
    <van-form @submit="onSubmit">
      <!-- 登录密码 -->
      <van-cell-group inset>
        <van-field
          name="userName"
          placeholder="请输入用户名"
          left-icon="manager"
        />
        <van-field
          type="password"
          name="userPwd"
          placeholder="请输入密码"
          left-icon="lock"
        />
      </van-cell-group>
      <!-- 提交按钮 -->
      <div style="margin: 16px">
        <van-button block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
