import axios from "axios"
import { defineStore } from "pinia"

export const useUserDetailsStore = defineStore({
  id: "userDetailsState",
  state: () => ({
    userDetails: {},
  }),
  getters: {
    data: (state) => {
      return state.userDetails
    },
  },
  actions: {
    fetch (ghUser) {
      if (Object.keys(this.userDetails).length > 0 || !ghUser) return
      axios.get(`https://api.github.com/users/${ghUser}/repos`)
        .then(response => {
          this.userDetails.repos = response.data
        })
    }
  }
})