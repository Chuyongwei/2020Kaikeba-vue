<template>
  <div>
    <k-form :model="userInfo" :rules="rules" ref="loginForm">
      <k-form-item label="用户名" prop="username">
        <kinput v-model="userInfo.username" placeholder="输入用户名"></kinput>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <kinput type="password" v-model="userInfo.password" placeholder="输入密码"></kinput>
      </k-form-item>
      <!-- 提交按钮 -->
      <k-form-item>
        <button @click="login">登录</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KForm from './KForm.vue'
import KFormItem from './KFormItem.vue'
import Kinput from './Kinput.vue'
// import Notice from '../../components/Notes'
export default {
  components: { Kinput, KFormItem, KForm },
  data() {
    return {
      userInfo: {
        username: 'sadf',
        password: 'asdf',
      },
      rules: {
        username: [{ required: true, message: '请输入用户名称' }],
        password: [{ required: true, message: '请输入密码' }],
      },
    }
  },
  computed: {},
  methods: {
    login() {
      console.log(this.$refs['loginForm'].validate)
      this.$refs['loginForm'].validate((valid) => {
        const notice = this.$notice( {
          title: '社会你杨哥喊你来搬砖',
          message: valid ? '请求登录!' : '校验失败!',
          duration: 2000,
        })
        notice.show()
        // if (valid) {
        //   alert('submit')
        // } else {
        //   console.log('error submit!')
        //   return false
        // }
      })

    },
  },
}
</script>

<style lang="scss" scoped>
</style>