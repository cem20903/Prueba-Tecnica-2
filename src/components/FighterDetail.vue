<script setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { getFighterById } from "@/services/fight"
const router = useRoute()

const fighter = ref({})

onMounted(async () => {
  const response = await getFighterById(router.params.id)
  fighter.value = response
})
</script>

<template>
  <div class="card">
    <h2>Luchador</h2>
    <div><img :src="fighter.photo" /></div>
    <div>Nombre: {{ fighter.name }}</div>
    <div>Edad: {{ fighter.age }}</div>
    <div>Altura: {{ fighter.height }}</div>
    <div>Apodo: {{ fighter.nickname }}</div>
    <div>Peso: {{ fighter.weight }}</div>
  </div>
</template>

<style scoped></style>
