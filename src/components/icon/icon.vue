<template>
  <i
    :class="[defaultClassPrefix, `${classPrefix}-${name}`]"
    :style="style"
  >
    <slot />
  </i>
</template>

<script>

export default {
  name: 'bo-icon',
  props: {
    name: String,
    size: {
      type: String,
      default: '30px'
    },
    color: String,
    defaultClassPrefix: {
      type: String,
      default: 'iconfont'
    },
    classPrefix: {
      type: String,
      default: 'icon'
    }
  },
  computed: {
    style () {
      return {
        color: this.color,
        fontSize: this.size
      }
    }
  }
}
</script>
