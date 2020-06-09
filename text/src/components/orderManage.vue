<template>
  <div id="orderManage">
    <el-row>
      <el-col :span="4">
        <div class="grid-content gridWrap">
          <div class="divwrap">
            <img
              class="gridImg"
              src="../assets/images/ic_ONOrder.png"
              alt=""
              srcset=""
            />
            <div style="displa:flex;justify-content: space-between;">
              <div class="gridNumber">1248</div>
              <div class="gridName">未接单</div>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="4">
        <div class="grid-content gridWrap">
          <div class="divwrap">
            <img
              class="gridImg"
              src="../assets/images/ic_Tobeoperated.png"
              alt=""
              srcset=""
            />
            <div style="displa:flex;justify-content: space-between;">
              <div class="gridNumber">1248</div>
              <div class="gridName">待操作</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4"
        ><div class="grid-content gridWrap">
          <div class="divwrap">
            <img
              class="gridImg"
              src="../assets/images/ic_Toberefunded.png"
              alt=""
              srcset=""
            />
            <div style="displa:flex;justify-content: space-between;">
              <div class="gridNumber">1248</div>
              <div class="gridName">待返款</div>
            </div>
          </div>
        </div></el-col
      >
      <el-col :span="4"
        ><div class="grid-content gridWrap">
          <div class="divwrap">
            <img
              class="gridImg"
              src="../assets/images/ic_Freeze.png"
              alt=""
              srcset=""
            />
            <div style="displa:flex;justify-content: space-between;">
              <div class="gridNumber">1248</div>
              <div class="gridName">已冻结</div>
            </div>
          </div>
        </div></el-col
      >
    </el-row>

    <el-container
      class="table"
      style="margin-top: 30px;margin-left: 30px;border-radius: 4px;"
    >
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        :inline="true"
        style="margin-top: 30px;"
      >
        <el-form-item label="订单类型">
          <el-select v-model="form.orderType" placeholder="请选择">
            <el-option
              v-for="item in form.typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
            <!-- <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option> -->
          </el-select>
        </el-form-item>

        <el-form-item label="订单状态">
          <el-select v-model="form.orderState" placeholder="请选择">
            <el-option
              v-for="item in form.stateOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="店铺">
          <el-select v-model="form.shop" placeholder="请选择">
            <el-option
              v-for="item in form.shopOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="订单ID">
          <el-input
            v-model="form.orderId"
            placeholder="请输入订单ID"
          ></el-input>
        </el-form-item>

        <el-form-item label="买手昵称">
          <el-input
            v-model="form.nickName"
            placeholder="请输入买手昵称"
          ></el-input>
        </el-form-item>

        <el-form-item label="发布时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="请选择时间"
              v-model="form.startTime"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">至</el-col>
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="请选择时间"
              v-model="form.endTime"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="订单编号">
          <el-input
            v-model="form.orderNumber"
            placeholder="请输入订单编号"
          ></el-input>
        </el-form-item>

        <el-form-item label="任务ID">
          <el-input v-model="form.taskId" placeholder="请输入任务ID"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="warning" @click="onSubmit">查询</el-button>
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
          <el-table-column prop="orderId" label="订单ID"> </el-table-column>

          <el-table-column prop="orderType" label="订单类型"> </el-table-column>

          <el-table-column prop="orderState" label="订单状态">
          </el-table-column>

          <el-table-column prop="taskId" label="任务ID"> </el-table-column>

          <el-table-column prop="nickName" label="买手昵称"> </el-table-column>

          <el-table-column prop="orderNumber" label="订单编号">
          </el-table-column>

          <el-table-column prop="money" label="付款金额"> </el-table-column>

          <el-table-column prop="commodityInfo" label="商品信息">
          </el-table-column>

          <el-table-column prop="time" label="发布时间"> </el-table-column>

          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

      <el-footer>
        <el-pagination layout="prev, pager, next" background :total="50">
        </el-pagination>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "orderManage",
  data() {
    return {
      form: {
        orderType: "",
        typeOptions: [],

        orderState: "",
        stateOptions: [],

        shop: "",
        shopOptions: [],

        orderId: "",
        nickName: "",
        startTime: "",
        endTime: "",
        orderNumber: "",
        taskId: "",
      },

      tableData: [
        {
          orderId: "1",
          orderType: "垫付",
          orderState: "状态",
          taskId: "78602",
          nickName: "昵称",
          orderNumber: "654567899",
          money: "34",
          commodityInfo: "商品信息",
          time: "2016-05-02",
        },
        {
          orderId: "2",
          orderType: "垫付",
          orderState: "状态",
          taskId: "78602",
          nickName: "昵称",
          orderNumber: "654567899",
          money: "34",
          commodityInfo: "商品信息",
          time: "2016-05-02",
        },
        {
          orderId: "3",
          orderType: "垫付",
          orderState: "状态",
          taskId: "78602",
          nickName: "昵称",
          orderNumber: "654567899",
          money: "34",
          commodityInfo: "商品信息",
          time: "2016-05-02",
        },
      ],
    };
  },
  methods: {
    mockedData() {
      const options = [
        {
          value: 1,
          label: "A",
        },
        {
          value: 2,
          label: "B",
        },
      ];
      this.form.typeOptions = options;
      this.form.stateOptions = options;
      this.form.shopOptions = options;
    },
    onSubmit() {
      console.log("submit!");
    },
    onExport() {
      console.log("export!");
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    // 表头样式设置
    headClass() {
      return "background:#eef1f6;";
    },
    showData(){
      const url = '';
      
    //   axios.get(url, {})
    //     .then(response => {
    //         let typeOptions = new Array();
    //         let options1 = new Array();
    //         let options2 = new Array();
    //         for(var i=0;i < reponse.length;i++) {
    //           let option = {
    //             value : reponse[i].custId,
    //             label : reponse[i].label
    //           }
    //           options.push(option);
    //         }

    //         for(var i=0;i < reponse.length;i++) {
    //           let option = {
    //             value : reponse[i].custId,
    //             label : reponse[i].label
    //           }
    //           options1.push(option);
    //         }

    //         for(var i=0;i < reponse.length;i++) {
    //           let option = {
    //             value : reponse[i].custId,
    //             label : reponse[i].label
    //           }
    //           options2.push(option);
    //         }
    //         this.form.typeOptions = options;
    //     })
    //     .catch(error => {

    //     });
     }
  },
  mounted() {
    // this.mockedData();
    this.showData();
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
.table {
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
