<template>
  <div></div>
</template>

<script>
import {useStore} from 'vuex'
import store from '@/store'

export default {
  name: "CompanyView",
  components: {
  },
  setup() {
    const s = useStore()
    if (s.getters.allowedTo('company:view')) {
      store.dispatch("getCompanyInfo")
    }

    return {
      allowedToUpdate() {
        return s.getters.allowedTo('company:edit')
      },
    }
  },
}
</script>
