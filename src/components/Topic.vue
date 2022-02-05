<template>
  <div class="relative block p-8 border border-gray-100 shadow-xl rounded-xl mb-2 bg-white">
    <span class="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
      {{ topicVotes }}
    </span>

    <div>
      {{ topicContent }}
    </div>

    <a class="absolute left-2 bottom-1" href="">
      <font-awesome-icon name="thumbs-up" icon="thumbs-up" />
    </a>
    <a class="absolute right-4 bottom-1" href="">
      <font-awesome-icon name="thumbs-down" icon="thumbs-down" />
    </a>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
  props: {
    topicContent: String,
    topicVotes: String,
  },
  name: "TopicComponent",
}
</script>
