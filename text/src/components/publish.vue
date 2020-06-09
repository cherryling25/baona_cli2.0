<template>
  <div id="publish" style="background:white">
     <el-row :gutter="20" style="padding-top:20px; margin-top: 30px; border-radius: 4px;">
      <el-col :span="12" :offset="6"><div class="grid-content">
        <el-steps :active="active" finish-status="success">
          <el-step title="选择任务类型"></el-step>
          <el-step title="填写任务信息"></el-step>
          <el-step title="支付"></el-step>
          <el-step title="发布成功"></el-step>
        </el-steps>
      </div></el-col>
    </el-row>

   
      <el-row>
        <el-col :span="22" :offset="1"><div class="grid bg-blue">第一步:选择任务类型和单数</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="14" :offset="1">
          <div class="grid space">
            <el-checkbox v-model="checked">拼多多</el-checkbox>
            <el-button type="primary">添加店铺</el-button>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12" :offset="1">
          <div class="grid space">
            <el-radio v-model="radio" label="1">备选项1</el-radio>
          </div>
        </el-col>
        <el-col :span="12" :offset="1">
          <div class="grid space">
            <el-radio v-model="radio" label="2">备选项2</el-radio>
          </div>
        </el-col>
        <el-col :span="12" :offset="1">
          <div class="grid space">
            <el-radio v-model="radio" label="3">备选项3</el-radio>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="22" :offset="1"><div class="grid bg-blue">第二步:选择任务类型</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12" :offset="1">
          <div class="grid space">
            <el-radio v-model="radio1" label="1">拼多多(普通垫付任务)</el-radio>
          </div>
        </el-col>
        <el-col :span="12" :offset="1">
          <div class="grid space">
            <el-radio v-model="radio1" label="2">拼多多手机活动任务(限时秒杀等拼多多活动任务发布入口)</el-radio>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="22" :offset="1"><div class="grid bg-blue">第三步:平台服务</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="14" :offset="1">
          <div class="grid space">
            <el-checkbox v-model="checked1">平台系统返款（收取0.5元/单的服务费）</el-checkbox>
          </div>
        </el-col>
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
  name: "publish",
  data() {
      return {
        active: 0,
        checked: true,
        checked1: true,
         radio: '1',
         radio1: '1'
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
  .space{
    display: flex;
    justify-content: space-between;
  }
  .el-radio{
    margin-top: 10px;
  }
  .margin{
    margin-top: 10px;
  }
</style>
