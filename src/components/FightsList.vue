<script setup>
import { onMounted, ref } from "vue"
import { getFights } from "@/services/fight.ts"
import FightCard from "@/components/FightCard.vue"

const fightList = ref([])

onMounted(async () => {
  const response = await getFights()
  fightList.value = response
})
</script>

<template>
  <div class="fights--container">
    <template v-for="(fighter, key) in fightList" :key="key">
      <FighterCard :fighter="fighter" />
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
