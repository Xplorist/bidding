<template>
  <div class="information">
    <Top></Top>
    <Logo></Logo>
    <section id="content">
      <!-- 主體內容 -->
      <div class="main type-area">
        <SilderBar :choose-item="silderBarItem"></SilderBar>
        <div class="mainPart">
          <!-- title -->
          <div class="main_title">個人資料</div>
          <!-- form表單 -->
          <el-form ref="form" :model="form" label-width="80px">
            <!-- 賬號屬性 -->
            <el-form-item label="賬號屬性:" class="properties">
              <span>{{form.properties}}</span>
            </el-form-item>
            <!-- 頭像 -->
            <el-form-item label="LOGO頭像:" class="portrait">
              <el-image style="width: 60px; height: 60px" :src="form.portraitUrl" fit="cover"></el-image>
              <input ref="fileInp" type="file" class="dis_none" @change="getFile" />
              <span @click="upImg">更換</span>
            </el-form-item>
            <!-- 賬號名稱 -->
            <el-form-item label="賬號名稱:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <!-- 所屬單位 -->
            <el-form-item label="所屬單位:" class="department">
              <el-select v-model="form.department.fctry_zone">
                <el-option
                  v-for="(item, index) in form.departmentList.fctry_zone"
                  :key="index"
                  :label="item"
                  :value="item"
                ></el-option>
              </el-select>
              <el-select v-model="form.department.secn_cmpy">
                <el-option
                  v-for="(item, index) in form.departmentList.secn_cmpy"
                  :key="index"
                  :label="item"
                  :value="item"
                ></el-option>
              </el-select>
              <el-select v-model="form.department.entrps_group">
                <el-option
                  v-for="(item, index) in form.departmentList.entrps_group"
                  :key="index"
                  :label="item"
                  :value="item"
                ></el-option>
              </el-select>
              <el-select v-model="form.department.pd_office">
                <el-option
                  v-for="(item, index) in form.departmentList.pd_office"
                  :key="index"
                  :label="item"
                  :value="item"
                ></el-option>
              </el-select>
            </el-form-item>
            <!-- 單位名稱 -->
            <el-form-item label="單位名稱:">
              <el-input v-model="form.departName"></el-input>
            </el-form-item>
            <!-- 交易法人 -->
            <el-form-item label="交易法人:">
              <span>{{form.corporate}}</span>
            </el-form-item>
            <!-- 費用代碼 -->
            <el-form-item label="費用代碼:" class="costCode">
              <span>{{form.costCode}}</span>
              <el-button type="text" @click="open('costCode')">&nbsp;變更</el-button>
            </el-form-item>
            <!-- 加工範圍 -->
            <el-form-item v-if="form.in_out_type != 'in'" label="加工範圍:" class="processRange">
              <span>{{form.processRange }}</span>
              <el-button type="text" @click="open('processRange')">&nbsp;修改</el-button>
            </el-form-item>
            <!-- 銀行賬號 -->
            <el-form-item v-if="form.in_out_type != 'in'" label="銀行賬號:" class="bankAccount">
              <span>{{form.bankName}}&nbsp;{{form.bankAccount}}</span>
              <el-button type="text" @click="dialogFormVisible = true">變更賬號</el-button>
            </el-form-item>

            <!-- 彈出對話框 -->
            <el-dialog title="請修改銀行賬號" width="400px;" :visible.sync="dialogFormVisible">
              <el-form :model="alertForm">
                <el-form-item label="銀行名稱">
                  <el-input v-model="alertForm.bankName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="銀行賬號">
                  <el-input v-model="alertForm.bankAccount" placeholder></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false, transmit('cancel')">取 消</el-button>
                <el-button
                  type="primary"
                  @click="dialogFormVisible = false, transmit('confirm')"
                >确 定</el-button>
              </div>
            </el-dialog>

            <!-- 業務經理 -->
            <el-form-item label="加工範圍:">
              <el-input v-model="form.processRange"></el-input>
            </el-form-item>
            <!-- 業務經理 -->
            <el-form-item label="業務經理:">
              <el-input v-model="form.manager"></el-input>
            </el-form-item>
            <!-- 聯繫電話 -->
            <el-form-item label="聯繫電話:" class="tel">
              <el-input v-model="form.tel.num"></el-input>
              <el-checkbox label="在主頁中顯示" :checked="form.tel.check" name="type"></el-checkbox>
            </el-form-item>
            <!-- Email -->
            <el-form-item label="Email:" class="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <!-- 簡介 -->
            <el-form-item label="簡介:" class="intro">
              <el-input type="textarea" v-model="form.intro" autosize></el-input>
            </el-form-item>
            <!-- 按鈕 -->
            <el-form-item label=" ">
              <el-button type="primary" @click="save">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Top from "../../components/Top";
import Logo from "../../components/Logo";
import Footer from "../../components/Footer";
import SilderBar from "../../components/personal/SilderBar";

import { file_upload } from "@/api/file";
import { mapState } from "vuex";

import { Message } from "element-ui";

export default {
  data: function() {
    return {
      // 侧边栏选中条目
      silderBarItem: "information",
      // 表单数据
      form: {
        // 賬號屬性
        properties: "集團內部賬號",
        // 頭像地址
        portraitUrl: require("../../assets/imgs/personal/portrait.png"),
        // 賬號名稱
        name: "SHZBG",
        // 所屬單位
        department: {
          fctry_zone: "成都",
          secn_cmpy: "次集團",
          entrps_group: "事業群",
          pd_office: "處"
        },
        // 所屬單位可選項【不傳】
        departmentList: {
          fctry_zone: ["成都", "深圳", "鄭州"],
          secn_cmpy: ["A", "B", "C", "D", "D"],
          entrps_group: ["SHZBG", "PCEBG", "CCPBG", "CNSBG", "NWING", "CMMSG"],
          pd_office: ["處"]
        },
        // 單位名稱
        departName: "",
        // 交易法人
        corporate: "",
        // 費用代碼
        costCode: "",
        // 加工範圍
        processRange: "",
        // 銀行賬號
        bankName: "",
        bankAccount: "",
        // 業務經理
        manager: "",
        // 聯繫電話
        tel: {
          num: "",
          check: false
        },
        // Email
        email: "",
        // 簡介
        intro: "",
        // 需求方 | 接單方
        in_out_type: ""
      },
      // 彈框數據
      dialogFormVisible: false,
      alertForm: {
        bankName: "",
        bankAccount: ""
      }
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    save() {
      // console.log(this.form.manager);

      // 判斷值不為 '', null, undefined.此時 Boolean() 返回 false
      // 但是不適用于 空對象{} 或 空數組[], Boolean() 會返回 true
      if (Boolean(this.form.name) == false) {
        Message.error("賬號名稱不能為空");
      } else if (Boolean(this.form.departName) == false) {
        Message.error("單位名稱不能為空");
      } else if (Boolean(this.form.costCode) == false) {
        Message.error("費用代碼不能為空");
      } else if (
        Boolean(this.form.processRange) == false &&
        this.form.in_out_type !== "in"
      ) {
        Message.error("加工範圍不能為空");
      } else if (Boolean(this.form.manager) == false) {
        Message.error("業務經理不能為空");
      } else if (Boolean(this.form.tel) == false) {
        Message.error("聯繫電話不能為空");
      } else if (Boolean(this.form.email) == false) {
        Message.error("Email不能為空");
      } else {
        Message.success("已保存");
      }
    },

    // 點擊更換觸發input[type='file']的點擊事件
    upImg() {
      this.$refs.fileInp.dispatchEvent(new MouseEvent("click"));
    },
    getFile() {
      // 獲取到 input 選中的文件信息
      const inputFile = this.$refs.fileInp.files[0];
      // window 对象的 URL 对象通過 createObjectURL() 将blob或者file读取成一个url。
      const windowURl = window.URL || window.webkitURL;
      if (inputFile) {
        if (
          inputFile.type !== "image/jpeg" &&
          inputFile.type !== "image/png" &&
          inputFile.type !== "image/gif"
        ) {
          alert("請選擇圖片文件");
          return;
        }
        const url = windowURl.createObjectURL(inputFile);
        this.form.portraitUrl = url;

        // 上傳文件
        var data = new FormData();
        data.append("file", inputFile);
        data.append("file_type", "user_pic");

        file_upload(data).then(res => {
          if (res.code == 1) {
            // console.log(res)
            // window.sessionStorage.setItem('user')
          }
        });
      }
    },

    // 從 vuex 從獲取數據
    initData() {
      // 頭像
      (this.form.portraitUrl = this.porImgUrl),
        // 賬號名稱
        (this.form.name = this.userInfo.username),
        // 廠區
        (this.form.department.fctry_zone = this.userInfo.fctry_zone),
        // 次集團
        (this.form.department.secn_cmpy = this.userInfo.secn_cmpy),
        // 事業群
        (this.form.department.entrps_group = this.userInfo.entrps_group),
        // 產品處
        (this.form.department.pd_office = this.userInfo.pd_office),
        // 單位名稱
        (this.form.departName = this.userInfo.dept_name),
        // 法人
        (this.form.corporate = this.userInfo.legal_person),
        // 費用代碼
        (this.form.costCode = this.userInfo.cost_code),
        // 加工範圍
        (this.form.processRange = this.userInfo.recv_mnufc_range),
        // 銀行名稱
        (this.form.bankName = this.userInfo.bank_name),
        // 銀行賬號
        (this.form.bankAccount = this.userInfo.bank_acunt),
        // 業務經理
        (this.form.manager = this.userInfo.busis_mngr),
        // 聯繫電話
        (this.form.tel.num = this.userInfo.tel),
        // 郵箱
        (this.form.email = this.userInfo.email),
        // 簡介
        (this.form.intro = this.userInfo.summary),
        // 需求方 | 接單方
        (this.form.in_out_type = this.userInfo.in_out_type);
      // (this.form.in_out_type = 'out'),
      // console.log(this.userInfo);
    },

    // 彈窗消息1
    open(val) {
      var text = val == "costCode" ? "費用代碼" : "加工範圍";
      this.$prompt("请输入" + text, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: text + "格式不正确"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "已修改" + text + "為: " + value
          });
          val == "costCode"
            ? (this.form.costCode = value)
            : (this.form.processRange = value);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    // 彈窗消息2
    transmit(val) {
      if (val == "cancel") {
        this.$message({
          type: "info",
          message: "取消输入"
        });
      } else if (val == "confirm") {
        this.form.bankName = this.alertForm.bankName;
        this.form.bankAccount = this.alertForm.bankAccount;
        this.$message({
          type: "success",
          message: "修改成功"
        });
      } else {
        return;
      }
    }
  },
  components: {
    Top,
    Logo,
    Footer,
    SilderBar
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
      porImgUrl: state => state.porImgUrl
    })
  }
};
</script>

<style lang="less" scoped>
// 主體內容
#content {
  background: #12222e url(../../assets/imgs/particulars/contentBG.png) no-repeat
    top center / contain;
  padding-top: 24px;
  > .main {
    background: rgba(13, 28, 42, 0.2);
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
}
// 主體部分
.mainPart {
  width: 910px;
  background-color: #d3dfe7;
  box-sizing: border-box;
  padding: 30px;
}
.main_title {
  color: #12222e;
  font-size: 18px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #afc2cf;
}
/deep/ .el-form-item {
  display: flex;
  align-items: center;

  // 賬號屬性欄修改
  &.properties {
    span {
      color: #0092ff;
    }
  }
  // 頭像欄修改
  &.portrait {
    .el-form-item__content {
      display: flex;
      align-items: center;
    }
    .el-image {
      border-radius: 50%;
      margin-right: 20px;
    }
    span {
      display: inline-block;
      margin: 0 auto;
      color: #0092ff;
      cursor: pointer;
    }
  }
  // 所屬單位修改
  &.department {
    .el-select {
      margin-right: 10px;
    }
    .el-input {
      input {
        width: 100px;
      }
    }
  }
  // 費用代碼修改
  // 加工範圍修改
  // 銀行賬號修改
  &.costCode,
  &.processRange,
  &.bankAccount {
    .operation {
      color: #0092ff;
      margin-left: 10px;
      cursor: pointer;
    }
  }
  // 聯繫電話
  &.tel {
    .el-form-item__content {
      display: flex;
      align-items: center;
    }
    .el-checkbox {
      margin-left: 20px;
    }
    .el-checkbox__inner {
      background-color: #d3dfe7;
      border: 1px dashed #afc2cf;
      &:after {
        border-color: #0092ff;
      }
    }
    .el-checkbox__label {
      font-size: 16px;
      color: #212f3a;
    }
  }
  // email
  &.email {
    .el-input {
      input {
        width: 320px;
      }
    }
  }
  // 簡介
  &.intro {
    .el-textarea {
      textarea {
        width: 700px;
        background-color: #d3dfe7;
        border-color: #afc2cf;
        text-indent: 2rem;
        border-radius: 0px;
        &:focus {
          border-color: #0092ff;
        }
      }
    }
  }
}
// label全局效果修改
/deep/ .el-form-item__label {
  width: 100px !important;
  text-align: left;
  font-size: 16px;
  color: #212f3a;
}
// content全局效果修改
/deep/ .el-form-item__content {
  font-size: 16px;
  color: #212f3a;
  margin-left: 10px !important;
  .el-input {
    input {
      background-color: #d3dfe7;
      border: 1px solid #afc2cf;
      border-radius: 0px;
      width: 320px;
      &:focus {
        border-color: #0092ff;
      }
    }
  }
}

// 彈出對話框樣式
/deep/ .el-dialog {
  width: 460px;
  position: absolute;
  top: 23%;
  left: 50%;
  transform: translateX(-50%);
  .el-dialog__body {
    .el-input__inner {
      background-color: #fff;
    }
  }
}
</style>