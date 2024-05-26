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
</style>
