<template>
  <div>
    Checkbox-Group
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
      this.$emit('input', [...value, item])
    },
    deleteItem (item) {
      const { value: selectItems } = this
      // console.log(selectItems)
      this.$emit(
        'input',
        selectItems.filter(selectitem => selectitem !== item)
      )
      console.log(selectItems)
    }
  }
}
</script>
