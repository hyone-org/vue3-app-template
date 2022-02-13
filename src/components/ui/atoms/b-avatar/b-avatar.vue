<template>
  <component
    :is="tag"
    :class="{
      'b-avatar': true,
      [`b-avatar--size-${size}`]: size,
      [`b-avatar--behavior-${behavior}`]: behavior,
    }"
  >
    <img
      :src="srcParsed"
      class="b-avatar__image"
    >
    <figcaption
      v-if="caption"
      class="b-avatar__figcaption"
    >
      {{ caption }}
    </figcaption>
  </component>
</template>

<script>
import { shouldBeOneOf } from 'vue-prop-validation-helper';
import DefaultImage from '@assets/images/empty-photo-shared.jpg';

export default {
  name: 'BAvatar',
  props: {
    tag: {
      type: String,
      default: 'figure',
    },
    type: {
      type: String,
      default: 'svg',
      validator: shouldBeOneOf([
        'svg',
        'png',
      ]),
    },
    caption: {
      type: String,
      default: null,
    },
    behavior: {
      type: String,
      default: 'rounded',
      validator: shouldBeOneOf([
        'rounded',
        'square',
      ]),
    },
    src: {
      type: String,
      default: null,
    },
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
  },
  computed: {
    srcParsed() {
      return this.src || DefaultImage;
    },
  },
};
</script>

<style lang="scss">
.b-avatar {
  --b-avatar-width: none;
  --b-avatar-height: none;
  --b-avatar-border-radius: none;
  --b-avatar-overflow: hidden;
  --b-avatar-marging: 0;
  --a-avatar__figcaption-background-color: black;
  --a-avatar__figcaption-color: white;
  --a-avatar__figcaption-text-align: center;

  border-radius: var(--b-avatar-border-radius);
  height: var(--b-avatar-height);
  margin: var(--b-avatar-marging);
  overflow: var(--b-avatar-overflow);
  position: relative;
  width: var(--b-avatar-width);

  &__image {
    height:100%;
    width:100%;
    object-fit: cover;
  }

  &__figcaption {
    background-color: var(--a-avatar__figcaption-background-color);
    bottom: 0;
    color: var(--a-avatar__figcaption-color);
    left: 0;
    position: absolute;
    text-align: var(--a-avatar__figcaption-text-align);
    width: 100%;
  }

  &--behavior {
    &-rounded {
      --b-avatar-border-radius: var(--border-radius-circle);
    }
    &-square {
      --b-avatar-border-radius: none;
    }
  }

  &--size {
    &-medium {
      --b-avatar-width: var(--size-scalable-medium);
      --b-avatar-height: var(--size-scalable-medium);
    }
    &-large {
      --b-avatar-width: var(--size-scalable-large);
      --b-avatar-height: var(--size-scalable-large);
    }
    &-extra-large {
      --b-avatar-width: var(--size-scalable-extra-large);
      --b-avatar-height: var(--size-scalable-extra-large);
    }
    &-jumbo {
      --b-avatar-width: var(--size-scalable-jumbo);
      --b-avatar-height: var(--size-scalable-jumbo);
    }
    &-extra-jumbo {
      --b-avatar-width: var(--size-scalable-extra-jumbo);
      --b-avatar-height: var(--size-scalable-extra-jumbo);
    }
    &-giant {
      --b-avatar-width: var(--size-scalable-giant);
      --b-avatar-height: var(--size-scalable-giant);
    }
    &-extra-giant {
      --b-avatar-width: var(--size-scalable-extra-giant);
      --b-avatar-height: var(--size-scalable-extra-giant);
    }
    &-colossal {
      --b-avatar-width: var(--size-scalable-colossal);
      --b-avatar-height: var(--size-scalable-colossal);
    }
    &-extra-colossal {
      --b-avatar-width: var(--size-scalable-extra-colossal);
      --b-avatar-height: var(--size-scalable-extra-colossal);
    }
    &-mega {
      --b-avatar-width: var(--size-scalable-mega);
      --b-avatar-height: var(--size-scalable-mega);
    }
    &-extra-mega {
      --b-avatar-width: var(--size-scalable-extra-mega);
      --b-avatar-height: var(--size-scalable-extra-mega);
    }
    &-immense {
      --b-avatar-width: var(--size-scalable-immense);
      --b-avatar-height: var(--size-scalable-immense);
    }
  }
}
</style>
