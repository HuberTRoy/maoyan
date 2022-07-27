<template>
  <router-view></router-view>
  <Tabbar v-if="!!tabbar" active-color="#f03d37" class="main-tab" route fixed>
    <TabbarItem icon="home-o" replace to="/">电影/影院</TabbarItem>
    <TabbarItem icon="search">视频</TabbarItem>
    <TabbarItem icon="friends-o">小视频</TabbarItem>
    <TabbarItem icon="friends-o">演出</TabbarItem>
    <TabbarItem icon="setting-o" replace to="/myCenter">我的</TabbarItem>
  </Tabbar>
</template>

<script setup lang="ts">
import { Tabbar, TabbarItem } from "vant";

const router = useRouter();
const tabbar = computed(() => router.currentRoute.value.meta.tabbar);
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: PingFangSC-Regular, Hiragino Sans GB, sans-serif, Helvetica, 宋体;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

html,
body {
  width: 100%;
  height: 100%;
}

.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
