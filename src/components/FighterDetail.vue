<script setup>
import { onMounted, ref, computed } from "vue"
import { useRoute } from "vue-router"
import { getFighterById } from "@/services/fight"
import { useUserStore } from "../stores/user.js"

const POUND_TO_KILOGRAM = 0.453592

const store = useUserStore()
const router = useRoute()

const fighter = ref({})

onMounted(async () => {
  const response = await getFighterById(router.params.id)
  fighter.value = response
  store.addFighterVisited()
})

const weightInKG = computed(() => {
  if (!fighter.value.weight) {
    return ""
  }

  const weightInPounds = fighter.value.weight.split(" ")[0]

  return Math.round(weightInPounds * POUND_TO_KILOGRAM * 100) / 100
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
    <div>Peso:: {{ weightInKG }} kg</div>
  </div>
</template>

<style scoped></style>
