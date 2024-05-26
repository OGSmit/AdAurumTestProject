import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFileStore = defineStore('fileStore', () => {
  // Только добавляем в массив
  const files = ref([])

  function addFile({ id, fileName,  isFileReady, fileType, fileUrl,readyFrom }) {
    files.value.push({ id, fileName,  isFileReady, fileType, fileUrl,readyFrom })
  }

  return { files, addFile }
})