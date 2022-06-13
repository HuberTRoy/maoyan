<template>
  <Navigator title="侏罗纪世界3" />
  <DownloadApp />
  <div class="movie-info">
    <van-image
      src="https://p0.pipi.cn/mmdb/25bfd671be15bf51baf0ee3a5d06b91bf94c3.jpg?imageMogr2/thumbnail/2500x2500%3E"
    />
  </div>
</template>

<script setup lang="ts">
// props ts定义
import Navigator from "../../components/Navigator.vue";
import DownloadApp from "../../components/DownloadApp.vue";

interface Props {
  msg?: string;
}

const props = withDefaults(defineProps<Props>(), { msg: "你好" });
const { msg } = toRefs(props);
</script>
<style scoped lang="less">
.container {
}
</style>
