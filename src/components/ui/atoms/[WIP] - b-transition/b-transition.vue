<template>
  <transition
    name="b-transition__transition"
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
  props: {
    subtree: {
      type: Boolean,
      default: false,
    },
    observer: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (this.observer) return;
    const observerInstance = new MutationObserver(this.childListChanged);
    observerInstance.observe(this.$el, {
      childList: true,
      subtree: this.subtree,
    });
    this.observerInstance = observerInstance;
  },
  beforeUnmount() {
    this.observerInstance?.disconnect();
  },
  methods: {
    childListChanged() {
      console.log('childListChanged');
    },
  },
};
</script>

<style lang="scss">
.b-transition__transition-enter-active,
.b-transition__transition-leave-active {
  transition: opacity 0.125s ease, transform 0.5s ease-in-out;
}

.b-transition__transition-enter-from,
.b-transition__transition-leave-to {
  opacity: 0;
  transform: translateY(100vh);
}
</style>
