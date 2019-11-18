<template>
    <el-row>
      <el-col :span="4" class="left">
       <side-bar></side-bar>
       </el-col>
       <el-col :span="20">
    <nav-bar class="nav" :breadList=breadList ></nav-bar>
    <app-main></app-main>
       </el-col>
    </el-row>
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
.nav {
  padding: 1rem 3rem;
}
.el-menu {
  height: 100%;
}
.el-row {
  height: 100%;
}
.left {
  height: 100%;
}
</style>