

<template>
    <div class="content-home">
      <div class="hero-capa">
        <Header/>
        <Hero/>
      </div>
      <Main/>
      <Footer/>
    </div>
</template>

  
<script>
  import Header from '../components/Header.vue'
  import Hero from '../components/SalaHero.vue'
  import Main from '../components/SalaMain.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: 'Sala',
    components: {
      Header,
      Hero,
      Main,
      Footer
    }
  }
</script>