<template>
  <header class="bg-at-light-green text-black">
     <nav class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
       <div class="flex items-center gap-x-4">
         <img src="@/assets/images/logo.png" alt="Retro-Board" class="w-10" />
         <h1 class="text-lg">Retro-Board</h1>
       </div>
       <ul class="flex flex-1 justify-end gap-x-10">
         <router-link class="cursor-pointer" to="/">Home</router-link>
         <router-link class="cursor-pointer" to="/board">Board</router-link>

         <li class="cursor-pointer" v-if="loggedIn">Logout</li>
         <li class="cursor-pointer" v-else>
           <a href="https://backend.retro-board.it/login">Login</a>
         </li>

       </ul>
     </nav>
  </header>
</template>

<script>
export default {
  setup() {
    let loggedIn = false;

    return {
      loggedIn,
    }
  },
  name: 'NavigationComponent',
}
</script>
