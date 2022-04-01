<template>
  <section>
    <div ref="chartContainer"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const chartContainer = ref();

const dataset = {
  source: [
    ['product', '2015', '2016', '2017'],
    ['Matcha Latte', 43.3, 85.8, 93.7],
    ['Milk Tea', 83.1, 73.4, 55.1],
    ['Cheese Cocoa', 86.4, 65.2, 82.5],
    ['Walnut Brownie', 72.4, 53.9, 39.1],
  ],
};

const option = {
  title: {
    text: 'DataSet',
  },
  xAxis: {
    type: 'category',
  },
  yAxis: {},
  dataset,
  series: Array(3)
    .fill(null)
    .map(() => ({ type: 'bar' })),
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
