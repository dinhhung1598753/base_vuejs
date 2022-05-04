import { requestPublic } from '@/utils/request';

export default {
  login: (data) => {
    return requestPublic.request({
      method: 'post',
      url: '/login',
      body: data,
    });
  },
};
