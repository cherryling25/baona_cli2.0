<template>
  <div class="home">
    <el-container style="height: 100%;width: 100%; position: fixed;">
      
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']">
          <!-- <a href="http://www.duoduogmv.com/pc/index/index.html">
            <el-menu-item index="1">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </a> -->
          <!-- <router-link to="/runCenter">
            <el-menu-item index="1">
              <i class="el-icon-message"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link> -->

          <router-link to="/publish">
            <el-menu-item index="1">
              <i class="el-icon-guide"></i>
              <span slot="title">发布任务</span>
            </el-menu-item>
          </router-link>

          <router-link to="/orderManage">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">订单管理</span>
            </el-menu-item>
          </router-link>
          <!-- <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-menu"></i>订单管理</template
            >
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu> -->


          <!-- <router-link to="/invite"> -->
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">邀请返利</span>
            </el-menu-item>
          <!-- </router-link> -->
          <!-- <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>邀请返利</template
            >
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu> -->

          <router-link to="/taskManage">
          <el-menu-item index="4">
            <i class="el-icon-message"></i>
            <span slot="title">任务管理</span>
          </el-menu-item>
          </router-link>

          <router-link to="/transactionDetail">
          <el-menu-item index="5">
            <i class="el-icon-wallet"></i>
            <span slot="title">资金明细</span>
          </el-menu-item>
           </router-link>

          <router-link to="/shopInfo">
          <el-menu-item index="6">
            <i class="el-icon-s-shop"></i>
            <span slot="title">店铺信息</span>
          </el-menu-item>
           </router-link>

          <router-link to="/appealCenter">
          <el-menu-item index="7">
            <i class="el-icon-message"></i>
            <span slot="title">申诉中心</span>
          </el-menu-item>
          </router-link>

          <router-link to="/blacklist">
          <el-menu-item index="8">
            <i class="el-icon-notebook-1"></i>
            <span slot="title">黑名单管理</span>
          </el-menu-item>
          </router-link>

          <el-menu-item index="9">
            <i class="el-icon-suitcase"></i>
            <span slot="title">代发快递</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <el-row>
            <el-col :span="2" :offset="3"
              ><div class="grid-content ">
                <span class="headTitle">首页</span>
                </div
            ></el-col>
            <el-col :span="2"
              ><div class="grid-content ">
                <span>邀请返利</span>
                </div
            ></el-col>
            <el-col :span="2"
              ><div class="grid-content ">
                <span>发布任务</span>
                </div
            ></el-col>
            
            <router-link to="/sellerCenter">
            <el-col :span="2"
              >
              <div class="grid-content ">
                <span>卖家中心</span>
                </div
            ></el-col>
             </router-link>

            <el-col :span="2"
              ><div class="grid-content ">
                <span>淘宝站</span>
                </div
            ></el-col>
            <el-col :span="2"
              ><div class="grid-content ">
                <span>京东站</span>
                </div
            ></el-col>

            <!-- <el-col :span="5" :offset="3"
              ><div class="grid-content">
                <el-input
                  v-model="searchKey"
                  placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                ></el-input></div
            ></el-col> -->
            <el-col :span="2" :offset="6"
              ><div class="grid-content">
                <div style="display:flex;justify-content: space-around;">
                  <img
                    class="userImg"
                    src="../assets/images/user.jpg"
                    alt=""
                    srcset=""
                  />
                  <div class="userInfo">
                    <div style="font-size:18px; color: #7fcff4;">lemon</div>
                    <div style="font-size:14px;">管理员</div>
                  </div>
                </div>
              </div></el-col
            >
            <el-col :span="1"
              ><div class="grid-content" style="margin-top:-10px;">
                <el-dropdown>
                  <i class="el-icon-arrow-down"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </el-col>
          </el-row>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      searchKey: "",
    };
  },
  methods: {
    logout(){
      this.$confirm("确认退出吗?","提示",{})
      .then(()=>{
        this.$router.push("/");
      }).catch(()=>{

      });
    }
  },
  components: {

  },
  created(){
    console.log(this.GLOBAL.id)
  }
};
</script>
<style scoped>
.el-header {
  color: #333;
  line-height: 60px;
  border: 1px solid #eee;
}
a{
   text-decoration:none;
}
.el-aside {
  color: #333;
}
.el-main {
  background: #f7f7f7;
}
.userInfo {
  margin-top: 10px;
  line-height: 20px;
}
.userImg {
  width: 45px;
  height: 45px;
  border-radius: 50px;
  margin-top: 7px;
}
.bg{
  background: gray;
}
.headTitle{
  border-bottom: 4px solid #69cbe4;
  padding-bottom: 10px;
  color: #69cbe4;
}
</style>
