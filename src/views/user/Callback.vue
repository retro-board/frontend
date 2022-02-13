<template>
  <div>
    Well it crashed if you see this
  </div>
</template>

<script>
import store from '../../store'

export default {
  name: "UserCallback",
  setup() {
    store.dispatch("getUserData")
    document.location.href = "/boards"

    return {}
  },
}
</script>