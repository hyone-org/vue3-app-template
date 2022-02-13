<template>
  <component
    :is="tag"
    :to="props.to"
    class="app-header-button animation-ripple"
    tag="button"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  to: {
    type: String,
    default: null,
  },
});

const tag = computed(() => (props.to ? 'router-link' : 'button'));

</script>

<style lang="scss">
.app-header-button {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--size-scalable-small) var(--size-scalable-medium);
  cursor: pointer;
  font-size: var(--size-progressive-extra-small);
  font-weight: 500;
  color: var(--color-white);
  width: fit-content;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: color 0.125ms;
  text-transform: uppercase;

  &:hover {
    background-color: var(--color-pink-scale-003);
  }

  &:visited,
  &:link {
    text-decoration: none;
  }
}

.app-header-button--ripple {
  transform: translate3d(0, 0, 0);
}

.app-header-button.router-link-active {
  background-color: var(--color-pink-scale-003);
}
</style>
