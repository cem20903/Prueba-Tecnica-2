const API_URL = "https://jsonplaceholder.typicode.com"

async function getPostList() {
  const response = await fetch(`${API_URL}/posts`)
  return await response.json()
}

async function getPostById(id) {
  const response = await fetch(`${API_URL}/posts/${id}`)
  return await response.json()
}

export { getPostList, getPostById }
