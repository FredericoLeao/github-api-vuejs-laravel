import axios from "axios"
import { defineStore } from "pinia"

export const useUserStore = defineStore({
  id: "userState",
  state: () => ({
    users: [],
  }),
  getters: {
    getUserById: (state, userId) => {
      return state.users.find((user) => user.id === userId)
    },
    getUsers: (state) => {
      return state.users
    },
  },
  actions: {
    fetchUsers () {
      const githubUsers = ["wallysonn", "diego3g", "filipedeschamps", "rmanguinho"]
      githubUsers.forEach((ghUser) => {
        axios.get(`https://api.github.com/users/${ghUser}`)
          .then(response => {
            this.users.push(response.data)
          })
      })
    }
  }
})