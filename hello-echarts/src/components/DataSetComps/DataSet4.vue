<template>
  <button @click="toggle">toggle</button>
  <section>
    <div ref="chartContainer"></div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import * as echarts from 'echarts';
import { computed } from '@vue/reactivity';

const chartContainer = ref();
const seriesLayoutBy = ref('column');

const seriesQty = computed(() => {
  return seriesLayoutBy.value === 'column'
    ? dataset.source[0].length - 1
    : dataset.source.length - 1;
});

let myChart: any;

const dataset = {
  source: [
    ['product', '2012', '2013', '2014', '2015'],
    ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
    ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
    ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4],
  ],
};

const option = {
  title: {
    text: '对象数组',
    subtext:
      '把数据集（ dataset ）的行或列映射为系列（series）, 即通过 row / column 来找这个 series 的每一条记录',
  },
  legend: {},
  xAxis: {
    type: 'category',
  },
  yAxis: {},
  dataset,
  series: Array(seriesQty.value)
    .fill(null)
    .map(() => ({ type: 'bar', seriesLayoutBy: seriesLayoutBy.value })),
};

onMounted(() => {
  const chartDom = chartContainer.value as HTMLDivElement;
  if (!chartDom) return;

  myChart = echarts.init(chartDom, undefined, {
    width: 600,
    height: 400,
  });

  myChart.setOption(option);
});

function toggle() {
  seriesLayoutBy.value = seriesLayoutBy.value === 'row' ? 'column' : 'row';
  option.series = Array(seriesQty.value)
    .fill(null)
    .map(() => ({ type: 'bar', seriesLayoutBy: seriesLayoutBy.value }));

  myChart.setOption(option, {
    replaceMerge: ['series'],
  });
}
</script>
