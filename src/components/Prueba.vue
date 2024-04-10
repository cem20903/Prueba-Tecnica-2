<script setup>
import { useUserStore } from "@/stores/user"

const counter = useUserStore()

defineProps({
  msg: String,
})

// counter.count++
// // with autocompletion ✨
// counter.$patch({ count: counter.count + 1 })
// // or using an action instead
// counter.increment()
</script>

<template>
  <div class="card">
    <div>Prueba</div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
