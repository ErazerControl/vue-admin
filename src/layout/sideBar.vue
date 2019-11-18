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
    <sidebar-item v-for="(item) in items" :index="item.title" :key="item.title" :item="item" basePath = ""></sidebar-item>
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
          title: "Dashboard",
          path: '/dashboard'
        },
        {
          title: "Example",
          path: '/example',
          children: [
            {
              title: "Table",
              path: '/table'
            },
            {
              title: "Tree",
              path: '/tree'
            }
          ]
        },
        {
          title: "Form",
          path: '/form'
        },
        {
          title:'Nested',
          path: '/menu',
          children : [
            {
              title:'Menu1',
              path: '/menu1',
              children: [
            {
              title: "Menu1-1",
              path: '/menu1-1',
            },
            {
              title: "Menu1-2",
              path: '/menu1-2',
            }
          ]
            },
            {
              title:'Menu2',
              path: '/menu2',
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