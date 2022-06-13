<template>
  <div class="header-logo">
    <img
      src="https://p0.meituan.net/scarlett/448afce485c1f342895185c2be668fa411803.png@80q"
      alt=""
    />
    <span style="flex-grow: 1"></span>
    <span class="desc">发现最新最热电影</span>
    <span class="open-app">打开App</span>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="less">
.header-logo {
  display: flex;
  align-items: center;
  height: 60px;

  img {
    height: 39px;
    margin-left: 10px;
  }

  .desc {
    color: #666;
    font-weight: bold;
    font-size: 14px;
    margin-right: 10px;
  }

  .open-app {
    color: #b37e7e;
    font-weight: bold;
    margin-right: 10px;
  }
}
</style>
