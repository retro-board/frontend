<template>
  <div class="relative block p-8 border border-gray-100 shadow-xl rounded-xl mb-2 bg-white">
    <a class="absolute left-2 top-1" href="" v-show="mine">
      <MinusCircleIcon class="w-6 h-6 mb-1" />
    </a>

    <div>
      {{ loveContent }}
    </div>
  </div>
</template>

<script>
import { MinusCircleIcon } from "@heroicons/vue/outline";

export default {
  setup() {
    return {}
  },
  components : {
    MinusCircleIcon
  },
  props: {
    loveContent: String,
    mine: Boolean,
  },
  name: "AppreciateComponent",
}
</script>
