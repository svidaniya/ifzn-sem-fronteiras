

<template>
  <main class="container">
    <section class="py-144">
      <div class="o-que-scaperoom row">
        <div class="content-scaperoom col-6">
          <h2 class="pb-60 fw-black color-california-500">Escape Room - O que é?</h2>
          <p class="color-seashell-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <img class="col-6 rounded-5" src="../assets/scaperoom.svg" alt="">
      </div>
    </section>
    <section class="w-100 pb-144 pe-3">
      <h2 class="pb-60 fw-black color-california-500">Conheça nossas salas</h2>
      
      <!-- Carrossel -->
      <div id="carousel_cards" class="carousel slide" data-bs-ride="carousel">
        <!-- Indicadores -->
        <ol class="carousel-indicators">
          <li data-bs-target="#carousel_cards" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#carousel_cards" data-bs-slide-to="1"></li>
          <li data-bs-target="#carousel_cards" data-bs-slide-to="2"></li>
        </ol>

        <!-- Carrossel de itens -->
        <div class="carousel-inner">
          <div class="carousel-item active d-flex justify-content-center">
            <Card />
          </div>
          <div class="carousel-item d-flex justify-content-center">
            <Card />
          </div>
          <div class="carousel-item d-flex justify-content-center">
            <Card />
          </div>
        </div>

        <!-- Controles do Carrossel -->
        <a class="carousel-control-prev" href="#carousel_cards" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel_cards" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped>
  .card-sala{
    margin-bottom: 50px;
  }
</style>

<script>
import Card from './Card.vue';

export default {
  name: 'HomeMain',
  components: {
    Card
  }
}
</script>