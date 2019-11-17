<template>
  <div>
    <el-menu-item v-if="!item.children">
      <!-- <i class="el-icon-setting"></i> -->
      <span slot="title">{{item.title}}</span>
    </el-menu-item>
    <el-submenu v-else :index="item.children[0].title">
      <template slot="title">
        <span>{{item.title}}</span>
      </template>
      <sidebar-item  v-for="(item) in item.children" :key="item.title" :index="item.title" :item = "item"></sidebar-item>
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: "SidebarItem",
  props: {
    item: Object
  }
};
</script>