<template>
  <div
    role="group"
    :aria-label="ariaLabel"
    :aria-disabled="disabled ? 'true' : null"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bo-checkbox-group',
  props: {
    value: {
      type: Array,
      required: true
    },
    max: {
      type: Number,
      validator: value => value >= 0
    },
    disabled: Boolean,
    ariaLabel: String
  },
  watch: {
    value (newValue) {
      this.$emit('change', newValue)
    }
  },
  methods: {
    selectItem (item) {
      const { value } = this
      if (value.some(selectedItem => selectedItem === item)) {
        return false
      }

      if (this.max !== undefined && value.length >= this.max) return false

      this.$emit('input', [...value, item])
      return true
    },
    deleteItem (item) {
      const { value: selectItems } = this

      if (!selectItems.some(selectItem => selectItem === item)) {
        return false
      }

      this.$emit(
        'input',
        selectItems.filter(selectitem => selectitem !== item)
      )
      return true
    }
  }
}
</script>
