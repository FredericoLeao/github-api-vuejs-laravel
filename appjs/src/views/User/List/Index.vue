<template>
  <div class="row mb-2" v-for="(user,id) in storeUser.getUsers">
    <ListRow :user="user" />
  </div>
</template>

<script>
import { onMounted, defineComponent } from 'vue';
import { useUserStore } from '@/store/User'
import ListRow from '@/views/User/List/Row.vue'

export default defineComponent({
  name: "UserList",
  components: { ListRow },
  setup () {
    const storeUser = useUserStore()
    onMounted(() => {
      storeUser.fetchUsers()
    })
    return { storeUser }
  }
})
</script>
