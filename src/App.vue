<template>
  <div class="main-layout">
    <router-view></router-view>
    <Tabbar v-if="showTabbar" active-color="#f03d37" class="main-tab">
      <TabbarItem icon="home-o">电影/影院</TabbarItem>
      <TabbarItem icon="search">视频</TabbarItem>
      <TabbarItem icon="friends-o">小视频</TabbarItem>
      <TabbarItem icon="friends-o">演出</TabbarItem>
      <TabbarItem icon="setting-o">我的</TabbarItem>
    </Tabbar>
  </div>
</template>

<script setup lang="ts">
import { Tabbar, TabbarItem } from "vant";

const router = useRouter();
const showTabbar = computed(() => !!router.currentRoute.value.meta.tabbar);
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
}

.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.main-layout > .main-tab {
  position: sticky;
  bottom: 0;
}
</style>
