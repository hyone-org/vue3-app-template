<template>
  <button class="app-header-avatar">
    <img
      class="app-header-avatar__image"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mark_Zuckerberg_em_setembro_de_2014.jpg/430px-Mark_Zuckerberg_em_setembro_de_2014.jpg"
    >
  </button>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.app-header-avatar {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.app-header-avatar__image {
  width: var(--size-scalable-extra-large);
  height: var(--size-scalable-extra-large);
  overflow: hidden;
  border-radius: var(--border-radius-circle);
  object-fit: cover;
}
</style>
