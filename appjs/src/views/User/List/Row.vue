<template>
  <div class="col-12">
    <div class="card">
      <div class="row">
        <div class="col-sm-3">
          <router-link :to="{ name: 'UserDetails', params: { login: user.login } }">
            <img class="img-fluid" :src="user.avatar_url" />
          </router-link>
        </div>
        <div class="col-sm-9">
          <div class="card-body">
            <router-link :to="{ name: 'UserDetails', params: { login: user.login } }">
              <h5 class="card-title">{{ user.name }}</h5>
              <p class="card-text">
                <small class="text-muted">Usuário desde {{ formatDate(user.created_at) }}</small>
                <span class="float-end">{{ user.public_repos }}</span>
              </p>
            </router-link>
            <button class="btn btn-success" @click="save" v-if="!isSaved">Salvar no back-end</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { defineComponent, ref } from 'vue';
import CommonMixin from '@/mixins/Common'

export default defineComponent({
  name: "ListRow",
  props: ["user"],
  mixins: [CommonMixin],
  setup (props) {
    const user = ref(props.user)
    const isSaved = ref(false)
    const save = () => {
      axios.post('http://localhost/api/salvar-local', { login: user.value.login })
        .then(() => { isSaved.value = true })
    }
    return { isSaved, save, user }
  }
})
</script>