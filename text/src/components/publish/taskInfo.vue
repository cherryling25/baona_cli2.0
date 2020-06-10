<template>
  <div id="taskInfo" style="background:white">
    <div>
      <el-row>
        <el-col :span="22" :offset="1"><div class="grid bg-blue">第一步:选择任务类型和单数</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="14" :offset="1">
          <div class="grid space">
            <el-checkbox v-model="checked">拼多多</el-checkbox>
            <el-button type="primary" @click="dialogFormVisible = true">添加店铺</el-button>
          </div>
        </el-col>
      </el-row>

      <el-dialog title="添加店铺" :visible.sync="dialogFormVisible" :modal-append-to-body="false" width="30%">
        <el-form :model="addShopForm">
          <el-form-item label="平台" label-width="120px">
            <el-select v-model="addShopForm.platform" placeholder="请选择">
              <el-option label="拼多多" value="pingduoduo"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="店铺名称" label-width="120px">
            <el-input v-model="addShopForm.name" autocomplete="off" placeholder="跟手机端宝贝页显示的店铺名一致"></el-input>
          </el-form-item>

          <el-form-item label="手机号" label-width="120px">
            <el-input v-model="addShopForm.phone" autocomplete="off" placeholder="店铺手机号绑定后无法修改"></el-input>
          </el-form-item>

          <el-form-item label="拼多多商家后台登陆页面" label-width="120px">
            <el-upload
              class="avatar-uploader"
              action="http://www.bn.com/index.php/index/Store/img"
              :show-file-list="false"
              :on-success="handleAvatarSuccess">
              <img v-if="addShopForm.imageUrl" :src="addShopForm.imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addShop">确 定</el-button>
        </div>
      </el-dialog>

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
    
    </div>
    
    <el-row>
      <el-col :span="12" :offset="10"><div class="grid">
        <el-button style="margin-top: 12px;" @click="next" type="primary" plain>下一步</el-button>        
      </div></el-col>
    </el-row>
    
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";

export default {
  name: "taskInfo",
  data() {
      return {
        active: 0,
        checked: true,
        checked1: true,
        radio: '1',
        radio1: '1',

        dialogFormVisible: false,
        addShopForm: {
          platform: '',
          name:'',
          phone:'',
          imageUrl: ''
        },
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      //上传图片
      handleAvatarSuccess(res, file) {
          this.addShopForm.imageUrl = URL.createObjectURL(file.raw);
      },

      // 添加店铺
      addShop(){
      axios({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
        data: Qs.stringify({
          "user_id": this.GLOBAL.userId,
          "store_name": this.addShopForm.platform,
          "address": this.addShopForm.name,
          "phone": this.addShopForm.phone,
          "img": this.addShopForm.imageUrl
        }),

        url: this.GLOBAL.hostUrl5 +"index/Store/store_add"
      }).then(res => {
        console.log(res);
       if (res.data.code == 1 || res.data.code == "1") {
         this.$notify({
            message: "添加成功",
            type: "success"
          });
          this.dialogFormVisible = false;
        } else {
          this.$notify.error({
            message: "添加失败"
          });
        }
      });
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

  
/* 上传图片 */
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
 