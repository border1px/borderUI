<template>
  <div class="pf-switch">
    <input type="checkbox" class="pf-switch-el" v-model="currentValue" @change="onChange">
  </div>
</template>

<script>
export default {
  name: 'bo-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    onChange () {
      this.$emit('change', this.currentValue)
    }
  }
}
</script>

<style lang="stylus">
@import '../../../src/style/var.styl'

.pf-switch-el {
  height: 31px;
  width: 52px;
  -webkit-appearance: none;
  outline: none;
  border: 1px solid $switch-main-border-color;
  background-color: $switch-bg;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border-radius: 20px;
  position: relative;
  transition: all 0.3s ease;
}
.pf-switch-el::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background-color: $switch-slider-bg;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}
.pf-switch-el:checked {
  border: 1px solid $theme-color ;
  background-color: $theme-color ;
}
.pf-switch-el:checked:before {
  left: 21px;
}
</style>
