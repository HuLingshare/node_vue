<template>
  <div class="modal-root" v-show="visible">
    <div class="modal-mask"></div>
    <transition name="fade-scale">
      <div class="modal-wrap" v-show="visible" @click="$emit('update:visible', false)">
        <div class="modal">
          <div class="modal-header">
            <h1 class="modal-header-title">Modal Tittle</h1>
            <div class="modal-header-btns-wrap">
              <IconFont icon-name="close" />
              <FullscreenOutlined />
              <!-- <FullscreenExitOutlined /> -->
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import IconFont from '@/components/icons/Icon.vue'
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  name: 'Modal',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    IconFont,
    FullscreenOutlined,
    FullscreenExitOutlined
  },
  setup() {
    return {
    }
  }
})
</script>

<style lang="less" scoped>

.modal-root {
  .modal-mask {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(0,0,0,.45)
  }
  .modal-wrap {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    overflow: auto;
  }
  .modal {
    position: relative;
    width: 700px;
    height: 80%;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform-origin: 50% 50%;
    &-header {
      width: 100%;
      padding: 0 20px;
      line-height:56px;
      text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
      &-title {
        font-size: 20px;
        color: #666;
        margin: 0;
      }
      &-btns-wrap {
        width: 80px;
        height: 100%;
        background: orange;
        > span {
          font-size: 18px;
          margin-left: 10px;
        }
      }
    }
  }
  @media screen and (max-height: 600px){
    .modal {
      height: 90%;
    }
  }
}

// fade-scale
.fade-scale-leave-active,
.fade-scale-enter-active {
  transition: all 0.28s;
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.6);
}

.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

</style>

