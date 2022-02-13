<template>
  <component
    :is="tag"
    :class="{
      ['b-text']: true,
      [`b-text--size-${size}`]: size != 'inherit',
      [`b-text--color-${color}`]: color != 'inherit',
      [`b-text--align-${align}`]: align != 'inherit',
      [`b-text--weight-${weight}`]: weight != 'inherit',
      [`b-text--behavior-italic`]: italic,
      [`b-text--variant-${variant}`]: variant != 'inherit',
      [`b-text--emphasis-${emphasis}`]: emphasis != 'inherit',
    }"
  >
    <slot />
  </component>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';

export default {
  name: 'BText',
  props: {
    size: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'nano',
        'micro',
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
    color: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'primary',
        'inverse',
      ]),
    },
    variant: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'button',
        'caption',
        'overline',
      ]),
    },
    tag: {
      type: String,
      default: 'p',
      validator: shouldBeOneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'div',
        'a',
        'strong',
        'caption',
      ]),
    },
    align: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'left',
        'right',
        'center',
        'justify',
      ]),
    },
    weight: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'black',
        'extra-bold',
        'bold',
        'semi-bold',
        'medium',
        'regular',
        'light',
        'extra-light',
        'thin',
      ]),
    },
    emphasis: {
      type: String,
      default: 'inherit',
      validator: shouldBeOneOf([
        'inherit',
        'low',
        'medium',
        'high',
      ]),
    },
    italic: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import '~./b-text.scss';
</style>
