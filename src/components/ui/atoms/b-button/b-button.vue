<template>
  <button
    ref="buttonRef"
    class="mdc-button"
    :type="$props.type"
    :disabled="isDisabled"
    :class="{
      'mdc-button--touch': $props.isAccessible,
      'mdc-button--raised': $props.variant === 'contained',
      'mdc-button--outlined': $props.variant === 'outlined',
      'mdc-button--icon-leading': $props.iconLeft,
      'mdc-button--icon-trailing': $props.iconRight,
      [`mdc-button--custom-color-${$props.color}`]: $props.color,
      [`mdc-button--custom-behavior-${$props.behavior}`]: $props.behavior !== 'default',
      [`mdc-button--custom-behavior-isLoading`]: $props.isLoading,
    }"
    @click="handleClick($event)"
  >
    <span
      class="mdc-button__ripple"
    />
    <i
      v-if="$props.iconLeft"
      class="material-icons mdc-button__icon"
      aria-hidden="true"
    >{{ $props.iconLeft }}</i>
    <span class="mdc-button__label"><slot /></span>
    <i
      v-if="$props.iconRight"
      class="material-icons mdc-button__icon"
      aria-hidden="true"
    >{{ $props.iconRight }}</i>

    <div
      v-if="isLoading"
      class="mdc-button__custom-loading"
    >
      <b-loading
        class="mdc-button__custom-loading-component"
        size="large"
      />
    </div>
  </button>
</template>

<script setup>
/* eslint-disable no-new */
import { onMounted, ref } from 'vue';
import { ripple } from 'material-components-web';
import { shouldBeOneOf } from 'vue-prop-validation-helper';

const $props = defineProps({
  behavior: {
    type: String,
    default: 'default',
  },
  color: {
    type: String,
    default: 'primary',
    validator: shouldBeOneOf([
      'primary',
      'secondary',
      'tertiary',
      'quaternary',
    ]),
  },
  variant: {
    type: String,
    default: 'contained',
    validator: shouldBeOneOf(['text', 'contained', 'outlined']),
  },
  iconRight: {
    type: String,
    default: null,
  },
  iconLeft: {
    type: String,
    default: null,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isAccessible: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
    validator: shouldBeOneOf([
      'button',
      'submit',
    ]),
  },
  link: {
    type: String,
    default: null,
  },
});

const $emit = defineEmits(['click']);

const buttonRef = ref();

const handleClick = ($event) => {
  if ($props.link) window.open($props.link);
  if (!$props.isLoading) $emit('click', $event);
};

onMounted(() => {
  new ripple.MDCRipple(buttonRef.value);
});
</script>

<style lang="scss">
.mdc-button--custom-behavior {
  &-block {
    width: 100%;
  }
  &-isLoading > *:not(.mdc-button__custom-loading):not(.mdc-button__ripple) {
    opacity: 0;
  }
}

.mdc-button--custom-color {
  &-primary {
    --mdc-theme-primary: var(--color-primary);
    --mdc-theme-on-primary: var(--color-white);
    --b-spinner-stroke: var(--color-white);
  }
}

.mdc-button__custom-loading {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
}

</style>
