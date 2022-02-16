import { provide, inject, reactive } from 'vue';

const PROVIDER_INTERFACE = Symbol('PROVIDER_INTERFACE');

export function useInterfaceProvider(initialValue) {
  const $state = reactive(initialValue);

  // Instead of returning the `count` state
  // and the `increment()` method, we provide
  // it to every direct or indirect child
  // component of components using this.
  provide(PROVIDER_INTERFACE, {
    $state,
  });
}

export function useInterfaceContext() {
  const context = inject(PROVIDER_INTERFACE);

  if (!context) {
    throw new Error('useInterfaceContext must be used with useInterfaceProvider');
  }

  return context;
}
