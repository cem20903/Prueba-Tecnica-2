<script setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { getPostById } from "@/services/post"
const router = useRoute()

const post = ref({})

onMounted(async () => {
  const response = await getPostById(router.params.id)
  post.value = response
})
</script>

<template>
  <div class="card">
    <div>{{ post.title }}</div>
  </div>
</template>

<style scoped></style>
