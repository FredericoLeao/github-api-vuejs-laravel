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
      axios.get(`https://api.github.com/users/${ghUser}/repos`, { headers: { Authorization: 'Bearer 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' } })
        .then(response => {
          this.userDetails.repos = response.data
        })
    }
  }
})