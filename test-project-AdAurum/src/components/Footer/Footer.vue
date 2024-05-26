<script setup>
import LogoDark from "../Logo/LogoDark.vue";
import IconChangeLang from '../icons/IconChangeLang.vue';
import IconEmail from '../icons/IconEmail.vue';
import IconTelegram from '../icons/IconTelegram.vue';
import IconWhatsUp from '../icons/IconWhatsUp.vue';
</script>

<script>
import styles from './Footer.module.scss';
export default {
  name: 'footer-container',
  data() {
    return {
      selectedLang: 'RU',
    };
  },
  methods: {
    handleChangeLang(lang) {
      this.selectedLang = lang;
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
  <div class='footer-container'>
    <!-- Лого -->
    <a href="#header" class="footer-container__link">
      <LogoDark />
    </a>
    <!-- Политика конфиденциальности -->
    <a href="https://policies.google.com/privacy?hl=ru" target="_blank" class="footer-container__link">Политика
      конфиденциальности
    </a>
    <!-- Выбор языка -->
    <div class='footer-container__lang-container'>
      <IconChangeLang />
      <button class="footer-container__button"
        :class="{ 'footer-container__button_active': selectedLang === 'RU' }" type="button"
        @click="handleChangeLang('RU')">RU</button>
      <button class="footer-container__button"
        :class="{ 'footer-container__button_active': selectedLang === 'EN' }" type="button"
        @click="handleChangeLang('EN')">EN</button>
      <button class="footer-container__button"
        :class="{ 'footer-container__button_active': selectedLang === 'TUR' }" type="button"
        @click="handleChangeLang('TUR')">TUR</button>
    </div>
    <!-- Почтовые контакты -->
    <div class='footer-container__email-container'>
      <IconEmail />
      <a class="footer-container__link" href="mailto:pinkchicken@adaurum.ru" type="email">pinkchicken@adaurum.ru</a>
    </div>
    <!-- Мессенжеры -->
    <div class="footer-container__social-container">
      <a class="footer-container__link" href="https://t.me/pinkchicken" target="_blank">
        <IconTelegram />
      </a>
      <a class="footer-container__link" href=" https://wa.me/pinkchicken" target="_blank">
        <IconWhatsUp />
      </a>
    </div>
  </div>
</template>


<style lang="scss">
@import './Footer.module.scss';
</style>