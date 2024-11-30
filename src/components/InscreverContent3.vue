
<template>
    <header class="container py-4">
      <a class="btn-entrar color-california-500 px-4 py-2.5 bg-seashell-1000 ribeye rounded-5" href="../">Voltar</a>
    </header>
    
    <main class="container">
      <section class="sec-inscrever mx-auto mt-5 d-flex flex-column color-seashell-100 row-gap-4 py-5 px-100 bg-seashell-1000 rounded-4">
        <div class="stepline d-flex align-items-center">
            <div class="circle element-active rounded-circle"></div>
            <div class="line element-active flex-grow-1"></div>
            <div class="circle element-active rounded-circle"></div>
            <div class="line element-active flex-grow-1"></div>
            <div class="circle element-active rounded-circle"></div>
        </div>
        <div class="info-login">
          <h2 class="color-california-500 ribeye pb-2">Scape Room</h2>
          <p class="raleway fs-extra-large">Confirme os dados...</p>
        </div>
        <div class="dates d-flex justify-content-between gap-4 mb-4">
            <div class="">
                <p class="fs-extra-large pb-4"><span class="color-california-500 raleway fw-semibold">Nome: </span>Fulaninho da Silva Costa</p>
                <p class="fs-extra-large pb-4"><span class="color-california-500 raleway fw-semibold">Curso: </span>Informática</p>
                <p class="fs-extra-large"><span class="color-california-500 raleway fw-semibold">Turma: </span>4V</p>
            </div>
            <div class="">
                <p class="fs-extra-large pb-4"><span class="color-california-500 raleway fw-semibold">Sala: </span>sala tal</p>
                <p class="fs-extra-large pb-4"><span class="color-california-500 raleway fw-semibold">Dia: </span>02/12 (seg)</p>
                <p class="fs-extra-large"><span class="color-california-500 raleway fw-semibold">Horário: </span>13:00</p>
            </div>
        </div>

        <div class="rules">
            <h6 class="pb-2">Regras</h6>
            <div class="content-rules d-flex justify-content-between">
                <ul class="ps-4 fs-extra-large">
                    <li class="list-disc">Lorem ipsum dolor sit amet.</li>
                    <li class="list-disc">Lorem ipsum dolor sit amet.</li>
                    <li class="list-disc">Lorem ipsum dolor sit amet.</li>
                    <li class="list-disc">Lorem ipsum dolor sit amet.</li>
                </ul>
                <a class="btn-entrar align-self-end ribeye color-california-500 rounded-pill fs-extra-large px-4 py-2.5 w-max" href="">Confirmar</a>
            </div>

        </div>

        

      </section>

    </main>
</template>
  
<style scoped>

</style>
  
<script>
export default {
    name: 'InscreverContent2'
}
</script>