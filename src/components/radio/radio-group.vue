<template>
  <div
    name="radio-group"
    :class="[
      'radio-group'
    ]"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'bo-radio-group',
  props: {
    value: { type: [String, Number] },
    disabled: { type: Boolean }
  },
  watch: {
    value (newValue) {
      this.$emit('change', newValue)
    }
  }
}
</script>
