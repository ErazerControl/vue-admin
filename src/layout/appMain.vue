<template>
  <transition name="fade-transform">
    <router-view></router-view>
  </transition>
</template>
<script>
export default {
  name: "appMain"
};
</script>
<style scoped>
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>
