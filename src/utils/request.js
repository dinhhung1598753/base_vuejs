import router from '@/router';
import axios from 'axios';
import { get } from 'lodash';

const requestConfig = {
  baseURL: import.meta.env.VITE_ENDPOINT,
  withCredentials: false,
  timeout: 60000,
};

const request = axios.create({ ...requestConfig });

request.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') || null;

  return {
    ...config,
    headers: {
      ...config.headers,
      authorization: token,
    },
  };
});

request.interceptors.response.use(
  (response) => response.data || response,
  (error) => handleRequestError(error),
);

const requestPublic = axios.create({ ...requestConfig });

requestPublic.interceptors.request.use((config) => ({
  ...config,
  headers: {
    ...config.headers,
  },
}));

requestPublic.interceptors.response.use(
  (response) => response.data || response,
  (error) => handleRequestError(error),
);

const handleRequestError = (error) => {
  if (error.response) {
    const status = get(error, 'response.status', null);
    const method = get(error, 'response.config.method', '').toLowerCase();

    if (status === 404 && method === 'get') {
      router.push({ name: 'NotFound' });
    }

    return Promise.reject(error.response);
  }

  if (error.request) return Promise.reject(error.request);

  return Promise.reject(error.message);
};

export { request, requestPublic };
