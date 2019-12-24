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
      <div class="sort" style="position:relative">
        <!-- 展示按鈕 -->
        <div class="sort_btn" @click="sortFlag = !sortFlag">
          <span>排序：</span>
          <span>{{ sortBy | sortNameFormat }}</span>
          <img src="../../assets/imgs/demand/arrow.png" alt />
        </div>
        <div class="classifyList" v-show="sortFlag">
          <span
            v-for="item in classifyList"
            :key="item.id"
            :class="{ active: sortBy == item.val }"
            @click="selectClassfiy(item.val)"
            >{{ item.name }}</span
          >
        </div>
      </div>
    </div>
    <!-- 標題 -->
    <div class="title" v-if="billInfo">
      <div class="tit_text">
        【模具】需求單號{{ billInfo.bill_no }}&nbsp;需求量:{{ billInfo.amount }}
        <router-link :to="'/particulars?pkid=' + pkid" class="title_btn"
          >詳情</router-link
        >
      </div>
      <div class="tit_info">
        我的報價: {{ billInfo.total_price }}&nbsp;{{ billInfo.money_type }}
      </div>
      <div class="tit_info">發佈時間: {{ billInfo.publish_date }}</div>
      <div class="tit_unit">
        當前項目投標單位數
        <span>{{
          billInfo.give_recv_user_list ? billInfo.give_recv_user_list.length : 0
        }}</span>
      </div>
    </div>
    <!-- 表格信息 -->
    <table
      style="width:100%; text-align:center; border-collapse:collapse;"
      v-if="give_price_list"
    >
      <!-- 表頭 -->
      <tr>
        <th style="min-width: 40px;">排名</th>
        <th style="min-width: 160px;">單位</th>
        <th style="min-width: 60px;">總報價</th>
        <th style="min-width: 180px;">廠商報價</th>
        <th style="min-width: 100px;">交期</th>
        <th style="min-width: 140px;">備註</th>
        <th style="min-width: 140px;">操作</th>
      </tr>
      <!--  -->
      <tr v-for="(singleList, index) in give_price_list" :key="singleList.pkid">
        <td>{{ index + 1 + (currentPage - 1) * pageSize }}</td>
        <td>
          <router-link
            :to="'/merchant/information?pkid=' + singleList.recv_user.pkid"
            style="color:#0096ff"
            >{{ singleList.recv_user.dept_name }}</router-link
          >
        </td>
        <td>{{ singleList.total_price * billInfo.amount }}</td>
        <td>
          <div class="detailList">
            <span>{{ singleList.total_price }}</span>
            <div class="showList" @click="getSlavList(singleList)">
              <!-- @click="alertBoxShow(), " -->
              <span></span>
              標書
            </div>
          </div>
        </td>
        <td>{{ singleList.deliver_date.split(" ")[0] }}</td>
        <td>{{ singleList.descp }}</td>
        <td
          v-if="billInfo.bill_status === '1'"
          :class="chooseToWinFlag? 'chooseToWin':'chooseToWinDisabled' "
          @click="chooseToWin(singleList.pkid, singleList.recv_user.dept_name)"
        >          
          选为中标
        </td>
        <td v-else>
          <img
            v-if="singleList.f_win_bid === 'Y'"
            src="../../assets/imgs/demand/winImg.png"
            alt
          />
        </td>
      </tr>
      <tr v-if="give_price_list.length == 0">
        <td colspan="7">暫無數據</td>
      </tr>
    </table>

    <!-- 分頁 -->
    <Paging
      :total="total"
      :current-page="currentPage"
      :page-size="pageSize"
      @getCurrentPage="getListDate"
    ></Paging>
  </div>
</template>

<script>
import Paging from "@/components/paging/Paging";
import {
  query_bill_by_pkid,
  query_give_price_list,
  select_win_bid
} from "@/api/order";

export default {
  data() {
    return {
      // 是否能選標
      chooseToWinFlag: false,
      sortItem: "",
      // 總數據量
      total: 1,
      // 當前頁數
      currentPage: 1,
      // 每一頁長度
      pageSize: 8,
      pkid: "",
      // 數據
      give_price_list: [],
      // 訂單信息
      billInfo: {},
      // 零件清單信息
      slav_list: [],
      // 排序
      classifyList: [
        { id: 1, name: "綜合排序", val: "complex" },
        { id: 2, name: "價格優先", val: "price" },
        { id: 3, name: "交期優先", val: "date" }
      ],
      // 默認 | 選中 的排序方式
      sortBy: "complex",
      // 是否展開
      sortFlag: false,
      // ==================
      excelList: [],
      autoWidth: true,
      bookType: "xlsx",
      filename: "",
      // ==================
      recvPkid: ""
    };
  },
  methods: {
    // 查看報價清單
    checkList() {
      sessionStorage.setItem("biddinfdDoc", JSON.stringify(this.billInfo));
      sessionStorage.setItem("recvPkid", JSON.stringify(this.recvPkid));
      // const url = "/biddingDoc?loaded=true&pkid=" + this.pkid;
      let routeData = this.$router.resolve({
        path: "/biddingDoc",
        query: { loaded: true, pkid: this.pkid }
      });
      window.open(routeData.href, "_blank");
    },

    // 選中的項
    selectClassfiy(val) {
      this.sortBy = val;
      this.sortFlag = false;
    },

    // 獲取零件清單信息
    getSlavList(singleList) {
      const pkid = singleList.pkid;
      this.recvPkid = singleList.recv_user_pkid;
      sessionStorage.setItem(
        "deliverDate",
        JSON.stringify(singleList.deliver_date)
      );
      for (let item of this.give_price_list) {
        if (item.pkid == pkid) {
          sessionStorage.setItem("slavList", JSON.stringify(item.slav_list));
          this.checkList();

          this.slav_list = item.slav_list;
          this.getExcelList(item);
          return;
        }
      }
    },

    // 判斷是否能選擇中標
    getTimeStatus() {
      let endDate = new Date(this.billInfo.bid_end_date);
      let nowDate = new Date();
      this.chooseToWinFlag  = nowDate > endDate ?  true : false
    },

    // 選為中標
    chooseToWin(pkid, deptName) {
      if(!this.chooseToWinFlag){
        return this.$alert('競標結束時間未到，不能選標！', '警告', {
          confirmButtonText: '确定',
          // callback: action => {}
        });
      }

      this.$confirm('请确认是否将 "' + deptName + '" 选为中标单位?', "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          select_win_bid(pkid).then(res => {
            if (res.code === "1") {
              this.getBillInfo();
              this.getListDate(
                Number(sessionStorage.getItem("demandDetailsCurrentPage"))
              );
              this.$message({
                type: "success",
                message: "成功!"
              });
            } else {
              this.$message.error(res.msg);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },

    // 向後端發起請求獲取數據
    getListDate(page = 1) {
      this.currentPage = Number(page);
      sessionStorage.setItem("demandDetailsCurrentPage", this.currentPage);
      const data = {
        bill_pkid: this.pkid,
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
        sort_way: this.sortBy
      };
      query_give_price_list(data).then(res => {
        if (res.code === "1") {
          // 清空原有數據
          this.give_price_list = [];
          this.total = res.t.row_total;
          const listData = res.t.give_price_list;
          this.changeListData(listData);
        } else {
          this.$message.error(res.msg);
        }
      });
    },

    // 修改展示列表數據
    changeListData(listData) {
      for (let item of listData) {
        this.give_price_list.push(item);
      }
    },

    // 查詢訂單信息
    getBillInfo() {
      query_bill_by_pkid(this.pkid).then(res => {
        if (res.code === "1") {
          this.billInfo = res.t;
          this.getTimeStatus();
        } else {
          this.$message.error(res.msg);
        }
      });
    },

    // excelList
    getExcelList(val) {
      var list = [];
      var num = 1;
      for (let item of this.slav_list) {
        const obj = {
          a: num,
          b: item.part_doc_file ? item.part_doc_file.file_origin_name : "其它",
          c: item.part_name,
          d: item.part_amunt || 0,
          e: item.part_unit_price || 0,
          f: item.part_price_sum || 0
        };
        num++;
        list.push(obj);
      }

      const recv = val.recv_user;
      const send = this.billInfo.send_user;
      const billInfo = this.billInfo;

      const info = [
        // 訂單信息
        // 交易類型 交易法人 交易代碼 交易地點 需求時間 交易幣別
        {
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          a: "訂單信息：",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          a: "交易類型",
          b: billInfo.pd_type,
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          a: "交易法人",
          b: send.legal_person,
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          a: "交易地點",
          b: billInfo.deliver_address,
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          a: "需求時間",
          b: billInfo.deliver_date,
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          a: "交易幣別",
          b: billInfo.money_type,
          c: "",
          d: "",
          e: "",
          f: ""
        },

        // 單位信息
        {
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          a: "單位信息：",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          a: "接單方",
          b: recv.dept_name,
          c: "",
          d: "發單方(需求方)",
          e: send.dept_name,
          f: ""
        },
        {
          a: "聯絡人",
          b: recv.busis_mngr,
          c: "",
          d: "聯絡人",
          e: send.busis_mngr,
          f: ""
        },
        {
          a: "移動電話",
          b: recv.phone,
          c: "",
          d: "移動電話",
          e: send.phone,
          f: ""
        },
        {
          a: "固定電話",
          b: recv.tel,
          c: "",
          d: "固定電話",
          e: send.tel,
          f: ""
        }
      ];

      for (let single of info) {
        list.push(single);
      }
      this.excelList = list;
    },

    // 導出excel
    exportExcel() {
      import("@/assets/js/Export2Excel.js").then(moudle => {
        const tHeader = [
          "序號",
          "零件名",
          "零件名(接單方定義)",
          "數量",
          "單價(" + this.billInfo.money_type + ")",
          "金額(" + this.billInfo.money_type + ")"
        ];
        const filterVal = ["a", "b", "c", "d", "e", "f"];
        const list = this.excelList;
        const data = this.formatJson(filterVal, list);
        moudle.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.billInfo.bill_no || "filename",
          autoWidth: this.autoWidth,
          bookType: this.bookType
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }
  },
  components: {
    Paging
  },
  created() {
    this.pkid = this.$router.history.current.query.pkid;

    // 獲取分頁數據
    let page = Number(sessionStorage.getItem("demandDetailsCurrentPage"));
    page = page ? page : 1;
    this.getListDate(page);

    // 查詢訂單信息
    this.getBillInfo();
  },
  filters: {
    // 過濾排序名稱的顯示
    sortNameFormat(val) {
      if (!val) return "";
      switch (val) {
        case "complex":
          return "綜合排序";
        case "price":
          return "價格優先";
        case "date":
          return "時間優先";
      }
    }
  },
  watch: {
    sortBy: function() {
      this.getListDate();
    }
  },
  computed: {}
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
// 排序
.sort {
  color: #626f7f;
  font-size: 14px;
}
.sort_btn {
  width: 160px;
  height: 30px;
  border: 1px solid #c0c8cf;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  span {
    display: inline-block;
  }
  span:nth-child(2) {
    text-align: left;
    width: 60px;
  }
}
.classifyList {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #d7efff;
  width: 130px;
  z-index: 1;
  span {
    display: block;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    &.active,
    &:hover {
      color: #0096ff;
    }
  }
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
    cursor: pointer;
  }
}
.tit_info {
  color: #626f7f;
  margin-top: 10px;
}
.tit_unit {
  color: #626f7f;
  margin: 24px 0 16px;
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
  }
  .detailList {
    display: flex;
    > span {
      width: 60%;
    }
  }
  .showList {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #0096ff;
    span:nth-child(1) {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-image: url("../../assets/imgs/demand/look_gray.png");
      background-repeat: no-repeat;
      margin-right: 4px;
    }
    &:hover {
      span:nth-child(1) {
        background-image: url("../../assets/imgs/demand/look.png");
      }
    }
  }
  .chooseToWin {
    color: #0096ff;
    cursor: pointer;
  }
  .chooseToWinDisabled{
    color: #626f7f;
    cursor: not-allowed;
  }
}
// 分页
.paging {
  padding: 28px;
  text-align: center;
  height: 50px;
  /deep/ .number {
    width: 30px;
    height: 30px;
    line-height: 30px;
    background: url(../../assets/imgs/index/pageIndBG.png) no-repeat center;
    color: #12222e;
    font-size: 14px;
    &.active {
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
//
#alertBox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  .content {
    position: fixed;
    width: 1200px;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #d3dfe7;
    padding: 20px;
    box-sizing: border-box;
    // 窗口滾動
    height: 740px;
    overflow: scroll;
    /* 滚动槽 */
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 3px;
      background: rgba(0, 0, 0, 0.06);
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
    }
    /* 滚动条滑块 */
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: rgba(0, 0, 0, 0.12);
      -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    }
  }
  // 頂部信息
  .closeBox {
    width: 24px;
    height: 24px;
    background: url(../../assets/imgs/particulars/closeAlertBox.png) no-repeat;
    cursor: pointer;
    float: right;
  }
  .con_form {
    width: 85%;
    margin: 40px auto 0;
  }
  .list_info {
    color: #0096ff;
  }
  .list_table {
    margin-top: 15px;
    width: 100%;
    border-collapse: collapse;
    th {
      background-color: #c8d4de;
    }
    td,
    th {
      font-size: 16px;
      color: #212f3a;
      border: 1px solid #c0c8cf;
      text-align: center;
      height: 40px;
      font-weight: 400;
    }
  }
}
</style>
