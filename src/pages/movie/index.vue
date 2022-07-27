<template>
  <DownloadApp :title="'领取50元电影票'"></DownloadApp>

  <div class="movie">
    <div class="movie-top">
      <div class="bread">猫眼电影 > 侏罗纪世界3</div>

      <div class="movie-info-chunk">
        <img
          src="https://p0.pipi.cn/mmdb/25bfd671be15bf51baf0ee3a5d06b91bf94c3.jpg?imageView2/1/w/300/h/414/q/80"
          class="movie-poster"
        />

        <div class="movie-info">
          <div class="movie-info-title line-ellipsis">侏罗纪世界3</div>
          <div class="movie-info-subtitle line-ellipsis">Jurassic World: Dominion</div>
          <div class="movie-info-category">
            动作/冒险/科幻
            <img
              src="https://s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/movie-tag-3DIMAX.png"
              style="margin-left: 4px; height: 14px"
            />
          </div>
          <div class="movie-info-actor line-ellipsis">
            克里斯·帕拉特/布莱丝·达拉斯·霍华德/劳拉·邓恩
          </div>
          <div class="movie-info-showtime line-ellipsis">2022-06-10中国大陆上映 / 147分钟</div>

          <span style="flex-grow: 1"></span>

          <div class="btns">
            <div class="operator-button">
              <img
                src="https://s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/want-to-watch.png"
                alt=""
              />
              想看
            </div>

            <div class="operator-button">
              <img
                src="https://s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star.png"
                alt=""
              />
              看过
            </div>
          </div>
        </div>
      </div>

      <div class="movie-rate">
        <div class="movie-rate-extra">
          <span>猫眼购票评分</span>
          <span style="flex-grow: 1"></span>
          <span class="want">4999999 人想看</span>
          <span class="watched">4999999 人看过</span>
          <img
            class="img noneBg"
            alt="向右箭头"
            src="https://s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/arrow-right-white.png"
            width="5px"
            height="9px"
            style="margin-left: 4px; margin-right: 0"
          />
        </div>

        <div class="movie-rate-info">
          <div class="movie-rate-info-item">
            <span class="score">9.0</span>
            <span class="rate-times">76966人评</span>
          </div>

          <div class="movie-rate-stars">
            <div v-for="i in 5" :key="i" class="stars-wrapper">
              <div class="stars">
                <img
                  v-for="j in 5"
                  :key="j"
                  src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/white-star.png"
                  :style="{
                    filter: j < i ? 'brightness(0.5)' : 'brightness(1)',
                  }"
                />
              </div>
              <div class="bars">
                <div class="percent" style="width: 55.3%"></div>
              </div>
            </div>
          </div>

          <div class="movie-reputation"></div>
        </div>
      </div>

      <div class="movie-desc">
        <SubChunkBread title="简介">
          <template #right>
            <div>
              展开
              <van-icon name="arrow-down" />
            </div>
          </template>
        </SubChunkBread>

        <div class="movie-desc-content">
          电影将故事的开篇设定在了努布拉岛被摧毁四年之后。如今，恐龙在世界各
          地与人类共存，并猎食。这一脆弱的平衡将重塑未来，并最终决定人类能否
          在这颗与史上最可怕生物共享的星球上继续站在食物链的顶端。
        </div>
      </div>

      <div class="movie-actors">
        <SubChunkBread title="演员人员">
          <template #right>
            <div>
              全部
              <van-icon name="arrow" />
            </div>
          </template>
        </SubChunkBread>
        <div class="actor-info-wrapper">
          <div v-for="i in 10" :key="i" class="actor-info">
            <img
              src="https://p1.meituan.net/movie/a0a9635fb16503b9f88c9f46ae34f9f3561962.jpg@160w_224h_80q_1e_1c"
              alt=""
            />

            <div class="actor-info-name line-ellipsis">克里斯·帕拉特sdasd</div>
            <span class="actor-info-role line-ellipsis">饰: Denise Roberts</span>
          </div>
        </div>
      </div>

      <div class="movie-videos">
        <SubChunkBread title="视频推荐">
          <template #right>
            <div>
              全部
              <van-icon name="arrow" />
            </div>
          </template>
        </SubChunkBread>

        <div class="videos-container-wrapper">
          <div v-for="i in 10" :key="i" class="video-container">
            <img
              src="https://p0.pipi.cn/friday/62e267b9a8019533343e6384dbbc4484.png?imageView2/1/w/280/h/186/q/80"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="movie-images">
        <SubChunkBread title="剧照">
          <template #right>
            <div>
              全部61张
              <van-icon name="arrow" />
            </div>
          </template>
        </SubChunkBread>

        <div class="images-container-wrapper">
          <div v-for="i in 10" :key="i" class="image-container">
            <img
              src="https://p0.pipi.cn/basicdata/d2dad592030338cf3ecbae7f1ad164264285a.jpg?imageView2/1/w/420/h/279/q/80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="short-comments">
      <div class="short-comments-title">短评</div>
      <div class="comments-wrapper">
        <div v-for="i in 5" :key="i" class="comment-item">
          <div class="comment-item-avatar">
            <img
              src="//p0.meituan.net/avatar/7fa2286a219f10729753bc894ab2b8b861477.jpg@68w_68h_80q"
              alt=""
            />
          </div>
          <div class="comment-item-content">
            <div class="comment-item-content-name">
              <span>请别捏我的脸o</span>
              <img
                src="https://obj.pipi.cn/festatic/common/image/e3137a2114dfa0f5da5f0d6f5743c8cf.png"
              />
            </div>

            <div class="comment-item-content-rate">
              <img
                v-for="i in 5"
                :key="i"
                src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star-full-graded.png"
                alt=""
              />
              <span class="comment-item-content-rate-score">10分</span>
              <span class="buy-ticket">购票</span>
            </div>

            <div class="comment-lines">
              其实，这是今年到目前为止唯一一部可以让我走进电影院的电影了！从小学时候拿DVD看侏罗纪公园123！到长大出来社会打拼去电影院看的侏罗纪世界123！看到公园的主角和世界的主角碰面走到一起的时候！眼泪不由自主的流下来了！其实看的不只是电影！也是我童年到为人父的这些年！光这些记忆！都已经足够让我踏进电影院！去再会一会霸王龙！完结了！正如火影忍者死神以及准备完结的海贼王一样！我们的青春也早已不存在了！回忆总让我们泪眼婆娑！而现在也只能够努力向前
            </div>

            <div class="comment-extra">
              <span class="comment-extra-time">4天前</span>
              <span class="comment-extra-reply">
                305
                <span style="margin-left: 4px">回复</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 12px; width: 100%; background: #f4f4f4"></div>

    <div class="discussion">
      <div class="discussion-title">讨论</div>

      <div class="discussion-item">
        <div class="discussion-item-title">🦖出境多少时间？</div>
        <div class="discussion-item-content">暂无讨论</div>
      </div>
    </div>

    <div style="height: 12px; width: 100%; background: #f4f4f4"></div>

    <div class="box-office">
      <SubChunkBread title="票房">
        <template #right>
          <div>
            票房详情
            <van-icon name="arrow" />
          </div>
        </template>
      </SubChunkBread>
      <div class="box-office-container">
        <div class="box-office-item">
          <div class="box-office-item-value">26</div>
          <div class="box-office-item-name">昨日排名</div>
        </div>
        <div class="box-office-item">
          <div class="box-office-item-value">253,379</div>
          <div class="box-office-item-name">首周票房(万)</div>
        </div>
        <div class="box-office-item">
          <div class="box-office-item-value">406,403</div>
          <div class="box-office-item-name">累计票房(万)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DownloadApp from "../../components/DownloadApp.vue";
import SubChunkBread from "../../components/SubChunkBread.vue";
</script>

<style lang="less" scoped>
.movie {
  background: #3d6266;
  line-height: 1.5;

  .movie-top {
    padding: 21px 16px;
  }

  .bread {
    color: #ccc;
    margin-bottom: 15px;
  }

  &-info-chunk {
    display: flex;
    .movie-poster {
      height: 138px;
      width: 100px;
    }

    .movie-info {
      margin-left: 12px;
      display: flex;
      flex-direction: column;
      color: #fff;
      font-size: 12px;
      flex-grow: 1;
      width: 1px;

      &-title {
        font-size: 20px;
        font-weight: bold;
        width: 226px;
      }

      &-subtitle,
      &-category,
      &-actor,
      &-showtime {
        display: flex;
        align-items: center;
        opacity: 0.6;
      }

      .btns {
        display: flex;
        width: 100%;
        justify-content: space-between;
        .operator-button {
          width: 47%;
          font-size: 14px;
          background: hsla(0, 0%, 100%, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
          border-radius: 4px;
          height: 30px;

          img {
            width: 14px;
            height: 14px;
            margin-right: 5px;
          }
        }
      }
    }
  }

  &-rate {
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.18);
    border-radius: 8px;
    margin-top: 15px;
    padding: 10px;

    &-extra {
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 12px;

      .want,
      .watched {
        opacity: 0.6;
        margin-left: 13px;
      }
    }

    &-info {
      margin-top: 11px;
      margin-bottom: 3px;
      display: flex;
      justify-content: space-around;
      &-item {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .score {
          color: #ffb400;
          font-weight: 600;
          font-size: 26px;
          margin-bottom: 3px;
        }

        .rate-times {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.4);
          line-height: 10px;
          zoom: 0.5;
        }
      }
    }

    &-stars {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .stars-wrapper {
        display: flex;
        margin-bottom: 3px;
        .stars {
          display: flex;
          img {
            width: 5px;
            height: 5px;
            margin-left: 1px;
          }
        }

        .bars {
          width: 71px;
          height: 4px;
          background: hsla(0, 0%, 100%, 0.06);
          margin-left: 4px;
          border-radius: 1px;

          .percent {
            background: hsla(0, 0%, 100%, 0.3);
            height: 100%;
          }
        }
      }
    }
  }

  &-desc {
    margin-top: 16px;
    display: flex;
    flex-direction: column;

    &-content {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      text-overflow: ellipsis;
      overflow: hidden;
      margin: 7px 0;
      color: #fff;
      text-align: justify;
      line-height: 26px;
    }
  }

  &-actors {
    margin-top: 18px;

    .actor-info-wrapper {
      display: flex;
      width: 100%;
      margin-top: 11px;
      overflow: auto;
      .actor-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80px;
        img {
          width: 100%;
          height: 112px;
          object-fit: conver;
        }

        &-name {
          font-size: 12px;
          color: #fff;
          width: 100%;
        }

        &-role {
          width: 100%;
          color: rgba(255, 255, 255, 0.4);
          font-size: 12px;
        }
      }

      .actor-info + .actor-info {
        margin-left: 6px;
      }
    }
  }

  &-videos,
  &-images {
    margin-top: 18px;

    .videos-container-wrapper,
    .images-container-wrapper {
      display: flex;
      width: 100%;
      // height: 100%;
      height: 100px;
      margin-top: 11px;
      overflow: auto;

      .video-container,
      .image-container {
        width: 140px;
        height: 93px;
        flex-shrink: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }
      }

      .video-container + .video-container,
      .image-container + .image-container {
        margin-left: 8px;
      }
    }
  }

  .short-comments {
    background: #fff;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    &-title {
      padding: 14px 16px;
      color: #333;
      font-size: 15px;
    }

    .comments-wrapper {
      display: flex;
      flex-direction: column;

      .comment-item {
        display: flex;
        padding: 15px;

        &-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        &-content {
          display: flex;
          flex-direction: column;
          margin-left: 11px;
          &-name {
            display: flex;
            align-items: center;
            color: #333;
            font-size: 12px;
            img {
              width: 36px;
              height: 16px;
              margin-left: 6px;
            }
          }

          &-rate {
            display: flex;
            align-items: center;
            img {
              width: 9px;
              height: 9px;
              margin-right: 2px;
            }

            &-score {
              color: #faaf00;
              font-size: 12px;
            }

            .buy-ticket {
              border: 1px solid #4f89b3;
              border-radius: 10px;
              padding: 0 5px;
              font-family: PingFangSC-Regular;
              color: #4f89b3;
              font-size: 12px;
              text-align: center;
              display: block;
              transform: scale(0.75);
            }
          }
        }
      }

      .comment-lines {
        font-size: 15px;
        color: #333;
        line-height: 21px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 7;
        text-overflow: ellipsis;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
      }

      .comment-extra {
        display: flex;
        align-items: center;
        margin-top: 10px;

        &-time {
          font-size: 12px;
          color: #666;
        }

        &-reply {
          background: #eef1f6;
          color: #5a7cab;
          font-size: 12px;
          border-radius: 10.5px;
          padding: 2px 6px;
          margin-left: 8px;
        }
      }

      .comment-item + .comment-item {
        border-top: 0.5px solid #e8e8e8;
      }
    }
  }

  .discussion {
    background: #fff;

    &-title {
      height: 45px;
      display: flex;
      align-items: center;
      padding-left: 15px;
      font-size: 15px;
      color: #333;
      border-bottom: 0.5px solid #e8e8e8;
    }

    &-item {
      display: flex;
      flex-direction: column;
      padding: 12px 15px;

      &-title {
        font-size: 17px;
        color: #333;
        font-weight: 700;
      }

      &-content {
        font-size: 12px;
        color: #666;
        margin-top: 2px;
      }
    }
  }

  .box-office {
    background: #fff;
    padding-bottom: 10px;

    :deep(.bread-header) {
      color: #000;
      height: 43px;
      display: flex;
      align-items: center;
      padding: 0 15px;

      .desc-load {
        color: #999;
      }
    }

    &-container {
      display: flex;
      justify-content: space-between;
      background: #f8f8f8;
      margin: 0 15px 15px 15px;
      border-radius: 6px;
      font-size: 14px;
      line-height: 21px;
    }

    &-item {
      flex-grow: 1;
      text-align: center;
      padding: 12px 0;

      &-value {
        color: #f03d37;
        font-size: 17px;
        font-weight: bold;
      }

      &-name {
        color: #666;
        margin-top: 1px;
        font-size: 12px;
      }
    }
  }
}
</style>
