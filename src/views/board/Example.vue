<template>
  <div class="max-w-3xl mx-auto text-center py-5">
    <h1 class="max-w-3xl md:text-4xl font-medium text-white mb-4 md:mb-6">
      Example Board
    </h1>
  </div>

  <div class="lg:flex px-8">
    <!-- Good -->
    <div class="lg:w-1/3 my-4 md:my-6 m-2">
      <div class="relative border-solid border-white rounded bg-emerald-500 text-center">
        <div class="p-3 md:py-3">
          <h4 class="font-medium leading-tight text-2xl mb-2">
            Good
          </h4>
        </div>
        <div class="p-6 border-t-4">
          <Topic topic-content="Good Things" topic-votes="1" />
          <Topic topic-content="More Good Things" topic-votes="2" mine />
        </div>
        <a class="absolute left-2 bottom-0" href="">
          <font-awesome-icon name="plus-square" :icon="['far', 'plus-square']" />
        </a>
      </div>
    </div>

    <!-- Bad -->
    <div class="lg:w-1/3 my-4 md:my-6 m-2">
      <div class="relative border-solid border-white rounded bg-red-500 text-center">
        <div class="p-3 md:py-3">
          <h4 class="font-medium leading-tight text-2xl mb-2">
            Bad
          </h4>
        </div>
        <div class="p-6 border-t-4">
          <Topic topic-content="Bad Things" topic-votes="3" />
        </div>
        <a class="absolute left-2 bottom-0" href="">
          <font-awesome-icon name="plus-square" :icon="['far', 'plus-square']" />
        </a>
      </div>
    </div>

    <!-- Continue -->
    <div class="lg:w-1/3 my-4 md:my-6 m-2">
      <div class="relative border-solid border-white rounded bg-blue-600 text-center">
        <div class="p-3 md:py-3">
          <h4 class="font-medium leading-tight text-2xl mb-2">
            Continue
          </h4>
        </div>
        <div class="p-6 border-t-4">
          <Topic topic-content="Continue Things" topic-votes="9" mine />
        </div>
        <a class="absolute left-2 bottom-0" href="">
          <font-awesome-icon name="plus-square" :icon="['far', 'plus-square']" />
        </a>
      </div>
    </div>
  </div>

  <div class="relative max-w-2xl mx-auto text-center py-5 bg-purple-400 rounded mt-5">
    <h4 class="max-w-2xl md:text-4xl font-medium text-white mb-4 md:mb-6">
      Actions
    </h4>
    <div class="p-6 border-t-4">
      <Action action="make better" />
      <Action action="make better again" done />
    </div>
    <a class="absolute left-2 bottom-0" href="">
      <font-awesome-icon name="plus-square" :icon="['far', 'plus-square']" />
    </a>
  </div>
</template>

<script>
import Topic from '@/components/Topic'
import Action from '@/components/Action'

export default {
  name: "ExampleBoardView",
  computed: {
  },
  components: {
    Topic,
    Action,
  },
  setup() {

  },
}
</script>
