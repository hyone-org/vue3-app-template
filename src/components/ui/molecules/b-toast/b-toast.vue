<template>
  <aside
    ref="toastRef"
    class="mdc-snackbar mdc-snackbar--opening"
  >
    <div
      class="mdc-snackbar__surface"
      role="status"
      aria-relevant="additions"
    >
      <div
        class="mdc-snackbar__label"
        aria-atomic="false"
      >
        Can't send photo. Retry in 5 seconds.
      </div>
      <div
        class="mdc-snackbar__actions"
        aria-atomic="true"
      >
        <button
          type="button"
          class="mdc-button mdc-snackbar__action"
        >
          <div class="mdc-button__ripple" />
          <span class="mdc-button__label">Retry</span>
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { snackbar } from 'material-components-web';

const toastRef = ref();

onMounted(() => {
  const snackbarWrapper = new snackbar.MDCSnackbarFoundation(toastRef.value);
  snackbarWrapper.init();
});

</script>

<style lang="scss">

</style>
