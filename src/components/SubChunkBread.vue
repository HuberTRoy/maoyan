<template>
  <div class="bread-header">
    <span>{{ props.title }}</span>
    <span class="desc-load">
      <slot name="right" />
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<style scoped lang="less">
.bread-header {
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 15px;
  .desc-load {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
  }
}
</style>
