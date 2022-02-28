<template>
  <div class="relative block p-4 border border-gray-500 shadow-xl rounded-xl mb-2 bg-white" v-if="done">
    <div class="line-through">
      {{ action }}
    </div>
  </div>

  <div class="relative block p-4 border border-gray-500 shadow-xl rounded-xl mb-2 bg-white" v-else>
    <a class="absolute left-2 top-1" href="">
      <MinusCircleIcon class="w-6 h-6 mb-1" />
    </a>

    <div>
      {{ action }}
    </div>
    <a class="absolute right-4 top-1/3" href="">
      <CheckIcon class="w-6 h-6 mb-1" />
    </a>
  </div>
</template>

<script>
import {
  MinusCircleIcon,
  CheckIcon,
} from '@heroicons/vue/outline';

export default {
  setup() {
    return {}
  },
  components: {
    MinusCircleIcon,
    CheckIcon,
  },
  props: {
    action: String,
    done: Boolean,
  },
  name: "ActionComponent",
}
</script>
