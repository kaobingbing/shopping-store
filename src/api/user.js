import request from '@/utils/request'

export const getUserInfoDetail = () => {
  return request.get('/index.php', {
    params: {
      s: '/api/user/info'
    }
  })
}
