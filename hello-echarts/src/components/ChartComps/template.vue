<template>
  <section>
    <div ref="chartContainer"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const chartContainer = ref();

onMounted(() => {
  const chartDom = chartContainer.value as HTMLDivElement;
  if (!chartDom) return;
});
</script>
