<template>
  <header class="app-header">
    <div class="app-header__section-logo">
      <router-link
        to="/"
        class="app-header__link"
      >
        <img
          class="app-header__logo-image"
          src="@assets/images/logo_parceiro.svg"
        >
      </router-link>
    </div>

    <div class="app-header__section-action">
      <AppHeaderButton>
        Viagens
      </AppHeaderButton>

      <AppHeaderButton>
        Avisos
      </AppHeaderButton>

      <AppHeaderButton>
        Incidentes
      </AppHeaderButton>

      <AppHeaderButton>Operação</AppHeaderButton>

      <AppHeaderButton>Financeiro</AppHeaderButton>

      <AppHeaderButton>
        Relatório
      </AppHeaderButton>

      <AppHeaderButton>
        Ajuda
      </AppHeaderButton>

      <AppHeaderAvatar class="app-header__avatar" />
    </div>
  </header>
</template>

<script setup>
import AppHeaderButton from './app-header-button.vue';
import AppHeaderAvatar from './app-header-avatar.vue';
</script>

<style lang="scss">
.app-header {
  background-color: var(--color-secondary);
  display: flex;
  flex-direction: row;
  height: var(--size-scalable-giant);
  justify-content: space-between;
  padding-left: var(--size-scalable-medium);
  padding-right: var(--size-scalable-medium);
  position: relative;
  box-shadow: var(--shadow-110);
}

.app-header__section-logo,
.app-header__section-action {
  position: relative;
  flex: 1;
}

.app-header__section-logo {
  padding-top: var(--size-scalable-medium);
  padding-bottom: var(--size-scalable-medium);
}

.app-header__logo-image {
  height: var(--size-scalable-large);
}

.app-header__section-action {
  display: flex;
  justify-content: flex-end;
}

.app-header__link {
  display: inline-block;
  align-items: center;
  height: 100%;
}

.app-header__avatar {
  margin-left: var(--size-scalable-extra-large);
}
</style>
