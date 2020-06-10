<template>
  <div id="rechargePrincipal" style="background:white">
     <el-row :gutter="20" style="padding-top:20px; margin-top: 30px;">
      <el-col :span="12"><div class="grid margin">
        <span class="spanClass">1</span>
        转账到官方指定收款账号
      </div></el-col>
    </el-row>


    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-blue margin">
         <div style="margin-left:20px">
           <div class="cell">
              转账途径 :电脑网银 手机银行 支付宝转银行卡等
           </div>

           <div class="cell">
             收款户名   任冰好
           </div>

           <div class="cell">
             收款帐号   6222 6207 9000 8043 481
           </div>

           <div class="cell">
             收款银行   交通银行 厦门分行 同安支行
           </div>
         </div>
      </div></el-col>
    </el-row>
   
<!--     
    <el-row>
      <el-col :span="12" :offset="10"><div class="grid">
        <el-button style="margin-top: 12px;" @click="next" type="primary" plain>下一步</el-button>        
      </div></el-col>
    </el-row> -->
    
  </div>
</template>

<script>
export default {
  name: "rechargePrincipal",
  data() {
      return {
        active: 0,
       
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
};
</script>

<style>

.el-row {
    margin-bottom: 20px;
  
  }
   .el-row :last-child {
      margin-bottom: 0;
    }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    min-height: 60px;
    /* border-left: 2px solid; */
  }
  .grid{
    min-height: 40px;
    line-height: 40px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-blue{
    background: #e8f2f7;
  }
  .margin{
    margin-left: 15px;
  }
  .spanClass{
    background: #e8f2f7;
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 30px;
    line-height: 30px;
  }
  .cell{
    margin-top: 15px;
  }
</style>

