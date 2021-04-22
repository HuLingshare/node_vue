<template>
  <svg aria-hidden="true" :style="getStyle">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  export default defineComponent({
    name: 'SvgIcon',
    props: {
      prefix: {
        type: String,
        default: 'icon',
      },
      name: {
        type: String,
        required: true,
      },
      size: {
        type: [Number, String],
        default: 16,
      },
      color: {
        type: String,
        default: '#333'
      }
    },
    setup(props) {
      const symbolId = computed(() => `#${props.prefix}-${props.name}`);
      const getStyle = computed(
        () => {
          const { size, color } = props;
          let s = `${size}`;
          s = `${s.replace('px', '')}px`;
          return {
            width: s,
            height: s,
            fill: color
          };
        }
      )
      return { symbolId, getStyle };
    },
  });
</script>