<template>
  <div
    role="radiogroup"
    :aria-label="ariaLabel"
    :aria-disabled="disabled ? 'true' : null"
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
    disabled: Boolean,
    name: String,
    ariaLabel: String
  },
  computed: {
    nativeName () {
      return this.name || `bo-radio-group-${this._uid}`
    }
  },
  watch: {
    value (newValue) {
      this.$emit('change', newValue)
    }
  }
}
</script>
