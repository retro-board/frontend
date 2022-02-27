<template>
  <div class="relative h-11" v-if="allowedToCreateBoard">
    <div class="absolute top-1 right-1 bg-green-300 p-1">
      <router-link :to="{name:'BoardCreate'}">
        Create New Board <font-awesome-icon name="plus-square" :icon="['far', 'plus-square']" />
      </router-link>
    </div>
  </div>
  <div v-if="boards.loading" class="flex justify-center">Loading...</div>
  <div v-else-if="boards.data.length">
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
</template>

<script>
import { useStore } from 'vuex'

import store from '@/store'
import BoardsList from '@/components/BoardsList'

export default {
  name: "BoardList",
  components: {
    BoardsList,
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