<template>
  <div id="appealCenter">
     <el-container class="table" style="margin-top: 30px;margin-left: 30px;border-radius: 4px;">
      <el-form ref="form" :model="form" label-width="80px" :inline='true' style="margin-top: 30px;">
        <el-form-item label="申诉种类">
          <el-select v-model="form.appealType" placeholder="全部">
            <el-option
              v-for="item in form.typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="订单状态">
          <el-select v-model="form.orderState" placeholder="全部">
            <el-option
              v-for="item in form.stateOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="订单编号">
          <el-input
            v-model="form.orderNumber"
            placeholder="请输入订单编号"
          ></el-input>
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
          <el-table-column prop="appealTime" label="申诉时间">
          </el-table-column>

           <el-table-column prop="appealType" label="申诉种类">
          </el-table-column>

          <el-table-column prop="taskType" label="任务类型"> </el-table-column>

            <el-table-column prop="orderNumber" label="订单号">
          </el-table-column>

             <el-table-column prop="text" label="内容">
          </el-table-column>

             <el-table-column prop="platformIn" label="平台介入">
          </el-table-column>

          <el-table-column prop="state" label="状态">
          </el-table-column>

          <el-table-column prop="contact" label="联系方式">
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
  name: "appealCenter",
  data() {
      return {
          form: {
            appealType: '',
            orderState: '',
            orderNumber: ''
        },

          tableData: [
        {
          appealTime :'商品',
          appealType: "宝安区",
          taskType: "状态",
          orderNumber :'商品',
          text: "宝安区",
          platformIn: "状态",
          state :'商品',
          contact: "宝安区"
        },
        {
           appealTime :'商品',
          appealType: "宝安区",
          taskType: "状态",
          orderNumber :'商品',
          text: "宝安区",
          platformIn: "状态",
          state :'商品',
          contact: "宝安区"
        }
      ],
      }
  },
  methods: {
       onSearch() {
        console.log('onSearch!');
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
