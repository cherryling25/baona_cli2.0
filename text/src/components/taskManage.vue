<template>
  <div id="orderManage">
    <!-- <el-row>
      <el-col :span="4">
        <div class="grid-content gridWrap">
          <div class="divwrap">
            <img
              class="gridImg"
              src="../assets/images/ic_Customer.png"
              alt=""
              srcset=""
            />
            <div style="displa:flex;justify-content: space-between;">
              <div class="gridNumber">1248</div>
              <div class="gridName">客户数</div>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="4">
        <div class="grid-content gridWrap">
          <div class="divwrap">
            <img
              class="gridImg"
              src="../assets/images/ic_Customer.png"
              alt=""
              srcset=""
            />
            <div style="displa:flex;justify-content: space-between;">
              <div class="gridNumber">1248</div>
              <div class="gridName">项目总数</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4"
        ><div class="grid-content gridWrap">
          <div class="divwrap">
            <img
              class="gridImg"
              src="../assets/images/ic_Customer.png"
              alt=""
              srcset=""
            />
            <div style="displa:flex;justify-content: space-between;">
              <div class="gridNumber">1248</div>
              <div class="gridName">管控设备数</div>
            </div>
          </div>
        </div></el-col
      >
      <el-col :span="4"
        ><div class="grid-content gridWrap">
          <div class="divwrap">
            <img
              class="gridImg"
              src="../assets/images/ic_Customer.png"
              alt=""
              srcset=""
            />
            <div style="displa:flex;justify-content: space-between;">
              <div class="gridNumber">1248</div>
              <div class="gridName">数据采集点</div>
            </div>
          </div>
        </div></el-col
      >
    </el-row> -->

    <el-container class="table" style="margin-top: 30px;margin-left: 30px;border-radius: 4px;">
      <el-form ref="form" :model="form" label-width="80px" :inline='true' style="margin-top: 30px;">
        <el-form-item label="任务编号">
            <el-input v-model="form.taskNumber" placeholder="请输入任务编号"></el-input>
        </el-form-item>

           <el-form-item label="商品名称">
            <el-input v-model="form.commodityName" placeholder="请输入商品名称"></el-input>
        </el-form-item>

         <el-form-item label="任务状态">
            <el-select v-model="form.taskState" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>

         <el-form-item label="店铺">
            <el-select v-model="form.shop" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        
        <el-form-item label="发布时间">
            <el-col :span="11">
            <el-date-picker type="date" placeholder="请选择时间" v-model="form.startTime" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">至</el-col>
            <el-col :span="11">
            <el-date-picker type="date" placeholder="请选择时间" v-model="form.endTime" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>

        <el-form-item>
            <el-button type="warning" @click="onSearch">搜索</el-button>
            <el-button type="primary" @click="onExport">导出</el-button>
        </el-form-item>
        </el-form>

      <el-main>
        <el-table
          :data="tableData"
          :header-cell-style="headClass"
          stripe
          style="width: 100%"
        >
           <el-table-column prop="taskNumber" label="任务编号">
          </el-table-column>

            <el-table-column prop="commodityName" label="商品名称">
          </el-table-column>

          <el-table-column prop="orderNumber" label="单数"> </el-table-column>

          <el-table-column prop="taskState" label="任务状态"> </el-table-column>

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
            </template>
          </el-table-column>

        <el-table-column prop="time" label="时间"> </el-table-column>

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
// import axios from "axios";
import Qs from "qs";

export default {
  name: "orderManage",
  data() {
      return {
          form: {
            taskNumber: '',
            commodityName: '',
            taskState: '',
            shop: '',
            startTime:'',
            endTime:''
        },

          tableData: [],
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
    mockedData(){
      const mocked = [
        {
          taskNumber: "654567899",
          commodityName :'商品',
          orderNumber: "78602",
          taskState: "状态",
          time: "2016-05-02"
        },
        {
          taskNumber: "654567899",
          commodityName :'商品',
          orderNumber: "78602",
          taskState: "状态",
          time: "2016-05-02"
        },
        {
          taskNumber: "654567899",
          commodityName :'商品',
          orderNumber: "78602",
          taskState: "状态",
          time: "2016-05-02"
        }
      ]
      this.tableData = mocked;
    }
  },
   mounted() {
    // this.mockedData();
    // axios({
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded"
    //     },
    //     method: "post",
    //     data: Qs.stringify({
    //        "user_id":'1'
    //     }),

    //     url: "http://www.bn.com/index.php/index/Task/task_list"
    //   }).then(res => {
    //     console.log(res);
    //       const tableData = [];
    //       const list = res.data.data.list;
    //       for (let i = 0; i < list.length; i++) {
    //         const data = { 
    //           taskNumber: list[i].task_number,
    //           commodityName : list[i].goods_name,
    //           orderNumber: list[i].number,
    //           taskState: list[i].state,
    //           time: list[i].time
    //         }
    //         tableData.push(data);
    //       }
    //       this.tableData = tableData;
    //   });
  },
  components: {},
};
</script>

<style>
.gridWrap {
  display: flex;
  margin-left: 30px;
  margin-top: 30px;
  border: 1px solid rgb(211, 210, 210);
  height: 100px;
  background: white;
}
.gridWrap .gridImg {
  width: 45px;
  height: 45px;
  margin-right: 20px;
}
.divwrap {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  line-height: 20px;
}
.gridNumber {
  font-size: 25px;
}
.gridName {
  margin-top: 5px;
  color: gray;
}

/* 表格 */
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
