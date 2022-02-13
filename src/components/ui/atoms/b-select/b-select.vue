<template>
  <div
    ref="selectRef"
    class="mdc-select mdc-select--filled"
    :class="{
      'mdc-select--disabled': $props.isDisabled,
      'mdc-select--with-leading-icon': $props.iconLeft,
    }"
  >
    <div
      class="mdc-select__anchor"
      role="button"
      aria-haspopup="listbox"
      aria-expanded="false"
    >
      <span class="mdc-select__ripple" />
      <span
        class="mdc-floating-label"
      >
        {{ $props.label }}
      </span>
      <i
        v-if="$props.iconLeft"
        ref="selectIconRef"
        class="material-icons mdc-select__icon"
        tabindex="0"
        role="button"
      >
        {{ $props.iconLeft }}
      </i>
      <span class="mdc-select__selected-text-container">
        <span
          class="mdc-select__selected-text"
        >{{ $props?.modelValue?.text }}</span>
      </span>

      <span
        class="mdc-select__dropdown-icon"
      >
        <svg
          v-if="!isSelected || !hasClearButton"
          class="mdc-select__dropdown-icon-graphic"
          viewBox="7 10 10 5"
          focusable="false"
        >
          <polygon
            class="mdc-select__dropdown-icon-inactive"
            stroke="none"
            fill-rule="evenodd"
            points="7 10 12 15 17 10"
          />
          <polygon
            class="mdc-select__dropdown-icon-active"
            stroke="none"
            fill-rule="evenodd"
            points="7 15 12 10 17 15"
          />
        </svg>
      </span>

      <span class="mdc-line-ripple" />
    </div>

    <b-icon
      v-if="isSelected && hasClearButton"
      icon="clear"
      tag="button"
      class="mdc-select__custom-icon"
      size="large"
      @click="$emit('clear')"
    />

    <div class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
      <ul
        class="mdc-list"
        role="listbox"
        :aria-label="ariaDescription"
      >
        <li
          v-for="(item, index) in $props.items"
          :key="index"
          :class="{
            'mdc-list-item': true,
            'mdc-list-item--disabled': item?.isDisabled,
            'mdc-list-item--selected': item?.value == $props?.modelValue?.value,
          }"
          :aria-selected="item?.value == $props?.modelValue?.value ? 'true' :'false'"
          :aria-disabled="item?.isDisabled"
          :data-value="item?.value"
          role="option"
        >
          <span class="mdc-list-item__ripple" />
          <span class="mdc-list-item__text">
            {{ item?.text }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable no-new */
import { onMounted, ref, computed } from 'vue';
import { select } from 'material-components-web';

const $props = defineProps({
  label: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  ariaDescription: {
    type: String,
    default: 'Teste',
  },
  modelValue: {
    type: [String, Object],
    default: null,
  },
  hasClearButton: {
    type: Boolean,
    default: false,
  },
  iconLeft: {
    type: String,
    default: null,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const $emit = defineEmits(['change', 'update:modelValue', 'clear']);
const selectRef = ref();
const selectIconRef = ref();
const isSelected = computed(() => Boolean($props?.modelValue?.value));

onMounted(() => {
  const selectWrapper = new select.MDCSelect(selectRef.value);
  if ($props.iconLeft) {
    new select.MDCSelectIcon(selectIconRef.value);
  }

  selectWrapper.listen('MDCSelect:change', (event) => {
    $emit('update:modelValue', $props.items[event.detail?.index]);
  });
});
</script>

<style lang="scss">
.mdc-select__custom-icon {
  align-items: center;
  height: 100%;
  justify-content: center;
  padding: var(--size-progressive-micro);
  position: absolute;
  right: 0;
}
</style>
