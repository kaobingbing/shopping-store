import request from '@/utils/request'

export const getHomeData = () => {
  return request.get('/index.php', {
    params: {
      s: '/api/page/detail',
      pageId: 0
    }
  })
}
