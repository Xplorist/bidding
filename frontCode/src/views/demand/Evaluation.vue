<template>
  <div id="evaluation">
    <div class="mainPart">
      <!-- title -->
      <div class="main_title">評價管理</div>
      <!-- 分類 -->
      <div class="main_classify">
        <div
          :class="{active:commentsType == 'received'}"
          @click="commentsType = 'received'"
        >收到的評價({{ receivedNum || 0 }})</div>
        <div
          :class="{active:commentsType == 'published'}"
          @click="commentsType = 'published'"
        >做出的評價({{ publishedNum || 0 }})</div>
      </div>
      <!-- 評分 -->
      <div class="main_rate" v-show="commentsType !== 'published'">
        <div class="single" v-for="(item, index) in rate.list" :key="index">
          <span>{{item.name}}:</span>
          <el-rate
            disabled
            show-score
            class="stars"
            text-color="#0096FF"
            score-template="{value}"
            disabled-void-color="#D3DFE7"
            :colors="rate.color"
            v-model="item.value"
          ></el-rate>
        </div>
      </div>
      <!-- 評價 -->
      <div class="main_evaluationBox">
        <!-- 單獨評語 -->
        <div class="single" v-for="(item, index) in comments" :key="index">
          <div>
            <div class="comments">{{item.text}}</div>
            <div class="date">{{item.date}}</div>
          </div>
          <div class="belong">{{item.belong}}</div>
        </div>
      </div>
      <!-- 分頁 -->
      <div class="main_paging">
        <Paging
          :total="total"
          :current-page="currentPage"
          :page-size="pageSize"
          @getCurrentPage="getListDate"
        ></Paging>
      </div>
    </div>
  </div>
</template>

<script>
import Paging from "@/components/paging/Paging";
import {
  query_send_get_eval_list,
  query_send_make_eval_list,
  query_send_get_eval_avg
} from "@/api/order";

export default {
  data: function() {
    return {
      // 評分信息
      rate: {
        // 評分顏色
        color: ["#0096FF", "#0096FF", "#0096FF"],
        // 評分類型、值、數量
        list: [{ name: "付款時效", value: 0 }, { name: "服務態度", value: 0 }]
      },
      // 总页数
      total: null,
      // 当前页
      currentPage: null,
      // 每页数目
      pageSize: 5,
      // 展现的评价
      comments: [],
      // 收到的評價
      allReceivedComments: [
        {
          text: "很不错，多次合作，一如既往的好。",
          date: "2019-08-29 17:22:30",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:31",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:32",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。",
          date: "2019-08-29 17:22:33",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "很不错，多次合作，一如既往的好。",
          date: "2019-08-29 17:22:34",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:35",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:36",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。",
          date: "2019-08-29 17:22:37",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:38",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "很不错，多次合作，一如既往的好。",
          date: "2019-08-29 17:22:39",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:40",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。",
          date: "2019-08-29 17:22:41",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:42",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "很不错，多次合作，一如既往的好。",
          date: "2019-08-29 17:22:43",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:44",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。",
          date: "2019-08-29 17:22:45",
          belong: "FOXCONN 成都制一处"
        }
      ],
      // 做出的评价
      allPublishedComments: [
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:00",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "很不错，多次合作，一如既往的好。",
          date: "2019-08-29 17:22:01",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:02",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。",
          date: "2019-08-29 17:22:03",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:04",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "很不错，多次合作，一如既往的好。",
          date: "2019-08-29 17:22:05",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:06",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:07",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "很不错，多次合作，一如既往的好。",
          date: "2019-08-29 17:22:08",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:09",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。",
          date: "2019-08-29 17:22:10",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:11",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "很不错，多次合作，一如既往的好。",
          date: "2019-08-29 17:22:12",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:13",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。",
          date: "2019-08-29 17:22:14",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:15",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "很不错，多次合作，一如既往的好。",
          date: "2019-08-29 17:22:16",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:17",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。",
          date: "2019-08-29 17:22:18",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:19",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "很不错，多次合作，一如既往的好。",
          date: "2019-08-29 17:22:20",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:21",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。",
          date: "2019-08-29 17:22:22",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:23",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。",
          date: "2019-08-29 17:22:24",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:25",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "很不错，多次合作，一如既往的好。",
          date: "2019-08-29 17:22:26",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:27",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。",
          date: "2019-08-29 17:22:28",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:29",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:30",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:31",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。",
          date: "2019-08-29 17:22:32",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:33",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "很不错，多次合作，一如既往的好。",
          date: "2019-08-29 17:22:34",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:35",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:36",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。",
          date: "2019-08-29 17:22:37",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:38",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "很不错，多次合作，一如既往的好。",
          date: "2019-08-29 17:22:39",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:40",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。",
          date: "2019-08-29 17:22:41",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:42",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "很不错，多次合作，一如既往的好。",
          date: "2019-08-29 17:22:43",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:44",
          belong: "FOXCONN 成都制一处"
        },
        {
          text:
            "虽然出现了一点小状况，但是商家后面还是很耐心的给解决了，给商家服务态度点个赞。",
          date: "2019-08-29 17:22:45",
          belong: "FOXCONN 成都制一处"
        }
      ],
      // 选中的侧边栏条目
      silderBarItem: "evaluation",
      // 評價類型
      commentsType: "",
      // 評價個數
      receivedNum: null,
      publishedNum: null
    };
  },
  methods: {
    // 处理分页
    handlePage(val) {
      this.currentPage = val;
      var start = (this.currentPage - 1) * this.pageSize;
      var end = start + this.pageSize;
      if (this.commentsType == "published") {
        this.comments = this.allPublishedComments.slice(start, end);
      } else {
        this.comments = this.allReceivedComments.slice(start, end);
      }
    },

    // 获取总数目
    getPage(type) {
      this.commentsType = type || "received";
      switch (this.commentsType) {
        case "published":
          this.total = this.allPublishedComments.length;
          break;
        default:
          this.total = this.allReceivedComments.length;
          break;
      }
      this.handlePage(1);
    },

    // 向後端發起請求獲取數據
    getListDate(page = 1) {
      this.currentPage = Number(page);
      sessionStorage.setItem("demandGetEvaCurrentPage", this.currentPage);
      if (this.commentsType == "received") {
        console.log("received");
        this._query_send_get_eval_list();
      } else if (this.commentsType == "published") {
        console.log("published");
        this._query_send_make_eval_list();
      } else {
        this._query_send_get_eval_list();
        query_send_make_eval_list(this.currentPage, this.pageSize).then(res => {
          if (res.code === "1") {
            this.publishedNum = res.t.row_total;
          }
        });
      }
    },

    // received
    _query_send_get_eval_list() {
      query_send_get_eval_list(this.currentPage, this.pageSize).then(res => {
        if (res.code === "1") {
          // 清空原有數據
          this.comments = [];
          this.total = res.t.row_total;
          this.receivedNum = res.t.row_total;
          const listData = res.t.send_get_eval_list;
          this.changeListData(listData);
        }
      });
    },
    // published
    _query_send_make_eval_list() {
      query_send_make_eval_list(this.currentPage, this.pageSize).then(res => {
        console.log(res);
        if (res.code === "1") {
          // 清空原有數據
          this.comments = [];
          this.total = res.t.row_total;
          this.publishedNum = res.t.row_total;
          const listData = res.t.send_make_eval_list;
          this.changeListData(listData);
        }
      });
    },

    // 修改數據格式
    changeListData(listData) {
      for (let item of listData) {
        const obj = {
          text: item.summary_text,
          date: item.create_date,
          belong: item.recv_user.dept_name
        };
        this.comments.push(obj);
      }
    },

    // 獲取評分
    getRate() {
      query_send_get_eval_avg().then(res => {
        if (res.code === "1") {
          if(!res.t) return
          this.rate.list[0].value = Number(res.t.pay_rate_avg);
          this.rate.list[1].value = Number(res.t.svc_atitu_avg);
        }
      });
    }
  },
  created() {
    // this.getPage();
    // 獲取分頁數據
    let page = Number(sessionStorage.getItem("demandGetEvaCurrentPage"));
    page = page ? page : 1;
    this.getListDate(page);
    // 獲取評分
    this.getRate();
  },
  components: {
    Paging
  },
  watch: {
    commentsType: function() {
      this.getListDate();
    }
  }
};
</script>

<style lang="less" scoped>
#evaluation {
  background-color: #eff9ff;
  box-sizing: border-box;
  color: #12222e;
  padding: 30px 100px;
}
// 主體標題
.main_title {
  color: #12222e;
  font-size: 18px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #afc2cf;
}
// 分類
.main_classify {
  display: flex;
  align-items: center;
  cursor: pointer;
  div {
    width: 200px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background-color: #c8d4de;
    color: #212f3a;
    &.active,
    &:hover {
      background-color: #2e6e9e;
      color: #d3dfe7;
    }
  }
}
// 評分
.main_rate {
  margin-top: 16px;
  > .single {
    display: flex;
    align-items: center;
  }
  .stars {
    margin: 5px;
    width: 160px;
  }
}
// 評價
.main_evaluationBox {
  margin-top: 20px;
  > .single {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #afc2cf;
    padding: 20px 0;
    position: relative;
  }
  .comments {
    color: #212f3a;
  }
  .date {
    color: #626f7f;
    font-size: 14px;
    margin-top: 15px;
  }
  .belong {
    color: #626f7f;
    font-size: 14px;
    position: absolute;
    right: 0;
    bottom: 20px;
  }
}
// 分頁
// .main_paging {}
</style>