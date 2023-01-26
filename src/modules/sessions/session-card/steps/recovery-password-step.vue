<template>
  <SessionCardLayout>
    <div class="recovery-password-step__icon">
      <h-icon
        :icon="icon"
        size="extra-giant"
      />
    </div>

    <h-text
      align="center"
      variant="h6"
      emphasis="high"
      tag="h3"
      class="recovery-password-step__text"
    >
      {{ title }}
    </h-text>

    <h-text
      align="center"
      variant="body1"
      emphasis="medium"
      class="recovery-password-step__text"
    >
      {{ text }}
    </h-text>

    <h-button
      :is-accessible="true"
      behavior="block"
      variant="text"
      @click="handleActionLoginCard({ name: 'go', value: 'UserStep' })"
    >
      Voltar
    </h-button>
  </SessionCardLayout>
</template>

<script>
import { inject, ref, computed } from 'vue';
import { AuthServices } from '@services/auth-services';
import SessionCardLayout from '../session-card-layout.vue';

const statusDictionary = {
  success: {
    icon: 'fa-solid fa-circle-check',
    title: 'Enviamos um email/SMS para você.',
    text: 'Siga as instruções do email/SMS para redefinir sua senha.',
  },
  error: {
    icon: 'fa-solid fa-circle-exclamation',
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
