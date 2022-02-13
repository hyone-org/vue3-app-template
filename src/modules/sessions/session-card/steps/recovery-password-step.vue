<template>
  <SessionCardLayout>
    <div class="recovery-password-step__icon">
      <b-icon
        :icon="icon"
        size="extra-giant"
      />
    </div>

    <b-text
      align="center"
      variant="h6"
      emphasis="high"
      tag="h3"
      class="recovery-password-step__text"
    >
      {{ title }}
    </b-text>

    <b-text
      align="center"
      variant="body1"
      emphasis="medium"
      class="recovery-password-step__text"
    >
      {{ text }}
    </b-text>

    <b-button
      :is-accessible="true"
      behavior="block"
      variant="text"
      @click="handleActionLoginCard({ name: 'go', value: 'UserStep' })"
    >
      Voltar
    </b-button>
  </SessionCardLayout>
</template>

<script>
import { inject, ref, computed } from 'vue';
import { AuthServices } from '@services/auth-services';
import SessionCardLayout from '../session-card-layout.vue';

const statusDictionary = {
  success: {
    icon: 'email',
    title: 'Enviamos um email/SMS para você.',
    text: 'Siga as instruções do email/SMS para redefinir sua senha.',
  },
  error: {
    icon: 'error',
    title: 'Tente novamente mais tarde.',
    text: 'Não conseguimos enviar instruções para seu email/celular.',
  },
};

export default {
  components: {
    SessionCardLayout,
  },
  async setup() {
    const handleActionLoginCard = inject('handleActionLoginCard');
    const { userData } = inject('loginCard');

    const status = ref('loading');
    const color = computed(() => (status.value === 'success' ? '#4caf50' : '#B00020'));

    await AuthServices.forgotPassword(userData.id)
      .then(() => {
        status.value = 'success';
      })
      .catch(() => {
        status.value = 'error';
      });

    const { icon, title, text } = statusDictionary[status.value];

    return {
      handleActionLoginCard, icon, title, text, color,
    };
  },
};

</script>

<style lang="scss" scoped>
.recovery-password-step__icon {
  display: flex;
  justify-content: center;
  margin-top: var(--size-scalable-medium);
  margin-bottom: var(--size-scalable-medium);
  color: v-bind(color);
}

.recovery-password-step__text:not(:last-child) {
  margin-bottom: var(--size-scalable-small);
}
</style>
