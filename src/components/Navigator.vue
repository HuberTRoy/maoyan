<template>
  <div class="header-bar">
    <i>
      <van-icon v-if="props.back && routerStackLength > 1" name="arrow-left" @click="back" />
    </i>
    <span>{{ props.title }}</span>
    <span>
      <slot name="right" />
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  back?: boolean;
  title?: string;
}

const props = withDefaults(defineProps<Props>(), { back: true, title: "猫眼电影" });
const router = useRouter();
// 路由栈的长度
const routerStackLength = computed(() => router.getRoutes().length);
const back = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #e54847;
  color: #fff;
  padding: 6px;
  font-size: 18px;
  line-height: 36px;
}
</style>
