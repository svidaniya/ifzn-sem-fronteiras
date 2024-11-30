<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

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
    <section class="w-50 pb-144 pe-3">
      <h2 class="pb-60 fw-black color-california-500">Conheça nossas salas</h2>
      <p class="color-seashell-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    </section>
  </main>
</template>

<style scoped>
</style>