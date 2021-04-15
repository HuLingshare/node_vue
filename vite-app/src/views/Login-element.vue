<template>
  <div class="login">
    <div class="login_form">
      <h1 class="title">Login Form</h1>
      <el-form class="myform" :model="form" :rules="rules">
        <el-form-item prop="userName" class="form-item username">
          <el-input v-model="form.userName" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="passWord" class="form-item password">
          <el-input :type="openEye?'password':'text'" v-model="form.passWord" prefix-icon="el-icon-lock"></el-input>
          <p class="close-open-pw" @click="toggleEyeState">
            <img v-show="openEye" src="../assets/images/eye.svg" class="eye">
            <img v-show="!openEye" src="../assets/images/eye-open.svg" class="eye-open">
          </p>
        </el-form-item>
        <el-button type="primary" size="medium" class="login-btn" @click="toLogin">
          <i v-show="isLoading" class="el-icon-loading"></i>
          登录
        </el-button>
        
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  name: 'Login',
  components: {},
  setup() {
    // state
    let form = reactive({
      userName: '姓名',
      passWord: '666666'
    })

    const validatePass = (rule: any, value: string, callback?: any) => {
      if (value.length > 12) {
        callback(new Error('长度不能超过12'))
      } else {
        callback()
      }
    }

    const rules = {
      userName: [
        { required: true, message: '请输入姓名/账号', trigger: 'blur' },
        { min: 2, max: 11, message: '长度为3至11个字符', trigger: 'blur'}
      ],
      passWord: [
        { required: true, message: '请输入密码', trigger: 'blur'},
        { validator: validatePass, trigger: 'blur'}
      ]
    }
    let openEye = ref(true)
    let isLoading = ref(false)

    const toggleEyeState = (): void => {
      openEye.value = !(openEye.value)
    }

    const toLogin = (): void => {
      isLoading.value = true
      console.log('toLogin')
    }
    // export to template
    return {
      form,
      openEye,
      toggleEyeState,
      toLogin,
      isLoading,
      rules
    }
  }
})
</script>
<style lang="less" scoped>
@bg:#283443;
@desBg: desaturate(@bg, 20%); // 减少饱和度，saturate饱和度增加
@satBg: saturate(@bg, 20%); // 减少饱和度，saturate饱和度增加
@lightBg: lighten(@bg, 8%); // 亮度增加
@darkBg: darken(@bg, 5%); // 亮度增加
@fadeinBg: fadein(@bg, 20%); // 不透明增加， fadeOut减少
.login {
  width: 100%;
  height: 100vh;
  background: @bg;
  padding-top: 300px;
  h1 {
    color: #eee;
    margin-bottom: 20px;
  }
  .login_form {
    width: 460px;
    height: 300px;
    margin: 0 auto;
    border: 1px solid lighten(@bg, 3%);
    box-shadow: 2px 2px 5px @darkBg;
    padding: 30px 45px;
    border-radius: 16px;
    .form-item {
      margin-bottom:26px;
      /deep/.el-input__inner {
        background-color: @darkBg;
        border: 1px solid @lightBg;
        color: #ddd;
      }
      /deep/.el-input__icon {
        font-size: 19px;
        color: #7d8a98;
      }
    }
    .password {
      position: relative;
      .close-open-pw {
        width: 40px;
        height: 40px;
        position: absolute;
        right: 0;
        top: 0;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
      }
      .eye {
        width: 16px;
        height: 8px;
        vertical-align: middle;
      }
      .eye-open {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
    }
  }
  .login-btn {
    width: 100%;
  }
}
.test {
  color: white;
}
</style>
