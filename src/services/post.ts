import getFighterList from "./factories/fighterList"
import getFighterInfo from "./factories/getFighterInfo" 

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
      return getFighterList(response.response)      
    })
    .catch((err) => {
      console.log(err)
      return []
    })
}

 

async function getPostById(id: number) {
  const res = await fetch(`https://v1.mma.api-sports.io/fighters?id=${id}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v1.mma.api-sports.io",
      "x-rapidapi-key": "cecabd3c95709115a8f71f15850fdb69",
    },
  })
  const response = await res.json()

  return getFighterInfo(response.response[0])
}

export { getPostList, getPostById }
