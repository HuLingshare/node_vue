<template>
  <div class="error">
    <div class="wscn-http404-container">
      <div class="wscn-http404">
        <div class="pic-404">
          <img
            class="pic-404__parent"
            src="../assets/images/404-images/404.png"
            alt="404"
          >
          <img
            class="pic-404__child left"
            src="../assets/images/404-images/404-cloud.png"
            alt="404"
          >
          <img
            class="pic-404__child mid"
            src="../assets/images/404-images/404-cloud.png"
            alt="404"
          >
          <img
            class="pic-404__child right"
            src="../assets/images/404-images/404-cloud.png"
            alt="404"
          >
        </div>
        <div class="text-404">
          <div class="text-404__oops">
            OOPS!
          </div>
          <div class="text-404__info">
            All rights reserved
            <a
              style="color:#20a0ff"
              href="https://wallstreetcn.com"
              target="_blank"
            >wallstreetcn</a>
          </div>
          <div class="text-404__headline">
            {{ message }}
          </div>
          <div class="text-404__info">
            Please check that the URL you entered is correct, or click the button below to return to the homepage.
          </div>
          <span
            @click="navToHome"
            class="text-404__return-home"
          >Back to home</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Page404',
  setup() {
    const message = ref('404 Page Not Found')
    const router = useRouter()
    function navToHome(path:string):void {
      router.push({ path: '/home' })
    }
    return {
      navToHome,
      message
    }
  }
})
</script>

<style lang="less">
// scoped 动画效果就不能生效
.wscn-http404-container {
  transform: translate(-50%,-50%);
  position: absolute;
  top: 40%;
  left: 50%;
  text-align: left;
}

.wscn-http404 {
  position: relative;
  width: 1200px;
  padding: 0 50px;
  overflow: hidden;

  .pic-404 {
    position: relative;
    float: left;
    width: 600px;
    overflow: hidden;

    .pic-404__parent {
      width: 100%;
    }

    .pic-404__child {
      position: absolute;

      &.left {
        width: 80px;
        top: 17px;
        left: 220px;
        opacity: 1;
        animation-name: cloudLeft;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1s;
      }

      &.mid {
        width: 46px;
        top: 10px;
        left: 420px;
        opacity: 1;
        animation-name: cloudMid;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1.2s;
      }

      &.right {
        width: 62px;
        top: 100px;
        left: 500px;
        opacity: 1;
        animation-name: cloudRight;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1s;
      }

      @keyframes cloudLeft {
        0% {
          top: 17px;
          left: 220px;
          opacity: 1;
        }

        20% {
          top: 33px;
          left: 188px;
          opacity: 1;
        }

        80% {
          top: 81px;
          left: 92px;
          opacity: 1;
        }

        100% {
          top: 97px;
          left: 60px;
          opacity: 1;
        }
      }

      @keyframes cloudMid {
        0% {
          top: 10px;
          left: 420px;
          opacity: 1;
        }

        20% {
          top: 40px;
          left: 360px;
          opacity: 1;
        }

        70% {
          top: 130px;
          left: 180px;
          opacity: 1;
        }

        100% {
          top: 160px;
          left: 120px;
          opacity: 1;
        }
      }

      @keyframes cloudRight {
        0% {
          top: 100px;
          left: 500px;
          opacity: 1;
        }

        20% {
          top: 120px;
          left: 460px;
          opacity: 1;
        }

        80% {
          top: 180px;
          left: 340px;
          opacity: 1;
        }

        100% {
          top: 200px;
          left: 300px;
          opacity: 1;
        }
      }
    }
  }

  .text-404 {
    position: relative;
    float: left;
    width: 300px;
    padding: 30px 0;
    overflow: hidden;

    .text-404__oops {
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: #1482f0;
      opacity: 1;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }

    .text-404__headline {
      font-size: 20px;
      line-height: 24px;
      color: #222;
      font-weight: bold;
      opacity: 1;
      margin-bottom: 10px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }

    .text-404__info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      opacity: 1;
      margin-bottom: 30px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }

    .text-404__return-home {
      display: block;
      float: left;
      width: 110px;
      height: 36px;
      background: #1482f0;
      border-radius: 100px;
      text-align: center;
      color: #ffffff;
      opacity: 1;
      font-size: 14px;
      line-height: 36px;
      cursor: pointer;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }

    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }

      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>
