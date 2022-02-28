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
        <label for="team_name" class="mb-1 text-sm text-at-light-green">Team Name</label>
        <input type="text" id="team_name" name="team_name" required class="p-2 text-green-500 focus:outline-none" v-model="boardInfo.teamName" placeholder="Tester" />
      </div>
      <hr />

      <div class="flex flex-col mb-2">
        <Listbox v-model="boardInfo.columns">
          <ListboxLabel class="mb-1 text-sm text-at-light-green">Number of columns</ListboxLabel>
          <ListboxButton class="relative text-green-500 bg-white shadow-mg py-2 pl-3 pr-10 text-left ring-1 ring-black">
            {{boardInfo.columns}}
            <SelectorIcon class="absolute right-1 top-2.5 w-5 h-5" />
          </ListboxButton>
          <ListboxOptions class="bg-white rounded-md shadow-lg py-1 mt-1">
            <ListboxOption v-for="colNumber in 4" :key="colNumber" :value="colNumber" class="text-green-500 bg-white py-2 pl-10 cursor-pointer hover:bg-amber-300">{{colNumber}}</ListboxOption>
          </ListboxOptions>
        </Listbox>
      </div>

      <div class="flex flex-col mb-2" v-for="n in boardInfo.columns" :key="n">
        <label for="column-{{n}}-name" class="mb-1 text-sm text-at-light-green">Column {{n}} name</label>
        <input type="text" id="column-{{n}}-name" name="column-{{n}}-name" required class="p-2 text-green-500 focus:outline-none" v-model="boardInfo.columnNames[n].name" placeholder="{{boardInfo.columnNames[n].name}}" />
      </div>
      <hr />

      <div class="flex flex-col mb-2">
        <Listbox v-model="boardInfo.appreciate" @change="appreciateTrigger">
          <ListboxLabel class="mb-1 text-sm text-at-light-green">Appreciation Column</ListboxLabel>
          <ListboxButton class="relative text-green-500 bg-white shadow-mg py-2 pl-3 pr-10 text-left ring-1 ring-black">
            Yes
            <SelectorIcon class="absolute right-1 top-2.5 w-5 h-5" />
          </ListboxButton>
          <ListboxOptions class="bg-white rounded-md shadow-lg py-1 mt-1">
            <ListboxOption class="text-green-500 bg-white py-2 pl-10 cursor-pointer hover:bg-amber-300">Yes</ListboxOption>
            <ListboxOption class="text-green-500 bg-white py-2 pl-10 cursor-pointer hover:bg-amber-300">No</ListboxOption>
          </ListboxOptions>
        </Listbox>
      </div>
      <div class="flex flex-col mb-2" id="appreciateShow">
        <label for="appreciate_title" class="mb-1 text-sm text-at-light-green">Appreciation Column Title</label>
        <input type="text" id="appreciate_title" name="appreciate_title" required class="p-2 text-green-500 focus:outline-none" v-model="boardInfo.appreciate_title" placeholder="Appreciation" />
      </div>

      <button type="submit" class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-white hover:bg-white hover:text-at-light-green">Create</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  ListboxLabel,
} from '@headlessui/vue'
import {
  SelectorIcon
} from '@heroicons/vue/outline'

export default {
  name: "BoardCreateView",
  components: {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    ListboxLabel,
    SelectorIcon
  },
  setup() {
    const boardInfo = {
      teamName: "",
      columns: 3,
      appreciate: false,
      columnNames: [
        {
          name: "",
        },
        {
          name: "Good",
        },
        {
          name: "Bad",
        },
        {
          name: "Continue",
        },
        {
          name: "Other",
        }
      ],
    }

    const errorMsg = ref(null)

    const createBoard = () => {

    }

    const appreciateTrigger = (ev) => {
      if (ev.target.checked) {
        document.getElementById("appreciateShow").style.display = "block"
      } else {
        document.getElementById("appreciateShow").style.display = "none"
      }
    }

    return {
      createBoard,
      boardInfo,
      errorMsg,
      appreciateTrigger,
    }
  },
}
</script>
