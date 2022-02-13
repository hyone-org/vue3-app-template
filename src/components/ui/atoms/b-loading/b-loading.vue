<template>
  <svg
    class="b-spinner"
    :class="{
      [`b-spinner--color-${$props.color}`]: $props.color !== 'default',
      [`b-spinner--size-${$props.size}`]: $props.size,
    }"
    viewBox="0 0 66 66"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      class="path"
      fill="none"
      stroke-width="6"
      stroke-linecap="round"
      cx="33"
      cy="33"
      r="30"
    />
  </svg>
</template>

<script setup>
import { shouldBeOneOf } from 'vue-prop-validation-helper';

const $props = defineProps({
  size: {
    type: String,
    default: 'colossal',
    validator: shouldBeOneOf([
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
    default: 'default',
    validator: shouldBeOneOf([
      'default',
      'primary',
      'secondary',
      'tertiary',
      'inverse',
    ]),
  },
});
</script>

<style lang="scss" scoped>
$offset: 187;
$duration: 1.4s;

.b-spinner {
  animation: rotator $duration linear infinite;
  width: var(--b-spinner-width);
  height: var(--b-spinner-height);
  stroke: var(--b-spinner-stroke);

  &--size {
    &-medium {
      --b-spinner-width: var(--size-scalable-medium);
      --b-spinner-height: var(--size-scalable-medium);
    }
    &-large {
      --b-spinner-width: var(--size-scalable-large);
      --b-spinner-height: var(--size-scalable-large);
    }
    &-extra-large {
      --b-spinner-width: var(--size-scalable-extra-large);
      --b-spinner-height: var(--size-scalable-extra-large);
    }
    &-jumbo {
      --b-spinner-width: var(--size-scalable-jumbo);
      --b-spinner-height: var(--size-scalable-jumbo);
    }
    &-extra-jumbo {
      --b-spinner-width: var(--size-scalable-extra-jumbo);
      --b-spinner-height: var(--size-scalable-extra-jumbo);
    }
    &-giant {
      --b-spinner-width: var(--size-scalable-giant);
      --b-spinner-height: var(--size-scalable-giant);
    }
    &-extra-giant {
      --b-spinner-width: var(--size-scalable-extra-giant);
      --b-spinner-height: var(--size-scalable-extra-giant);
    }
    &-colossal {
      --b-spinner-width: var(--size-scalable-colossal);
      --b-spinner-height: var(--size-scalable-colossal);
    }
    &-extra-colossal {
      --b-spinner-width: var(--size-scalable-extra-colossal);
      --b-spinner-height: var(--size-scalable-extra-colossal);
    }
    &-mega {
      --b-spinner-width: var(--size-scalable-mega);
      --b-spinner-height: var(--size-scalable-mega);
    }
    &-extra-mega {
      --b-spinner-width: var(--size-scalable-extra-mega);
      --b-spinner-height: var(--size-scalable-extra-mega);
    }
    &-immense {
      --b-spinner-width: var(--size-scalable-immense);
      --b-spinner-height: var(--size-scalable-immense);
    }
  }

  &--color {
    &-primary {
      --b-spinner-stroke: var(--color-primary);
    }
    &-secondary {
      --b-spinner-stroke: var(--color-secondary);
    }
    &-tertiary {
      --b-spinner-stroke: var(--color-tertiary);
    }
    &-inverse {
      --b-spinner-stroke: var(--color-white);
    }
    &-rainbow {
      animation: dash $duration ease-in-out infinite,
        colors ($duration * 4) ease-in-out infinite;
    }
  }
}

@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

.path {
  stroke-dasharray: $offset;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash $duration ease-in-out infinite;
}

@keyframes colors {
  0% {
    stroke: #4285f4;
  }
  25% {
    stroke: #de3e35;
  }
  50% {
    stroke: #f7c223;
  }
  75% {
    stroke: #1b9a59;
  }
  100% {
    stroke: #4285f4;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: $offset;
  }
  50% {
    stroke-dashoffset: $offset/4;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: $offset;
    transform: rotate(450deg);
  }
}
</style>
