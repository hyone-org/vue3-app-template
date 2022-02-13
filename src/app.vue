<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const PINK_EMPTY_LAYOUT = 'PinkEmptyLayout';
const route = useRoute();
const layout = computed(() => route?.meta?.layout || PINK_EMPTY_LAYOUT);

</script>

<style lang="scss">
@import '~@assets/styles';
</style>
