<template>
  <span class="icons-font">
    <icon-font :type="'icon-' + iconName" :style="style"/>
  </span>
</template>
<script>
import { createFromIconfontCN } from '@ant-design/icons-vue';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2504035_8otj61jsecy.js',
});
export default {
  name: 'MyIconFont',
  props: {
    iconName: {
      type: String,
      default: 'order-list'
    },
    size: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  setup(props) {
    const { size, color } = props
    const style = {
      fontSize: typeof size === 'number' ? size + 'px' : size,
      color: color
    }
    return {
      style
    }
  },
  components: {
    IconFont,
  },
};
</script>