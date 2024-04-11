<script setup lang="ts">
import { defineProps } from "vue"

defineProps({ fighter: { type: Object, required: true } })

function goToDetails(id: number) {
  // Ir a detalle De combate
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
