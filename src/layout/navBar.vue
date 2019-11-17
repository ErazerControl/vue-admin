<template>
  <el-breadcrumb separator="/">
  <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item.name}}</el-breadcrumb-item>
</el-breadcrumb>
</template>
<script>
export default {
  name: 'navBar',
  props: {
    breadList:Array
  },
  data: function() {
    return {
      // breadList: [{
      //     name: "首页",
      //     path: "/home"
      //   }, {
      //     name: "系统设置",
      //     path: "/setting"
      //   }, {
      //     name: "用户管理",
      //     path: "/setting/usermanage"
      //   }]
    }
  }
} 
</script>