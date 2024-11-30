
<template>
  <main class="container">
    <section class="content-main-sala w-75 py-144 pe-3">
      <h2 class="pb-60 fw-black color-california-500 pb-4">Informações sobre a sala</h2>
      <p class="color-seashell-100 pb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <div class="cards-info-sala d-flex column-gap-5 pb-60">
          <div class="card-time p-4">
            <h3 class="fw-black color-california-500 pb-4"><i class="pe-4 bi bi-alarm-fill"></i>Tempo de duração</h3>
            <h3 class="color-seashell-100">20 minutos</h3>
          </div>
          <div class="card-time p-4">
            <h3 class="fw-black color-california-500 pb-4"><i class="pe-4 bi bi-people"></i>Quatidade de pessoas</h3>
            <h3 class="color-seashell-100">12 pessoas</h3>
          </div>
      </div>
      <a href="" class="btn-reservar bg-california-500 raleway fw-bold rounded-5 w-max extra-large color-white px-4 py-2 hover-btn">Reservar <i class="ps-2 bi bi-arrow-right"></i></a>
    </section>

  </main>
</template>

<style scoped>

</style>

<script>
  export default {
    name: 'SalaMain'
  }
</script>