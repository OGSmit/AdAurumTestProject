<script setup>
import IconLogin from "../icons/IconLogin.vue";
import IconSetting from "../icons/IconSetting.vue";
import Logo from '../Logo/Logo.vue';
</script>

<script>
import styles from './Header.module.scss';
export default {
  name: 'header-container',
  data() {
    return {
      userEmail: 'Username@adaurum.ru',
      userProfit: '5%'
    }
  },
  methods: {
    handleButtonClick(button) {
      alert(`Логика клика ${button}`)
    }
  },
  computed: {
    styleClasses: function () {
      return styles;
    }
  }
}
</script>

<template>
  <div class="header-container">
    <!-- Лого - не активно -->
    <Logo class="header-container__logo" />
    <!-- Данные пользователя -->
    <div class="header-container__sub">
      <div class="header-container__info-container">
        <span class="header-container__span header-container__span_email">
          {{ userEmail }}
        </span>
        <span class="header-container__span header-container__span_profit">
          {{ userProfit }}
        </span>
      </div>
      <!-- Блок кнопок пользователя -->
      <div class="header-container__button-container">
        <button aria-label="открыть настройки" @click="handleButtonClick('Setting')" class="header-container__button header-container__button_setting">
          <IconSetting />
        </button>
        <button aria-label="выйти из профиля" @click="handleButtonClick('Login, странно что она есть ибо визуально мы авторизированы')"
          class="header-container__button header-container__button_login">
          <IconLogin />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './Header.module.scss';
</style>