<template>
  <div class="relative block p-4 border border-gray-500 shadow-xl rounded-xl mb-2 bg-white" v-if="done">
    <div class="line-through">
      {{ action }}
    </div>
  </div>

  <div class="relative block p-4 border border-gray-500 shadow-xl rounded-xl mb-2 bg-white" v-else>
    <div>
      {{ action }}
    </div>
    <a class="absolute right-4 top-1/3" href="">
      <font-awesome-icon name="action-done" icon="check" />
    </a>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
  props: {
    action: String,
    done: Boolean,
  },
  name: "ActionComponent",
}
</script>
