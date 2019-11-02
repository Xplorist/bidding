<template>
  <div class="information">
    <Top></Top>
    <Logo></Logo>
    <section id="content" v-if="merchantInfo">
      <!-- 主體內容 -->
      <div class="main type-area">
        <div class="warpper">
          <div class="principal">
            <div class="information">
              <!-- 基本信息 -->
              <el-image class="info_logo" :src="porImgUrl" fit="cover"></el-image>
              <div class="info_name">
                <span class="icon"></span>
                <span>{{merchantInfo.dept_name}}</span>
              </div>
              <div class="info_one">
                <span>廠區：{{merchantInfo.fctry_zone}} 》次集团：{{merchantInfo.secn_cmpy}} 》事業群：{{merchantInfo.entrps_group}} 》處：{{merchantInfo.pd_office}} 》單位：{{merchantInfo.dept_name}}</span>
              </div>
              <div class="info_two">
                <span class="range" v-if="merchantInfo.send_recv_type == 'recv'">
                  加工範圍：
                  <span
                    v-for="item in merchantInfo.recv_range_list"
                    :key="item.pkid"
                  >{{item.name}}</span>
                </span>
                <span v-else>&nbsp;</span>
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
                <div v-if="merchantInfo.send_recv_type == 'recv'" class="intro_text_title">客戶簡介</div>
                <div v-else class="intro_text_title">商戶簡介</div>

                <pre>{{merchantInfo.summary}}</pre>
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
import Top from "@/components/Top";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

import { query_user_info_by_pkid } from "@/api/user";
import { getPorImg } from "@/assets/js/getInfo";
// import { query_send_get_eval_list, query_recv_get_eval_list} from "@/api/order";


export default {
  data: function() {
    return {
      comments: [],
      // 賬號信息
      merchantInfo: "",
      // 賬號頭像
      porImgUrl: ""
    };
  },
  methods: {
    // 獲取信息
    getMerchantInfo() {
      const data = this.$router.history.current.query.pkid;
      query_user_info_by_pkid(data).then(res => {
        if (res.code === "1") {
          this.merchantInfo = res.t;
          const param = this.merchantInfo.user_pic_file;
          this.porImgUrl = getPorImg(
            param.file_save_path,
            param.file_save_name,
            param.file_origin_name
          );

          this.comments = []
          for(let item of this.merchantInfo.get_eval_list){ 
            const obj = {
              text: item.summary_text,
              date: item.create_date,
              belong: item.user.dept_name,
            }
            this.comments.push(obj)
          }  
          // this.getEvaluation(data, this.merchantInfo.send_recv_type)
        } else {
          this.$message.error("出錯啦，稍後再試試吧");
        }
      });
    },

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
    // /* 修改首要字體 */
    // @font-face {
    //   font-family: "myFont";
    //   src: url("../../assets/font/STZHONGS.TTF");
    // }
    pre {
      font-family: "myFont", "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      height: 100%;
      color: #fff;
      // 疊加背景
      mix-blend-mode: overlay;
      font-size: 14px;
      // text-indent: 1em;
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