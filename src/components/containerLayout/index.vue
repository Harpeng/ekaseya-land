<template>
  <TheHeader />
  <main class="container"></main>
  <Footer />
</template>
<script setup>
import TheHeader from '@/components/containerLayout/TheHeader.vue';
import Footer from './Footer.vue';
</script>
<style lang="scss">
@import '../../assets/main.scss';
.container {
  background-color: $main-background;
  height: 100vh;
}
</style>
