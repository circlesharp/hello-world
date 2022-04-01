<template>
  <section>
    <div ref="chartContainer"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const chartContainer = ref();
const option = {
  title: {
    text: '写死在 series',
  },
  xAxis: {
    data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'],
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      name: '2015',
      data: [89.3, 92.1, 94.4, 85.4],
    },
    {
      type: 'bar',
      name: '2016',
      data: [95.8, 89.4, 91.2, 76.9],
    },
    {
      type: 'bar',
      name: '2017',
      data: [97.7, 83.1, 92.5, 78.1],
    },
  ],
};

onMounted(() => {
  const chartDom = chartContainer.value as HTMLDivElement;
  if (!chartDom) return;

  const myChart = echarts.init(chartDom, undefined, {
    width: 600,
    height: 400,
  });

  myChart.setOption(option);
});
</script>
