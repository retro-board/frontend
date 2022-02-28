<template>
  <footer class="bg-retro-color-a text-black border-white border-2 my-2 rounded-b-lg">
    <div class="px-4 py-8 mx-auto sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 items-center">
        <div>
          <p class="font-medium">
            Company
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <router-link class="cursor-pointer" :to="{name: 'About'}">About</router-link>
            <router-link class="cursor-pointer" :to="{name: 'Contact'}">Contact</router-link>
          </nav>
        </div>

        <div>
          <p class="font-medium">
            Services
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <router-link class="cursor-pointer" :to="{name: 'Pricing'}" v-if="!loggedIn">Pricing</router-link>
            <router-link class="cursor-pointer" :to="{name: 'ExampleBoard'}" v-if="!loggedIn">Example</router-link>
            <router-link class="cursor-pointer" :to="{name: 'Upgrade'}" v-if="canUpgrade">Upgrade</router-link>
          </nav>
        </div>

        <div>
          <p class="font-medium">
            Legal
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <router-link class="cursor-pointer" :to="{name: 'Terms'}">Terms</router-link>
            <router-link class="cursor-pointer" :to="{name: 'Privacy'}">Privacy</router-link>
          </nav>
        </div>
      </div>

      <div class="pt-7 mt-8 border-t border-gray-100 sm:items-center sm:justify-between sm:flex">
        <p class="text-xs text-gray-500">
          &copy; Retro-Board.it 2022
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  mapState,
} from "vuex";

export default {
  computed: {
    canUpgrade() {
      return this.$store.getters.allowedTo('company:create');
    },
    ...mapState({
      loggedIn: state => state.user.token !== null,
    }),
  },
  setup() {
    return {}
  },
  name: "SiteFooter"
}
</script>