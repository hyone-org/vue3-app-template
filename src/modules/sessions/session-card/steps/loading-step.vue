<template>
  <SessionCardLayout class="loading-step">
    <h-loading color="primary" />
  </SessionCardLayout>
</template>

<script setup>
import SessionCardLayout from '../session-card-layout.vue';

</script>

<style lang="scss">
.loading-step {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
}
</style>
