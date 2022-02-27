<template>
  <div class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-grey-50 mb-2 border-white">
    <div class="flex-justify between items-center relative">
      <router-link :to="{name:'TeamBoard', params:{board_link: link}}">
        <div class="flex text-lg">
          {{ name }}
        </div>
        <div class="flex">
          <div class="flex text-sm">
            Retros Completed: {{ retrosCompleted }}
          </div>

          <div class="absolute right-1 top-3">
            <div v-if="retrosCompleted >= 2">
              <ArrowCircleUpIcon v-if="teamScorePrevious < teamScore" class="h-6 w-6" />
              <ArrowCircleDownIcon v-else-if="teamScorePrevious > teamScore" class="h-6 w-6" />
              <DotsCircleHorizontalIcon v-else class="h-6 w-6" />
            </div>
            <div v-else>
              <QuestionMarkCircleIcon class="h-6 w-6" />
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  DotsCircleHorizontalIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/vue/outline";

export default {
  name: "BoardsList",
  setup() {
    return {}
  },
  components: {
    ArrowCircleDownIcon,
    ArrowCircleUpIcon,
    DotsCircleHorizontalIcon,
    QuestionMarkCircleIcon,
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