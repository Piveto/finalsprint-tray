import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'vue-tour/dist/vue-tour.css';

const app = createApp(App);
app.use(router);

app.mount('#app');
