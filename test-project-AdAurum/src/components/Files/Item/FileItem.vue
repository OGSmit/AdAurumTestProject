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
  computed: {
    styleClasses: function () {
      return styles;
    }
  }
};
</script>

<template>
  <div class="file-item">
    <IconFile />
    <span class="file-item__span">Companyname 11/23</span>
    <button type="button" class="file-item__button">
      <IconPending />
    </button>
    <button type="button" class="file-item__button">
      <IconDownload />
    </button>
  </div>
  <div class="status">
    <IcontExclamationMark />
    <IcontDone/>
    <span class="status__span"> Медиаплан в процессе составления</span>
  </div>
</template>


<style lang="scss">
@import './FileItem.module.scss';
</style>