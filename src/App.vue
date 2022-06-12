<template>
  <div class="main-layout">
    <router-view></router-view>
    <Tabbar active-color="#f03d37" class="main-tab">
      <TabbarItem icon="home-o">标签</TabbarItem>
      <TabbarItem icon="search">标签</TabbarItem>
      <TabbarItem icon="friends-o">标签</TabbarItem>
      <TabbarItem icon="setting-o">标签</TabbarItem>
    </Tabbar>
  </div>
</template>

<script setup lang="ts">
import { Tabbar, TabbarItem } from "vant";
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
