<template>
  <SessionCardLayout @submit="handleRequest">
    <h-avatar
      class="password-step__avatar"
      :src="userData.photo_url"
    />

    <h-text
      tag="h3"
      variant="h6"
      emphasis="high"
      align="center"
      class="password-step__title"
    >
      {{ userData.name }}
    </h-text>

    <h-input-field
      label="Senha"
      class="h-margin-bottom--small"
      :has-error="isInvalid"
      :helper-text="helperText"
    >
      <h-input
        v-model="passwordInput"
        behavior="block"
        :icon-right="passwordInputIcon"
        :type="passwordType"
        @update:model-value="handleInputPasswordChange"
        @click-icon-right="handleShowPassword"
      />
    </h-input-field>

    <h-button
      behavior="block"
      :is-disabled="isInvalidButton"
      :is-loading="isLoading"
      :is-accessible="true"
      @click="handleRequest"
    >
      Entrar
    </h-button>

    <h-button
      behavior="block"
      :is-accessible="true"
      variant="outlined"
      @click="handleActionLoginCard({ name: 'go', value: 'RecoveryPasswordStep'})"
    >
      Esqueci minha senha
    </h-button>

    <h-button
      behavior="block"
      variant="text"
      :is-accessible="true"
      @click="handleActionLoginCard({ name: 'go', value: 'UserStep' })"
    >
      Voltar
    </h-button>
  </SessionCardLayout>
</template>

<script setup>
/* eslint-disable max-len */
import { AuthServices } from '@services/auth-services';
import { isValidPassword } from '@utils/validations/password';
import { ref, computed, inject } from 'vue';
import SessionCardLayout from '../session-card-layout.vue';

const passwordInput = ref(null);
const errorText = ref(null);
const isLoading = ref(false);
const isPasswordVisible = ref(false);

const hasText = computed(() => passwordInput.value?.length > 0);
const passwordType = computed(() => (isPasswordVisible.value ? 'text' : 'password'));
const passwordInputIcon = computed(() => (isPasswordVisible.value ? 'visibility_off' : 'visibility'));
const isInvalid = computed(() => (!isValidPassword(passwordInput.value) && hasText.value) || Boolean(errorText.value));
const isInvalidButton = computed(() => isInvalid.value || !hasText.value);
const helperText = computed(() => (errorText.value ? errorText.value : 'A senha deve conter pelo menos 8 caracteres'));

const handleShowPassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const handleInputPasswordChange = () => {
  if (errorText.value) errorText.value = null;
};

const handleActionLoginCard = inject('handleActionLoginCard');
const { userData } = inject('loginCard');

const handleRequest = async () => {
  if (isInvalidButton.value || isLoading.value) return;
  isLoading.value = true;
  await AuthServices
    .signIn(userData.id, passwordInput.value)
    .then((user) => {
      if (user && user.id && user.permissions.COMPANY) {
        handleActionLoginCard({ name: 'save-user', value: user });
        handleActionLoginCard({ name: 'login' });
      } else {
        errorText.value = 'Senha incorreta. Tente novamente.';
      }
    })
    .catch((_error) => {
      errorText.value = 'Erro desconhecido. Tente novamente mais tarde.';
    })
    .finally(() => {
      isLoading.value = false;
    });
};
</script>

<style lang="scss" scoped>
.password-step__avatar {
  margin-left: auto;
  margin-right: auto;
}

.password-step__title {
  margin-top: var(--size-scalable-small);
  margin-bottom: var(--size-scalable-medium);
}
</style>
