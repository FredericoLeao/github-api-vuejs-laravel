<template>
  <div class="row mb-2" v-for="(user,id) in storeUser.getUsers">
    <div class="col-12">
      <div class="card">
        <router-link :to="{ name: 'UserDetails', params: { login: user.login } }">
          <div class="row">
            <div class="col-sm-3">
              <img class="img-fluid" :src="user.avatar_url" />
            </div>
            <div class="col-sm-9">
              <div class="card-body">
                <h5 class="card-title">{{ user.name }}</h5>
                <p class="card-text">
                  <small class="text-muted">Usuário desde {{ formatDate(user.created_at) }}</small>
                  <span class="float-end">{{ user.public_repos }}</span>
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, defineComponent } from 'vue';
import { useUserStore } from '@/store/User'
import CommonMixin from '@/mixins/Common'

export default defineComponent({
  name: "UserList",
  mixins: [CommonMixin],
  setup () {
    const storeUser = useUserStore()
    onMounted(() => {
      storeUser.fetchUsers()
    })
    return { storeUser }
  }
})
</script>
