<script setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { getPostById } from "@/services/post"
const router = useRoute()

const post = ref({})

onMounted(async () => {
  const response = await getPostById(router.params.id)
  console.log(response, "RESPUESTA")
  post.value = response
})
</script>

<template>
  <div class="card">
    <div><img :src="post.photo" /></div>
    <div>Edad: {{ post.age }}</div>
    <div>Altura: {{ post.height }}</div>
    <div>Apodo: {{ post.nickname }}</div>
    <div>Peso: {{ post.weight }}</div>
  </div>
</template>

<style scoped></style>
