<template>
  <div class="b-input">
    <label
      ref="inputFieldRef"
      :class="{
        'mdc-text-field': true,
        'mdc-text-field--disabled': $props.isDisabled,
        'mdc-text-field--with-leading-icon': $props.iconLeft,
        'mdc-text-field--with-trailing-icon': $props.iconRight,
        'mdc-text-field--invalid': $props.isInvalid,
        'mdc-text-field--label-floating': isFloating,
        [`mdc-text-field--${$props.variant}`]: $props.variant,
        [`mdc-text-field--custom-behavior-${$props.behavior}`]: $props.behavior,
      }"
    >
      <span class="mdc-text-field__ripple" />
      <span
        id="my-label-id"
        class="mdc-floating-label"
        :class="{
          'mdc-floating-label--float-above': isFloating,
        }"
      >{{ $props.label }}</span>
      <i
        v-if="$props.iconLeft"
        ref="inputFieldLeftIconRef"
        class="
          material-icons
          mdc-text-field__icon mdc-text-field__icon--leading
        "
        tabindex="0"
        role="button"
        @click="$emit('click-icon-left')"
      >{{ $props.iconLeft }}</i>
      <input
        v-maska="$props.mask"
        class="mdc-text-field__input"
        :type="$props.type"
        aria-labelledby="my-label-id"
        v-bind="$attrs"
        :value="$props.modelValue"
        :disabled="$props.isDisabled"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      >
      <i
        v-if="$props.iconRight"
        ref="inputFieldRightIconRef"
        class="
          material-icons
          mdc-text-field__icon mdc-text-field__icon--trailing
        "
        tabindex="0"
        role="button"
        @click="$emit('click-icon-right')"
      >{{ $props.iconRight }}</i>
      <span class="mdc-line-ripple" />
    </label>

    <div
      class="mdc-text-field-helper-line"
      :class="{
        'mdc-text-field-helper-text--validation-msg': $props.isInvalid,
        'mdc-text-field-helper-text--persistent':
          $props.helperTextPersistent || $props.isInvalid,
      }"
    >
      <div
        class="mdc-text-field-helper-text"
        :aria-hidden="$props.helperTextPersistent || $props.isInvalid"
      >
        {{ $props.helperText }}
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable no-new */
import { shouldBeOneOf } from 'vue-prop-validation-helper';
import {
  onMounted, useAttrs, ref, computed,
} from 'vue';
import { textField } from 'material-components-web';

const $props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  variant: {
    default: 'filled',
    type: String,
    validator: shouldBeOneOf(['filled']),
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
  behavior: {
    type: String,
    default: null,
  },
  iconLeft: {
    type: String,
    default: null,
  },
  iconRight: {
    type: String,
    default: null,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isInvalid: {
    type: Boolean,
    default: false,
  },
  helperText: {
    type: String,
    default: null,
  },
  helperTextPersistent: {
    type: Boolean,
    default: false,
  },
  mask: {
    type: [String, Array],
    default: null,
  },
});
const $emit = defineEmits([
  'input',
  'focus',
  'blur',
  'change',
  'update:modelValue',
  'click-icon-left',
  'click-icon-right',
]);
const $attrs = useAttrs();
const inputFieldRef = ref();
const inputFieldLeftIconRef = ref();
const inputFieldRightIconRef = ref();

const hasText = computed(
  () => $props.modelValue !== undefined
    && $props.modelValue !== null
    && $props.modelValue !== '',
);
const isFocused = ref();
const isFloating = computed(() => hasText.value || isFocused.value);

const handleInput = (event) => {
  const targetValue = event.target.value;
  const newValue = $props.type === 'number' ? Number(targetValue) : targetValue;
  $emit('update:modelValue', newValue);
  $emit('input');
};

const handleChange = (event) => {
  $emit('change', event);
};

const handleFocus = (event) => {
  isFocused.value = true;
  $emit('focus', event);
};

const handleBlur = (event) => {
  isFocused.value = false;
  $emit('blur', event);
};

onMounted(() => {
  const textfieldWrapper = new textField.MDCTextFieldFoundation(
    inputFieldRef.value,
  );
  if ($props.iconLeft) { new textField.MDCTextFieldIcon(inputFieldLeftIconRef.value); }
  if ($props.iconRight) { new textField.MDCTextFieldIcon(inputFieldRightIconRef.value); }
  textfieldWrapper.init();
});
</script>

<style lang="scss">
.mdc-text-field--custom-behavior {
  &-block {
    width: 100%;
  }
}

.mdc-text-field-helper-text--persistent {
  & .mdc-text-field-helper-text {
    opacity: 1;
  }
}

.mdc-text-field-helper-text--validation-msg {
  & .mdc-text-field-helper-text {
    color: #b00020 !important;
  }
}

.mdc-text-field:not(.mdc-text-field--label-floating)
  input[type="date"].mdc-text-field__input {
  &::-webkit-datetime-edit-text,
  &::-webkit-datetime-edit-month-field,
  &::-webkit-datetime-edit-day-field,
  &::-webkit-datetime-edit-year-field {
    -webkit-appearance: none;
    display: none;
  }
}
</style>
