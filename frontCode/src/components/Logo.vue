<template>
  <section id="logo">
    <div class="type-area logo-content">
      <router-link to="/"></router-link>
      <!-- <a href="../../index.html"></a> -->
      <div class="search-box">
        <input type="text" class="search-text" placeholder="請輸入信息" />
        <input type="submit" class="search-btn" value="搜索" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "logo"
};
</script>

<style lang="less" scoped>
// logo和搜索框
#logo {
  height: 80px;
  background-color: #d7efff; //rgba(215,239,255,1)
  display: flex;
  align-items: center;
  .logo-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      display: block;
      width: 127px;
      height: 49px;
      background: url(../assets/imgs/index/logo2.png) no-repeat;
      background-size: contain;
    }
  }
  .search-box {
    height: 36px;
    font-size: 0;
    display: flex;
    align-items: center;
  }
  .search-text {
    font-size: 16px;
    width: 250px;
    height: 34px;
    border: 1px solid rgba(145, 173, 192, 1);
    padding: 0;
    // 首行縮進
    text-indent: 10px;
    // 藍色高亮
    outline: none;
    font-size: 14px;
  }
  .search-btn {
    width: 70px;
    height: 36px;
    background-color: #0096ff;
    font-size: 16px;
    color: #c9e1f1;
    border: 1px solid #0096ff;
    border-radius: 0px 2px 2px 0px;
    cursor: pointer;
  }
}
</style>