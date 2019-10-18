<template>
  <div id="chooseDetails">
    <!-- 頂部 -->
    <div class="top">
      <!-- 返回 -->
      <div class="backBtn">
        <router-link to="/demand">
          <span></span>
          返回
        </router-link>
        <span>選標</span>
      </div>
      <!-- 排序 -->
      <div class="sort">
        <!-- 展示按鈕 -->
        <div class="sort_btn" @click="sortList">
          <span>排序：競價時間</span>
          <img src="../../assets/imgs/demand/arrow.png" alt />
        </div>
      </div>
    </div>
    <!-- 標題 -->
    <div class="title">
      <div class="tit_text">
        【模具】需求單號A3000028&nbsp;需求量:5
        <span class="title_btn">詳情</span>
      </div>
      <div class="tit_time">發佈時間: 2019-08-27 10:52:25</div>
      <div class="tit_unit">
        當前項目投標單位數
        <span>57</span>
      </div>
    </div>
    <!-- 表格信息 -->
    <table style="width:100%; text-align:center; border-collapse:collapse;">
      <!-- 表頭 -->
      <tr>
        <th>序號</th>
        <th>單位</th>
        <th style="width: 14%;">報價</th>
        <th>幣別</th>
        <th>交期</th>
        <th style="width: 38%;">理由說明</th>
        <th>操作</th>
      </tr>
      <!--  -->
      <tr>
        <td>1</td>
        <td>精密組件</td>
        <td>
          <div class="detailList">
            <span>5000</span>
            <img src="../../assets/imgs/demand/look_gray.png" alt />
            <span>清單</span>
          </div>
        </td>
        <td>USD</td>
        <td>2019-09-30</td>
        <td>本公司近期新增先进设备，大量引进优秀人才，只为获得客户更好的认可。</td>
        <td>选为中标</td>
      </tr>
      <!--  -->
      <tr>
        <td>1</td>
        <td>精密組件</td>
        <td>
          <div class="detailList">
            <span>5000</span>
            <img src="../../assets/imgs/demand/look_gray.png" alt />
            <span>清單</span>
          </div>
        </td>
        <td>USD</td>
        <td>2019-09-30</td>
        <td>多次与贵公司精诚合作，希望这一次依然能够选我。</td>
        <td>
          <img src="../../assets/imgs/demand/winImg.png" alt />
        </td>
      </tr>
    </table>
    <!-- 分頁 -->
    <Paging :total="total" :current-page="currentPage" :page-size="pageSize" @getCurrentPage="getCurrentPage"></Paging>
  </div>
</template>

<script>
import Paging from "@/components/paging/Paging";

export default {
  data() {
    return {
      sortItem: "",
      // 總數據量
      total: 100,
      // 當前頁數
      currentPage: 1,
      // 每一頁長度
      pageSize: 10
    };
  },
  methods: {
    sortList() {
      console.log(this.$refs);
      // this.$refs.sortBtn.dispatchEvent(new MouseEvent('click'))
    },
    //
    handlePage(val) {
      console.log(val)
      console.log(1)
    },
    getCurrentPage(page){
      console.log(page)
    }
  },
  components: {
    Paging
  }
};
</script>

<style lang="less" scoped>
#chooseDetails {
  background-color: #eff9ff;
  box-sizing: border-box;
  color: #12222e;
  padding: 30px;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
// 返回按鈕
.backBtn {
  display: flex;
  > a {
    color: #626f7f;
    font-size: 14px;
    display: flex;
    align-items: center;
    span {
      display: block;
      width: 17px;
      height: 12px;
      background: url(../../assets/imgs/personal/back.png) no-repeat;
      margin-right: 6px;
    }
  }
  > span {
    color: #0096ff;
    font-size: 18px;
    margin-left: 28px;
  }
}
.sort_btn {
  width: 160px;
  height: 30px;
  border: 1px solid #c0c8cf;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #626f7f;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
}
// 主內容標題
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
}
.tit_text {
  color: #212f3a;
  font-size: 24px;
  position: relative;
  .title_btn {
    width: 70px;
    height: 26px;
    border-radius: 13px;
    line-height: 26px;
    text-align: center;
    position: absolute;
    background-color: #0096ff;
    color: #eff9ff;
    font-size: 16px;
    right: -100px;
    bottom: -10px;
  }
}
.tit_time {
  color: #626f7f;
  margin-top: 10px;
}
.tit_unit {
  color: #0096ff;
  margin-top: 24px;
  span {
    font-size: 36px;
  }
}
// 表格
table {
  tr {
    th,
    td {
      border: 1px solid #c0c8cf;
      font-size: 14px;
      height: 60px;
    }
    th {
      height: 40px;
      font-weight: 400;
      background-color: #d3dfe7;
    }
    .detailList {
      display: flex;
      span:nth-child(1) {
        width: 60%;
      }
      span:nth-child(3) {
        margin-left: 4px;
        color: #0096ff;
      }
    }
  }
}
// 分页
.paging {
  padding: 28px;
  text-align: center;
  height: 50px;
  // background-color: #d3dfe7;
  /deep/ .number {
    width: 30px;
    height: 30px;
    line-height: 30px;
    // text-align: center;
    background: url(../../assets/imgs/index/pageIndBG.png) no-repeat center;
    color: #12222e;
    font-size: 14px;
    &.active {
      // 485463
      color: #fff;
      background: url(../../assets/imgs/index/pageindBG-ac.png) no-repeat center;
    }
    &:hover {
      color: #fff;
    }
  }
  /deep/ .el-icon {
    color: #12222e;
    background: #eff9ff;
  }
  /deep/ .btn-next,
  /deep/ .btn-prev {
    padding: 0 10px;
    width: 70px;
    height: 30px;
    background: url(../../assets/imgs/index/pageBG.png) no-repeat center /
      contain;
  }
}
</style>