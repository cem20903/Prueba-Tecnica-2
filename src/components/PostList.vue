<script setup>
import { onMounted, ref } from "vue"
import { getPostList } from "@/services/post"
import { useRouter } from "vue-router"

const router = useRouter()

const postList = ref([])

onMounted(async () => {
  const response = await getPostList()
  console.log(response, "EN EL COMPONENTE")
  postList.value = response
})

function goToDetails(id) {
  router.push({ name: "details", params: { id } })
}
</script>

<template>
  <div class="post--container">
    <div v-for="(post, key) in postList" :key="key" class="post--card">
      <span>Categoria: {{ post.category }}</span>
      <div>
        <RouterLink :to="`/details/${post.fighters.first.id}`">
          {{ post.fighters.first.name }}
        </RouterLink>
        <p>VS</p>
        <RouterLink :to="`/details/${post.fighters.second.id}`">
          {{ post.fighters.second.name }}
        </RouterLink>
      </div>
      <button @click="() => goToDetails(post.id)">Detalles del combate</button>
    </div>
  </div>
</template>

<style scoped>
.post--container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.post--card {
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  flex-basis: 20%;
}
</style>
