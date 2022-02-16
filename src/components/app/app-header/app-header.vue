<template>
  <header class="app-header">
    <div class="app-header__section-logo" />
  </header>
</template>

<script setup>

</script>

<style lang="scss">
.app-header {
  background-color: var(--color-secondary);
  display: flex;
  flex-direction: row;
  height: var(--size-scalable-giant);
  justify-content: space-between;
  padding-left: var(--size-scalable-medium);
  padding-right: var(--size-scalable-medium);
  position: relative;
  box-shadow: var(--shadow-110);
}

.app-header__section-logo {
  position: relative;
  flex: 1;
  padding-top: var(--size-scalable-medium);
  padding-bottom: var(--size-scalable-medium);
}
</style>
