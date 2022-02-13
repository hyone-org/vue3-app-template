<template>
  <component
    :is="tag"
    :class="{
      [`b-card`]: true,
      [`b-card--variant-${variant}`]: variant,
      [`b-card--elevation-${elevation}`]: elevation,
    }"
  >
    <slot />
  </component>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';

export default {
  name: 'BCard',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: shouldBeOneOf([
        'default',
        'outlined',
      ]),
    },
    elevation: {
      type: String,
      default: '200',
      validator: shouldBeOneOf([
        '100',
        '200',
        '300',
      ]),
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
};
</script>

<style lang="scss">
@import '~./b-card.scss';
</style>
