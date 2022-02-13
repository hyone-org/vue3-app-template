<template>
  <AppHeader />

  <AppMain>
    <slot />
  </AppMain>
</template>

<script setup>
import { AppHeader, AppMain } from '@components/app';

</script>

<style lang="scss">

</style>
