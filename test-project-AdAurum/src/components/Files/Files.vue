<script setup>
import IconArrow from '../icons/IconArrow.vue';
import FileItem from './Item/FileItem.vue';
</script>

<script>
import styles from './Files.module.scss';
export default {
  name: 'user-files',
  props: {
    isMediaplanReady: {
      type: Boolean,
      required: false,
    },
    isReportReady: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      isFilesListOpened: false,
      isMediaplanOpen: false,
      isReportOpen: false
    }
  },
  methods: {
    toggleFilesList(list) {
      if (list === 'Mediaplan') {
        this.isMediaplanOpen = !this.isMediaplanOpen
      }
      if (list === 'Report') {
        this.isReportOpen = !this.isReportOpen
      }
    },

    toggleFilesListOpen() {
      this.isFilesListOpened = !this.isFilesListOpened
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
  <div class="container-button">
    <button @click="toggleFilesListOpen" class="container-button__button-big"
      :class="{ 'container-button__button-big_active': isMediaplanReady }" type="button">Медиапланы</button>
    <button @click="toggleFilesListOpen" class="container-button__button-big"
      :class="{ 'container-button__button-big_active': isReportReady }" type="button">Отчеты</button>
  </div>

  <div class="container-files" :class="{ 'container-files_opened': isFilesListOpened }">
    <h2 class="container-files__title">Файлы</h2>
    <div class="container-files__mediaplan-container">
      <h3 class="container-files__subtitle">Медиапланы</h3>
      <button class="container-files__button" :class="{ 'container-files__button_rotated': !isMediaplanOpen }"
        @click="toggleFilesList('Mediaplan')">
        <IconArrow />
      </button>
      <div class="container-files__files-container"
        :class="{ 'container-files__files-container_open': isMediaplanOpen }">
        <FileItem />
        <FileItem />
        <FileItem />
        <button class="container-files__button-more" type="button">Показать еще</button>
      </div>
    </div>
    <div class="container-files__report-container">
      <h3 class="container-files__subtitle">Отчеты</h3>
      <button class="container-files__button" :class="{ 'container-files__button_rotated': !isReportOpen }"
        @click="toggleFilesList('Report')">
        <IconArrow />
      </button>
      <div class="container-files__files-container" :class="{ 'container-files__files-container_open': isReportOpen }">
        <FileItem />
        <button class="container-files__button-more" type="button">Показать еще</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './Files.module.scss';
</style>