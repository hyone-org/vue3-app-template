<template>
  <div class="login-page">
    <div class="login-page__section-image">
      Deu
    </div>
  </div>
</template>

<script setup>
// import { useRouter } from 'vue-router';

// const $router = useRouter();

// const handleLogin = () => {
//   $router.push({ name: 'Home' });
// };
</script>

<style lang="scss">
.login-page {
  margin-left: auto;
  margin-right: auto;
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--size-scalable-medium);
  height: 100%;
  overflow: hidden;
}

.login-page__section-image {
  padding: var(--size-scalable-medium);
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: var(--size-scalable-extra-large);
}

.login-page__logo-image {
  height: var(--size-scalable-jumbo);
}
</style>
