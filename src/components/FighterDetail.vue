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
  const fighterInfo = await getFighterById(router.params.id)
  fighter.value = fighterInfo
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
  <div class="fighter--container">
    <div>
      <h2>Luchador</h2>
      <img :src="fighter.photo" />
    </div>
    <div class="fighter--info">
      <div><strong>Nombre:</strong> {{ fighter.name }}</div>
      <div><strong>Edad:</strong> {{ fighter.age || "No disponible" }}</div>
      <div><strong>Altura:</strong> {{ fighter.height }}</div>
      <div><strong>Apodo:</strong> {{ fighter.nickname }}</div>
      <div><strong>Peso:</strong> {{ fighter.weight }}</div>
      <div><strong>Peso:</strong> : {{ weightInKG }} kg</div>
    </div>
  </div>
</template>

<style scoped>
.fighter--container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  border: 1px solid black;
  padding: 10px;
}

@media (min-width: 1024px) {
  .fighter--container {
    flex-direction: row;
    margin: 10px 0;
  }

  .fighter--info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
