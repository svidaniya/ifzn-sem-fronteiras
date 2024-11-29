<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <header class="d-flex justify-content-between align-items-center container mx-auto">
    <img src="../assets/logo.svg" alt="logo-ifzn-sem-fronteiras">

    <nav>
      <a href="">Minhas inscrições</a>
      <a class="px-3" href="">Minhas inscrições</a>
    </nav>


  </header>
</template>

<style scoped>
</style>
