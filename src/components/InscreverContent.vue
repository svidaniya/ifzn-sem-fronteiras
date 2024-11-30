
<template>
    <header class="container py-4">
      <a class="btn-entrar color-california-500 px-4 py-2.5 bg-seashell-1000 ribeye rounded-5" href="../">Voltar</a>
    </header>
    
    <main class="container">
      <section class="sec-inscrever mx-auto mt-5 d-flex flex-column color-seashell-100 row-gap-4 py-5 px-100 bg-seashell-1000 rounded-4">
        <div class="stepline d-flex align-items-center">
            <div class="circle element-active rounded-circle"></div>
            <div class="line flex-grow-1"></div>
            <div class="circle rounded-circle"></div>
            <div class="line flex-grow-1"></div>
            <div class="circle rounded-circle"></div>
        </div>
        <div class="info-login">
          <h2 class="color-california-500 ribeye pb-2">Scape Room</h2>
          <p class="raleway fs-extra-large">Escolha um dia disponivel</p>
        </div>
        <div class="dates d-flex gap-4 mb-4">
            <a class="btns raleway color-seashell-100 fw-bold fs-extra-large px-4 py-2.5 w-max" href="">SEG - 02/12</a>
            <a class="btns raleway color-seashell-100 fw-bold fs-extra-large px-4 py-2.5 w-max" href="">TER - 03/12</a>
        </div>

        <a class="btn-entrar align-self-end ribeye color-california-500 rounded-pill fs-extra-large px-4 py-2.5 w-max" href="">Continuar</a>

      </section>

    </main>
</template>
  
<style scoped>

</style>
  
<script>
export default {
    name: 'InscreverContent'
}
</script>