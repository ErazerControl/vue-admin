<template>
  <div>
    <router-link v-if="!item.children" :to="getLink" >
      <el-menu-item >
        <!-- <i class="el-icon-setting"></i> -->
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </router-link>

    <el-submenu v-else :index="item.children[0].title">
      <template slot="title">
        <span>{{item.title}}</span>
      </template>
      <sidebar-item
        v-for="(item) in item.children"
        :key="item.title"
        :index="item.title"
        :item="item"
        :basePath = "getBasePath"
      ></sidebar-item>
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: "SidebarItem",
  props: {
    item: Object,
    basePath: String
  },
  computed:{
    getLink: function () {
      return this.basePath + this.item.path
    },
    getBasePath: function() {
      return this.basePath + this.item.path
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
</style>