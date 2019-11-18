<template>
  <div class="table-wrapper">
    <el-table :data="tableData" border>
      <el-table-column prop="id" label="ID"  width="110" align="center"></el-table-column>
      <el-table-column prop="title" label="Title" ></el-table-column>
      <el-table-column prop="author" label="Author"  width="110"></el-table-column>
      <el-table-column prop="pageviews" label="Pageviews"  width="110" align="center"></el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="time" label="Display-time" width="200"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.getTableData();
  },
  methods: {
    getTableData: function() {
      axios
        .get("http://rap2api.taobao.org/app/mock/236491/table/list")
        .then(res => {
          console.log(res);
          this.tableData = res.data.items;
        });
    }
  },
  filters: {
    statusFilter(status) {
      var statusMap = {
        published: "success",
        draft: "primary",
        deleted: "danger"
      };
      console.log(statusMap[status])
      return statusMap[status];
    }
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>
<style scoped>
.table-wrapper {
  padding: 2rem 2rem;
}
</style>