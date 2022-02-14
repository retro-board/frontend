<template>
  <div class="h-full h-screen font-Poppins bg-retro-color-a box-border dark:bg-retro-color-a p-3">
    <div class="p-2 py-1 bg-retro-color-c border-white border-2 rounded">
      <Navigation />
      <div class="p-2 border-white border-2">
        <router-view />
      </div>
      <SiteFooter />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import SiteFooter from '@/components/SiteFooter'

export default {
  components: {
    Navigation,
    SiteFooter,
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
</style>
