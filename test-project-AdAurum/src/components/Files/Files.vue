<script setup>
import { useFileStore } from '../../stores/userFileStore.js';
import IconArrow from '../icons/IconArrow.vue';
import FileItem from './Item/FileItem.vue';
</script>

<script>
import styles from './Files.module.scss';
export default {
  name: 'user-files',
  data() {
    return {
      isFilesListOpened: false,
      isMediaplanOpen: true,
      isReportOpen: true,
      isReportReady: false,
      isMediaplanReady: false,
      isReportsShowFullList: false,
      isMediaplansShowFullList: false,
    }
  },
  methods: {
    openFullFileList(list) {
      const query = `is${list}ShowFullList`
      this[query] = !this[query];
    },
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
    },
    mediaPlans: function () {
      const { files } = useFileStore();
      const mediaPlansFull = files.filter(file => file.fileType === 'Mediaplan');
      if (mediaPlansFull.length > 0) {
        this.isMediaplanReady = true;
      }

      const mediaPlans = {
        mediaPlansFull,
        mediaPlansFirstThree: mediaPlansFull.slice(0, 3),
      }
      return mediaPlans
    },
    reports: function () {
      const { files } = useFileStore();
      const reportsFull = files.filter(file => file.fileType === 'Report');
      if (reportsFull.length > 0) {
        this.isReportReady = true;
      }

      const reports = {
        reportsFull,
        reportsFirstThree: reportsFull.slice(0, 3),
      }
      return reports
    },

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

    <!-- Заглушка -->
    <div v-if="(reports.reportsFull.length === 0 && mediaPlans.mediaPlansFull.length === 0)"
      class="container-files__promo">
      <img class="container-files__img" src="../../assets/FileBlanc.webp" alt="у вас пока нет файлов">
      <span class="container-files__span">Закажи у личного помощника медиаплан. Он появится в этом разделе</span>
    </div>

    <!-- Контейнер с Медиапланами -->
    <div v-if="mediaPlans.mediaPlansFull.length > 0" class="container-files__mediaplan-container">
      <h3 class="container-files__subtitle">Медиапланы</h3>
      <button class="container-files__button" :class="{ 'container-files__button_rotated': !isMediaplanOpen }"
        @click="toggleFilesList('Mediaplan')">
        <IconArrow />
      </button>
      <div class="container-files__mediaplan-container-s">
        <ul class="container-files__files-container"
          :class="{ 'container-files__files-container_open': isMediaplanOpen }">

          <FileItem
            v-for="(mediaPlan, index) in !isMediaplansShowFullList ? mediaPlans.mediaPlansFirstThree : mediaPlans.mediaPlansFull"
            :key="mediaPlan.id" :fileName="mediaPlan.fileName" :readyFrom="mediaPlan.readyFrom"
            :fileUrl="mediaPlan.fileUrl" :isFileReady="mediaPlan.isFileReady" :fileType="mediaPlan.fileType"
            :isFirst="index === 0" />

        </ul>
      </div>
      <button v-if="mediaPlans.mediaPlansFull.length > 3" @click="openFullFileList('Mediaplans')"
        class="container-files__button-more" type="button">{{ isMediaplansShowFullList ? 'Скрыть' : 'Показать еще' }}
      </button>
    </div>
    <!-- Контейнер с Отчетами -->
    <div v-if="reports.reportsFull.length > 0" class="container-files__report-container">
      <h3 class="container-files__subtitle">Отчеты</h3>
      <button class="container-files__button" :class="{ 'container-files__button_rotated': !isReportOpen }"
        @click="toggleFilesList('Report')">
        <IconArrow />
      </button>
      <div class="container-files__report-container-s">
        <ul class="container-files__files-container" :class="{ 'container-files__files-container_open': isReportOpen }">
          <FileItem v-for="(report, index) in !isReportsShowFullList ? reports.reportsFirstThree : reports.reportsFull"
            :fileUrl="report.fileUrl" :key="report.id" :fileName="report.fileName" :readyFrom="report.readyFrom"
            :isFileReady="report.isFileReady" :fileType="report.fileType" :isFirst="index === 0" />

        </ul>
      </div>
      <button v-if="reports.reportsFull.length > 3" @click="openFullFileList('Reports')"
        class="container-files__button-more" type="button">{{ isReportsShowFullList ? 'Скрыть' : 'Показать еще'
        }}</button>
    </div>
  </div>
</template>

<style lang="scss">
@import './Files.module.scss';
</style>