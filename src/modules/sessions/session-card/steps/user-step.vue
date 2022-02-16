<template>
  <SessionCardLayout @submit="handleRequest">
    <b-text
      tag="h3"
      variant="h6"
      emphasis="high"
      class="user-step__title"
    >
      Entrar com a minha conta
    </b-text>

    <b-input
      v-model="emailOrPhone"
      type="text"
      label="Email ou telefone"
      behavior="block"
      :is-invalid="isInvalid"
      :helper-text="helperText"
      @update:model-value="handleInputUser"
    />

    <b-button
      behavior="block"
      :is-disabled="isInvalidButton"
      :is-loading="isLoading"
      :is-accessible="true"
      type="submit"
      @click="handleRequest"
    >
      Próximo
    </b-button>

    <b-button
      behavior="block"
      :is-accessible="true"
      variant="outlined"
    >
      Quero ser parceiro
    </b-button>
  </SessionCardLayout>
</template>

<script setup>
/* eslint-disable max-len */
import { AuthServices } from '@services/auth-services';
import { isValidEmail } from '@utils/validations/email';
import { isValidPhoneSimple } from '@utils/validations/phone';
import { ref, computed, inject } from 'vue';
import SessionCardLayout from '../session-card-layout.vue';

const handleActionLoginCard = inject('handleActionLoginCard');

const emailOrPhone = ref();
const isLoading = ref(false);
const errorText = ref(null);

const hasText = computed(() => emailOrPhone.value?.length > 0);
const isInvalid = computed(() => (
  !isValidPhoneSimple(emailOrPhone.value)
  && !isValidEmail(emailOrPhone.value)
  && hasText.value) || Boolean(errorText.value));

const isInvalidButton = computed(() => isInvalid.value || !hasText.value);
const helperText = computed(() => (errorText.value ? errorText.value : 'Digite um email ou telefone válido'));

const handleInputUser = () => {
  if (errorText.value) errorText.value = null;
};

const handleRequest = async () => {
  if (isInvalidButton.value || isLoading.value) return;
  isLoading.value = true;
  await AuthServices
    .findUserByEmailOrPhone(emailOrPhone.value)
    .then((user) => {
      if (user && user.is_active === false) {
        errorText.value = 'Usuário inativo';
      } else if (user && user.id) {
        handleActionLoginCard({ name: 'go', value: 'PasswordStep' });
        handleActionLoginCard({ name: 'save-user', value: user });
      } else {
        errorText.value = 'Usuário não existe';
      }
    })
    .finally(() => {
      isLoading.value = false;
    });
};
</script>

<style lang="scss">
.user-step__title {
  margin-bottom: var(--size-scalable-small);
}
</style>
