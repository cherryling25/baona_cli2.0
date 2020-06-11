<template>
  <div id="transactionDetail">
     <el-container class="table" style="margin-top: 30px;margin-left: 30px;border-radius: 4px;">
      <el-form ref="form" :model="form" label-width="80px" :inline='true' style="margin-top: 30px;">
        <el-form-item label="订单状态">
            <el-select v-model="form.orderState" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="操作时间">
            <el-col :span="11">
            <el-date-picker type="date" placeholder="请选择时间" v-model="form.startTime" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">至</el-col>
            <el-col :span="11">
            <el-date-picker type="date" placeholder="请选择时间" v-model="form.endTime" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSearch">搜索</el-button>
        </el-form-item>
        </el-form>

      <el-main>
        <el-table
          :data="tableData"
          :header-cell-style="headClass"
          stripe
          style="width: 100%"
        >
          <el-table-column prop="time" label="时间">
          </el-table-column>

           <el-table-column prop="transaction" label="收支">
          </el-table-column>

          <el-table-column prop="money" label="金额"> </el-table-column>

          <el-table-column prop="balance" label="余额"> </el-table-column>

          <el-table-column prop="content" label="内容"> </el-table-column>

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
  name: "transactionDetail",
  data() {
      return {
          form: {
            orderState: '',
            startTime: '',
            endTime: ''
        },

          tableData: [
        {
          time :'2016-05-02',
          transaction: "896",
          money: "34",
          balance:'67',
          content:'hhiihhik'
        },
        {
          time :'2016-05-02',
          transaction: "896",
          money: "34",
          balance:'67',
          content:'hhiihhik'
        },
        {
         time :'2016-05-02',
          transaction: "896",
          money: "34",
          balance:'67',
          content:'hhiihhik'
        },
      ],
      }
  },
  methods: {
       onSearch() {
        console.log('search!');
      } ,
      onExport(){
        console.log('export!');
      },
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
