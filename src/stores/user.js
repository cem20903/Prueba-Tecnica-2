import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
  state: () => {
    return { fightersVisited: 0 }
  },
  actions: {
    addFighterVisited() {
      this.fightersVisited++
    },
  },
})
