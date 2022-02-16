<template>
  <div>
    Well it crashed if you see this
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: "UserCallback",
  setup() {
    store.dispatch("parseLoginData")
    console.log(store.state)

    if (store.state.company.enabled) {
      document.location.href = "/boards"
    } else {
      document.location.href = "/company/create"
    }


    return {}
  },
}
</script>