<template>
  <header class="bg-retro-color-a text-black border-white border-2 my-2 rounded-t-lg">
     <nav class="container py-3 px-4 flex flex-col gap-4 items-center sm:flex-row">
       <div class="flex flex-1 gap-x-6">
         <a href="/">
           <img src="@/assets/images/logo.png" alt="Retro-Board" class="w-10" />
           <h1 class="text-lg">Retro-Board</h1>
         </a>
       </div>
       <div class="flex items-center gap-2">
         <h1 class="text-4xl underline">{{ companyName }}</h1>
       </div>
       <ul class="flex flex-1 justify-end gap-x-10">
         <router-link class="cursor-pointer" to="/">Home</router-link>
         <router-link class="cursor-pointer" to="/board" v-if="loggedIn">Boards</router-link>

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
import { mapState, useStore } from "vuex";

export default {
  computed: {
    ...mapState({
      companyName: state => state.company.name,
      loggedIn: state => state.user.token !== null,
    })
  },
  setup() {
    const store = useStore()

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
