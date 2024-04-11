<script setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { getFighterById } from "@/services/post"
const router = useRoute()

const fighter = ref({})

onMounted(async () => {
  const response = await getFighterById(router.params.id)
  fighter.value = response
})
</script>

<template>
  <div class="card">
    <div><img :src="fighter.photo" /></div>
    <div>Edad: {{ fighter.age }}</div>
    <div>Altura: {{ fighter.height }}</div>
    <div>Apodo: {{ fighter.nickname }}</div>
    <div>Peso: {{ fighter.weight }}</div>
  </div>
</template>

<style scoped></style>
