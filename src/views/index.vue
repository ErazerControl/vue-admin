<template>
  <layout :breadList="getMetaInfo"></layout>
</template>
<script>
import Layout from "../layout/index.vue";
export default {
  components: {
    Layout
  },
  data() {
    return {

    }
  },
  computed: {
    getMetaInfo: function() {
      var breadList = [];
      for(var i=0;i<this.$route.matched.length;i++) {
        breadList.push({"name":this.$route.matched[i].meta.title,"path":this.$route.matched[i].path})
      }
      console.log("计算属性");
      console.log(breadList);
      return breadList
    }
  }
}
</script>
<style>
</style>