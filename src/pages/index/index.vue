<template>
  <div class="index">
    <div class="header-wrapper">
      <Navigator :back="false">
        <template #right>
          <van-icon name="wap-nav" />
        </template>
      </Navigator>
      <DownloadApp />

      <div class="search-bar">
        <span class="search-city">广州</span>
        <Tabs>
          <Tab title="热映"></Tab>
          <Tab title="影院"></Tab>
          <Tab title="待映"></Tab>
          <Tab title="经典电影"></Tab>
        </Tabs>

        <div class="search-icon" />
      </div>
    </div>

    <div class="favorate-area">
      <p class="favorate-title">最受好评电影</p>

      <div class="movie-chunks">
        <div v-for="i in 20" :key="i" class="movie-chunk">
          <div class="movie-img">
            <img
              src="https://p0.pipi.cn/mmdb/25bfd6be9abc7e8d3311e5bd9b6d287be0f28.png?imageMogr2/thumbnail/2500x2500%3E"
              alt=""
            />
            <span class="movie-rate">
              观众评分
              <span style="margin-left: 4px">9.6</span>
            </span>
            <span class="shadow"></span>
          </div>
          <p class="movie-title line-ellipsis">这个杀手不太冷</p>
        </div>
      </div>
    </div>
    <div class="split"></div>
    <div class="movie-list">
      <div v-for="i in 20" :key="i" class="movie-detail-chunk">
        <img
          src="//p0.pipi.cn/mmdb/25bfd671be15bf51baf0ee3a5d06b91bf94c3.jpg?imageMogr2/thumbnail/2500x2500%3E?imageView2/1/w/128/h/180"
          alt=""
        />

        <div class="movie-detail">
          <span class="movie-title line-ellipsis">这个杀手真滴秀</span>
          <span class="movie-rate">
            观众评
            <span class="score">8.7</span>
          </span>
          <span class="movie-actor line-ellipsis">主演：Mask</span>
          <span class="movie-playinfo line-ellipsis">今天207家影院放映999场</span>
          <span class="split-line"></span>
        </div>

        <Button round type="danger">购票</Button>
        <Button round type="primary">预售</Button>
        <Button round style="background: #faaf00; border-color: #faaf00" @click="toCinema">
          想看
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tabs, Tab, Button } from "vant";
import Navigator from "../../components/Navigator.vue";
import DownloadApp from "../../components/DownloadApp.vue";

const router = useRouter();
const toCinema = () => {
  router.push("/cinema");
};
</script>

<style lang="less" scoped>
.index {
  .header-wrapper {
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 2;
  }

  .search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 43px;
    padding-bottom: 3px;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;

    .search-city {
      padding: 0 15px;
      color: #666;
    }

    :deep(.van-tabs) {
      flex-grow: 1;

      .van-tabs__nav {
        background: transparent;
      }

      .van-tab--line {
        color: #666;
        font-weight: bold;
      }

      .van-tabs__line {
        bottom: 18px;
        width: 20px;
      }
    }

    .search-icon {
      background: url(https://s0.meituan.net/bs/myfe/canary/file/touchnode/images/dpmmweb/component/index/img/base64/search-red.png);
      width: 20px;
      height: 20px;
      padding: 10px 15px 10px 10px;
      background-size: contain;
      background-repeat: no-repeat;
      margin-left: 20px;
      margin-right: 10px;
    }
  }

  .favorate-area {
    display: flex;
    flex-direction: column;
    padding: 12px 15px;
    background-color: #fff;

    .favorate-title {
      font-size: 14px;
      color: #333;
      margin: 0 0 12px;
    }

    .movie-chunks {
      display: flex;
      overflow-x: auto;
      width: 100%;

      .movie-chunk {
        flex-shrink: 0;
        width: 85px;
        display: flex;
        flex-direction: column;
        margin-right: 10px;

        .movie-img {
          position: relative;
          height: 115px;
          margin-bottom: 6px;
          object-fit: cover;

          img {
            width: 100%;
            height: 100%;
          }

          .movie-rate {
            position: absolute;
            bottom: 2px;
            left: 4px;
            font-size: 12px;
            color: #faaf00;
            font-weight: 600;
            z-index: 1;
          }

          .shadow {
            position: absolute;
            left: 0;
            width: 100%;
            height: 35px;
            position: absolute;
            bottom: 0;
            background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
          }
        }

        .movie-title {
          font-size: 13px;
          color: #222;
          font-weight: bold;
          margin: 0 0 3px;
        }
      }
    }
  }

  .split {
    height: 10px;
    background: #f4f4f4;
  }

  .movie-list {
    display: flex;
    flex-direction: column;

    .movie-detail-chunk {
      padding: 15px;
      display: flex;
      position: relative;

      img {
        width: 64px;
        object-fit: cover;
        margin-right: 10px;
      }

      .movie-detail {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        position: relative;

        .split-line {
          background: rgba(153, 153, 153, 0.2);
          height: 1px;
          position: absolute;
          bottom: -10px;
          z-index: 1;
          width: 200%;
          right: 0;
          transform: scale(0.5) translateX(50%);
        }

        .movie-title {
          font-size: 17px;
          color: #333;
          font-weight: bold;
          padding-right: 3px;
          line-height: 24px;
        }

        .movie-rate,
        .movie-actor,
        .movie-playinfo {
          font-size: 13px;
          color: #666;
          margin-top: 6px;

          .score {
            font-weight: bold;
            color: #faaf00;
            font-size: 15px;
          }
        }
      }

      :deep(.van-button) {
        padding: 0;
        width: 54px;
        height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
