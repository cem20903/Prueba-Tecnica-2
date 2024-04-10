<script setup>
import { onMounted, ref } from "vue"
import { getPostList } from "@/services/post"

const postList = ref([])

onMounted(async () => {
  const response = await getPostList()
  postList.value = response
})

defineProps({
  msg: String,
})
</script>

<template>
  <div class="post--container">
    <div v-for="(post, key) in postList" :key="key" class="post--card">
      <span>{{ post.title }}</span>
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
