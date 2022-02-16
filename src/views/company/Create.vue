<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <!-- Error -->
    <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>

    <form @submit="createCompany" class="p-8 flex flex-col bg-light-grey rounded-md shadow-lg">
      <h1 class="text-3xl text-at-light-green mb-4">
        Create Company
      </h1>
      <div class="flex flex-col mb-2">
        <label for="company_name" class="mb-1 text-sm text-at-light-green">Company Name</label>
        <input type="text" id="company_name" name="company_name" required class="p-2 text-green-500 focus:outline-none" v-model="companyInfo.name" />
      </div>

      <div class="flex flex-col mb-2">
        <label for="sub_domain" class="mb-1 text-sm text-at-light-green">Subdomain</label>
        <input type="text" id="sub_domain" name="sub_domain" required class="p-2 text-green-500 focus:outline-none" v-model="companyInfo.subDomain" />
      </div>

      <div class="flex flex-col mb-2">
        <label for="first_team_name" class="mb-1 text-sm text-at-light-green">First Retro-Board Team Name</label>
        <input type="text" id="first_team_name" name="first_team_name" required class="p-2 text-green-500 focus:outline-none" v-model="companyInfo.firstTeamName" />
      </div>

      <button type="submit" :disabled="loading" class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-white hover:bg-white hover:text-at-light-green">Create</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

export default {
  name: "CompanyCreateView",
  components: {
  },
  setup() {
    let store = useStore()
    store.dispatch("parseLoginData")

    const companyInfo = {
      name: "",
      subDomain: "",
      firstTeamName: "",
      domain: "",
      userRole: "",
    }

    const router = useRouter()
    const errorMsg = ref(null)
    const loading = ref(false)

    companyInfo.subDomain = store.state.company.data.domain
    companyInfo.userRole = store.state.user.data.role

    const createCompany = (ev) => {
      ev.preventDefault()
      loading.value = true
      companyInfo.domain = store.state.company.data.domain

      switch (companyInfo.subDomain) {
        case "retro-board":
        case "www":
        case "backend":
        case "api":
          errorMsg.value = "Subdomain cannot be " + companyInfo.subDomain
          loading.value = false
          break
      }

      store.dispatch("createCompany", companyInfo).then(() => {
        loading.value = false
        router.push("Boards")
      }).catch(err => {
        loading.value = false
        errorMsg.value = err.message
        setTimeout(() => {
          errorMsg.value = null
        }, 5000)
      })
    }

    return {
      errorMsg,
      createCompany,
      companyInfo,
      loading,
    }
  },
}
</script>
