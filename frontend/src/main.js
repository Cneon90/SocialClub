import { createApp } from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import router from './router/index'; // Импортируем роутер

const app = createApp(App);

app.use(Buefy);
app.use(router); // Используем созданный роутер
app.mount('#app');