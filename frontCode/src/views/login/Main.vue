<template>
  <div class="main">
    <section id="content">
      <div class="type-area">
        <!-- 頂部 -->
        <div class="header">
          <div class="hea_left">
            <div class="text1">
              <span>模治檢具</span>
              <span>招投標平台</span>
            </div>
            <div class="text2">通行證</div>
          </div>
          <div class="hea_right">
            <router-link to="/">返回首頁</router-link>
          </div>
        </div>
        <!-- 主要內容 -->
        <div class="prin">
          <!-- 背景框 -->
          <div class="pri_bgBox">
            <!-- 登錄框 -->
            <div class="pri_loginBox">
              <div class="login_logo"></div>
              <div class="login_content">
                <div class="title">登錄</div>
                <el-form
                  ref="formLogin"
                  status-icon
                  :model="form"
                  :rules="rules"
                  label-width="50px"
                  label-position="left"
                  @keyup.enter.native="_login()"
                >
                  <el-form-item label="用戶" class="name" prop="name">
                    <el-input v-model="form.name" placeholder="請輸入您的用戶名"></el-input>
                  </el-form-item>
                  <el-form-item label="密碼" class="psd" prop="psd">
                    <el-input type="password" v-model="form.psd" placeholder="請輸入您的密碼"></el-input>
                  </el-form-item>
                </el-form>
                <div class="opreation">
                  <div class="autoLogin">
                    <el-checkbox v-model="autoLogin">下次自動登錄</el-checkbox>
                  </div>
                  <div class="forget_register">
                    <router-link to>忘記密碼</router-link>
                    <router-link to>立即註冊</router-link>
                  </div>
                </div>
                <div class="loginBtn" @click="_login()">立即登錄</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 使用底部組件 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import { mapState, mapActions } from "vuex";
import { Message } from "element-ui";
// 引入 api
import { login, login_user_info } from "@/api/user";
import { getPorImg } from "@/assets/js/getInfo";

export default {
  data() {
    return {
      form: {
        name: "",
        psd: ""
      },
      rules: {
        name: [
          { required: true, message: "請輸入賬號名" },
          { max: 16, message: "長度不超過16個字符", trigger: "blur" }
        ],
        psd: [{ required: true, message: "請輸入密碼" }]
      },
      // 自動登錄
      autoLogin: false
    };
  },
  methods: {
    ...mapActions({
      get_username: "get_username",
      get_token: "get_token",
      get_userInfo: "get_userInfo",
      get_porImgUrl: "get_porImgUrl"
    }),

    _login() {
      this.$refs["formLogin"].validate(valid => {
        if (valid) {
          var data = {
            username: this.form.name,
            password: this.form.psd
          };
          login(data).then(res => {
            if (res.code === "1") {
              this.get_username(this.form.name);
              this.get_token(res.t);
              this.getInfo();
              Message.success(res.msg);
            } else {
              Message.error(res.msg);
            }
          });
        } else {
          return false;
        }
      });
    },

    // 獲取信息並寫入vuex
    getInfo() {
      var username = this.username;
      var token = this.token;
      login_user_info(username, token).then(res => {
        if (res.data.code === "1") {
          // 如果返回成功，講數據通過 actions 傳給 state
          this.get_userInfo(res.data.t);
          // 查詢頭像信息
          if(res.data.t.send_recv_type === "send"){
            this.$router.push("/demand");
          }else{
            this.$router.push("/personal");
          }
          this.get_porImgUrl(getPorImg());
        } else {
          Message.error("出錯啦，稍後再試試吧！")
        }
      });
    }
  },
  computed: {
    ...mapState({
      token: state => state.token,
      username: state => state.username,
      userInfo: state => state.userInfo
    })
  },
  components: {
    Footer
  }
};
</script>

<style lang="less" scoped>
#content {
  // 多張背景圖
  background: url("../../assets/imgs/login/bg-land.png") no-repeat center bottom,
    url("../../assets/imgs/login/bg-light.png") no-repeat center top;
  background-color: #12222e;
  padding-bottom: 157px;
}
// d頂部樣式
.header {
  color: #c1d0db;
  // background-color: pink;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hea_left {
  display: flex;
  align-items: center;
  .text1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    > span {
      font-size: 14px;
    }
    > span:nth-child(2) {
      font-size: 12px;
    }
  }
  .text2 {
    border-left: 2px solid #fff;
    margin-left: 10px;
    padding-left: 10px;
    font-size: 26px;
  }
}
.hea_right {
  font-size: 14px;
  a {
    color: #c1d0db;
  }
}
.pri_bgBox {
  margin: 0 auto;
  width: 1028px;
  height: 630px;
  background: url("../../assets/imgs/login/bg-mould.png") no-repeat center;
  display: flex;
  justify-content: center;
  align-items: center;
}
// 登錄框
.pri_loginBox {
  margin-top: 40px;
  background-color: #233848;
  width: 346px;
  height: 438px;
  position: relative;
  // 加border並且漸變
  border: 1px solid;
  border-image: linear-gradient(
      0deg,
      rgba(52, 95, 127, 1),
      rgba(25, 44, 59, 1),
      rgba(83, 179, 227, 1)
    )
    10 10;
  transition-delay: 0.3s;
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
  &:hover {
    width: 450px;
    height: 490px;
  }
  .login_logo {
    width: 292px;
    height: 65px;
    position: absolute;
    top: -32px;
    left: 50%;
    transform: translateX(-50%);
    background-image: url(../../assets/imgs/login/logo.png);
    background-repeat: no-repeat;
    background-position: center;
  }
}
// 登錄框內容
.login_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    color: #b8d4ea;
    font-size: 20px;
    margin-top: 50px;
  }
  .loginBtn {
    margin-top: 10%;
    width: 80%;
    height: 50px;
    background: url("../../assets/imgs/login/btn.png") no-repeat center /
      contain;
    text-align: center;
    line-height: 50px;
    color: #12222e;
    font-size: 20px;
    cursor: pointer;
  }
}
.opreation {
  margin-top: 10%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  .forget_register {
    > a {
      color: #0092ff;
      margin-left: 10px;
    }
  }
}

.el-form {
  width: 80%;
  margin-top: 20%;
  .el-form-item {
    border-bottom: 1px solid #3a5970;
  }
  /deep/ .el-form-item__label {
    width: 52px !important;
    color: #b8d5eb;
  }
  /deep/ .el-input {
    width: 95%;
  }
  /deep/ .el-input__inner {
    border-color: #233848;
    background-color: #233848;
    color: #0092ff;
    border: none;
    /* WebKit browsers */
    &::-webkit-input-placeholder {
      color: #3a5970;
    }
    /* Mozilla Firefox 4 to 18 */
    &:-moz-placeholder {
      color: #3a5970;
    }
    /* Mozilla Firefox 19+ */
    &::-moz-placeholder {
      color: #3a5970;
    }
    /* Internet Explorer 10+ */
    &:-ms-input-placeholder {
      color: #3a5970;
    }
  }
}
// 自動登錄框
.el-checkbox {
  color: #b8d4ea;
}
/deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #b8d4ea;
}
/deep/ .el-checkbox__inner {
  background-color: #233848;
  border: 1px solid #3a5970;
}

/* 修改自動填充樣式 用陰影遮擋內容背景色 */
/deep/ input:-webkit-autofill,
/deep/ textarea:-webkit-autofill,
/deep/ select:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px #233848 inset !important;
  border: none !important;
  border-radius: 0;
}
</style>>
