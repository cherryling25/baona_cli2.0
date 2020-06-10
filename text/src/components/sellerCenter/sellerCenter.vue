<template>
  <div id="sellerCenter" style="background:white">
    <el-row>
      <el-col :span="4">
        <div class="grid-content gridWrap">
          <div class="divwrap">
            <img
              class="gridImg"
              src="../../assets/images/ic_ONOrder.png"
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
              src="../../assets/images/ic_Tobeoperated.png"
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
              src="../../assets/images/ic_Toberefunded.png"
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
              src="../../assets/images/ic_Freeze.png"
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

    
    <div style="margin-top:120px; margin-left:30px">
    <el-row :gutter="20">
        <el-col :span="6"><div class="grid border">
          本金金额
          <div>2.4</div>
          <router-link to="/rechargePrincipal">
            <el-button type="primary">充值本金</el-button>        
          </router-link>
        </div></el-col>
        <el-col :span="6" :offset="3"><div class="grid border">
          冻结押金
          <div>0.0</div>
        </div></el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top:70px; padding:40px 0;">
        <el-col :span="6"><div class="grid border">
          <router-link to="/publish">
            <el-button type="warning">发布任务</el-button>        
          </router-link>
        </div></el-col>

        <el-col :span="6" :offset="3"><div class="grid border">
          <router-link to="/transactionDetail">
            <el-button type="warning">资金明细</el-button>        
          </router-link>
        </div></el-col>
    </el-row>

 </div>
  </div>
</template>

<script>
export default {
  name: "sellerCenter",
  data() {
      return {
       
      };
    },

    methods: {
    
    }
};
</script>

<style>
/*  */
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

/* 充值本金 */
.grid{
    min-height: 40px;
    line-height: 40px;
  }

.border{
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
}
.bg-blue{
    background: rgb(232, 242, 247);
  }

</style>

