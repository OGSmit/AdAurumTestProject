<script setup>
import IcontDone from '@/components/icons/IconDone.vue';
import IconDownload from '@/components/icons/IconDownload.vue';
import IcontExclamationMark from '@/components/icons/IconExclamationMark.vue';
import IconFile from '@/components/icons/IconFile.vue';
import IconPending from '@/components/icons/IconPending.vue';
</script>

<script>
import styles from './FileItem.module.scss';
export default {
  name: 'file-item',
  props: {
    fileName: {
      type: String,
      required: true,
    },

    statusText: {
      type: String,
      required: false,
    },
    readyFrom: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: false,
    },
    isFileReady: {
      type: Boolean,
      required: false
    },
    isFirst: {
      type: Boolean,
      required: false
    }

  },

  methods: {
    downloadFile() {
      const link = document.createElement('a');
      link.href = this.fileUrl;
      link.download = this.fileName;
      link.target = '_blank';
      link.click();
    }
  },

  computed: {
    styleClasses: function () {
      return styles;
    },
    fileUrlComputed: function () {
      console.log(this.fileUrl, 'computed');
      return this.fileUrl;

    },
    fileNameComputed: function () {
      return this.fileName
    }
  }
};
</script>

<template>
  <li class="li">
    <div class="file-item">
      <IconFile />
      <span class="file-item__span">{{ fileNameComputed }}</span>
      <IconPending class="file-item__button" v-if="!isFileReady" />
      <button type="button" @click="downloadFile" class="file-item__button" v-if="isFileReady">
        <IconDownload />
      </button>
    </div>
    <div class="status" :class="{ 'status_hide': !isFirst }">
      <IcontExclamationMark v-if="!isFileReady" />
      <IcontDone v-if="isFileReady" />
      <span class="status__span">{{ `${fileType} от ${readyFrom} готов.` }}</span>
    </div>
  </li>
</template>


<style lang="scss">
@import './FileItem.module.scss';
</style>