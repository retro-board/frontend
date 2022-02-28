<template>
  <header class="bg-retro-color-a text-black border-white border-2 my-2 rounded-t-lg">
     <nav class="py-3 px-4 flex flex-col gap-4 items-center sm:flex-row">
       <div class="flex flex-1 gap-x-6">
         <a href="/">
           <img src="@/assets/images/logo.png" alt="Retro-Board" class="w-10" />
           <h1 class="text-lg">Retro-Board</h1>
         </a>
       </div>
       <div class="flex items-center gap-2" v-if="loggedIn">
         <h1 class="text-4xl">
           <router-link class="class-pointer" :to="{name: 'Home'}">
             {{ companyName }}
           </router-link>
         </h1>
       </div>
       <ul class="flex flex-1 justify-end gap-x-10">
         <router-link class="cursor-pointer" :to="{name:'Home'}" v-if="!loggedIn">Home</router-link>
         <router-link class="cursor-pointer" :to="{name:'BoardList'}" v-if="loggedIn">Boards</router-link>
         <router-link class="cursor-pointer" :to="{name:'CompanyInfo'}" v-if="allowedToViewCompany">Company</router-link>

         <li class="cursor-pointer" v-if="loggedIn">
           <a @click="logout">Logout</a>
         </li>
         <li class="cursor-pointer" v-else>
           <a :href="accountURL + '/account/login'">Login</a>
         </li>
       </ul>
     </nav>
  </header>
</template>

<script>
import {
  mapState,
  useStore,
} from "vuex";

export default {
  computed: {
    allowedToViewCompany() {
      return this.$store.getters.allowedTo('company:view');
    },
    ...mapState({
      companyName: state => state.company.data.name,
      loggedIn: state => state.user.token !== null,
    }),
  },
  setup() {
    const store = useStore()
    store.dispatch("parseLoginData")

    function logout() {
      store.dispatch("logout").then(() => {
        document.location.href = "/"
      });
    }

    let accountURL = "https://backend.retro-board.it"
    if (process.env.VUE_APP_API_URL) {
      accountURL = process.env.VUE_APP_API_URL;
    }

    return {
      accountURL,
      logout,
    }
  },
  name: 'NavigationComponent',
}
</script>
