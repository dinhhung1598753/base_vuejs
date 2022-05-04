import { request } from '@/utils/request';

export default {
  getUserInfo: () => {
    return request.request({
      method: 'get',
      url: '/users',
    });
  },
};
