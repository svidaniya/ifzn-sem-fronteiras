
<template>
    <div class="card-inscricao bg-flower-900 d-flex flex-column row-gap-4 align-items-center pb-4">
        <figure class="bg-card-inscricao w-100 rounded-4">
            <img class="w-100 p-3" src="../assets/qrcode.svg" alt="">
        </figure>
        <div class="content-card-inscricoes d-flex flex-column row-gap-3 w-100 px-4">
            <p class="fs-extra-large color-white w-75"><span class="color-california-500">Sala:</span> Lorem ipsum</p>
            <p class="fs-extra-large color-white w-75"><span class="color-california-500">Dia:</span> Lorem ipsum</p>
            <p class="fs-extra-large color-white w-75"><span class="color-california-500">Hora:</span> Lorem ipsum</p>
        </div>

    </div>
</template>

<style scoped>
    .bg-card-inscricao{
        background: url(../assets/img-white.svg) no-repeat;
        background-size: cover;
        background-position: center;
    }
    .card-inscricao{
        border: 3px solid var(--california-500);
        border-radius: 1.125rem;
        padding-inline: 0px;
        width: 20%;
        min-width: 260px;
    }
</style>

<script>
export default {
  name: 'CardInscricao'
}
</script>
