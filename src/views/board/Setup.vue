<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <!-- Error -->
    <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>

    <form @submit.prevent="createBoard" class="p-8 flex flex-col bg-light-grey rounded-md shadow-lg">
      <h1 class="text-3xl text-at-light-green mb-4">
        Board Setup
      </h1>
      <div class="flex flex-col mb-2">
        <label for="company_name" class="mb-1 text-sm text-at-light-green">How many columns</label>
        <input type="text" id="company_name" name="company_name" required class="p-2 text-green-500 focus:outline-none" v-model="companyName" placeholder="3" />
      </div>

      <div class="flex flex-col mb-2">
        <label for="first_team_name" class="mb-1 text-sm text-at-light-green">First Retro-Board Team Name</label>
        <input type="text" id="first_team_name" name="first_team_name" required class="p-2 text-green-500 focus:outline-none" v-model="firstTeamName" />
      </div>

      <button type="submit" class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-white hover:bg-white hover:text-at-light-green">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "BoardSetupView",
  components: {
  },
  setup() {
    return {}
  },
}
</script>
