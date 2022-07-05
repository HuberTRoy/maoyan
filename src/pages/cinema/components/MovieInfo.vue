<template>
  <div class="movie-info">
    <div class="mask" />
    <div class="poster-bg" />
    <Image
      class="poster"
      src="https://p0.pipi.cn/mmdb/25bfd671be15bf51baf0ee3a5d06b91bf94c3.jpg?imageMogr2/thumbnail/2500x2500%3E"
    />
    <div class="movie-info-detail">
      <div class="title">侏罗纪世界3</div>
      <div class="desc">Jurassic World: Dominion</div>
      <div class="score">
        <span class="number">8.0</span>
        <span class="desc">(13.4万人评)</span>
      </div>
      <div class="desc">动作,冒险,科幻</div>
      <div class="desc">美国/147分钟</div>
      <div class="desc">2022-06-10中国大陆上映</div>
    </div>
    <van-icon class="arrow" name="arrow" />
  </div>
  <Tabs :list="dateOptions" />
  <dropdown-menu>
    <dropdown-item title="全城">
      <tabs :list="locationOptions" tab-width="50%"></tabs>
      <tree-select
        v-model:active-id="activeId"
        v-model:main-active-index="activeIndex"
        :items="locationItems"
      />
    </dropdown-item>
    <dropdown-item title="品牌" :options="brandOptions"></dropdown-item>
    <dropdown-item title="筛选">
      <div class="filter-layout">
        <div class="item">
          <div class="title">影院服务</div>
          <div class="options">
            <div class="option active">全部</div>
            <div class="option">可改签</div>
          </div>
        </div>
        <div class="buttons">
          <Button>重置</Button>
          <Button type="danger">确定</Button>
        </div>
      </div>
    </dropdown-item>
  </dropdown-menu>
  <div class="cinema-list">
    <div class="cinema-item">
      <div class="title-wrap">
        <div class="title-block">
          <div class="title line-ellipsis">万达影城（白云万达广场IMAX店</div>
          <div class="price-block">
            <span class="price">45</span>
            <span class="after">元起</span>
          </div>
        </div>
        <div class="location-block">
          <div class="line-ellipsis">白云区云城东路501号万达广场3层</div>
          <div class="distance">0.7km</div>
        </div>
        <div class="label-block">
          <div style="color: rgb(87, 157, 175); border-color: rgb(87, 157, 175)">改签</div>
          <div style="color: rgb(255, 153, 0); border-color: rgb(255, 153, 0)">小吃</div>
        </div>
        <div class="discount-block">
          <div class="discount">
            <div class="discount-label cardPromotionTag"></div>
            <div class="discount-label-text">开卡特惠，29.9元起开卡</div>
          </div>
        </div>
      </div>
      <div class="recent" data-bid="dp_wx_buy_cinema_list_spread">
        <span class="time-line">近期场次: 10:20</span>
        <span class="time-line">10:50</span>
        <span class="time-line">11:50</span>
      </div>
    </div>
    <div class="cinema-item">
      <div class="title-wrap">
        <div class="title-block">
          <div class="title line-ellipsis">万达影城（白云万达广场IMAX店</div>
          <div class="price-block">
            <span class="price">45</span>
            <span class="after">元起</span>
          </div>
        </div>
        <div class="location-block">
          <div class="line-ellipsis">白云区云城东路501号万达广场3层</div>
          <div class="distance">0.7km</div>
        </div>
        <div class="label-block">
          <div style="color: rgb(87, 157, 175); border-color: rgb(87, 157, 175)">改签</div>
          <div style="color: rgb(255, 153, 0); border-color: rgb(255, 153, 0)">小吃</div>
        </div>
        <div class="discount-block">
          <div class="discount">
            <div class="discount-label cardPromotionTag"></div>
            <div class="discount-label-text">开卡特惠，29.9元起开卡</div>
          </div>
        </div>
      </div>
      <div class="recent" data-bid="dp_wx_buy_cinema_list_spread">
        <span class="time-line">近期场次: 10:20</span>
        <span class="time-line">10:50</span>
        <span class="time-line">11:50</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Image, DropdownMenu, DropdownItem, TreeSelect, Button } from "vant";
import Tabs from "../../../components/tabs.vue";
import type { TabsType } from "../../../components/tabs.vue";

const dateOptions = ref<TabsType>([
  { title: "今天07月05日", value: "" },
  { title: "今天07月05日", value: "" },
  { title: "今天07月05日", value: "" },
  { title: "今天07月05日", value: "" },
  { title: "今天07月05日", value: "" },
]);
const locationOptions = ref<TabsType>([
  { title: "商区", value: "business" },
  { title: "地铁站", value: "subway" },
]);
const activeId = ref("all");
const activeIndex = ref(0);
const locationItems = [
  {
    text: "全部",
    id: "all",
  },
  {
    text: "浙江",
    children: [
      { text: "杭州", id: "1" },
      { text: "温州", id: "2" },
    ],
  },
];
const brandOptions = ref([
  { text: "全部", value: 0 },
  { text: "万达影城", value: 1 },
]);
</script>
<style scoped lang="less">
.movie-info {
  position: relative;
  display: flex;
  padding: 19px 30px 19px 15px;

  .mask,
  .poster-bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .mask {
    background-color: #333333;
  }

  .poster-bg {
    background-image: url("https://p0.pipi.cn/mmdb/25bfd671be15bf51baf0ee3a5d06b91bf94c3.jpg?imageMogr2/thumbnail/2500x2500%3E");
    background-size: cover;
    filter: blur(1.2em);
    opacity: 0.55;
  }

  .poster {
    width: 110px;
    height: 150px;
  }

  .movie-info-detail {
    margin-left: 12.5px;
    line-height: 1;
    color: #fff;
    z-index: 0;

    .title {
      font-size: 20px;
      margin-top: 2px;
      font-weight: 700;
    }

    .desc {
      font-size: 12px;
      margin-top: 10px;
      opacity: 0.8;
    }

    .score {
      margin-top: 11px;

      .number {
        font-size: 18px;
        font-weight: 700;
        color: #fc0;
      }
    }
  }

  .arrow {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
  }
}

.filter-layout {
  .item {
    margin: 11px 12px 13px 13px;

    .title {
      color: #333;
      font-size: 15px;
      line-height: 21px;
      margin-bottom: 13px;
    }

    .options {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;

      .option {
        padding: 0 4px;
        width: 80px;
        height: 32px;
        line-height: 32px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        background: #fff;
        font-size: 13px;
        color: #666;
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
        border-radius: 6px;

        &.active {
          background: #fcf0f0;
          border: 1px solid #dd403b;
          border-radius: 3px;
          box-sizing: border-box;
          color: #dd403b;
        }
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    margin: 11px 12px 13px 13px;
    --van-button-default-height: 34px;
  }
}

.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.cinema-list {
  .cinema-item {
    position: relative;
    padding: 13px 15px 13px 0;
    margin-left: 15px;
    overflow: hidden;
    border-bottom: 1px solid #e5e5e5;

    .title-wrap {
      line-height: 1.5;

      .title-block {
        display: flex;

        .title {
          flex: 1;
          height: 23px;
          line-height: 23px;
          font-size: 16px;
          color: #000;
        }

        .price-block {
          display: inline-block;
          padding-left: 3px;
          color: #f03d37;
        }
      }

      .location-block {
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
        font-size: 13px;
        color: #666;
      }

      .label-block {
        height: 17px;
        line-height: 17px;
        margin-top: 4px;
        margin-bottom: 4px;
        overflow: hidden;
        font-size: 0;
        flex-shrink: 0;

        div {
          position: relative;
          display: inline-block;
          padding: 0 3px;
          height: 17px;
          line-height: 17px;
          border-radius: 2px;
          font-size: 12px;
          border: 1px solid #000;

          & + div {
            margin-left: 5px;
          }
        }
      }

      .discount-block {
        color: #999;
        margin-bottom: 4px;
        font-size: 12px;
      }
    }
    .recent {
      padding: 0 15px 0 0;
      margin-right: -15px;
      line-height: 1.5;
      font-size: 0;
      .time-line {
        display: inline-block;
        position: relative;
        font-size: 12px;
        color: #999;
        margin-right: 14px;
        &:last-child {
          margin-right: 0;
        }
        &:before {
          content: "";
          display: block;
          position: absolute;
          height: 15px;
          width: 1px;
          left: -7px;
          background: #e1e1e1;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
