import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';
createApp(App).use(router).use(bootstrap).mount('#app');
