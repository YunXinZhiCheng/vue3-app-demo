<template>
  <div>
    <!-- NavBar 导航栏 -->
    <van-nav-bar title="登录" class="page-nav-bar" />
    <!-- Form 表单 -->
    <van-form @submit="onSubmit">
      <!-- 登录密码 -->
      <van-cell-group inset>
        <!-- 双向数据绑定：v-model -->
        <van-field
          name="userName"
          placeholder="请输入用户名"
          left-icon="manager"
          v-model="userName"
        />
        <van-field
          type="password"
          name="userPwd"
          placeholder="请输入密码"
          left-icon="lock"
          v-model="userPwd"
        />
      </van-cell-group>
      <!-- 登录按钮 -->
      <div style="margin: 16px">
        <van-button block type="primary" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
// 导入用户请求API
import { login } from '../../api/user'

// 封装用户登录函数
function userSubmit(user) {
  const onSubmit = async () => {
    // 调用登录请求API
    const res = await login(user)
    // 判断返回的内容
    if (res.data.code === 0) {
      console.log('用户登录成功')
    } else {
      console.log('用户名或密码错误')
    }
  }
  return {
    onSubmit,
  }
}

export default {
  setup() {
    // 用户数据
    const user = reactive({
      userName: '',
      userPwd: '',
    })

    return {
      // 正常的方式，返回的是普通数据
      // uers

      // 解构的方式，返回响应式数据 toRefs()
      ...toRefs(user),
      ...userSubmit(),
    }
  },
}
</script>

<style></style>
