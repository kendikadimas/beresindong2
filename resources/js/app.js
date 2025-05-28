import './bootstrap';
import { createApp } from 'vue';
import AppComponent from './components/AppComponent.vue'; // Perhatikan pathnya
import RepairingPage from './pages/RepairingPage.vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

const app = createApp({});

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('AppComponent', AppComponent); // Daftarkan komponen global jika ingin menggunakannya di Blade
app.component('RepairingPage', RepairingPage);

app.mount('#app');