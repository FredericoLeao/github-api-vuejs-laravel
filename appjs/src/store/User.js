import axios from "axios"
import { defineStore } from "pinia"

export const useUserStore = defineStore({
  id: "userState",
  state: () => ({
    users: [],
  }),
  getters: {
    getUsers: (state) => {
      return state.users
    },
  },
  actions: {
    getUserByLogin (userLogin) {
      return this.users.find((user) => user.login === userLogin)
    },
    fetchUsers () {
      if (this.users.length > 0) return
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