<template>
  <SessionCardLayout @submit="handleRequest">
    <b-text
      tag="h3"
      size="extra-large"
      weight="bold"
      class="register-step__title"
    >
      Cadastre-se.
    </b-text>

    <b-text
      tag="h3"
      size="extra-small"
      weight="regular"
      class="register-step__subtitle"
    >
      Não encontramos esse email ou telefone
    </b-text>

    <b-input
      v-model="nameInput"
      :is-invalid="nameInputInvalid && isString(nameInput)"
      helper-text="Campo obrigatório"
      behavior="block"
      class="register-step__input"
      label="Nome completo"
    />

    <b-input
      v-model="emailInput"
      :is-invalid="emailInputInvalid && isString(emailInput)"
      behavior="block"
      class="register-step__input"
      label="Email"
      :helper-text="emailInputHelperText"
    />

    <b-input
      v-model="phoneInput"
      :is-invalid="phoneInputInvalid && isString(phoneInput)"
      behavior="block"
      class="register-step__input"
      label="Celular"
      :mask="['(##) ####-####', '(##) #####-####']"
      :helper-text="phoneInputHelperText"
    />

    <b-input
      v-model="passwordInput"
      label="Senha"
      behavior="block"
      :type="passwordInputType"
      class="register-step__input"
      :icon-right="passwordInputIcon"
      :is-invalid="passwordInputInvalid && isString(passwordInput)"
      :helper-text="passwordInputHelperText"
      @click-icon-right="handleShowPassword"
    />

    <b-button
      behavior="block"
      color="secondary"
      :is-disabled="buttonRegisterDisabled"
      :is-loading="isLoading"
      @click="handleRequest"
    >
      Cadastrar
    </b-button>
  </SessionCardLayout>
</template>

<script setup>
import { inject, ref, computed } from 'vue';
import { isValidPassword } from '@utils/validations/password';
import { isValidEmail } from '@utils/validations/email';
import { isValidPhoneSimple } from '@utils/validations/phone';
import { AuthServices } from '@services/auth-services';
import SessionCardLayout from '../session-card-layout.vue';

const handleActionLoginCard = inject('handleActionLoginCard');

const nameInput = ref();
const phoneInput = ref();
const emailInput = ref();
const passwordInput = ref();

const isLoading = ref(false);
const isPasswordVisible = ref(false);

const nameInputInvalid = computed(() => !(nameInput.value?.length > 0));
const phoneInputInvalid = computed(() => !(isValidPhoneSimple(phoneInput.value)));
const emailInputInvalid = computed(() => !(isValidEmail(emailInput.value)));
const passwordInputInvalid = computed(() => !(isValidPassword(passwordInput.value)));

const passwordInputType = computed(() => (isPasswordVisible.value ? 'text' : 'password'));
const passwordInputIcon = computed(() => (isPasswordVisible.value ? 'visibility_off' : 'visibility'));

const emailInputHelperText = computed(() => (
  emailInput.value?.length === 0 ? 'Campo obrigatório' : 'Insira um email válido'
));

const phoneInputHelperText = computed(() => (
  phoneInput.value?.length === 0 ? 'Campo obrigatório' : 'Insira um telefone válido'
));

const passwordInputHelperText = computed(() => (
  passwordInput.value?.length === 0 ? 'Campo obrigatório' : 'A senha deve conter pelo menos 8 caracteres'
));

const buttonRegisterDisabled = computed(() => (
  nameInputInvalid.value
  || phoneInputInvalid.value
  || emailInputInvalid.value
  || passwordInputInvalid.value
));

const handleShowPassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const handleRequest = async () => {
  if (buttonRegisterDisabled.value || isLoading.value) return;
  isLoading.value = true;
  const params = {
    name: nameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  AuthServices.signUp(params)
    .then((user) => {
      if (user && user.id && user.permissions) {
        handleActionLoginCard({ name: 'go', value: 'UserStep' });
      } else {
        console.log('Error');
      }
    })
    .catch(() => {
      console.log('Error');
    })
    .finally(() => {
      isLoading.value = false;
    });
};

const isString = (value) => typeof value === 'string';
</script>

<style lang="scss" scoped>
.register-step__title {
  margin-bottom: var(--size-scalable-extra-small);
}

.register-step__subtitle {
  margin-bottom: var(--size-scalable-medium);
}

.register-step__input {
  margin-bottom: var(--size-scalable-small);
}
</style>
