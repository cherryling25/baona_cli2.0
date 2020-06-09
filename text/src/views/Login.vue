<template>
  <div class="login">
    <el-card class="login-form-layout">
      <el-form
        autocomplete="on"
        :model="loginForm"
        ref="loginForm"
        label-position="left"
      >
        <h2 class="login-title color-main">宝娜</h2>
        <br />
        <el-form-item prop="userphone">
          <el-input
            name="userphone"
            type="text"
            v-model="loginForm.userphone"
            autocomplete="on"
            placeholder="请输入手机号"
          >
            <span slot="prefix">
              <i class="el-icon-user" style="width: 16px; color: #409EFF"></i>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            type="password"
            @keyup.enter.native="handleLogin"
            v-model="loginForm.password"
            autocomplete="on"
            placeholder="请输入密码"
          >
            <span slot="prefix">
              <i class="el-icon-lock" style="width: 16px; color: #409EFF"></i>
            </span>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-button type="text" size="small" @click="dialogFormVisible = true"
            >注册账号</el-button
          >
        </el-form-item>

        <el-dialog
          title="注册账号"
          :visible.sync="dialogFormVisible"
          width="25%"
        >
          <el-form :model="registerForm">
            <el-form-item prop="invite">
              <el-input
                name="invite"
                type="text"
                v-model="registerForm.invite"
                autocomplete="on"
                placeholder="请输入邀请人ID（可不填）"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="userphone">
              <el-input
                name="userphone"
                type="text"
                v-model="registerForm.userphone"
                autocomplete="on"
                placeholder="请输入手机号"
              >
              </el-input>
            </el-form-item>

            <el-form-item prop="msgInput">
              <el-input
                placeholder="请输入短信验证码"
                v-model="registerForm.msgInput"
              >
                <template slot="append">
                  <el-button type="warning" v-show="show" @click="getCode"
                    >发送验证码</el-button
                  >
                  <el-button type="warning" v-show="!show"
                    >{{ registerForm.count }}s</el-button
                  >
                </template>
              </el-input>
            </el-form-item>

            <el-form-item prop="wxNumber">
              <el-input
                name="wxNumber"
                type="text"
                v-model="registerForm.wxNumber"
                autocomplete="on"
                placeholder="请输入微信号"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                name="password"
                type="password"
                @keyup.enter.native="handleLogin"
                v-model="registerForm.password"
                autocomplete="on"
                placeholder="请输入密码"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input
                type="password"
                v-model="registerForm.checkPass"
                autocomplete="off"
                placeholder="再一次确认密码"
              ></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="register">确 定</el-button>
          </div>
        </el-dialog>

        <el-form-item style="margin-bottom: 30px">
          <el-button
            style="width: 100%"
            type="primary"
            :loading="loading"
            @click.native.prevent="handleLogin"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";

export default {
  name: "login",
  data() {
    return {
      loginForm: {
        userId: "",
        userphone: "",
        password: ""
      },
      show: true,
      registerForm: {
        invite: "",
        userphone: "",
        msgInput: "",
        wxNumber: "",
        password: "",
        checkPass: "",
        count: ""
      },
      loading: false,
      dialogFormVisible: false
    };
  },
  computed: {},
  methods: {
    yanzhengma() {
      axios({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
        data: Qs.stringify({
          phone: "15226371822"
        }),
        url: "http://www.bn.com/index.php/index/Login/phone_sms"
      }).then(res => {
        console.log(res);
      });
    },
    getCode() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.yanzhengma();
        this.registerForm.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (
            this.registerForm.count > 0 &&
            this.registerForm.count <= TIME_COUNT
          ) {
            this.registerForm.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    // 注册验证
    registerValidate() {
      if (!this.registerForm.userphone) {
        this.$notify.error({
          message: "手机号不能为空"
        });
        return false;
      }

      if (!this.registerForm.msgInput) {
        this.$notify.error({
          message: "短信验证码不能为空"
        });
        return false;
      }

      if (!this.registerForm.wxNumber) {
        this.$notify.error({
          message: "微信号不能为空"
        });
        return false;
      }

      if (!this.registerForm.password) {
        this.$notify.error({
          message: "密码不能为空"
        });
        return false;
      }
      if (this.registerForm.password != this.registerForm.checkPass) {
        this.$notify.error({
          message: "两次输入的密码不一致"
        });
        return false;
      }

      return true;
    },
    // 注册
    register() {
      if (!this.registerValidate()) {
        return;
      }

      // axios({
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded"
      //   },
      //   method: "post",
      //   data: Qs.stringify({
      //     people_id: this.registerForm.invite,
      //     phone: this.registerForm.userphone,
      //     // "captcha":this.registerForm.checkPass,
      //     phone_code: this.registerForm.msgInput,
      //     wechat_number: this.registerForm.wxNumber,
      //     pwd: this.registerForm.password,
      //     pwd_2: this.registerForm.checkPass
      //   }),

      //   url: "http://www.bn.com/index.php/index/Login/registered"
      // }).then(res => {
      //   console.log(res);
      //   if (res) {
      //     this.$notify({
      //       message: "注册成功",
      //       type: "success"
      //     });
      //     this.dialogFormVisible = false;
      //   } else {
      //     this.$notify.error({
      //       message: "注册失败"
      //     });
      //   }
      // });
    },
    // 登录验证
    validate() {
      if (!this.loginForm.userphone) {
        this.$notify.error({
          message: "手机号不能为空"
        });
        return false;
      }
      if (!this.loginForm.password) {
        this.$notify.error({
          message: "密码不能为空"
        });
        return false;
      }
      return true;
    },
    // 登录
    handleLogin() {
      if (!this.validate()) {
        return;
      }
      axios({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
        data: Qs.stringify({
          name: this.loginForm.userphone,
          pwd: this.loginForm.password
        }),

        url: this.GLOBAL.hostUrl5 +"index/Login/login"
      }).then(res => {
        if (res.data.code == 1 || res.data.code == "1") {
          this.GLOBAL.id= res.data.data.id
          this.$router.push({
            path: "../orderManage"
          });
        } else {
          this.$notify.error({
            message: "用户名或密码错误"
          });
        }
      });
    }
  },
  components: {}
};
</script>

<style scoped>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
}

.login-title {
  text-align: center;
}

.login-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
/* .el-dialog {
    position: relative;
    margin: 0 auto 50px;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 50%;
    min-width: 350px !important;
} */

</style>
