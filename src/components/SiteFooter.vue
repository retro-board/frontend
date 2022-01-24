<template>
  <footer class="bg-at-light-green text-black mt-10">
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p class="font-medium">
            Company
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-grey-500">
            <router-link class="cursor-pointer" to="/about">About</router-link>
            <router-link class="cursor-pointer" to="/contact">Contact</router-link>
          </nav>
        </div>

        <div>
          <p class="font-medium">
            Services
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-grey-500">
            <router-link class="cursor-pointer" to="/pricing">Pricing</router-link>
          </nav>
        </div>

        <div>
          <p class="font-medium">
            Legal
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-grey-500">
            <router-link class="cursor-pointer" to="/terms">Terms</router-link>
            <router-link class="cursor-pointer" to="/privacy">Privacy</router-link>
          </nav>
        </div>
      </div>

      <div class="pt-7 mt-8 border-t border-grey-100 sm:items-center sm:justify-between sm:flex">
        <p class="text-xs text-grey-500">
          &copy; Retro-Board.it 2022
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    return {}
  },
  name: "SiteFooter"
}
</script>