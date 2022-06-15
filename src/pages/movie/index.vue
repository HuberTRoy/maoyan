<template>
  <DownloadApp :title="'领取50元电影票'"></DownloadApp>

  <div class="movie">
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
          <div class="starts"></div>
          <div class="bars"></div>
        </div>

        <div class="movie-reputation"></div>
      </div>
    </div>

    <div class="movie-desc">
      电影将故事的开篇设定在了努布拉岛被摧毁四年之后。如今，恐龙在世界各
      地与人类共存，并猎食。这一脆弱的平衡将重塑未来，并最终决定人类能否
      在这颗与史上最可怕生物共享的星球上继续站在食物链的顶端。
    </div>

    <div class="movie-actors">
      <div class="actor-info">
        <img
          src="https://p1.meituan.net/movie/a0a9635fb16503b9f88c9f46ae34f9f3561962.jpg@160w_224h_80q_1e_1c"
          alt=""
        />

        <div class="actor-info-name">克里斯·帕拉特</div>
        <span class="role">饰: Denise Roberts</span>
      </div>
    </div>

    <div class="movie-video">
      <div class="video-title">视频推荐</div>
      <div class="video-container">
        <video controls>
          <source src="https://p1.meituan.net/movie/a0a9635fb16503b9f88c9f46ae34f9f3561962.mp4" />
        </video>
      </div>
    </div>

    <div class="movie-images">
      <div class="images-title">剧照</div>
      <div class="images-container">
        <img
          src="https://p0.pipi.cn/basicdata/d2dad592030338cf3ecbae7f1ad164264285a.jpg?imageView2/1/w/420/h/279/q/80"
          alt=""
        />
      </div>
    </div>

    <div class="short-comments">
      <div class="comment-title">短评</div>
      <div class="comments">
        <div class="comment-content">
          <div class="comment-content-item">
            <div class="comment-content-item-avatar">
              <img
                src="https://p1.meituan.net/avatar/e8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f.jpg"
                alt=""
              />
            </div>
            <div class="comment-content-item-content">
              <div class="comment-content-item-content-name">
                <span>请别捏我的脸o</span>
                <img
                  src="https://obj.pipi.cn/festatic/common/image/e3137a2114dfa0f5da5f0d6f5743c8cf.png"
                />
              </div>

              <div class="comment-content-item-content-rate">
                <span class="comment-score">****</span>
                <span>10分</span>
                <span>购票</span>
              </div>

              <div class="comment-content-lines">
                其实，这是今年到目前为止唯一一部可以让我走进电影院的电影了！从小学时候拿DVD看侏罗纪公园123！到长大出来社会打拼去电影院看的侏罗纪世界123！看到公园的主角和世界的主角碰面走到一起的时候！眼泪不由自主的流下来了！其实看的不只是电影！也是我童年到为人父的这些年！光这些记忆！都已经足够让我踏进电影院！去再会一会霸王龙！完结了！正如火影忍者死神以及准备完结的海贼王一样！我们的青春也早已不存在了！回忆总让我们泪眼婆娑！而现在也只能够努力向前
              </div>

              <div class="comment-content-extra">
                <span class="comment-content-extra-time">4天前</span>
                <span class="comment-content-extra-reply">305回复</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="discussion">
      <div class="discussion-title">讨论</div>

      <div class="discussion-item">
        <div class="discussion-item-title">🦖出境多少时间？</div>
        <div class="discussion-item-content">暂无讨论</div>
      </div>
    </div>

    <div class="long-comments">
      <div class="comment-title">长评</div>
      <div class="comments">
        <div class="comment-content">
          <div class="comment-content-item">
            <div class="comment-content-item-avatar">
              <img
                src="https://p1.meituan.net/avatar/e8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f.jpg"
                alt=""
              />
            </div>
            <div class="comment-content-item-content">
              <div class="comment-content-item-content-name">
                <span>请别捏我的脸o</span>
                <img
                  src="https://obj.pipi.cn/festatic/common/image/e3137a2114dfa0f5da5f0d6f5743c8cf.png"
                />
              </div>

              <div class="comment-content-item-content-rate">
                <span class="comment-score">****</span>
                <span>10分</span>
                <span>购票</span>
              </div>

              <div class="comment-content-lines">
                其实，这是今年到目前为止唯一一部可以让我走进电影院的电影了！从小学时候拿DVD看侏罗纪公园123！到长大出来社会打拼去电影院看的侏罗纪世界123！看到公园的主角和世界的主角碰面走到一起的时候！眼泪不由自主的流下来了！其实看的不只是电影！也是我童年到为人父的这些年！光这些记忆！都已经足够让我踏进电影院！去再会一会霸王龙！完结了！正如火影忍者死神以及准备完结的海贼王一样！我们的青春也早已不存在了！回忆总让我们泪眼婆娑！而现在也只能够努力向前
              </div>

              <div class="comment-content-extra">
                <span class="comment-content-extra-time">4天前</span>
                <span class="comment-content-extra-reply">305回复</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box-office">
      <div class="box-office-title">票房</div>
      <div class="box-office-container">
        <div class="box-office-item">
          <div class="box-office-item-value">26</div>
          <div class="box-office-item-title">昨日排名</div>
        </div>
        <div class="box-office-item">
          <div class="box-office-item-value">253,379</div>
          <div class="box-office-item-title">首周票房(万)</div>
        </div>
        <div class="box-office-item">
          <div class="box-office-item-value">406,403</div>
          <div class="box-office-item-title">累计票房(万)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DownloadApp from "../../components/DownloadApp.vue";
</script>

<style lang="less" scoped>
.movie {
  background: #3d6266;
  padding: 21px 16px;
  line-height: 1.5;
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
  }
}
</style>
