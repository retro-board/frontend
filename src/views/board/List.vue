<template>
  <div></div>
</template>

<script>
import axios from 'axios';

export default {
  name: "BoardList",
  components: {},
  setup() {
    return {
      boards: [],
      loading: true,
      error: null,
      fetchBoards() {
        this.loading = true;
        this.error = null;
        axios
          .get("https://api.retro-board.io/boards", {
            params: {
              userId: this.$store.state.user.id
            }
          })
          .then(response => {
            this.boards = response.data;
            this.loading = false;
          })
          .catch(error => {
            this.error = error;
            this.loading = false;
          });
      }
    };
  },
}
</script>