<template>
  <div class="min-h-full font-Poppins bg-gray-800 box-border dark:bg-black">
    <Navigation />
    <router-view/>
    <SiteFooter />
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
