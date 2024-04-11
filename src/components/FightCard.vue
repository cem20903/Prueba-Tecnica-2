<script setup lang="ts">
import { onMounted, ref, defineProps } from "vue"
import { getFights } from "@/services/fight.ts"
import { useRouter } from "vue-router"

const router = useRouter()

defineProps({ fight: { type: Object, required: true } })

const postList = ref([])

function goToDetails(id) {
  router.push({ name: "details", params: { id } })
}
</script>

<template>
  <div class="fight--card">
    <div class="fight--category">
      <strong>Categoria:</strong> <span>{{ fight.category }}</span>
    </div>
    <div class="fight--fighters">
      <RouterLink :to="`/details/${fight.fighters.first.id}`">
        {{ fight.fighters.first.name }}
      </RouterLink>
      <p>VS</p>
      <RouterLink :to="`/details/${fight.fighters.second.id}`">
        {{ fight.fighters.second.name }}
      </RouterLink>
    </div>
    <div class="fight--actions">
      <button
        class="fight--actions_button"
        @click="() => goToDetails(fight.id)"
      >
        Detalles del combate
      </button>
    </div>
  </div>
</template>

<style scoped>
.fight--card {
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  flex-basis: 20%;
}

.fight--category {
  display: flex;
  justify-content: space-between;
}

.fight--fighters {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.fight--actions {
  display: flex;
  justify-content: center;
}

.fight--actions_button {
  flex-basis: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
}

@media (min-width: 1024px) {
  .fight--fighters {
    flex-direction: column;
    margin: 10px 0;
  }
}
</style>
