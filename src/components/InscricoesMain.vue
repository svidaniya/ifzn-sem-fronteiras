

<template>
    <main class="container">
      <section class="w-100 d-flex flex-column align-items-center py-144">
        <h2 class="fw-black color-california-500 pb-2 w-max mx-auto bottom-stroke mb-5">Minhas inscrições</h2>
        
        <div class="row column-gap-4 row-gap-4 justify-content-center mb-5">
          <CardInscricao/>
          <CardInscricao/>
          <CardInscricao/>
          <CardInscricao/>
        </div>

        <a href="/inscrever" class="btn-reservar bg-california-500 raleway fw-bold rounded-5 w-max extra-large color-white px-4 py-2 hover-btn align-self-end">Inscrever-se <i class="ps-2 bi bi-arrow-right"></i></a>
      </section>
    </main>
  </template>
  
  <style scoped>
  </style>
  
  <script>
  import CardInscricao from './card-inscricoes.vue';
  
  export default {
    name: 'InscricoesMain',
    components: {
      CardInscricao
    }
  }
  </script>