<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
export default {

}
</script>


<style>
@import './assets/css/common/normalize.css';
@import './assets/css/common/common.css';

/* 修改首要字體 */
@font-face{
	font-family: 'myFont';
	src: url('./assets/font/STZHONGS.TTF');
}

#app {
  font-family: 'myFont', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
