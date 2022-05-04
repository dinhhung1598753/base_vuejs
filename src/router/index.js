import { createRouter, createWebHistory } from 'vue-router';
import middleware from './middleware';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => middleware(to, from, next));

export default router;
