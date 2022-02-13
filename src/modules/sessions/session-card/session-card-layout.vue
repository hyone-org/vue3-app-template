<template>
  <b-card
    class="session-card-layout"
    tag="form"
    @submit.prevent.stop="$emit('submit')"
  >
    <slot />
  </b-card>
</template>

<script setup>
defineEmits(['submit']);
</script>

<style lang="scss">
.session-card-layout {
  width: 100%;
}
</style>
