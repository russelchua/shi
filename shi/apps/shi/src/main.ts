// Styles
import './styles.scss';
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import './assets/styles/export.scss'

// PrimeVue
import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

// Vue
import router from './app/Router';
import { createApp } from 'vue';
import App from './app/App.vue';

// Setup
// -----------------------------------------------------------------------------
const app = createApp(App);

// Use Lib
app.use(router);
app.use(PrimeVue);

// Component Name
app.component('Dropdown', Dropdown);
app.component('Password', Password);
app.component('PButton', Button);
app.component('Divider', Divider);

// Mount
app.mount('#root');
