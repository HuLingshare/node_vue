<template>
  <div class="form-container">
    <a-form
      ref="formRef"
      :model="formState"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      class="login-form"
      autocomplete="off"
    >
      <h1 class="title">Login Form</h1>
      <a-form-item ref="username" name="username">
        <a-input v-model:value="formState.username">
          <template #prefix>
            <user-icon class="icon-font icon-user"/>
          </template>
        </a-input>
      </a-form-item>
      <a-form-item ref="password" name="password">
        <a-input :type="showPw ? 'text':'password'" v-model:value="formState.password">
          <template #prefix>
            <password-icon class="icon-font icon-password"/>
          </template>
          <template #suffix>
            <eye-on-icon v-show="showPw" class="icon-font icon-eye-on" @click="toggleShowPw"/>
            <eye-off-icon v-show="!showPw" class="icon-font icon-eye-off" @click="toggleShowPw"/>
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" block @click="onSubmit">
          <span class="tologin">
            <LoadingOutlined v-show="showLoading" class="loading"/>
            登录
          </span>
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import UserIcon from '/@/components/icons/components/user.vue'
import EyeOffIcon from '/@/components/icons/components/eye-off.vue'
import EyeOnIcon from '/@/components/icons/components/eye-on.vue'
import PasswordIcon from '/@/components/icons/components/password.vue'
import { LoadingOutlined } from '@ant-design/icons-vue';

import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { defineComponent, reactive, ref, UnwrapRef } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

interface FormState {
  username: string;
  password: string;
}
export default defineComponent({
  components: {
    UserIcon,
    EyeOffIcon,
    EyeOnIcon,
    PasswordIcon,
    LoadingOutlined
  },
  setup() {
    const route = useRoute() // 路由
    const router = useRouter() // 当前路由
    const formRef = ref();
    const formState: UnwrapRef<FormState> = reactive({
      username: 'admin',
      password: '111111'
    })

    const rules = {
      username: [
        { required: true, message: 'Please input Activity username', trigger: 'blur' },
        { min: 2, max: 11, message: 'Length should be 11', trigger: 'blur' },
      ],
      password: [
        { required: true, message: 'Please input Activity password', trigger: 'blur' },
        { min: 6, message: 'The password can not be less than 6 digits', trigger: 'blur' }
      ],
    };

    // 登录提交表单
    let showLoading = ref(false)

    const onSubmit = () => {
      showLoading.value = true
      formRef.value
        .validate()
        .then(() => {
          // console.log('values', formState, toRaw(formState));
          setTimeout(() => {
            showLoading.value = false
            canSubmit()
          }, 0.5 * 1000)
        })
        .catch((error: ValidateErrorEntity<FormState>) => {
          showLoading.value = false
          console.log('error', error);
        });
    };
    const store = useStore()
    const canSubmit = (): void => {
      store.dispatch('handlerSetHasLogin', true)
      let toPath = (route.query?.redirect || '/').toString()
      router.push({
        path: toPath,
        query: {}
      })
    }

    // 切换密码输入框type，显示或隐藏密码
    let showPw = ref(false)
    const toggleShowPw = (): void => {
      showPw.value = !(showPw.value)
    }
    return {
      formRef,
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
      formState,
      rules,
      showLoading,
      onSubmit,
      showPw,
      toggleShowPw
    };
  },
});
</script>
<style lang="less" scoped>
@bg:#283443;
@desBg: desaturate(@bg, 20%); // 减少饱和度，saturate饱和度增加
@satBg: saturate(@bg, 20%); // 减少饱和度，saturate饱和度增加
@lightBg: lighten(@bg, 8%); // 亮度增加
@darkBg: darken(@bg, 5%); // 亮度增加
@fadeinBg: fadein(@bg, 20%); // 不透明增加， fadeOut减少
.form-container {
  width:100%;
  height: 100vh;
  background: @bg;
  padding-top: 30vh;
}
h1 {
  color: #eee;
  margin-bottom: 20px;
  text-align: center;
}
.login-form {
  width: 460px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid lighten(@bg, 3%);
  box-shadow: 2px 2px 5px @darkBg;
  padding: 30px 45px;
  border-radius: 16px;
  text-align: left;
}
.tologin {
  position: relative;
  .loading {
    position: absolute;
    left: -24px;
    top: 4px;
  }
}
.icon-font {
  font-size: 20px;
  color: #66768a;
}
.icon-user,
.icon-password{
  font-size: 14px;
}
::v-deep(.ant-input-affix-wrapper) {
  border: 1px solid #66768a;
  background-color: transparent;
}
::v-deep(.has-error) {
  .ant-input-affix-wrapper:not(.has-error .ant-input-affix-wrapper-disabled),
  .ant-input-affix-wrapper:not(-has-error .ant-input-affix-wrapper-disabled),
  .ant-input:not(.has-error .ant-input-disabled),
  .ant-input:not(-has-error .ant-input-disabled){
    background-color: transparent;
    color: #fff;
  }
}
::v-deep(.ant-input-affix-wrapper > input.ant-input) {
  background-color: transparent;
  color: #fff;
}
</style>

