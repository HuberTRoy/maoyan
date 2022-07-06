<template>
  <div class="tabs">
    <div
      v-for="(item, index) of props.list"
      :key="index"
      class="tab active"
      :style="{ width: tabsWidth }"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tab {
  title: string;
  value: string | number;
}

export type TabsType = Tabs[];

// props ts定义
interface Props {
  list: Tabs[];
  tabWidth?: string | number;
  value?: string;
  onChange?: (tab: Tabs) => void;
}

const props = withDefaults(defineProps<Props>(), { tabWidth: 115 });
const tabsWidth = typeof props.tabWidth === "string" ? props.tabWidth : props.tabWidth + "px";
</script>
<style scoped lang="less">
.tabs {
  display: flex;
  overflow-x: auto;
  position: sticky;
  background-color: #fff;
  top: 0;
  width: 100%;
  z-index: 1;

  &::-webkit-scrollbar {
    height: 0 !important;
  }

  .tab {
    flex: none;
    width: 115px;
    line-height: 43px;
    margin-left: 4.5px;
    font-size: 14px;
    text-align: center;
    color: #666;

    &.active {
      border-bottom: 2px solid #f03d37;
      color: #f03d37;
    }
  }
}
</style>
