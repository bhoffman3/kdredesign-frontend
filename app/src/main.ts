import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
   faHouse,
   faUser,
} from '@fortawesome/free-solid-svg-icons'

 import {
   faFacebook,
   faInstagram,
   faLinkedin,
   faTwitter,
} from '@fortawesome/free-brands-svg-icons'

library.add(faHouse, faUser, faFacebook, faInstagram, faLinkedin, faTwitter)

const app = createApp(App)
   .component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
