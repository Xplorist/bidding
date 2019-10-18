<template>
  <div class="home">
    <Top></Top>
    <Logo></Logo>
    <section id="content">
      <!-- 左上角tag -->
      <div class="con-tag type-area">
        <ul>
          <li>交易總額: ￥95,371,863元</li>
          <li>需求總量: 3,537個</li>
          <li>競標單位: 26個</li>
        </ul>
      </div>
      <!-- 主體內容：模治檢具任務需求 -->
      <div class="con-req type-area">
        <!-- 標題 -->
        <div class="panel-title">
          <!-- 左線條 -->
          <div class="left-line">
            <div class="theLine"></div>
            <div class="theBlock"></div>
          </div>
          <!-- 標題 -->
          <div class="center-text">模治檢具訂單</div>
          <!-- 右線條 -->
          <div class="right-line">
            <div class="theBlock"></div>
            <div class="theLine"></div>
          </div>
        </div>
        <!-- 篩選器 filter -->
        <div class="panel-filter">
          <div class="fil-scope">
            <div>目標範圍:</div>
            <select @change="filter('scope', $event)" disabled>
              <option value="all">全部</option>
              <option value="SHZBG">SHZBG</option>
            </select>
          </div>
          <div class="fil-state">
            <div>狀態:</div>
            <select @change="filter('state', $event)" disabled>
              <option value="all">全部</option>
              <option value="競標中">競標中</option>
              <option value="製作中">製作中</option>
              <option value="已完成">已完成</option>
            </select>
          </div>
          <div class="fil-site">
            <div>交貨地點:</div>
            <select @change="filter('site', $event)" disabled>
              <option value="all">全部</option>
              <option value="成都D23">成都D23</option>
              <option value="深圳C27">深圳C27</option>
            </select>
          </div>
          <div class="fil-time">
            <div>交貨時間:</div>
            <select @change="filter('time', $event)" disabled>
              <option value="all">默認</option>
              <option value="0-5">0-5天</option>
              <option value="5-10">5-10天</option>
              <option value="more">10天以上</option>
            </select>
          </div>
          <div class="fil-purpose">
            <div>用途:</div>
            <select @change="filter('purpose', $event)" disabled>
              <option value="all">全部</option>
              <option value="治具">治具</option>
              <option value="沖壓">沖壓</option>
              <option value="檢具">檢具</option>
              <option value="塑藝">塑藝</option>
            </select>
          </div>
        </div>
        <!-- 列表 -->
        <div class="panel-list">
          <div class="list-single" v-for="(item, index) in listData" :key="index">
            <div class="single-left">
              <!-- 用途 -->
              <div class="sin_l_pur">
                <div>{{item.purpose}}</div>
              </div>
              <div class="sin_l_info">
                <div class="info-top">
                  <div class="formNum">需求單號{{item.formNum}}</div>
                  <div class="state">
                    <div class="bidding">{{item.bill_status_text}}</div>
                    <div class="">{{item.deliver_address}}</div>
                    <div class="">{{item.bid_range}}</div>
                  </div>
                </div>
                <div class="info-bottom">
                  <div class="price">
                    <div class="kind">{{item.money_type == "RMB" ? "￥" : "$"}}</div>
                    <div class="num">{{item.price}}</div>
                  </div>
                  <div class="demand">
                    <div>需求量:</div>
                    <div class="num">{{item.demand}}</div>
                  </div>
                  <div class="unitNum">{{item.unitNum?item.unitNum : 0}}個單位已參與</div>
                </div>
              </div>
            </div>
            <div class="single-right">
              <div class="sin_r_left">
                <div class="sin_r_l_dep">
                  <div class="icon"></div>
                  <div class="text">{{item.dept_name}}</div>
                </div>
                <div class="sin_r_l_time">
                  <div>交貨時間:</div>
                  <div class="num">{{item.deliver_date}}</div>
                </div>
              </div>
              <div class="sin_r_right">
                <div>
                  <router-link :to="'/particulars?pkid='+item.pkid">查看/參與</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 分页 -->
        <div class="paging" style="backgroundColor:#D3DFE7">
          <Paging
            :total="total"
            :current-page="currentPage"
            :page-size="pageSize"
            @getCurrentPage="getListDate"
          ></Paging>
        </div>
      </div>
    </section>
    <Footer></Footer>
    <section id="fixBox">
      <!-- 頭像 -->
      <!-- <el-image style="width: 100px; height: 100px" src="../assets/imgs/index/portrait.png" fit="cover"></el-image> -->
      <img v-if="porImgUrl" style="width: 100px; height: 100px" :src="porImgUrl" alt />
      <!-- 功能 -->
      <div class="liFunc" v-if="porImgUrl">
        <div class="singleFunc collect">
          <div class="funcIcon"></div>
          <div class="funcText">收藏</div>
        </div>
        <div class="singleFunc history">
          <div class="funcIcon"></div>
          <div class="funcText">足跡</div>
        </div>
        <div class="singleFunc news">
          <div class="funcIcon"></div>
          <div class="funcText">消息</div>
          <div class="funcNum"></div>
        </div>
        <div class="singleFunc order">
          <div class="funcIcon"></div>
          <div class="funcText">我的訂單</div>
        </div>
      </div>
      <!-- 返回頂端 -->
      <div class="backTop" @click="backTop()">
        <div class="backTop-icon"></div>
        <div class="backTop-text">返回頂端</div>
      </div>
    </section>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Logo from "@/components/Logo.vue";
import Footer from "@/components/Footer.vue";
import Paging from "@/components/paging/Paging.vue";

import { mapState } from "vuex";
import { query_bill_list_not_login, query_bill_list_recv_main } from "@/api/order";

export default {
  name: "home",
  data() {
    return {
      // 每一頁展示的數據
      listData: [],
      // 總數據長度
      total: null,
      // 當前頁數
      currentPage: 1,
      // 每一頁數據長度
      pageSize: 8,
      // 篩選條件
      filterCondition: {
        scope: "all",
        state: "all",
        site: "all",
        time: "all",
        purpose: "all"
      }
    };
  },
  components: {
    Top,
    Logo,
    Footer,
    Paging
  },
  methods: {
    // 返回頂端
    backTop() {
      if (document.documentElement.scrollTop > 0) {
        if (document.documentElement.scrollTop > 30) {
          var interval = setInterval(function() {
            document.documentElement.scrollTop -= 10;
            if (document.documentElement.scrollTop < 30) {
              document.documentElement.scrollTop = 0;
              clearInterval(interval);
            }
          }, 5);
        } else {
          document.documentElement.scrollTop = 0;
        }
      }
    },
    // getPage() {
    //   this.total = this.allListData.length;
    //   this.handlePage();
    // },
    // // 獲取數據 翻頁
    // handlePage(page) {
    //   this.currentPage = page || 1;
    //   let start = (this.currentPage - 1) * this.pageSize;
    //   let end = start + this.pageSize;
    //   this.listData = this.allListData.slice(start, end);
    // },
    // 筛选信息
    // filter(type, e) {
    //   switch (type) {
    //     case "scope":
    //       this.filterCondition.scope = e.target.value;
    //       break;
    //     case "state":
    //       this.filterCondition.state = e.target.value;
    //       break;
    //     case "site":
    //       this.filterCondition.site = e.target.value;
    //       break;
    //     case "time":
    //       this.filterCondition.time = e.target.value;
    //       break;
    //     case "purpose":
    //       this.filterCondition.purpose = e.target.value;
    //       break;
    //     default:
    //       return;
    //   }
    //   this.changeData();
    // },
    // // 修改條件後重新獲取數據
    // changeData() {
    //   let arr = [];
    //   for (let i in this.originData) {
    //     arr.push(this.originData[i]);
    //   }
    //   // 用途 篩選
    //   for (let i = 0; i < arr.length; i++) {
    //     if (this.filterCondition.purpose == "all") {
    //       continue;
    //     } else if (arr[i].purpose != this.filterCondition.purpose) {
    //       arr.splice(i, 1);
    //       i--;
    //     }
    //   }
    //   // 時間 篩選
    //   for (let i = 0; i < arr.length; i++) {
    //     switch (this.filterCondition.time) {
    //       case "all":
    //         break;
    //       case "0-5":
    //         if (arr[i].reTime > 5) {
    //           arr.splice(i, 1);
    //           i--;
    //         }
    //         break;
    //       case "5-10":
    //         if (arr[i].reTime <= 5 || arr[i].reTime > 10) {
    //           arr.splice(i, 1);
    //           i--;
    //         }
    //         break;
    //       case "more":
    //         if (arr[i].reTime <= 10) {
    //           arr.splice(i, 1);
    //           i--;
    //         }
    //         break;
    //       default:
    //         break;
    //     }
    //   }
    //   this.allListData = arr;
    //   this.getPage();
    // },
    // 從後台查詢數據信息
    getListDate(page = 1) {
      this.currentPage = page
      var data = {
        bid_range: this.filterCondition.scope,
        bill_status: this.filterCondition.state,
        deliver_address: this.filterCondition.site,
        deliver_date: this.filterCondition.time,
        pd_type: this.filterCondition.purpose,
        pageIndex: this.currentPage,
        pageSize: this.pageSize
      };
      if(this.userInfo && this.userInfo.send_recv_type === "recv"){
        // 接單方
        query_bill_list_recv_main(data).then(res => {
          console.log(res)
          if(res.data.code === "1"){
            this.total = res.data.t.row_total
            var result = res.data.t.bill_list
            this.changeListData(result)
          }
        });
      }else{
        // 未登錄
        query_bill_list_not_login(data).then(res => {
          console.log(res)
          if(res.code === "1"){
            this.total = res.t.row_total
            var result = res.t.bill_list
            this.changeListData(result)
          }
        });
      }
    },
    // 修改展示數據信息
    changeListData(data){
      // 先清空原始數據
      this.listData = []
      for(let i in data){
        var bill_status_text = ''
        switch(data[i].bill_status){
          case "0":
            bill_status_text = '待發佈'
            break
          case "1":
            bill_status_text = '待報價'
            break
          case "2":
            bill_status_text = '待發貨'
            break
          case "3":
            bill_status_text = '待收貨'
            break
          case "4":
            bill_status_text = '待付款'
            break
          case "5":
            bill_status_text = '待收款'
            break
          case "6":
            bill_status_text = '已完成'
            break
          default:
            break
        }
        var obj = {
          // 唯一id
          pkid: data[i].pkid,
          // 訂單需求類別
          purpose: data[i].pd_type,
          // 訂單號
          formNum: data[i].bill_no,
          // 訂單狀態
          bill_status: data[i].bill_status,
          // 訂單狀態文字
          bill_status_text: bill_status_text,
          // 交貨地址
          deliver_address: data[i].deliver_address,
          // 目標範圍
          bid_range: data[i].bid_range,
          // 價值
          price: data[i].total_price,
          // 幣別
          money_type: data[i].money_type,
          // 需求數量
          demand: data[i].amount,
          // 參與單位數量
          unitNum: data[i].recv_user_num,
          // 發佈單位名稱
          dept_name: data[i].send_user ? data[i].send_user.dept_name : '',
          // 交貨時間
          deliver_date: data[i].deliver_date.split("T")[0]
        }
        this.listData.push(obj)
      }
    },

  },
  created() {
    // this.getPage();
    this.getListDate();
  },
  computed: {
    ...mapState({
      porImgUrl: state => state.porImgUrl,
      userInfo: state => state.userInfo
    })
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/views/home.less";
</style>