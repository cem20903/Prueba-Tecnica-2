<script setup>
import { onMounted, ref } from "vue"
import { getFights } from "@/services/fight.ts"
import { useRouter } from "vue-router"
import FightCard from "@/components/FightCard.vue"

const router = useRouter()

const fightList = ref([])

onMounted(async () => {
  const response = await getFights()
  fightList.value = response
})

function goToDetails(id) {
  router.push({ name: "details", params: { id } })
}
</script>

<template>
  <div class="fights--container">
    <template v-for="(fight, key) in fightList" :key="key">
      <FightCard :fight="fight" />
    </template>
  </div>
</template>

<style scoped>
.fights--container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (min-width: 1024px) {
  .fights--container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
