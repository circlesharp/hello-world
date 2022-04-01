<template>
  <header>
    <RouterLink v-for="route of routes" :key="route.path" :to="route.path">
      {{ route.name || 'Home' }}
    </RouterLink>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { routes } from './router';
</script>

<style scoped>
header {
  background-color: #eee;
  padding: 10px 20px;
}

header > * {
  font-weight: bold;
}

header > * + * {
  margin-left: 10px;
}
</style>
