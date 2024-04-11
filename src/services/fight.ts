import getFighterList from "./factories/getFightsList"
import getFighterInfo from "./factories/getFighterInfo" 

const API_URL = "https://v1.mma.api-sports.io/"

const headers = {
  "x-rapidapi-host": "v1.mma.api-sports.io",
  "x-rapidapi-key": "cecabd3c95709115a8f71f15850fdb69",
}


async function getFights() {

  const SEASON_YEAR = 2024

  return fetch(`${API_URL}/fights?season=${SEASON_YEAR}`, {
    method: "GET",
    headers,
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

 

async function getFighterById(id: number) {
  
  return fetch(`${API_URL}/fighters?id=${id}`, {
    method: "GET",
    headers
  })
    .then(async (res) => {
      const response = await res.json()
      return getFighterInfo(response.response[0])
  })
    .catch((err) => {
      console.log(err)
      return {}
  })
  

}

export { getFights, getFighterById }
