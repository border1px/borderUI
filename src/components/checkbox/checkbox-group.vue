<template>
  <div>
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
    max: Number,
    disabled: { type: Boolean }
  },
  watch: {
    value (newValue) {
      this.$emit('change', newValue)
    }
  },
  methods: {
    selectItem (item) {
      const { value } = this
      if (this.max && this.value.length >= this.max) {
        return
      }
      this.$emit('input', [...value, item])
    },
    deleteItem (item) {
      const { value: selectItems } = this
      this.$emit(
        'input',
        selectItems.filter(selectitem => selectitem !== item)
      )
    }
  }
}
</script>
