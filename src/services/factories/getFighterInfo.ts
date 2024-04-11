function getFighterInfo (figtherInfo: { name: string, age: number, height: string, nickname: string, weight: string, photo: string}) {

const { name, age, height, nickname, weight, photo } = figtherInfo
  
  return { 
    name,
    age, 
    height, 
    nickname, 
    weight,
    photo
  }

}


export default getFighterInfo
