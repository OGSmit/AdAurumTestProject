<script setup>
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
      messages: []
    };
  },
  props: {
    setFilesStatus : {
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
    handleSendMessage(event) {
      // мокаем отправку сообщений
      event.preventDefault();
      try {
        this.messages.push({
          text: event.target[0].value,
          id: '1231ASD123asCafr',
          date: new Date(),
          isMyMessage: true
        });

        event.target[0].value = ''
      }
      catch (error) {
        console.error(error);
      }
      // запускаем чат скрипт если у нас первое сообщение
      if (this.messages.length === 1) {
        simpleChatPromo(this.messages)
      }
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
          this.setFilesStatus('isReportReady')
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
          id: '12asd31ASD123asdasCafr',
          date: new Date(),
          isMyMessage: false,
          author: "Система",
          avatar: 'https://icon-icons.com/icons2/1320/PNG/512/-robot_86875.png'
        });

        setTimeout(() => {
          this.setFilesStatus('isMediaplanReady')
        }, 3000)
      }
      catch (error) {
        console.error(error);
      }
    },
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
    <div class="chat__message-container">
      <!-- Заставка чата -->
      <img v-if="messages.length === 0" src="../../assets/ChatImage.png" class="chat__info-img"
        alt="картинка администратора чата">
      <p v-if="messages.length === 0" class="chat__info-text">Это чат с администратором. Ты можешь с ним пообщаться по
        любому вопросу о нашем сервисе и
        узнать о ходе работы
      </p>
      <!-- рендер сообщений из стейта -->
      <Message v-for="message in messages" :key="message.id" :avatar="message.avatar" :text="message.text"
        :author="message.author" :date="message.date" :isMyMessage="message.isMyMessage" />
    </div>
    <!-- Интерфейс заказа -->
    <div class="chat__button-container">
      <button class="chat__button chat__button_blue" @click="handleGetReport">Заказать отчет</button>
      <button class="chat__button chat__button_pink" @click="handleGetMediaPlan">Заказать медиаплан</button>
    </div>
    <!-- Форма чата -->
    <form class="chat__form" @submit="handleSendMessage">
      <textarea type="text" class="chat__form-input" rows="5" cols="33"> </textarea>
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