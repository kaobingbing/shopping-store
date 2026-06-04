import request from '@/utils/request'

export const getCategoryData = () => {
  return request.get('/index.php', {
    params: {
      s: '/api/category/list'
    }
  })
}
