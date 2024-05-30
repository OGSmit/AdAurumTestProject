<script setup>
import FooterContainer from './components/Footer/Footer.vue';
import HeaderContainer from './components/Header/Header.vue';
import PersonalAssistant from './components/PersonalAssistant/PersonalAssistant.vue';
</script>

<template>
  <header id="header" class="header">
    <HeaderContainer />
  </header>

  <main class="main">
    <PersonalAssistant />
  </main>

  <footer class="footer">
    <FooterContainer />
  </footer>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

.footer {
  background-color: #fff;
  padding: 40px 20px;
}

@media screen and (min-width: 760px) {
  .footer {
    background-color: var(--color-lgrey);
    padding: 32px 40px;
  }
}

@media screen and (min-width: 1280px) {
  .footer {
    padding-bottom: 20px;
  }
}
</style>
