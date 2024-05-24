<script>
import styles from './Chat.module.scss';
export default {
  name: 'chat-withAdmin',
  computed: {
    styleClasses: function () {
      return styles;
    }
  }
}
</script>


<template>
  <div class="chat">
    <img src="../../assets/ChatImage.png" class="chat__info-img" alt="картинка администратора чата">
    <p class="chat__info-text">Это чат с администратором. Ты можешь с ним пообщаться по любому вопросу о нашем сервисе и
      узнать о ходе работы
    </p>

    <div class="chat__button-container">
      <button class="chat__button chat__button_blue">Заказать отчет</button>
      <button class="chat__button chat__button_pink">Заказать медиаплан</button>
    </div>


    <form class="chat__form">
      <textarea type="text" class="chat__form-input"> </textarea>
      <div class="chat__form-buttons-container">

        <button class="chat__form-button" type="button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0601 16.5V11.5" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
              stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.5 14H9.5" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M2 13.02V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11"
              stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M22 14.99V17C22 21 21 22 17 22H7C3 22 2 21 2 17" stroke="#292D32" stroke-width="1.5"
              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <button class="chat__form-button" type="button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke="#292D32"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6" stroke="#292D32" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M2.67004 18.95L7.60004 15.64C8.39004 15.11 9.53004 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9"
              stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </button>
      </div>
      <button class="chat__form-button chat__form-button_right" type="submit">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="#EE26C2" />
          <path
            d="M28.89 16.49C32.7 15.22 34.77 17.3 33.51 21.11L30.68 29.6C28.78 35.31 25.66 35.31 23.76 29.6L22.92 27.08L20.4 26.24C14.69 24.34 14.69 21.23 20.4 19.32L25 17.79"
            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M23.11 26.65L26.69 23.06" stroke="white" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>
    </form>
  </div>
</template>


<style lang="scss">
@import './Chat.module.scss';
</style>