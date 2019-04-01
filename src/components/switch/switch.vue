<template>
  <div class="pf-switch">
    <input type="checkbox" class="pf-switch-el" v-model="actived">
  </div>
</template>

<script>
export default {
  name: 'pf-switch',
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      actived: this.checked
    }
  },
  watch: {
    actived () {
      this.$emit('input', this.actived)
    }
  }
}
</script>

<style lang="stylus">
$switch-main-border-color = #dfdfdf
$switch-main-bg = #fdfdfd
$switch-slider-bg = #fff
$switch-main-color-active = #fd5454

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
  border: 1px solid $switch-main-color-active ;
  background-color: $switch-main-color-active ;
}
.pf-switch-el:checked:before {
  left: 21px;
}
</style>
