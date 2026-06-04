import request from '@/utils/request'

export const getAddressList = () => {
  return request.get('/index.php', {
    params: {
      s: '/api/address/list'
    }
  })
}
