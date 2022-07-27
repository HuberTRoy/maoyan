<template>
  <Navigator title="侏罗纪世界3" />
  <DownloadApp />
  <MovieInfo />
</template>

<script setup lang="ts">
// props ts定义
import Navigator from "../../components/Navigator.vue";
import DownloadApp from "../../components/DownloadApp.vue";
import MovieInfo from "./components/MovieInfo.vue";

interface Props {
  msg?: string;
}

const props = withDefaults(defineProps<Props>(), { msg: "你好" });
const { msg } = toRefs(props);
</script>
<style scoped lang="less"></style>
