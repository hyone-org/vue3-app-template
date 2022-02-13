<template>
  <b-card
    class="certificate-alert-banner"
    tag="button"
  >
    <b-text
      tag="h3"
      weight="bold"
      size="large"
    >
      {{ props.label }}
    </b-text>
  </b-card>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'ATENÇÃO: Atualize o certificado digital de sua empresa! (vencimento: 23/05/2022)',
  },
});
</script>

<style lang="scss" scoped>
.certificate-alert-banner {
  --b-card--background-color: var(--color-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--size-scalable-medium);
  width: 100%;
  border-radius: var(--border-radius-normal);
  cursor: pointer;
  transition: opacity 0.125ms;

  &:hover {
    opacity: 0.8;
  }
}
</style>
