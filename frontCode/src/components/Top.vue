<template>
  <section id="top">
    <div class="type-area top-nav">
      <div class="backHome">
        <router-link v-show="backHome || false " to="">
          返回首頁
        </router-link>
      </div>
      <ul>
        <li>
          <!-- 測試效果，判斷userInfo值 -->
          <router-link v-if="userInfo" to=''>歡迎您：{{userInfo.username}}</router-link>
          <router-link v-else to='/login'>請登錄</router-link>
        </li>
        <li>
          <router-link to="/">主頁</router-link>
        </li>
        <li>
          <!-- 測試效果，判斷userInfo值 -->          
          <router-link :to="userInfo ? (userInfo.send_recv_type == 'send' ? '/demand' : '/personal') : '/login' ">個人中心</router-link>
        </li>
        <li v-if="userInfo" @click="quit">
          <router-link to="" >退出登錄</router-link>
        </li>
        <li>
          <router-link to="/merchant">註冊</router-link>
        </li>
        <!-- <li>
          <router-link to >規則中心</router-link>
        </li> -->
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "top",
  data(){
    return{
    }
  },
  methods:{
    quit(){
      this.$router.push('/login')
      this.$store.commit("LOG_OUT")
    }
  },
  props:{
    backHome: Boolean,
  },
  computed:{
    ...mapState({
      username: state => state.username,
      userInfo: state => state.userInfo,
      token: state => state.token,
    })
  }
};
</script>

<style lang="less" scoped>
// 頂部
#top {
  height: 30px;
  width: 100%;
  background: #aac0cf; // rgba(170,192,207,1)
  color: #333;
  user-select: none;
  .top-nav {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .backHome{
    a{
      color: #333;
    }
  }
  ul {
    li {
      height: 30px;
      line-height: 30px;
      float: left;
      margin-left: 30px;
      font-size: 14px;
      color: #333333;
    }
    a {
      text-decoration: none;
      color: #333;
    }
  }
}
</style>