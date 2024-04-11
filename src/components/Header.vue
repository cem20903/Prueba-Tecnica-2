<script setup>
import { useUserStore } from "../stores/user.js"
const store = useUserStore()
</script>

<template>
  <nav class="menu">
    <div>Luchadores Visitados: {{ store.fightersVisited }}</div>
  </nav>
</template>

<style scoped>
.menu {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
