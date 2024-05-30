<script setup>
import { useFileStore } from '../../stores/userFileStore.js';

import Message from '../Chat/Message/Message.vue';
import IconAddFile from '../icons/IconAddFile.vue';
import IconAddPhoto from '../icons/IconAddPhoto.vue';
import IconSendMessage from '../icons/IconSendMessage.vue';
</script>

<script>
import simpleChatPromo from '@/vendor/simpleChatPromo';
import styles from './Chat.module.scss';


export default {
  name: 'chat-withAdmin',
  data() {
    return {
      messages: [],
      inputvalue: '',
    };
  },
  props: {
    setFilesStatus: {
      type: Function,
      required: true,
    }
  },
  methods: {
    handleAddFile(event) {
      const file = event.target.files;
      localStorage.setItem("YourFiles", JSON.stringify(file))
    },
    handleAddPhoto(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        localStorage.setItem("YourPhotos", JSON.stringify(file));
      } else {
        console.log('Selected file is not an image.');
      }
    },
    handleSendMessage() {
      // мокаем отправку сообщений
      if (this.inputvalue === '/start') {
        simpleChatPromo(this.messages)
      }

      try {
        if (!this.inputvalue) return;

        this.messages.push({
          text: this.inputvalue,
          id: '1231ASD123asCafr',
          date: new Date(),
          isMyMessage: true
        });
        this.inputvalue = '';
      }
      catch (error) {
        console.error(error);
      }
      // запускаем чат скрипт если у нас первое сообщение
    },
    handleGetReport(event) {
      event.preventDefault();
      try {
        this.messages.push({
          text: 'Отчет успешно заказан, ожидайте...',
          id: '12asd31ASD123asCafr',
          date: new Date(),
          isMyMessage: false,
          author: "Система",
          avatar: 'https://icon-icons.com/icons2/1320/PNG/512/-robot_86875.png'
        });

        setTimeout(() => {
          const { addFile } = useFileStore()
          addFile({
            id: '123fqaq123sdasd657',
            fileName: 'Companyname 11/23',
            isFileReady: false,
            readyFrom: '1.06.22',
            fileType: 'Report',
            fileUrl: 'https://mp3box.kz/uploads/files/2023-07/portugal.-the-man-feel-it-still-456289421.mp3'
          })
          this.messages.push({
            text: 'Отчет готов',
            id: '12asd31ASD123asdasCafr',
            date: new Date(),
            isMyMessage: false,
            author: "Система",
            avatar: 'https://icon-icons.com/icons2/1320/PNG/512/-robot_86875.png'
          });
        }, 3000)
      }
      catch (error) {
        console.error(error);
      }
    },

    handleGetMediaPlan(event) {
      event.preventDefault();
      try {
        this.messages.push({
          text: 'Медиаплан успешно заказан, ожидайте...',
          id: '12asd31ASD123asCafr',
          date: new Date(),
          isMyMessage: false,
          author: "Система",
          avatar: 'https://icon-icons.com/icons2/1320/PNG/512/-robot_86875.png'
        });

        setTimeout(() => {
          const { addFile } = useFileStore()
          addFile({
            id: '123fqaq123sdasd657',
            fileName: 'Companyname 11/23',
            isFileReady: true,
            readyFrom: '1.06.22',
            fileType: 'Mediaplan',
            fileUrl: 'https://mp3box.kz/uploads/files/2023-07/portugal.-the-man-feel-it-still-456289421.mp3'
          })

          this.messages.push({
            text: 'Медиаплан готов',
            id: '12asd31ASD123asdasCafr',
            date: new Date(),
            isMyMessage: false,
            author: "Система",
            avatar: 'https://icon-icons.com/icons2/1320/PNG/512/-robot_86875.png'
          });
        }, 3000)
      }
      catch (error) {
        console.error(error);
      }
    }
    ,
    handleEnterKey(event) {
      if (event.key === 'Enter') {
        this.handleSendMessage(event);
      }
    }
  },
  computed: {
    styleClasses: function () {
      return styles;
    }
  }
};
</script>

<template>
  <div class="chat">
    <!-- Окно чата -->
    <ul class="chat__message-container">
      <!-- Заставка чата -->
      <li v-if="messages.length === 0">
        <img src="../../assets/ChatImage.png" class="chat__info-img" alt="картинка администратора чата">
        <p class="chat__info-text">Это чат с администратором. Ты можешь с ним пообщаться по
          любому вопросу о нашем сервисе и
          узнать о ходе работы
        </p>
      </li>

      <!-- рендер сообщений из стейта -->
      <Message v-for="message in messages" :key="message.id" :avatar="message.avatar" :text="message.text"
        :author="message.author" :date="message.date" :isMyMessage="message.isMyMessage" />
    </ul>
    <!-- Интерфейс заказа -->
    <div class="chat__button-container">
      <button class="chat__button chat__button_blue" @click="handleGetReport">Заказать отчет</button>
      <button class="chat__button chat__button_pink" @click="handleGetMediaPlan">Заказать медиаплан</button>
    </div>
    <!-- Форма чата -->
    <form class="chat__form" @submit.prevent="handleSendMessage">
      <input placeholder="/start запустить чат скрипт" v-model="inputvalue" type="text" class="chat__form-input"
        rows="5" cols="33" @keydown="handleEnterKey" />
      <div class="chat__form-buttons-container">
        <label class="chat__form-button chat__form-button_file">
          <input type="file" @change="handleAddFile" style="display: none;">
          <IconAddFile />
        </label>
        <label class="chat__form-button chat__form-button_photo">
          <input type="file" accept="image/*" @change="handleAddPhoto" style="display: none;">
          <IconAddPhoto />
        </label>
      </div>
      <button class="chat__form-button chat__form-button_right" type="submit">
        <IconSendMessage />
      </button>
    </form>
  </div>
</template>


<style lang="scss">
@import './Chat.module.scss';
</style>