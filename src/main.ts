import '@/assets/styles/main.css';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');
