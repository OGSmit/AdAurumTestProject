<script setup>
import Chat from '../Chat/Chat.vue';
import Files from '../Files/Files.vue';
import IconSpread from '../icons/IconSpred.vue';
</script>

<script>
import styles from './PersonalAssistant.module.scss';
export default {
  name: 'personal-assistant',
  data() {
    return {
      isOptionsOpened: false,
      assistant: {
        name: 'Jim Davidson',
        email: 'Jim Davidson@adaurum.ru'
      },
      isReadyFiles: {
        isMediaplanReady: false,
        isReportReady: false
      }
    }
  },
  methods: {
    handleShowOptions() {
      this.isOptionsOpened = !this.isOptionsOpened;
    },
    handleChangeAssistant() {
      this.assistant = {
        name: 'Олег Смиткевич',
        email: 'og88tu15@gmail.com'
      }
      this.isOptionsOpened = false
    },
    setIsReadyFilesStatus(state) {
      this.isReadyFiles[state] = true
      return {
        props: {
          handleFunction: this.handleFunction
        }
      };
    }
  }
  ,
  computed: {
    styleClasses: function () {
      return styles;
    }
  }
}
</script>

<template>
  <section class="personal-assistant">
    <!-- Медиапланы и Отчеты -->
    <Files :isReportReady="isReadyFiles.isReportReady" :isMediaplanReady="isReadyFiles.isMediaplanReady" />
    <!-- Блок со сменой помощника -->
    <div class="personal-assistant__container-top">
      <h2 class="personal-assistant__title">Личный помощник</h2>
      <button class="personal-assistant__button" @click="handleShowOptions">
        <IconSpread />
      </button>
      <!-- Модалка с опциями -->
      <div class="personal-assistant__options" v-if="isOptionsOpened">
        <button class="personal-assistant__button-option" type="button">Обратная связь о работе сервиса</button>
        <button @click="handleChangeAssistant" class="personal-assistant__button-option" type="button">Сменить
          помощника</button>
      </div>
    </div>
    <!-- Инфо пользователя -->
    <div class="personal-assistant__profile-container">
      <span class="personal-assistant__name">{{ assistant.name }}</span>
      <span class="personal-assistant__email">{{ assistant.email }}</span>
    </div>
    <!-- Чат -->
    <Chat :setFilesStatus="setIsReadyFilesStatus" />
  </section>
</template>

<style lang="scss">
@import './PersonalAssistant.module.scss';
</style>