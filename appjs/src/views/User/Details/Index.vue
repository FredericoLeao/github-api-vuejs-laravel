<template>
  <div class="row">
    <div class="col-sm-3">
      <div v-if="user">
        <h5>{{ user.name }}</h5>
        <div class="p-2" v-if="user.avatar_url">
          <img class="img-fluid" :src="user.avatar_url" />
        </div>
        <div class="p-3">
          <div>
            <strong><small>Seguidores:</small></strong>
            <span class="float-end">{{ user.followers }}</span>
          </div>
          <div>
            <strong><small>Seguindo:</small></strong>
            <span class="float-end">{{ user.following }}</span>
          </div>
        </div>
        <p><small>{{ user.bio }}</small></p>
      </div>
    </div>
    <div class="col-sm-9">
      <div v-if="userDetails">
        <div class="row mb-2">
          <div class="col-6 offset-6">
            <input type="text" class="form-control" v-model="textSearch" placeholder="Pesquisar...">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 mb-3" v-for="(repo, idx) in userRepos" :key="idx">
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
import { computed, onMounted, defineComponent, ref } from 'vue';
import { useUserDetailsStore } from '@/store/UserDetails'
import { useUserStore } from '@/store/User'
import CommonMixin from '@/mixins/Common'

export default defineComponent({
  mixins: [CommonMixin],
  props: ['login'],
  setup (props) {
    const storeUser = useUserStore()
    const storeUserDetails = useUserDetailsStore()
    const textSearch = ref('')
    onMounted(() => {
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
    const userRepos = computed(() => {
      if (userDetails.value) {
        let searchArray = textSearch.value.toLowerCase().trim().replace(/  +/g, ' ').split(' ').filter((searchStr) => {
          return searchStr.length >= 2
        })
        if (searchArray && searchArray.length > 0) {
          return userDetails.value.repos.filter((userRepo) => {
            return searchArray.filter((searchStr) => {
              return userRepo.name.indexOf(searchStr) >= 0
            }).length === searchArray.length
          })
        }
        return userDetails.value.repos
      }
      return
    })
    return { storeUserDetails, storeUser, textSearch, user, userDetails, userRepos }
  }
})
</script>