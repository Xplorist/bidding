<template>
  <div class="information">
    <Top></Top>
    <Logo></Logo>
    <section id="content">
      <!-- 主體內容 -->
      <div class="main type-area">
        <div class="warpper">
          <div class="principal">
            <div class="information">
              <!-- 基本信息 -->
              <div class="info_logo"></div>
              <div class="info_name">
                <span class="icon"></span>
                <span>{{merchantInfo.dept_name}}</span>
              </div>
              <div class="info_one">
                <span>廠區：{{merchantInfo.fctry_zone}} 》次集团：{{merchantInfo.secn_cmpy}} 》事業群：{{merchantInfo.entrps_group}} 》處：{{merchantInfo.pd_office}} 》單位：{{merchantInfo.dept_name}}</span>
              </div>
              <div class="info_two">
                <span class="range">加工範圍：{{merchantInfo.recv_mnufc_range}}</span>
                <span class="tel">联系电话：{{merchantInfo.tel}}</span>
              </div>
              <!-- 客戶評價 -->
              <div class="info_evaluation">
                <div class="info_eva_title">客戶評價</div>
                <div class="info_eva_list">
                  <!-- 單獨評語 -->
                  <div class="single" v-for="(item, index) in comments" :key="index">
                    <div>
                      <div class="eva_text">{{item.text}}</div>
                      <div class="eva_date">{{item.date}}</div>
                    </div>
                    <div class="eva_belong">{{item.belong}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="introduction">
              <div class="intro_grade">
                <table class="intro_gra_tab">
                  <tr>
                    <th>入駐時間:</th>
                    <th>2年</th>
                  </tr>
                  <tr>
                    <td>客戶評分:</td>
                    <td>4.9</td>
                  </tr>
                  <tr>
                    <td>出貨時效:</td>
                    <td>3.2</td>
                  </tr>
                  <tr>
                    <td>出貨質量:</td>
                    <td>3.2</td>
                  </tr>
                  <tr>
                    <td>服務態度:</td>
                    <td>4.5</td>
                  </tr>
                </table>
              </div>
              <div class="intro_text">
                <div class="intro_text_title">客戶簡介</div>
                <pre>{{merchantInfo.summary}}</pre>
                <pre>富士康科技集团是专业从事计算机、通讯、消费性电子等3C产品研发制造，广泛涉足数位内容、汽车零组件、通路、云运算服务及新能源、新材料开发应用的高新科技企业。</pre>
                <pre>凭借前瞻决策、扎根科技和专业制造，自1974年在台湾肇基，1988年投资中国大陆以来，富士康迅速发展壮大，拥有百余万员工及全球顶尖客户群，是全球最大的电子产业科技制造服务商。2002年起位居中国内地企业出口200强榜首（2018年进出口总额占大陆进出口总额的4.1%）,2005年起跻身《财富》全球企业500强（2019年跃居第23位）。</pre>
              </div>
            </div>
          </div>
          <div class="more">
            <p>查看更多</p>
            <span class="moreIcon"></span>
          </div>
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

export default {
  data: function() {
    return {
      comments: [
        {
          text:
            "与该公司合作的非常愉快，交货时间没有延期，制作的东西非常棒，希望下次有机会再次合作。",
          date: "2019-08-29 17:22:37",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "很不错，多次合作，一如既往的好。",
          date: "2019-08-29 17:22:37",
          belong: "FOXCONN 成都制一处"
        },
        {
          text: "不好说，习惯性好评。",
          date: "2019-08-29 17:22:37",
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
          date: "2019-08-29 17:22:37",
          belong: "FOXCONN 成都制一处"
        }
      ],
      merchantInfo: ""
    };
  },
  methods: {
    // 獲取發單方信息
    getMerchantInfo() {
      let info = JSON.parse(sessionStorage.getItem("merchantInfo"));
      this.merchantInfo = info;
      console.log(info);
    }
  },
  components: {
    Top,
    Logo,
    Footer
  },
  created() {
    this.getMerchantInfo();
  }
};
</script>

<style lang="less" scoped>
// 主體內容
#content {
  background: #12222e url(../../assets/imgs/particulars/contentBG.png) no-repeat
    top center / contain;
  padding-top: 24px;
  // 邊界樣式
  > .main {
    background: rgba(13, 28, 42, 0.2);
    box-sizing: border-box;
    padding: 20px;
  }
  .warpper {
    border: 3px solid #566170;
  }
  // 主要區域
  .principal {
    display: flex;
    justify-content: space-around;
  }
  // 信息區域
  .information {
    width: 668px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #e0f2ff;
    font-size: 14px;
  }
  // logo圖
  .info_logo {
    width: 200px;
    height: 200px;
    background: url(../../assets/imgs/merchant/LOGO.png) no-repeat;
    margin-top: 20px;
  }
  // 公司名稱
  .info_name {
    display: flex;
    align-items: center;
    margin-top: 12px;
    font-size: 18px;
    > .icon {
      display: inline-block;
      width: 14px;
      height: 23px;
      margin-right: 10px;
      background: url(../../assets/imgs/merchant/nameIcon.png) no-repeat;
    }
  }
  // 基本信息第一行
  .info_one {
    margin-top: 15px;
  }
  // 基本信息第二行
  .info_two {
    margin-top: 24px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .range {
    }
    .tel {
    }
  }
  // 客戶評價
  .info_evaluation {
    width: 100%;
    margin-top: 40px;
  }
  .info_eva_title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #0d1c29;
    color: #e0f2ff;
    font-size: 18px;
    padding-left: 10px;
  }
  .info_eva_list {
    > .single {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding: 32px 0 16px 0;
      position: relative;
    }
  }
  // 評價
  .eva_text {
    color: #96a2b0;
  }
  // 日期
  .eva_date {
    color: #404c5a;
    font-size: 14px;
    margin-top: 15px;
  }
  // 評價人
  .eva_belong {
    color: #404c5a;
    font-size: 14px;
    position: absolute;
    right: 0;
    bottom: 20px;
  }
  // 簡介區域
  .introduction {
    width: 186px;
  }
  // 簡介-評分
  .intro_grade {
    width: 186px;
    height: 236px;
    background: url(../../assets/imgs/merchant/flag.png) no-repeat;
  }
  // 表格
  .intro_gra_tab {
    width: 90%;
    th {
      font-weight: 400;
      font-size: 18px;
      height: 70px;
    }
    td,
    th {
      text-align: center;
      color: #fff;
      font-size: 14px;
      &:nth-child(2) {
        font-size: 16px;
      }
    }
  }
  // 簡介-文字
  .intro_text {
    margin-top: 30px;
    /* 修改首要字體 */
    @font-face {
      font-family: "myFont";
      src: url("../../assets/font/STZHONGS.TTF");
    }
    pre {
      font-family: "myFont", "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      height: 100%;
      color: #fff;
      // 疊加背景
      mix-blend-mode: overlay;
      font-size: 14px;
      text-indent: 1em;
      line-height: 28px;
      // 自動換行
      word-wrap: break-word;
      white-space: pre-wrap;
    }
    // p {
    //   color: #fff;
    //   // 疊加背景
    //   mix-blend-mode: overlay;
    //   font-size: 14px;
    //   text-indent: 1em;
    //   line-height: 28px;
    // }
  }
  .intro_text_title {
    font-size: 18px;
    color: #fff;
    // 疊加背景
    mix-blend-mode: overlay;
  }
  // more
  .more {
    margin: 60px auto 30px;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      > span {
        transform: translateY(8px);
      }
    }
    > p {
      color: #065997;
      font-size: 14px;
      text-align: center;
    }
    > span {
      display: block;
      width: 28px;
      height: 12px;
      background: url(../../assets/imgs/merchant/more.png) no-repeat;
      transition-duration: 0.3s;
    }
  }
}
</style>