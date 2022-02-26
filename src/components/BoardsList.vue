<template>
  <div class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-grey-50 mb-2 border-white">
    <div class="flex-justify between items-center relative">
      <router-link :to="{name:'TeamBoard', params:{board_link: link}}">
        <div class="flex">
          {{ name }}
        </div>
        <div class="flex" v-if="retrosCompleted >= 1">
          <div class="flex">
            Retros Completed: {{ retrosCompleted }}
          </div>

          <div class="absolute right-1 top-1" v-if="retrosCompleted >= 2">
            <font-awesome-icon name="angle-double-down" icon="angle-double-down" v-if="teamScorePrevious < teamScore"/>
            <font-awesome-icon name="angle-double-up" icon="angle-double-up" v-else-if="teamScorePrevious > teamScore"/>
            <font-awesome-icon name="exchange-alt" icon="exchange-alt" v-else />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardsList",
  setup() {
    return {}
  },
  props: {
    name: String,
    id: Number,
    link: String,
    retrosCompleted: Number,
    teamScore: Number,
    teamScorePrevious: Number,
  },
}
</script>