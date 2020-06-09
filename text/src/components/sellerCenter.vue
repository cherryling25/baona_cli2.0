<template>
  <div id="sellerCenter" style="background:white">
     <el-row :gutter="20" style="padding-top:20px; margin-top: 30px; border-radius: 4px;">
      <el-col :span="12" :offset="1"><div class="grid-content">
        <el-steps :active="active" finish-status="success" direction="vertical" class="steps">
          <el-step title="转账到官方指定收款账号">
              <div style="margin-left:20px">
              转账途径电脑网银 手机银行 支付宝转银行卡等
          </div>
          </el-step>
          
          <el-step title="提交转账信息"></el-step>
          <el-step title="人工审核"></el-step>
        </el-steps>
      </div></el-col>
    </el-row>

   
    
    <el-row>
      <el-col :span="12" :offset="10"><div class="grid">
        <el-button style="margin-top: 12px;" @click="next" type="primary" plain>下一步</el-button>        
      </div></el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name: "sellerCenter",
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
    border-radius: 4px;
    min-height: 60px;
  }
  .grid{
    min-height: 40px;
    line-height: 40px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-blue{
    background: rgb(232, 242, 247);
    /* color: white; */
  }
    .steps{
        height: 300px;
    }
</style>

