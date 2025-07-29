import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faUser, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub ,faTwitter,faLinkedin,faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import './style.css'
import App from './App.vue'
import router from './routes'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub,faTwitter,faLinkedin,faInstagram,faWhatsapp)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')










