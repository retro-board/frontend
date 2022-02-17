<template>
  <div v-if="boards.loading" class="flex justify-center">Loading...</div>
  <div v-else-if="boards.data.length">
    <BoardsList
        v-for="board in boards.data"
        :key="board.id"
        :id="board.id"
        :name="board.name"
        :teamScore="board.team_score"
        :teamScorePrevious="board.previous_score"
        :retrosCompleted="board.retros_completed" />
  </div>
</template>

<script>
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
    }
  },

  setup() {
    //store.dispatch("parseLoginData")
    store.dispatch("getBoards")
  },
}
</script>