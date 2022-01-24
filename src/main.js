import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faThumbsDown,
    faThumbsUp,
    faCheck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faThumbsDown,
    faThumbsUp,
    faCheck,
)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
