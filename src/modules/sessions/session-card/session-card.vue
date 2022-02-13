<template>
  <component
    :is="actualStep"
    class="session-card"
  />
</template>

<script setup>
import {
  reactive, computed, provide,
} from 'vue';
import { stepsDictionary } from './steps-dictionary';

const $emit = defineEmits(['login']);

const $state = reactive({ actualStep: 'UserStep', userData: null });
const actualStep = computed(() => stepsDictionary[$state.actualStep]);

const handleActionLoginCard = ({ name, value }) => {
  if (name === 'go') $state.actualStep = value;
  else if (name === 'save-user') $state.userData = value;
  else if (name === 'login') $emit('login', $state.userData);
};

provide('loginCard', $state);
provide('handleActionLoginCard', handleActionLoginCard);
</script>

<style lang="scss">
.session-card {
  width: 100%;
}
</style>
