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
          <div class="main_title">設置</div>
          <button @click="quit">退出登錄</button>
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

import { mapState } from "vuex";


export default {
  data: function() {
    return {
      // 侧边栏选中条目
      silderBarItem: "setting",
    };
  },
  methods: {
    quit(){
      this.$store.commit("LOG_OUT")
      this.$router.push('/login')
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