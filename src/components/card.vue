
<template>
    <div class="card-sala bg-flower-900 col-4 d-flex flex-column row-gap-4 align-items-center pb-4">
        <figure class="w-100 position-relative">
            <img class="w-100" src="../assets/bg-card.svg" alt="">
            <div class="info-bg d-flex justify-content-evenly position-absolute align-items-center rounded-3 py-2 fs-small raleway fw-semibold">
                <p class="d-flex flex-column align-items-center color-california-500"><i class="fs-extra-large bi bi-people-fill"></i>12 participantes</p>
                <p class="d-flex flex-column align-items-center color-california-500"><i class="fs-extra-large bi bi-alarm-fill"></i>20 minutos</p>
            </div>
        </figure>
        <h5 class="color-california-500">Lorem Ipsum</h5>
        <p class="extra-large color-white w-75">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <a href="" class="btn-reservar bg-california-500 raleway fw-bold rounded-5 w-max extra-large color-white px-4 py-2 hover-btn">Reservar <i class="ps-2 bi bi-arrow-right"></i></a>
    </div>
</template>

<style scoped>
    .card-sala{
        border: 3px solid var(--california-500);
        border-radius: .875rem;
        padding-inline: 0px;
    }

    .info-bg{
    background-color: rgba(252, 158, 9, 0.37);
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 94%;
}
</style>

<script>
export default {
  name: 'Card'
}
</script>
