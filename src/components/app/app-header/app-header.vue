<template>
  <header class="app-header">
    <div class="app-header__section-logo">
      <img
        src="@assets/images/hyone-logo.png"
        class="app-header__logo"
      >
    </div>
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
  justify-content: center;
  padding-left: var(--size-scalable-medium);
  padding-right: var(--size-scalable-medium);
  position: relative;
  box-shadow: var(--shadow-110);
  height: 100px;
  background-color: blue;
}

.app-header__section-logo {
  position: relative;
  padding-top: var(--size-scalable-medium);
  padding-bottom: var(--size-scalable-medium);
}

.app-header__logo {
  height: 100%;
}
</style>
