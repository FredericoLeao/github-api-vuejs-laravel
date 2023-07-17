<template>
  <div class="row">
    <div class="col-3">
      <div v-if="user">
        <h5>{{ user.name }}</h5>
        <div class="p-2" v-if="user.avatar_url">
          <img class="img-fluid" :src="user.avatar_url" />
        </div>
        <div class="p-3">
          <strong><small>Seguidores:</small> </strong> <span class="float-end">{{ user.followers }}</span>
          <strong><small>Seguindo:</small> </strong> <span class="float-end">{{ user.following }}</span>
        </div>
        <p><small>{{ user.bio }}</small></p>
      </div>
    </div>
    <div class="col-9">
      <div v-if="userDetails">
        <div class="row">
          <div class="col-6 mb-3" v-for="(repo, idx) in userDetails.repos" :key="idx">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ repo.name }} <small class="float-end"><i class="bi bi-eye"></i> {{ repo.watchers }}</small></h5>
                <p class="card-text">{{ repo.description }}</p>
                <p class="card-text">
                  <small class="text-muted float-end">
                    Criado em: {{ formatDate(repo.created_at) }}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, defineComponent, defineProps } from 'vue';
import { useUserDetailsStore } from '@/store/UserDetails'
import { useUserStore } from '@/store/User'
import CommonMixin from '@/mixins/Common'

export default defineComponent({
  // useUserDetailsStore
  // fetchUserDetails(login)
  mixins: [CommonMixin],
  props: ['login'],
  setup (props) {
    const storeUser = useUserStore()
    const storeUserDetails = useUserDetailsStore()
    onMounted(() => {
      console.log('mounted!')
      console.log(props.login)
      storeUserDetails.fetch(props.login)
      storeUser.fetchUsers()
    })
    const user = computed(() => {
      if (props.login) {
        return storeUser.getUserByLogin(props.login)
      }
      return
    })
    const userDetails = computed(() => {
      return storeUserDetails.data
    })
    return { storeUserDetails, storeUser, user, userDetails }
  }
})
</script>