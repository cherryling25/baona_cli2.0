<template>
  <div id="shopInfo">
    <el-container
      class="table"
      style="margin-top: 30px; margin-left: 30px; border-radius: 4px;"
    >
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        :inline="true"
        style="margin-top: 30px;"
      >
        <el-form-item label="用户ID">
          <el-input v-model="form.userID"></el-input>
        </el-form-item>

        <el-form-item label="微信号">
          <el-input v-model="form.wxNumber"></el-input>
        </el-form-item>

        <el-form-item label="注册时间">
          <el-col>
            <el-date-picker
              type="date"
              placeholder="请选择时间"
              v-model="form.registerTime"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="dialogFormVisible = true">添加店铺</el-button>
        </el-form-item>
      </el-form>

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

      <el-main>
        <el-table
          :data="tableData"
          :header-cell-style="headClass"
          stripe
          style="width: 100%;"
        >
          <el-table-column prop="shopName" label="店铺名称"> </el-table-column>

          <el-table-column prop="shopAddress" label="店铺地址">
          </el-table-column>

          <el-table-column prop="shopState" label="店铺状态"> </el-table-column>

          <el-table-column fixed="right" label="操作" width="120">
            <!-- <template slot-scope="scope">
              <el-button type="text" size="small" @click.native.prevent="modification(scope.row)">修改</el-button>
            </template> -->
          </el-table-column>
        </el-table>
      </el-main>

      <el-footer>
        <el-pagination layout="prev, pager, next" background :total="50"  @current-change="handleCurrentChange">
        </el-pagination>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";

export default {
  name: "shopInfo",
  data() {
    return {
      form: {
        userID: "",
        wxNumber: "",
        registerTime: ""
        
      },
      dialogFormVisible: false,
        addShopForm: {
          platform: '',
          name:'',
          phone:'',
          imageUrl: ''
        },
      tableData: [],
    };
  },
  methods: {
    //上传图片
    handleAvatarSuccess(res, file) {
        this.addShopForm.imageUrl = URL.createObjectURL(file.raw);
    },
    // modification(index, rows) {
      
    // },
    handleCurrentChange(val) {
      console.log('当前页' + val);
    },
    // 表头样式设置
    headClass() {
      return "background:#eef1f6;";
    },
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
    },
    // 列表
    tableList(){
    axios({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
        data: Qs.stringify({
           "user_id": this.GLOBAL.userId
        }),

        url: "http://www.bn.com/index.php/index/Store/store_list"
      }).then(res => {
        console.log(res);
          const tableData = [];
          const list = res.data.data.list;
          for (let i = 0; i < list.length; i++) {
             let stateCN = '';
                if(list[i].state == 1) {
                  stateCN = "正常"
                } else if(list[i].state == 2) {
                  stateCN = "审核中"
                }else if(list[i].state == 3) {
                  stateCN = "封号"
                }else if(list[i].state == 4) {
                  stateCN = "申请解封"
                }else if(list[i].state == 5) {
                  stateCN = "申请封号"
                }else if(list[i].state == 6) {
                  stateCN = "审核拒绝"
                }
            const data = {
              shopName: list[i].store_name,
              shopAddress: list[i].address,
              shopState: stateCN
            }
            tableData.push(data);
          }
          this.tableData = tableData;
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
    
  },
  components: {},
};
</script>

<style>
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
