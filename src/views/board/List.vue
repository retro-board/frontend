<template>
  <div v-if="boards.loading" class="flex justify-center">Loading...</div>
  <div v-else-if="boards.data.length">
    <div class="relative h-11" v-if="allowedToCreateBoard">
      <div class="absolute top-1 right-1 bg-green-300 p-1">
        <router-link :to="{name:'BoardCreate'}">
          Create New Board <PlusCircleIcon class="w-6 h-6 mb-1" />
        </router-link>
      </div>
    </div>
    <BoardsList
        v-for="board in boards.data"
        :key="board.id"
        :id="board.id"
        :name="board.name"
        :link="board.link_name"
        :teamScore="board.team_score"
        :teamScorePrevious="board.previous_score"
        :retrosCompleted="board.retros_completed" />
  </div>
  <div v-else class="max-w-xl mx-auto text-center">
    <div if="allowedToCreateBoard">
      <h2 class="text-2xl font-bold sm:text-3xl">
        Create a Board
      </h2>
      <p class="mx-auto mt-4 text-gray-600">
        You don't have any boards yet.
      </p>
      <router-link :to="{name:'BoardCreate'}" class="mt-4">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Create Board
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { PlusCircleIcon } from '@heroicons/vue/outline'

import store from '@/store'
import BoardsList from '@/components/BoardsList'

export default {
  name: "BoardList",
  components: {
    BoardsList,
    PlusCircleIcon
  },
  computed: {
    boards() {
      return store.state.boards
    },
  },

  setup() {
    const s = useStore()
    if (s.getters.allowedTo('board:list')) {
      store.dispatch("getBoards")
    }

    return {
      allowedToCreateBoard() {
        return s.getters.allowedTo('board:create')
      },
    }
  },
}
</script>