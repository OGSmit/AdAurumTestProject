<script>
import styles from './Message.module.scss';
export default {
  name: 'chat-message',
  props: {
    avatar: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      required: true,
    },
    isMyMessage: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    styleClasses: function () {
      return styles;
    },
    formattedDate: function () {
      return this.date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    },
  },
}
</script>

<template>
  <li class="chat-message" :class="{ 'chat-message_my-message': isMyMessage }">
    <img class="chat-message__avatar" :src="avatar" alt="Аватар автора текста" v-if="!isMyMessage">
    <p class="chat-message__text" :class="{ 'chat-message__text_my': isMyMessage }">{{ text }}</p>
    <div class="chat-message__author-time" :class="{ 'chat-message__author-time_my': isMyMessage }">
      <span class="chat-message__author" v-if="!isMyMessage">{{ author }}</span>
      <span class="chat-message__date">{{ formattedDate }}</span>
    </div>
  </li>
</template>

<style lang="scss">
@import './Message.module.scss';
</style>