import './bootstrap';
import '../css/app.css';
import { createApp } from 'vue';

// Main App Component
import App from './App.vue';

// Pages Components
import RepairingPage from './pages/RepairingPage.vue';
import RegisterPage from './components/sections/Register.vue';
import ProfilePage from './pages/ProfilePage.vue';

// Font Awesome setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret);

// Create Vue application
const app = createApp(App);

// Register global components
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('RepairingPage', RepairingPage);
app.component('RegisterPage', RegisterPage);
app.component('ProfilePage', ProfilePage);

// Mount the app
app.mount('#app');