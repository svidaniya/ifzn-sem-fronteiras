<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="content-hero d-flex align-items-center container mx-auto ">
    <section class="col-7">
      <h1 class="ribeye color-california-500 fw-normal pb-2">Sala: nome da sala</h1>
      <h2 class="color-seashell-100 fw-medium pb-3">Sala 10 - Bloco B</h2>
    </section>

  </div>

</template>

<style scoped>
</style>