<template>
  <component
    :is="tag"
    :class="{
      'b-icon': true,
      [`b-icon--size-${size}`]: size,
      [`b-icon--color-${color}`]: color !== 'inherit',
      [`b-icon--wrapper-${wrapper}`]: wrapper !== 'default',
    }"
  >
    <span class="material-icons">{{ $props.icon }}</span>
  </component>
</template>

<script setup>
import { shouldBeOneOf } from 'vue-prop-validation-helper';

const $props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  wrapper: {
    type: String,
    default: 'default',
    validator: shouldBeOneOf([
      'default',
      'circle',
      'rounded',
      'square',
    ]),
  },
  size: {
    type: String,
    default: 'inherit',
    validator: shouldBeOneOf([
      'inherit',
      'extra-small',
      'small',
      'medium',
      'large',
      'extra-large',
      'jumbo',
      'extra-jumbo',
      'giant',
      'extra-giant',
      'colossal',
      'extra-colossal',
      'mega',
      'extra-mega',
      'immense',
    ]),
  },
  tag: {
    type: String,
    default: 'div',
    validator: shouldBeOneOf([
      'div',
      'span',
      'button',
      'a',
    ]),
  },
  color: {
    type: String,
    default: 'inherit',
    validator: shouldBeOneOf([
      'inherit',
      'primary',
      'secondary',
      'inverse',
    ]),
  },
});

</script>

<style lang="scss">
@import "~./b-icon.scss";
</style>
