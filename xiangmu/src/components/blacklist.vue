<template>
  <div id="blacklist">
     <el-container class="table" style="margin-top: 30px;margin-left: 30px;border-radius: 4px;">
      <el-form ref="form" :model="form" label-width="80px" :inline='true' style="margin-top: 30px;">
        <el-form-item label="用户编号">
            <el-input v-model="form.userNumber"  placeholder="请输入"></el-input>
        </el-form-item>

           <el-form-item label="账号">
            <el-input v-model="form.accountNumber"  placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="search">搜索</el-button>
        </el-form-item>
        </el-form>

      <el-main>
        <el-table
          :data="tableData"
          :header-cell-style="headClass"
          stripe
          style="width: 100%"
        >
          <el-table-column prop="blackTime" label="拉黑时间">
          </el-table-column>

           <el-table-column prop="validTime" label="有效时间">
          </el-table-column>

          <el-table-column prop="userNumber" label="用户编号"> </el-table-column>

        <el-table-column prop="accountNumber" label="账号">
          </el-table-column>

          <el-table-column prop="blackCause" label="拉黑原因">
          </el-table-column>

          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
                <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small">
                删除
                </el-button>
                <el-button type="text" size="small">修改</el-button>
            </template>
          </el-table-column>

        </el-table>
      </el-main>

      <el-footer>
        <el-pagination
            layout="prev, pager, next"
            background
            :total="50">
        </el-pagination>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "blacklist",
  data() {
      return {
          form: {
            userNumber: '',
            accountNumber: '',
            registerTime: ''
        },

          tableData: [
        {
          blackTime :'商品',
          validTime: "宝安区",
          userNumber: "状态",
          accountNumber :'商品',
          blackCause: "宝安区"
        },
        {
           blackTime :'商品',
          validTime: "宝安区",
          userNumber: "状态",
          accountNumber :'商品',
          blackCause: "宝安区"
        },
        {
           blackTime :'商品',
          validTime: "宝安区",
          userNumber: "状态",
          accountNumber :'商品',
          blackCause: "宝安区"
        },
      ],
      }
  },
  methods: {
       search() {
        console.log('search!');
      } ,
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
    // 表头样式设置
    headClass() {
      return "background:#eef1f6;";
    },
  },
  components: {},
};
</script>

<style>
.table{
    background: white;
}
.table .el-footer {
  line-height: 60px;
  margin-top: 20px;
}
.table .el-main {
  color: #333;
  text-align: center;
}
.el-container {
  background: white;
  width: 95%;
  border: 1px solid rgb(209, 207, 207);
}
.table .el-table {
  border: 1px solid rgb(209, 207, 207);
}
</style>
