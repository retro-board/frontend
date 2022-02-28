<template>
  <div class="relative block p-8 border border-gray-100 shadow-xl rounded-xl mb-2 bg-white">
    <a class="absolute left-2 top-1" href="" v-show="mine">
      <MinusCircleIcon class="w-6 h-6 mb-1" />
    </a>

    <span class="absolute right-2 top-1 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
      {{ topicVotes }}
    </span>

    <div>
      {{ topicContent }}
    </div>

    <a class="absolute left-2 bottom-1" href="">
      <ThumbUpIcon class="w-6 h-6 mb-1" />
    </a>
    <a class="absolute right-4 bottom-1" href="">
      <ThumbDownIcon class="w-6 h-6 mb-1" />
    </a>
  </div>
</template>

<script>
import {
  MinusCircleIcon,
  ThumbUpIcon,
  ThumbDownIcon,
} from '@heroicons/vue/outline'

export default {
  setup() {
    return {}
  },
  components: {
    MinusCircleIcon,
    ThumbUpIcon,
    ThumbDownIcon,
  },
  props: {
    topicContent: String,
    topicVotes: String,
    mine: Boolean,
  },
  name: "TopicComponent",
}
</script>
