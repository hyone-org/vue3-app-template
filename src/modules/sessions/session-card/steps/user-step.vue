<template>
  <SessionCardLayout @submit="handleRequest">
    <h-text
      tag="h3"
      weight="bold"
      variant="h6"
      class="h-margin-bottom--small"
    >
      Entrar com a minha conta
    </h-text>

    <h-input-field
      label="Email ou telefone"
      :helper-text="helperText"
      :has-error="isInvalid"
      class="h-margin-bottom--small"
    >
      <h-input
        v-model="emailOrPhone"
        type="text"
        behavior="block"
        @update:model-value="handleInputUser"
      />
    </h-input-field>

    <h-button
      behavior="block"
      :disabled="isInvalidButton"
      :is-loading="isLoading"
      :is-accessible="true"
      type="submit"
      @click="handleRequest"
    >
      Próximo
    </h-button>

    <h-button
      behavior="block"
      variant="outlined"
      :is-accessible="true"
    >
      Cadastrar-se
    </h-button>
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
const helperText = computed(() => (errorText.value || (isInvalid.value && 'Digite um email ou telefone válido')) || '');

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
