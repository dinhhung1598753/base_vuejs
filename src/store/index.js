import { createLogger, createStore } from 'vuex';
import state from './app/state';
import getters from './app/getters';
import actions from './app/actions';
import mutations from './app/mutations';
import login from './modules/login';
import register from './modules/register';

const store = createStore({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  state,
  actions,
  getters,
  mutations,
  modules: {
    login,
    register,
  },
});

export default store;
