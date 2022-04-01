<template>
  <header>
    <RouterLink v-for="route of routes" :key="route.path" :to="route.path">
      {{ route.name || 'Home' }}
    </RouterLink>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { routes } from './router';
</script>

<style scoped lang="less">
header {
  background-color: #eee;
  padding: 10px 20px;
  & > * {
    font-weight: bold;
  }
  & > * + * {
    margin-left: 10px;
  }
}

main {
  margin-top: 20px;
}
</style>
