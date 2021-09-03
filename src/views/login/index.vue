<template>
  <div>
    <!-- NavBar 导航栏 -->
    <van-nav-bar title="登录" class="page-nav-bar" />
    <!-- Form 表单 -->
    <van-form @submit="onSubmit">
      <!-- 登录密码 -->
      <van-cell-group inset>
        <!-- 双向数据绑定：v-model
             检验规则绑定： rules属性
         -->
        <van-field
          name="userName"
          placeholder="请输入用户名"
          left-icon="manager"
          v-model="userName"
          :rules="userFormRules.userName"
        />
        <van-field
          type="password"
          name="userPwd"
          placeholder="请输入密码"
          left-icon="lock"
          v-model="userPwd"
          :rules="userFormRules.userPwd"
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
import { Toast } from 'vant'
// 导入用户请求API
import { login } from '../../api/user'

// 封装用户登录函数
function useSubmit(user) {
  // 提交表单
  const onSubmit = async () => {
    // 加载中提示：放在登录之前
    Toast.loading({
      message: '登录中...',
      forbidClick: true,
    })
    // 调用登录请求API
    const res = await login(user)
    console.log(res.data)
    // 判断返回的内容
    if (res.data.code === 0) {
      // console.log('用户登录成功')
      // 成功提示
      Toast.success('用户登录成功')
    } else {
      // console.log('用户名或密码错误')
      // 失败提示
      Toast.fail('用户名或密码错误')
    }
  }
  // 定义表单校验规则
  const userFormRules = {
    // 用户名
    userName: [{ required: true, message: '请输入用户名' }],
    // 密码
    userPwd: [
      { required: true, message: '请输入密码' },
      { pattern: /^\d{6}$/, message: '密码格式错误' },
    ],
  }
  return {
    onSubmit,
    userFormRules,
  }
}

export default {
  setup() {
    // 用户数据
    const user = reactive({
      userName: 'admin',
      userPwd: '123456',
    })

    return {
      // 正常的方式，返回的是普通数据
      // user

      // 解构的方式，返回响应式数据 toRefs()
      ...toRefs(user),
      ...useSubmit(user),
    }
  },
}
</script>

<style></style>
