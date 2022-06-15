<template>
  <div class="header-logo">
    <img
      src="https://p0.meituan.net/scarlett/448afce485c1f342895185c2be668fa411803.png@80q"
      alt=""
    />
    <span style="flex-grow: 1"></span>
    <span class="desc">{{ props.title }}</span>
    <span class="open-app">打开App</span>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "发现最新最热电影",
});
</script>

<style scoped lang="less">
.header-logo {
  display: flex;
  align-items: center;
  height: 60px;
  background: #fff;

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
