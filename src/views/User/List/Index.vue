<template>
  <h1>Users</h1>
  <div v-for="(user,id) in storeUser.getUsers">
    <div>{{ user.login }}</div>
    <div>{{ user.avatar_url }}</div>
    <div>{{ user.url }}</div>
  </div>
</template>

<script>
import { onMounted, defineComponent } from 'vue';
import { useUserStore } from '@/store/user'
export default defineComponent({
  name: "UserList",
  setup () {
    const storeUser = useUserStore()

    onMounted(() => {
      storeUser.fetchUsers()
    })
    return { storeUser }
  }
})
</script>
