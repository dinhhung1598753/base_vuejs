import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import Notifications from '@kyvg/vue3-notification';
import '@/scss/main.scss';
import i18n from './i18n';
import router from './router';

createApp(App).use(router).use(i18n).use(store).use(Notifications).mount('#app');
