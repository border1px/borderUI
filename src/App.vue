<template>
  <div id="app">
    <transition :name="'slide-' + ($root.direction === 'forward' ? 'in' : 'out')">
      <router-view class="main-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.main-view {
  width: 100%;
  height: 100%;
}
.slide-out-enter-active,
.slide-out-leave-active,
.slide-in-enter-active,
.slide-in-leave-active {
  will-change: transform;
  transition: all 250ms;
  height: 100%;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.slide-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
