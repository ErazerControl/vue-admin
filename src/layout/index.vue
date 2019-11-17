<template>
  <div>
  <side-bar class="left"></side-bar>
  <div class="right">
    <nav-bar class="nav" :breadList=breadList></nav-bar>
    <app-main></app-main>
  </div>
  </div>
</template>
<script>
import {sideBar,navBar,appMain} from "./index.js";
export default {
  props: {
    breadList: Array
  },
  components: {
    sideBar,
    navBar,
    appMain
  }
}
</script>
<style>
.left {
  width: 250px;
  float: left;
}
.right {
  float: left;
}
.nav {
  padding: 1rem 3rem;
}
</style>