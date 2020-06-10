<template>
  <div id="rechargePrincipal" style="background:white">
     <el-row :gutter="20" style="padding-top:20px; margin-top: 30px;">
      <el-col :span="12"><div class="grid margin">
        <span class="spanClass">1</span>
        转账到官方指定收款账号
      </div></el-col>
    </el-row>


    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content margin1">
         <div style="margin-left:20px">
           <div class="cell">
              <span class="cellTitle">转账途径:</span>   电脑网银 手机银行 支付宝转银行卡等
           </div>

           <div class="cell">
             <span class="cellTitle">收款户名:</span>   {{name}}
           </div>

           <div class="cell">
             <span class="cellTitle">收款帐号:</span>   {{number}}
           </div>

           <div class="cell">
            <span class="cellTitle">收款银行:</span>    {{bank}}
           </div>
         </div>
      </div></el-col>
    </el-row>


    <el-row :gutter="20" style="padding-top:20px; margin-top: 30px;">
      <el-col :span="12"><div class="grid margin">
        <span class="spanClass">2</span>
        提交转账信息
      </div></el-col>
    </el-row>


    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content margin1">
         <div style="margin-left:20px">
           <div class="cell">
              <span class="cellTitle">转账至指定账号后，点击下方按钮提交转账信息</span>
           </div>

           <div class="cell">
             转账金额:
           </div>

           <div class="cell">
             <el-input v-model="moneyInput" placeholder="" style="width:156px;"></el-input> 元
           </div>

           <div class="cell">
            <span class="cellTitle1">（恶意提交、未打款后提交，将罚款100/次，甚至封号）</span>
           </div>

           <div class="cell" style="margin-top:40px;">
             打款人姓名:
           </div>

           <div class="cell">
             <el-input v-model="nameInput" placeholder="" style="width:156px;"></el-input>
           </div>

           <div class="cell">
            <span class="cellTitle">(输入正确转出账户持有人的全称)</span>
           </div>

           <div class="cell" style="margin-top:40px;">
            充值截图：
           </div>

           <div class="cell">
             <el-upload
              class="avatar-uploader"
              action="http://www.bn.com/index.php/index/Store/img"
              :show-file-list="false"
              :on-success="handleAvatarSuccess">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
           </div>

           <div class="cell">
            <span class="cellTitle">为提高审核速度，可选提交截图（截图要求：清晰看到打款时间和转账金额）</span>
           </div>

            <div class="cell">
            <el-button type="danger" @click="submit">确认提交</el-button>
           </div>

         </div>
      </div></el-col>
    </el-row>
   
    
    <el-row :gutter="20" style="padding-top:20px; margin-top: 30px;">
      <el-col :span="12"><div class="grid margin">
        <span class="spanClass">3</span>
        人工审核
      </div></el-col>
    </el-row>


    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content margin1">
         <div style="margin-left:20px">
           <div class="cell">
              <span class="cellTitle">充值客服工作时间每日9：30-18：00，审核人员每15分钟会审核一次，查询到账即能通过审核，18:00以后的 银行卡转账充值将无人审核，会到第二个工作日处理</span>
           </div>
         </div>
      </div></el-col>
    </el-row>

    <!-- <el-row :gutter="20" style="padding-top:20px; margin-top: 30px;">
      <el-col :span="12"><div class="bianxian">
      </div></el-col>
    </el-row> -->

    <el-row :gutter="20" style="margin-top: 50px;">
      <el-col :span="12"><div style="margin-left:30px;font-size:16px;">
        最新充值记录
      </div></el-col>
    </el-row>

    <el-container
      style="margin-left: 30px; border-radius: 4px;"
    >
      <el-main>
        <el-table
          :data="tableData"
          :header-cell-style="headClass"
          stripe
          style="width: 100%;"
        >
          <el-table-column prop="time" label="创建时间"> </el-table-column>

          <el-table-column prop="money" label="充值金额">
          </el-table-column>

          <el-table-column prop="name" label="转账姓名"> </el-table-column>

           <el-table-column prop="state" label="审核状态"> </el-table-column>

          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData,scope.row)"
                type="text"
                size="small"
              >
                撤销
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

      <!-- <el-footer>
        <el-pagination layout="prev, pager, next" background :total="50"  @current-change="handleCurrentChange">
        </el-pagination>
      </el-footer> -->
    </el-container>

  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";

export default {
  name: "rechargePrincipal",
  data() {
      return {
        active: 0,
        moneyInput: '',
        nameInput: '',
        imageUrl: '',
        tableData: [],

        name: '姓名',
        number: '6222 6207 9000 8043 481',
        bank: '交通银行 厦门分行 同安支行'
      };
    },

    methods: {
      // 上传图片
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      deleteRow(index, rows,rowId) {
        axios({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
        data: Qs.stringify({
          "user_id": this.GLOBAL.userId,
          "id": rowId.id
        }),

        url: this.GLOBAL.hostUrl5 +"index/Price/user_price_ce"
      }).then(res => {
        if (res.data.code == 1 || res.data.code == "1") {
          this.$notify({
            message: "撤销成功",
            type: "success"
          });
         this.tableList();
        } else {
          this.$notify.error({
            message: "撤销失败"
          });
        }
      });
        
    },
      // 表头样式设置
    headClass() {
      return "background:#eef1f6;";
    },
    // 提交验证
    validate() {
      if (!this.moneyInput) {
        this.$notify.error({
          message: "请输入金额"
        });
        return false;
      }
      if (!this.nameInput) {
        this.$notify.error({
          message: "请输入姓名"
        });
        return false;
      }
      if (!this.imageUrl) {
        this.$notify.error({
          message: "请上传图片"
        });
        return false;
      }
      return true;
    },
    // 提交
    submit(){
      if (!this.validate()) {
        return;
      }
      axios({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
        data: Qs.stringify({
          "user_id": this.GLOBAL.userId,
          "price": this.moneyInput,
          "name": this.nameInput,
          "img": this.imageUrl
        }),

        url: this.GLOBAL.hostUrl5 +"index/Price/price_add"
      }).then(res => {
        if (res.data.code == 1 || res.data.code == "1") {
          this.$notify({
            message: "提交成功",
            type: "success"
          });
        } else {
          this.$notify.error({
            message: "提交失败"
          });
        }
      });
    },
    // 加载列表
     tableList(){
      axios({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
        data: Qs.stringify({
          "user_id": this.GLOBAL.userId
        }),

        url: this.GLOBAL.hostUrl5 +"index/Price/price_list"
      }).then(res => {
        console.log(res);
        if (res.data.code == 1 || res.data.code == "1") {
           const tableData = [];
            const list = res.data.data;
            for (let i = 0; i < list.length; i++) {
                if(list[i].state == 3) {
                  continue;
                }
                let stateCN = '';
                if(list[i].state == 1) {
                  stateCN = "提交审核"
                } else if(list[i].state == 2) {
                  stateCN = "审核通过"
                }else if(list[i].state == 4) {
                  stateCN = "不通过"
                }
              const data = {
                id: list[i].id,
                time: list[i].time,
                money: list[i].price,
                name: list[i].name,
                state: stateCN
              }
              tableData.push(data);
            }
            this.tableData = tableData;
        }
      });
    },
    mockedData(){
      const mocked = [
        {
          shopName: "商品",
          shopAddress: "宝安区",
          shopState: "状态",
        },
        {
          shopName: "商品",
          shopAddress: "宝安区",
          shopState: "状态",
        },
        {
          shopName: "商品",
          shopAddress: "宝安区",
          shopState: "状态",
        },
      ]
      this.tableData = mocked;
    }
    },
   
     mounted() {
      // this.mockedData();
      this.tableList();
     }
};
</script>

<style>
*{
  font-size: 14px;
}
.el-row {
    margin-bottom: 20px;
  
  }
   .el-row :last-child {
      margin-bottom: 0;
    }
 
  .grid-content {
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
    background: #e8f2f7;
  }
  .margin{
    margin-left: 15px;
  }
  .margin1{
    margin-left: 15px;
    border-left: 2px solid;
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
  .cellTitle{
    color: rgb(95, 95, 95);
    margin-right: 10px;
  }
  .cellTitle1{
    color: red;
  }
  .bianxian{
    border-top: 5px solid rgb(133, 128, 128);
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

