<template>
  <bo-popup v-model="showPopup" :closeOnClickOMask="closeOnClickOMask">
    <ul class="bo-action-sheet">
      <li 
        v-for="(menu,index) in menus" 
        :key="index" 
        @click.stop="handleClick(index, menu.disabled)"
        :class="['menu', {'is-disabled': menu.disabled}]"
      >
        {{menu.name}}
      </li>
      <li class="menu menu-cancel" v-if="cancel" @click="handleCancel">{{cancelText}}</li>
    </ul>
  </bo-popup>
</template>

<script>
export default {
  name: 'bo-action-sheet',
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    value: Boolean,
    cancel: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    closeOnClickOMask: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    showPopup: {
      get () {
        return this.value
      },
      set (val) {
        if (!val) {
          this.$emit('input', false)
        }
      }
    }
  },
  methods: {
    handleClick (index, disabled) {
      if (!disabled) {
        index >= 0 && this.$emit('select', index)
        this.autoClose && this.$emit('input', false)
      }
    },
    handleCancel () {
      this.$emit('cancel')
      this.autoClose && this.$emit('input', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
.bo-action-sheet
  background-color #F5F5F5
  .menu
    height 50px
    line-height 50px
    background-color #ffffff
    text-align center
    border-bottom 1px solid #f5f5f5
    &.is-disabled
      color: #CCC
  .menu:last-child
    border-bottom none
  .menu-cancel
    color red
    margin-top 15px
</style>
