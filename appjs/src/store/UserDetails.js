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
      if (Object.keys(this.userDetails).length > 0 && this.userDetails.login === ghUser || !ghUser) return
      axios.get(`https://api.github.com/users/${ghUser}/repos`)
        .then(response => {
          this.userDetails.login = ghUser
          this.userDetails.repos = response.data
        })
    }
  }
})