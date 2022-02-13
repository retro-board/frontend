<template>
  <div>
    Bob
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: "UserCallback",
  setup() {
    let route = useRoute()

    console.log(route.params)

    return {}
  },
}
</script>