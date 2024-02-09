import '@fontsource/montserrat'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import AppLoader from './components/AppLoader.vue'

/* Importo la libreria generica di Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'

/* Importo il componente di Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Importo le icone che voglio usare di Font Awesome */
import { faStar as fasStar, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'


/* Icone da caricare */
library.add(fasStar, faSpinner);
library.add(farStar);

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon);
app.component('AppLoader', AppLoader);

app.mount('#app')
