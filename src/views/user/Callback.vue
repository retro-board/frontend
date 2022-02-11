<template>
  <div>
    {{ dataSet }}

    Bob

    {{ $route.params }}
  </div>
</template>

<script>
export default {
  name: "CallbackPage",
  setup() {
    let userId = this.$route.params.userid
    let domain = this.$route.params.domain
    let role = this.$route.params.role
    let dataSet = "userId: " + userId + " domain: " + domain + " role: " + role
    console.log(dataSet)

    return {
      dataSet,
    }
  },
}
</script>

<style scoped>

</style>