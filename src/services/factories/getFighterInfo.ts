function getFighterInfo (figtherInfo: { age: number, height: string, nickname: string, weight: string, photo: string}) {

const { age, height, nickname, weight, photo } = figtherInfo
  
  return { 
    age, 
    height, 
    nickname, 
    weight,
    photo
  }

}


export default getFighterInfo
