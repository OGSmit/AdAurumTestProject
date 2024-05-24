<script setup>
import Chat from '../Chat/Chat.vue';
</script>

<script>
import styles from './PersonalAssistant.module.scss';
export default {
  name: 'personal-assistant',
  computed: {
    styleClasses: function () {
      return styles;
    }
  }
}
</script>


<template>
  <section class="personal-assistant">
    <div class="personal-assistant__container-button">
      <button class="personal-assistant__button-big" type="button">Медиапланы</button>
      <button class="personal-assistant__button-big" type="button">Отчеты</button>
    </div>
    <div class="personal-assistant__container-top">
      <h2 class="personal-assistant__title">Личный помощник</h2>
      <button class="personal-assistant__button">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="20" fill="#F5F5F5" />
          <circle cx="20.5" cy="12.5" r="2.5" fill="#2F2F2F" />
          <circle cx="20.5" cy="20.5" r="2.5" fill="#2F2F2F" />
          <circle cx="20.5" cy="28.5" r="2.5" fill="#2F2F2F" />
        </svg>
      </button>
    </div>
    <div class="personal-assistant__profile-container">
      <span class="personal-assistant__name">Jim Davidson</span>
      <span class="personal-assistant__email">Jim Davidson@adaurum.ru</span>
    </div>
    <Chat />
  </section>
</template>


<style lang="scss">
@import './PersonalAssistant.module.scss';
</style>