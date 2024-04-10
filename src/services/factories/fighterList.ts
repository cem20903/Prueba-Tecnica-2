function getFighterList (fighterList: []) {
  return fighterList.map(fightInfo => {
  
  const { fighters, category, id } = fightInfo
  
  return {
    fighters,
    category,
    id
  }
  }).slice(0, 20)
}

export default getFighterList
