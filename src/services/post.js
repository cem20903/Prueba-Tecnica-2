async function getPostList() {
  return fetch("https://v1.mma.api-sports.io/fights?season=2024", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v1.mma.api-sports.io",
      "x-rapidapi-key": "cecabd3c95709115a8f71f15850fdb69",
    },
  })
    .then(async (res) => {
      const response = await res.json()
      return response.response.slice(0, 20)
    })
    .catch((err) => {
      console.log(err)
    })
}

async function getPostById(id) {
  const res = await fetch(`https://v1.mma.api-sports.io/fighters?id=${id}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v1.mma.api-sports.io",
      "x-rapidapi-key": "cecabd3c95709115a8f71f15850fdb69",
    },
  })
  const response = await res.json()

  return response.response[0]
}

export { getPostList, getPostById }
