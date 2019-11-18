<template>
  <div>
    <div class="left">
  <side-bar></side-bar>
    </div>
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
  height: 2000px;
  background-color: rgb(84, 92, 100);
}
.right {
  float: left;
  width: calc(100% - 250px);
}
.nav {
  padding: 1rem 3rem;
}
</style>