<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  mounted() {
    // window.addEventListener(
    //   "hashchange",
    //   () => {
    //     var currentPath = window.location.hash.slice(1); // 获取输入的路由
    //     if (this.$router.path !== currentPath) {
    //       this.$router.push(currentPath); // 动态跳转
    //     }
    //   },
    //   false
    // );
  },
  created() {
    

  }
};
</script>


<style>
@import "./assets/css/common/normalize.css";
@import "./assets/css/common/common.css";

/* 修改首要字體 */
@font-face {
  font-family: "myFont";
  src: url("./assets/font/STZHONGS.TTF");
}

#app {
  font-family: "myFont", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  user-select: none;
}
</style>
