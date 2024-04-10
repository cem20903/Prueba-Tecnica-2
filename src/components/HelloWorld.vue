<script setup>
import { useUserStore } from "@/stores/user"

const counter = useUserStore()

defineProps({
  msg: String,
})
</script>

<template>
  <div class="card">
    <div>HelloWorld</div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
