
<template>
  <div class="content-home">
    <div class="hero-capa">
      <Header/>
      <HomeHero/>
    </div>
    <HomeMain />
    <Footer/>
  </div>
  
</template>

<style scoped>
</style>

<script>
import Header from '../components/Header.vue'
import HomeHero from '../components/HomeHero.vue'
import HomeMain from '../components/HomeMain.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Header,
    HomeHero,
    HomeMain,
    Footer
  }
}
</script>
