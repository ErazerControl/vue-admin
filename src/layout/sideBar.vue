<template>
  <el-row class="tac">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
    <sidebar-item v-for="(item) in items" :index="item.title" :key="item.title" :item="item"></sidebar-item>
    </el-menu>
  </el-row>
</template>
<script>
import SidebarItem from "./components/sideBarItem";
export default {
  name: "sideBar",
  components: {
    SidebarItem
  },
  data() {
    return {
      items: [
        {
          title: "Dashboard"
        },
        {
          title: "Example",
          children: [
            {
              title: "Table"
            },
            {
              title: "Tree"
            }
          ]
        },
        {
          title: "Form"
        },
        {
          title:'Nested',
          children : [
            {
              title:'Menu1',
              children: [
            {
              title: "Menu1-1"
            },
            {
              title: "Menu1-2"
            }
          ]
            },
            {
              title:'Menu2',
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>