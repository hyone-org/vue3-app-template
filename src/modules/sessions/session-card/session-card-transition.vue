<template>
  <transition
    name="session-card-transition"
    mode="out-in"
    appear
  >
    <div v-if="$slots.default">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.session-card-transition-enter-active,
.session-card-transition-leave-active {
  transition: opacity 0.250s ease, transform 0.250s ease-in-out;
}

.session-card-transition-enter-from,
.session-card-transition-leave-to {
  opacity: 0;
  transform: translateY(100vh);
}
</style>
