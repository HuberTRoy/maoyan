<template>
  <div class="container">
    <Navigator title="我的" :back="false">
      <template #right>
        <van-icon name="wap-nav" />
      </template>
    </Navigator>
    <div class="header">
      <div class="img_wrapper">
        <img src="https://api.multiavatar.com/www.miigua.com.svg" alt="" />
      </div>
    </div>
    <div class="order-panel">
      <div class="title">我的订单</div>
      <div class="line" />
      <div class="list">
        <div class="item">
          <icon name="video-o" class="icon" />
          <div class="name">电影</div>
        </div>
        <div class="item">
          <van-icon name="shop-o" class="icon" />
          <div class="name">商城</div>
        </div>
      </div>
    </div>
    <div class="cell">
      <cell title="优惠券" is-link />
      <cell title="折扣卡" is-link />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigator from "../../components/Navigator.vue";
import { Icon, Cell } from "vant";
</script>
<style scoped lang="less">
.container {
  min-height: 100vh;
  background-color: #f4f4f4;

  .header {
    height: 150px;
    background-color: #f03d37;
    text-align: center;

    .img_wrapper {
      display: inline-block;
      margin: 30px auto 0;
      width: 66px;
      height: 66px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .order-panel {
    position: relative;
    margin-top: 10px;
    background-color: #fff;
    text-align: center;

    .title {
      position: relative;
      display: inline-block;
      margin-top: 13px;
      z-index: 1;
      background-color: #fff;
      padding: 0 10px;
      font-size: 15px;
    }

    .line {
      position: absolute;
      top: 23px;
      left: 50%;
      transform: translateX(-50%);
      width: 160px;
      height: 1px;
      background-color: #e3e3e3;
    }
  }
  .list {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    padding: 15px;
    .item {
      .icon {
        font-size: 36px;
      }
      .name {
        margin-top: 10px;
      }
    }
  }
  .cell {
    margin-top: 10px;
  }
}
</style>
