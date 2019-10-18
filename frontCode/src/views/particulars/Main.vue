<template>
  <div class="main">
    <Top></Top>
    <Logo></Logo>
    <section id="content">
      <div class="wrapper type-area">
        <!-- 右上角tag -->
        <div class="con-tag">
          <ul>
            <li>
              <div
                @click="collect"
                :style="{backgroundImage: 'url('+collectBg+')'}"
                class="tag_icon tag_collect"
              ></div>
              <div>收藏</div>
            </li>
            <li>
              <div class="tag_icon tag_browse"></div>
              <div>瀏覽:</div>
              <div class="tag_browseNum">295次</div>
            </li>
          </ul>
        </div>
        <!-- 標題 title -->
        <div class="con-title">
          <div class="tit-text">【治具】需求單號{{this.orderInfo.bill_no}}</div>
          <div class="tit-info">
            <div
              class="info-price info-single"
            >接受單價: {{this.orderInfo.money_type ==="RMB" ? "￥":"$"}}{{this.orderInfo.total_price}}</div>
            <div class="info-num info-single">需求數量: {{this.orderInfo.amount}}</div>
            <div
              class="info-time info-single"
            >投標截止日期: {{this.orderInfo ? this.orderInfo.bid_end_date.split("T")[0] : ''}}</div>
          </div>
        </div>
        <!-- 主體內容 -->
        <div class="con-main">
          <!-- 進度 -->
          <!-- <div class="panel_progress">
            <div class="pan_pro_name pro_finished">
              <div class="text">發佈需求</div>
            </div>
            <div class="pan_pro_bar bar_finished"></div>
            <div class="pan_pro_name pro_finished">
              <div class="text">競價出標</div>
            </div>
            <div class="pan_pro_bar bar_inprogress"></div>
            <div class="pan_pro_name pro_unfinished">
              <div class="text">選標對比</div>
            </div>
            <div class="pan_pro_bar bar_unfinished"></div>
            <div class="pan_pro_name pro_unfinished">
              <div class="text">出貨驗收</div>
            </div>
            <div class="pan_pro_bar bar_unfinished"></div>
            <div class="pan_pro_name pro_unfinished">
              <div class="text">項目評價</div>
            </div>
          </div>-->
          <!-- 列表1 -->
          <div class="panel_info">
            <div class="pan_info_Top">
              <!-- 基本信息 -->
              <div class="baseInfo">
                <div class="ba_title">
                  <span>基本信息</span>
                </div>
                <table class="ba_content">
                  <tr>
                    <td>需求單位</td>
                    <td>:</td>
                    <td class="blueTd">
                      <span></span>
                      {{this.orderInfo ? this.orderInfo.send_user.dept_name : ''}}
                    </td>
                  </tr>
                  <tr>
                    <td>交易法人名稱</td>
                    <td>:</td>
                    <td>{{this.orderInfo ? this.orderInfo.send_user.legal_person: ''}}</td>
                  </tr>
                  <tr>
                    <td>交貨地點</td>
                    <td>:</td>
                    <td>{{this.orderInfo.deliver_address}}</td>
                  </tr>
                  <tr>
                    <td>競價開始時間</td>
                    <td>:</td>
                    <td>{{this.orderInfo?this.orderInfo.bid_start_date.split("T")[0]:""}}</td>
                  </tr>
                  <tr>
                    <td>競價結束時間</td>
                    <td>:</td>
                    <td>{{this.orderInfo?this.orderInfo.bid_end_date.split("T")[0]:""}}</td>
                  </tr>
                  <tr>
                    <td>實際交貨時間</td>
                    <td>:</td>
                    <td>{{this.orderInfo?this.orderInfo.deliver_date.split("T")[0]:""}}</td>
                  </tr>
                  <tr>
                    <td>用途</td>
                    <td>:</td>
                    <td>{{this.orderInfo.pd_type}}</td>
                  </tr>
                  <tr>
                    <td>費用代碼</td>
                    <td>:</td>
                    <td>{{this.orderInfo ? this.orderInfo.send_user.cost_code: ''}}</td>
                  </tr>
                  <tr>
                    <td>接受總價</td>
                    <td>:</td>
                    <td>{{this.orderInfo.total_price}}</td>
                  </tr>
                  <tr>
                    <td>幣別</td>
                    <td>:</td>
                    <td>{{this.orderInfo.money_type}}</td>
                  </tr>
                  <tr>
                    <td>競標範圍</td>
                    <td>:</td>
                    <td>{{this.orderInfo.bid_range}}</td>
                  </tr>
                  <tr>
                    <td>交貨方式</td>
                    <td>:</td>
                    <td>{{this.orderInfo.deliver_way}}</td>
                  </tr>
                </table>
              </div>
              <!-- 圖檔附件 -->
              <div class="accessory">
                <div class="ac_title">
                  <span>圖檔附件</span>
                </div>
                <div class="ac_content">
                  <div
                    class="ac_con_item"
                    v-for="(item) in this.orderInfo.file_list"
                    :key="item.pkid"
                    @click="downloadOne(item.file_save_path, item.file_save_name, item.file_origin_name)"
                  >
                    <div class="item-wrapper">
                      <div class="itemIcon"></div>
                      <div class="itemName">{{item.file_origin_name}}</div>
                      <div class="itemNum">{{item.part_amunt}}</div>
                    </div>
                  </div>
                </div>
                <div class="ac_allDownload" @click="downloadAll">全部下載</div>
              </div>
            </div>
            <!-- 製作要求 -->
            <div class="pan_info_req">
              <div class="req_title">
                <span>製作要求</span>
              </div>
              <pre class="req_content">{{this.orderInfo.make_requ}}</pre>
            </div>
            <!-- 立即參與按鈕 -->
            <div class="pan_info_join" @click="alertBoxShow()" v-if="send_recv_type !== 'send'">
              <svg width="265px" height="65px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon
                  points="0,5 5,0 260,0 265,5 265,60 260,65 5,65 0,60 0,5"
                  style="fill:none;stroke:#0096FF;stroke-width:1"
                />
                <rect x="2" y="2" width="261" height="61" style="fill:#0096FF;" />
                <polyline
                  points="10,13 10,6 6,6 6,10 13,10 13,6 252,6 252,10 259,10 259,6 255,6 255,13 259,13 259,52 255,52 255,59 259,59 259,55 252,55 252,59 13,59 13,55 6,55 6,59 10,59 10,52 6,52 6,14 11,14"
                  style="fill:none;stroke:#3FB0FF;stroke-width:2;"
                />
              </svg>
              <span>立即參與</span>
            </div>
          </div>
          <!-- 列表2 -->
          <div class="panel_info_sec">
            <!-- 競標單位 -->
            <div class="biddingUnits">
              <div class="bid_title">
                <span>競標單位</span>
              </div>
              <div v-if="orderInfo.give_recv_user_list && orderInfo.give_recv_user_list.length > 0" class="bid_content">
                <div
                  class="bid_con_item"
                  v-for="(item) in orderInfo.give_recv_user_list"
                  :key="item.pkid"
                >
                  <div :class="{active: item.f_win_bid==='Y'}" class="item-wrapper" @click="saveToLocal(item)">
                    <span class="icon"></span>
                    <router-link to="/merchant/information">{{item.dept_name}}</router-link>
                  </div>
                </div>
              </div>
              <div v-else class="bid_content">
                <p style="color:#626f7f;">暫無投標</p>
              </div>
            </div>
            <!-- 項目評價 -->
            <div class="evaluate">
              <div class="eva_title">
                <span>項目評價</span>
              </div>
              <div class="eva_content">
                <p>確實不錯，交付很快，質量杠杠滴。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
    <!-- 彈窗 -->
    <section id="alertBox" v-show="alertBoxFlag">
      <div class="content">
        <div class="con_top">
          <div class="boxName">接單競價</div>
          <div class="closeBox" @click="alertBoxShow"></div>
        </div>
        <div class="con_form">
          <!-- 標題 title -->
          <div class="con_form_title">
            <div class="tit_text">【治具】需求單號A3000028</div>
            <div class="tit_info">
              <div class="tit_info_single">接受單價: 50000元</div>
              <div class="tit_info_single">需求數量: 10</div>
              <div class="tit_info_single">投標剩餘時間: 14天19小時08分2秒</div>
            </div>
          </div>
          <!-- 表格1 -->
          <div class="con_form_listOne">
            <div class="listOne_info">投標法人: Mac(I)製一處; 法人代碼: TOU12345</div>
            <table cellspacing="0" cellpadding="0" class="listOne_table">
              <tr>
                <th>幣別</th>
                <th>報價（元）</th>
                <th>交期</th>
                <th>理由說明</th>
              </tr>
              <tr>
                <td>RMB</td>
                <td>
                  <input type="number" class="form_input" v-model="bidprice" />
                </td>
                <td>2019-09-30</td>
                <td>
                  <textarea name id cols="30" rows="4" v-model="bidReason" style="margin: 10px 0;"></textarea>
                  <!-- <input type="" class="form_input" /> -->
                </td>
              </tr>
            </table>
          </div>
          <!-- 表格2 -->
          <div class="con_form_listSec">
            <div class="listSec_info">
              <div>報價清單:</div>
              <div>
                <div class="up-icon"></div>
                <div class="up-text">批量上傳報價清單</div>
                <div class="dow-text">下載模板</div>
              </div>
            </div>
            <table class="listSec_table" cellspacing="0" cellpadding="0">
              <tr>
                <th>零件名</th>
                <th>數量</th>
                <th>報價（元/個）</th>
                <th>小計（元）</th>
              </tr>
              <tr v-for="item in quotatList" :key="item.id">
                <td>{{item.name}}</td>
                <td>{{item.num}}</td>
                <td>
                  <input type="number" v-model="item.price" class="form_input" />
                </td>
                <td>{{item.num * item.price}}</td>
              </tr>
              <tr>
                <td>總計</td>
                <td></td>
                <td></td>
                <td>{{totalPrices}}</td>
              </tr>
            </table>
            <!-- <div class="listSec_add">
              <div class="addIcon"></div>
              <div>添 加</div>
            </div>-->
          </div>
          <!-- footer -->
          <div class="con_form_footer">
            <!-- 同意協議 -->
            <div class="foo_agreement">
              <label for="agree">
                <input id="agree" type="checkBox" />
                我已仔细阅读此竞标信息，并对我提交的信息负责。
              </label>
            </div>
            <!-- 開始競價按鈕 -->
            <div class="foo_startBtn">
              <svg width="265px" height="65px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon
                  points="0,5 5,0 260,0 265,5 265,60 260,65 5,65 0,60 0,5"
                  style="fill:none;stroke:#0096FF;stroke-width:1"
                />
                <rect x="2" y="2" width="261" height="61" style="fill:#0096FF;" />
                <polyline
                  points="10,13 10,6 6,6 6,10 13,10 13,6 252,6 252,10 259,10 259,6 255,6 255,13 259,13 259,52 255,52 255,59 259,59 259,55 252,55 252,59 13,59 13,55 6,55 6,59 10,59 10,52 6,52 6,14 11,14"
                  style="fill:none;stroke:#3FB0FF;stroke-width:2;"
                />
              </svg>
              <span>開始競價</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Top from "@/components/Top";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

import { query_bill_by_pkid } from "@/api/order";
import { downLoad } from "@/api/file";
import { getAccess } from "@/assets/js/getInfo";

import { mapState } from "vuex";

export default {
  data: function() {
    return {
      // 查詢到的信息
      orderInfo: "",
      // 進度條
      progress: [],
      // 收藏
      collectFlag: false,
      // 收藏圖標背景圖
      collectBg: require("../../assets/imgs/particulars/collect.png"),
      // 彈窗
      alertBoxFlag: false,
      // 圖檔附件數據
      accessoryData: [
        { itemIcon: "", itemName: "K1.pdf", itemNum: "1" },
        { itemIcon: "", itemName: "K2.pdf", itemNum: "113" },
        { itemIcon: "", itemName: "K3.pdf", itemNum: "3" },
        { itemIcon: "", itemName: "K4.pdf", itemNum: "1" },
        { itemIcon: "", itemName: "K5.pdf", itemNum: "5" },
        { itemIcon: "", itemName: "K6.pdf", itemNum: "21" },
        { itemIcon: "", itemName: "K7.X12.C3.pdf", itemNum: "1" },
        { itemIcon: "", itemName: "K8.pdf", itemNum: "1" },
        { itemIcon: "", itemName: "K9.pdf", itemNum: "7" },
        { itemIcon: "", itemName: "K10.pdf", itemNum: "1" },
        { itemIcon: "", itemName: "K11.pdf", itemNum: "2" },
        { itemIcon: "", itemName: "K12.L11.pdf", itemNum: "1" },
        { itemIcon: "", itemName: "K13.pdf", itemNum: "1" },
        { itemIcon: "", itemName: "K1.pdf", itemNum: "1" },
        { itemIcon: "", itemName: "K2.pdf", itemNum: "113" },
        { itemIcon: "", itemName: "K3.pdf", itemNum: "3" },
        { itemIcon: "", itemName: "K4.pdf", itemNum: "1" },
        { itemIcon: "", itemName: "K5.pdf", itemNum: "5" }
      ],
      // 報價
      bidprice: "",
      // 報價理由
      bidReason: "",
      // 報價清單
      quotatList: [
        { id: "1", name: "螺帽1", num: "2", price: "" },
        { id: "2", name: "螺帽2", num: "2", price: "" },
        { id: "3", name: "螺絲1", num: "5", price: "" },
        { id: "4", name: "螺絲2", num: "8", price: "" },
        { id: "5", name: "螺絲3", num: "2", price: "" }
      ],
      // 競標單位數據
      biddingUnits: [
        { name: "鴻富錦成都Mac(I)製造一處", success: false },
        { name: "鴻富錦成都Mac(I)製造一處", success: false },
        { name: "鴻富錦成都Mac(I)製造一處", success: false },
        { name: "鴻富錦成都Mac(I)製造一處", success: false },
        { name: "鴻富錦成都Mac(I)製造一處", success: false },
        { name: "鴻富錦成都Mac(I)製造一處", success: true },
        { name: "鴻富錦成都Mac(I)製造一處", success: false },
        { name: "鴻富錦成都Mac(I)製造一處", success: false },
        { name: "鴻富錦成都Mac(I)製造一處", success: false },
        { name: "鴻富錦成都Mac(I)製造一處", success: false },
        { name: "鴻富錦成都Mac(I)製造一處", success: false }
      ],
      // 是否參與
      joinFlag: false
    };
  },
  methods: {
    // 收藏事件
    collect() {
      this.collectFlag = !this.collectFlag;
      this.collectBg = this.collectFlag
        ? require("../../assets/imgs/particulars/collected.png")
        : require("../../assets/imgs/particulars/collect.png");
    },
    // 彈窗
    alertBoxShow() {
      if (this.send_recv_type == "recv") {
        // 判斷是否參加過
        for (let item of this.orderInfo.give_recv_user_list) {
          if (item.pkid == this.my_pkid) {
            // 如果參加過 退出循環
            this.joinFlag = true;
            this.$message.warning("您已參與！");
            return;
          }
        }
        var flag = this.alertBoxFlag ? false : true;
        return (this.alertBoxFlag = flag);
      } else {
        this.$message.warning("請先登錄！");
      }
    },
    // 獲取信息
    getInfo() {
      query_bill_by_pkid(this.pkid).then(res => {
        console.log(res);
        if (res.code === "1") {
          this.orderInfo = res.t;
        }
      });
    },
    // 下載文件
    downloadOne(path, name, originName) {
      if (this.send_recv_type == "recv") {
        window.open(getAccess(path, name, originName));
      } else {
        this.$message.warning("請先登錄");
      }
    },
    downloadAll() {
      for (let item of this.orderInfo.file_list) {
        console.log(item);
        this.downloadOne(
          item.file_save_path,
          item.file_save_name,
          item.file_origin_name
        );
      }
    },

    // 把數據保存在本地 
    saveToLocal(item){
      sessionStorage.setItem('merchantInfo', JSON.stringify(item))
    }
  },
  components: {
    Top,
    Logo,
    Footer
  },
  computed: {
    ...mapState({
      send_recv_type: state =>
        state.userInfo ? state.userInfo.send_recv_type : "",
      my_pkid: state => (state.userInfo ? state.userInfo.pkid : "")
    }),
    // 計算總價值
    totalPrices() {
      var val = 0;
      for (let i in this.quotatList) {
        val += this.quotatList[i].num * this.quotatList[i].price;
      }
      return val;
    }
  },
  created() {
    this.pkid = this.$router.history.current.query.pkid;
    this.getInfo();
  }
};
</script>

<style lang="less" scoped>
// 避免弹窗页遮罩层高度不适应
.main {
  position: relative;
}
#content {
  background: #12222e url(../../assets/imgs/particulars/contentBG.png) no-repeat
    top center / contain;
  background-size: 120%;
  position: relative;
  // 小標籤
  .con-tag {
    display: flex;
    justify-content: flex-end;
    color: #627887;
    font-size: 14px;
    padding-top: 10px;
    li {
      float: left;
      margin-left: 28px;
      display: flex;
      align-items: center;
    }
  }
  .tag_icon {
    margin-right: 8px;
  }
  .tag_collect {
    cursor: pointer;
    width: 18px;
    height: 18px;
    background-repeat: no-repeat;
    // background: url() no-repeat;
  }
  .tag_browse {
    width: 18px;
    height: 12px;
    background: url(../../assets/imgs/particulars/browse.png) no-repeat;
  }
  // 標題內容
  .con-title {
    text-align: center;
    margin-top: 24px;
  }
  // 標題名
  .tit-text {
    font-size: 30px;
    color: #212f3a;
  }
  // 其餘相關信息
  .tit-info {
    display: flex;
    justify-content: center;
    margin-top: 24px;

    .info-single {
      margin: 0 20px;
      font-size: 14px;
      color: #212f3a;
    }
  }
  // 主體內容
  .con-main {
    width: 100%;
    background: rgba(13, 28, 42, 0.2);
    margin-top: 24px;
    box-sizing: border-box;
    padding: 20px;
  }
  // 主體-進度
  .panel_progress {
    margin: 28px 60px 20px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pan_pro_name {
    color: #12222e;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &.pro_finished {
      color: #d7efff;
    }
    .text {
      font-size: 18px;
    }
    // .time {
    //   margin-top: 12px;
    //   font-size: 12px;
    //   color: #aac0cf;
    // }
  }
  .pan_pro_bar {
    width: 127px;
    height: 34px;
    background-repeat: no-repeat;
    background-position: center;
    &.bar_finished {
      background-image: url(../../assets/imgs/particulars/bar-finished.png);
    }
    &.bar_inprogress {
      background-image: url(../../assets/imgs/particulars/bar-inprogress.png);
      position: relative;
      &:after {
        content: "進行中";
        display: block;
        position: absolute;
        top: -32px;
        left: 32px;
        width: 60px;
        height: 29px;
        background: url(../../assets/imgs/particulars/processTag.png) no-repeat;
        text-align: center;
        color: #fff;
        line-height: 24px;
      }
    }
    &.bar_unfinished {
      background-image: url(../../assets/imgs/particulars/bar-unfinished.png);
    }
  }

  // info公共樣式
  .ba_title,
  .ac_title,
  .req_title,
  .bid_title,
  .eva_title {
    position: relative;
    width: 100px;
    height: 35px;
    background: url(../../assets/imgs/particulars/infoTitleBG.png) no-repeat;
    span {
      color: #fff;
      font-size: 16px;
      position: absolute;
      left: 14%;
      top: 32%;
    }
  }
  // info公共樣式結束

  // 主體-信息
  .panel_info {
    // margin-top: 24px;
    padding: 32px 50px;
    background: #d3dfe7;
  }
  .pan_info_Top {
    display: flex;
    justify-content: space-between;
  }
  // 【基本信息】
  .baseInfo {
    table {
      margin-top: 18px;
      td {
        height: 24px;
        &:nth-child(1) {
          font-size: 16px;
          color: #626f7f;
          // 文本居中
          // text-align:center;
          text-align: justify;
          // text-justify:distribute-all-lines;
          text-align-last: justify;
        }
        &:nth-child(2) {
          width: 20px;
          color: #626f7f;
        }
        &:nth-child(3) {
          &.blueTd {
            color: #0096ff;
            span {
              display: inline-block;
              width: 16px;
              height: 15px;
              background: url(../../assets/imgs/particulars/plane.png) no-repeat;
            }
          }
        }
      }
    }
  }
  // 【圖檔附件】
  .accessory {
    position: relative;
  }
  .ac_content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 680px;
    margin-top: 22px;
  }
  // 單獨的元素包裹框
  .ac_con_item {
    width: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    height: 34px;
    box-sizing: border-box;
    transition-duration: 0.1s;
    &:hover {
      border: 1px solid #0092ff;
      background-color: #aedfff;
      .item-wrapper::after {
        opacity: 1;
      }
      .itemNum {
        opacity: 0;
      }
    }
    .item-wrapper {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 150px;
      margin: 0 auto;
      &::after {
        display: block;
        content: "";
        width: 16px;
        height: 16px;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background: url(../../assets/imgs/particulars/check.png) no-repeat;
        opacity: 0;
        transition-duration: 0.2s;
        cursor: pointer;
      }
    }
    .itemIcon {
      width: 32px;
      height: 27px;
      background: url(../../assets/imgs/particulars/Excel.png) no-repeat;
    }
    .itemName {
      width: 80px;
      overflow: hidden;
    }
    .itemNum {
      width: 22px;
      text-align: center;
      font-size: 12px;
      color: #626f7f;
      overflow: hidden;
    }
  }

  // 全部下載按鈕
  .ac_allDownload {
    width: 120px;
    height: 44px;
    float: right;
    margin-top: 24px;
    margin-right: 20px;
    background-color: #2e6e9e;
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 44px;
    cursor: pointer;
  }

  // 【製作要求】
  .pan_info_req {
    margin-top: 60px;
    .req_content {
      margin-top: 22px;
    }
    p {
      color: #212f3a;
      font-size: 16px;
      height: 28px;
    }
    /* 修改首要字體 */
    @font-face {
      font-family: "myFont";
      src: url("/src/assets/font/STZHONGS.TTF");
    }
    pre {
      font-family: "myFont", "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      height: 100%;
      line-height: 1.5rem;
      // 自動換行
      word-wrap: break-word;
      white-space: pre-wrap;
    }
  }
  // 參與按鈕
  .pan_info_join {
    margin: 72px auto 30px;
    width: 265px;
    height: 65px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    position: relative;
    > span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  // 主體-信息二
  .panel_info_sec {
    margin-top: 10px;
    padding: 32px 50px;
    background: #d3dfe7;
  }
  // 【競標單位】
  .bid_content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 22px;
  }
  .bid_con_item {
    width: 25%;
    height: 46px;
    box-sizing: border-box;
    color: #626f7f;
    font-size: 16px;
    > .item-wrapper {
      display: flex;
      align-items: center;
      &.active {
        > span {
          opacity: 1;
        }
        > a {
          color: #ff0004;
        }
      }
      > span {
        display: block;
        width: 16px;
        height: 21px;
        background: url(../../assets/imgs/particulars/winIcon.png) no-repeat;
        opacity: 0;
        margin-right: 6px;
      }
      > a {
        color: #626f7f;
      }
    }
  }
  // 【項目評價】
  // .evaluate {
  // }
  .eva_content {
    margin-top: 22px;
    > p {
      font-size: 16px;
      color: #626f7f;
    }
  }
}

// 彈框
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
  .con_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .boxName {
      font-size: 18px;
      color: #12222e;
    }
    .closeBox {
      width: 24px;
      height: 24px;
      background: url(../../assets/imgs/particulars/closeAlertBox.png) no-repeat;
      cursor: pointer;
    }
  }
  // 表單信息
  .con_form {
    width: 85%;
    margin: 0 auto;
  }
  .con_form_title {
    text-align: center;
    .tit_text {
      font-size: 30px;
      color: #0092ff;
    }
    .tit_info {
      display: flex;
      justify-content: center;
      margin-top: 18px;
    }
    .tit_info_single {
      margin: 0 20px;
      font-size: 14px;
      color: #0092ff;
    }
  }
  // 表格一
  .con_form_listOne {
    margin-top: 40px;
  }
  .listOne_info {
    font-size: 14px;
    color: #212f3a;
  }
  .listOne_table {
    margin-top: 15px;
    width: 100%;
    border-collapse: collapse;
    // border: 1px solid #C0C8CF;
    th {
      background-color: #c8d4de;
    }
    td,
    th {
      font-size: 16px;
      color: #212f3a;
      border: 1px solid #c0c8cf;
      text-align: center;
      height: 50px;
      font-weight: 400;
    }
  }
  // 表格二
  .con_form_listSec {
    margin-top: 40px;
  }
  .listSec_info {
    font-size: 16px;
    color: #212f3a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div:nth-child(1) {
      color: #0096ff;
    }
    > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .up-icon {
      width: 21px;
      height: 19px;
      background: url(../../assets/imgs/particulars/link-icon.png) no-repeat;
      cursor: pointer;
    }
    .up-text {
      color: #0f1e29;
      margin-right: 20px;
      cursor: pointer;
    }
    .dow-text {
      color: #0096ff;
      cursor: pointer;
    }
  }
  .listSec_table {
    margin-top: 15px;
    width: 100%;
    border-collapse: collapse;
    // border: 1px solid #C0C8CF;
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
  .form_input {
    // border: 1px solid #d3dfe7;
    // border-radius: 0px;
    text-align: center;
    // background: #d3dfe7;
    // border: 1px solid #ccc;
    &:focus {
      // border-color: #0092ff;
    }
  }
  .listSec_add {
    width: 120px;
    height: 36px;
    margin-top: 20px;
    background-color: #9ab0c3;
    color: #fff;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    > .addIcon {
      width: 15px;
      height: 15px;
      background: url(../../assets/imgs/particulars/add.png) no-repeat;
      margin-right: 14px;
    }
  }
  // 底部
  .con_form_footer {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  // 同意協議
  .foo_agreement {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #212f3a;
    label {
      display: flex;
      align-items: center;
    }
    input {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
  }
  // 開始競價按鈕
  .foo_startBtn {
    margin: 20px 0;
    width: 265px;
    height: 65px;
    line-height: 64px;
    color: #fff;
    font-size: 20px;
    position: relative;
    > span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>