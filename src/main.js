import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import './assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faThumbsDown,
    faThumbsUp,
    faCheck,
} from '@fortawesome/free-solid-svg-icons'
import {
    faPlusSquare,
    faMinusSquare
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faThumbsDown,
    faThumbsUp,
    faCheck,
    faPlusSquare,
    faMinusSquare,
)

createApp(App)
    .use(router)
    .use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
