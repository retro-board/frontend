<template>
  <div class="relative block p-8 border border-gray-100 shadow-xl rounded-xl mb-2 bg-white">
    <a class="absolute left-2 top-1" href="" v-show="mine">
      <font-awesome-icon name="minus-square" :icon="['far', 'minus-square']" />
    </a>

    <div>
      {{ loveContent }}
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
  props: {
    loveContent: String,
    mine: Boolean,
  },
  name: "AppreciateComponent",
}
</script>
