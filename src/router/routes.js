import HomePage from '@/pages/home/index.vue';
import NotFoundPage from '@/pages/404/index.vue';
import ServerErrorPage from '@/pages/500/index.vue';
import LoginPage from '@/pages/login/index.vue';
import RegisterPage from '@/pages/register/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFoundPage,
  },
  {
    path: '/500',
    name: 'ServerError',
    component: ServerErrorPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
];

export default routes;
