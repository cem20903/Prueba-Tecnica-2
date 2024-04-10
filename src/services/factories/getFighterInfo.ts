function getFighterInfo (figtherInfo: {}) {

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
