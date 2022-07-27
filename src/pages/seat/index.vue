<template>
  <div class="seat">
    <!-- 
      上
        中
      下

     -->
    <Navigator
      back
      title="环球国际影城(房山欢乐城店)"
      style="position: relative; z-index: 3"
    ></Navigator>
    <div class="seat-selector">
      <div
        class="seat-selector-title"
        :style="{
          'transition-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
          'transition-duration': `${transformDuaration}ms`,
          'transition-property': 'transform',
          transform: `translateX(${rawTransformParams.translateX}px)`,
        }"
      >
        7号 VIP沙发厅
      </div>
      <div
        ref="inner"
        class="seat-selector-room"
        :style="{
          'transition-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
          'transition-duration': `${transformDuaration}ms`,
          'transition-property': 'transform',
          ...transformParams,
        }"
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend"
      >
        <div
          v-for="i in 88"
          :key="i"
          :class="['seat-selector-room-key', i % 2 ? 'disabled' : '', i % 5 ? '' : 'remove']"
        ></div>
        <div class="split"></div>
      </div>
      <div
        ref="narrow"
        class="seat-selector-narrow"
        :style="{
          'transition-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
          'transition-duration': `${transformDuaration}ms`,
          'transition-property': 'transform',
          transform: `translateY(${rawTransformParams.translateY}px)`,
        }"
      >
        <div v-for="i in 8" :key="i" class="seat-selector-narrow-key">{{ i }}</div>
      </div>
    </div>
    <div class="select-info">
      <div class="select-info-card">
        <div class="select-info-card-title">
          <span style="font-size: 15px">神探大战</span>
          <span style="color: #2f8df9; font-size: 12px">
            切换场次
            <van-icon name="arrow-down" style="margin-left: 5px" />
          </span>
        </div>
        <div class="select-info-card-show">今天 07月27日 16:30 - 18:11 国语2D</div>
      </div>

      <div style="width: 100%; margin-top: 10px">
        <Button
          round
          style="
            background: linear-gradient(270deg, rgba(255, 123, 16, 0.98), rgba(255, 154, 15, 0.98));
            border-color: none;
            color: #fff;
            width: 100%;
          "
        >
          确认选座
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon as VanIcon, Button } from "vant";
import Navigator from "../../components/Navigator.vue";
const inner = ref<HTMLDivElement>();
const rawTransformParams = reactive({
  translateX: 0,
  translateY: 0,
  translateZ: 1,
  scale: 1,
});

const transformDuaration = ref(0);
const touchStarting = ref(false);
const animating = ref(false);
const transformParams = computed(() => {
  return {
    transform: `translateX(${rawTransformParams.translateX}px) translateY(${rawTransformParams.translateY}px) translateZ(${rawTransformParams.translateZ}px) scale(${rawTransformParams.scale})`,
  };
});

const initialTouchParams = ref({
  clientX: 0,
  clientY: 0,
  prevTransformX: 0,
  prevTransformY: 0,
});

const getInnerOutOfBound = () => {
  if (!inner.value) return {};
  const { x, y, width } = inner.value.getBoundingClientRect();

  return {
    left: x < 0,
    right: x > document.body.clientWidth - width,
    top: y < 50,
    bottom: y > 290,
  };
};

const touchstart = (e: TouchEvent) => {
  e.preventDefault();

  if (animating.value) return;
  touchStarting.value = true;
  const { clientX, clientY } = e.touches[0];
  initialTouchParams.value = {
    clientX,
    clientY,
    prevTransformX: rawTransformParams.translateX,
    prevTransformY: rawTransformParams.translateY,
  };
};

const touchmove = (e: TouchEvent) => {
  e.preventDefault();
  if (animating.value) return;
  if (!touchStarting.value) return;
  if (!inner.value) return;
  const { clientX, clientY } = e.touches[0];
  let plusX = clientX - initialTouchParams.value.clientX;
  let plusY = clientY - initialTouchParams.value.clientY;
  let factor = 1;
  const innerOutOfBound = Object.values(getInnerOutOfBound()).some(i => i);
  if (innerOutOfBound) {
    factor = 0.8;
  }
  plusX = plusX * factor;
  plusY = plusY * factor;

  // const { prevTranlateX, prevTranlateY } = initialTouchParams.value;
  // console.log(clientX - initialTouchParams.value.clientX);
  rawTransformParams.translateX += plusX;
  rawTransformParams.translateY += plusY;
  initialTouchParams.value = {
    clientX,
    clientY,
    prevTransformX: innerOutOfBound
      ? initialTouchParams.value.prevTransformX
      : rawTransformParams.translateX,
    prevTransformY: innerOutOfBound
      ? initialTouchParams.value.prevTransformY
      : rawTransformParams.translateX,
  };
};

const touchend = () => {
  if (animating.value) return;
  initialTouchParams.value = {
    ...initialTouchParams.value,
  };
  const innerOutOfBound = getInnerOutOfBound();

  if (innerOutOfBound.left || innerOutOfBound.right) {
    rawTransformParams.translateX = 0;
  }

  if (innerOutOfBound.top || innerOutOfBound.bottom) {
    rawTransformParams.translateY = 0;
  }

  if (Object.values(innerOutOfBound).some(i => i)) {
    transformDuaration.value = 800;
    animating.value = true;
    setTimeout(() => {
      transformDuaration.value = 0;
      animating.value = false;
    }, 800);
  }

  touchStarting.value = false;
};
</script>

<style lang="less" scoped>
.seat {
  height: 100%;
  display: flex;
  flex-direction: column;
  &-selector {
    width: 100%;
    flex-grow: 1;
    height: 1px;
    min-height: 200px;
    background: #f6f6f6;
    padding-top: 50px;
    padding-left: 50px;
    position: relative;

    &-title {
      position: absolute;
      top: 0;
      left: calc(50% - 135px);
      background: url(https://obj.pipi.cn/festatic/fe-trade/public/img/screen.5725bf7d.png)
        no-repeat top;
      z-index: 2;
      pointer-events: none;
      background-size: 200px;
      width: 271px;
      height: 30px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      font-size: 11px;
      color: #666;
    }

    &-narrow {
      display: flex;
      flex-direction: column;
      width: 15px;
      z-index: 2;
      opacity: 0.2;
      position: absolute;
      left: 0;
      top: 56px;
      border-radius: 8px;
      pointer-events: none;
      background: #000;

      &-key {
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
      }
    }

    &-room {
      width: 300px;
      height: 256px;
      display: grid;
      grid-template-rows: repeat(8, 1fr);
      grid-template-columns: repeat(11, 1fr);
      align-items: center;
      position: relative;

      &-key {
        width: 22px;
        height: 22px;
        background-size: 100% 100%;
        border-radius: 6px;
        border: 1px solid #ababab;
      }

      &-key.disabled {
        background: #ebebeb;
      }

      &-key.remove {
        opacity: 0;
      }

      .split {
        z-index: -1;
        position: absolute;
        left: 50%;
        top: 10px;
        bottom: 36px;
        height: 100%;
        border-left: 1px dashed #ccc;
        transform: scaleX(0.5) translateX(20px);
      }
    }
  }

  .select-info {
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: #f6f6f6;

    &-card {
      background: #fff;
      padding: 10px;
      border-radius: 15px;
      display: flex;
      flex-direction: column;

      &-title {
        display: flex;
        justify-content: space-between;
      }

      &-show {
        margin-top: 10px;
        font-size: 12px;
        margin-bottom: 25px;
      }
    }
  }
}
</style>
