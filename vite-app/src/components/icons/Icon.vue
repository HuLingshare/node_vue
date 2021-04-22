<template>
  <span class="icons-font">
    <icon-font :type="'icon-' + iconName" :style="style"/>
  </span>
</template>
<script>
import { createFromIconfontCN } from '@ant-design/icons-vue';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2504035_pwfahuhsnhm.js',
});
export default {
  name: 'MyIconFont',
  props: {
    iconName: {
      type: String,
      default: 'icon-dingdan'
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
      fontSize: size + 'px',
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