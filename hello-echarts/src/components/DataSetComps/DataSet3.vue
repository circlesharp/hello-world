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
  dimensions: ['product', '2015', '2016', '2017', '2018'],
  source: [
    {
      product: 'Matcha Latte',
      '2015': 41.1,
      '2016': 30.4,
      '2017': 30.4,
      '2018': 53.3,
    },
    {
      product: 'Milk Tea',
      '2015': 83.1,
      '2016': 73.4,
      '2017': 55.1,
      '2018': 53.3,
    },
    {
      product: 'Cheese Cocoa',
      '2015': 86.4,
      '2016': 65.2,
      '2017': 82.5,
      '2018': 53.3,
    },
  ],
};

const option = {
  title: {
    text: '对象数组',
    subtext: 'dataset 增加 dimensions',
  },
  legend: {},
  xAxis: {
    type: 'category',
  },
  yAxis: {},
  dataset,
  series: Array(4)
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
