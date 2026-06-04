import request from '@/utils/request'

export const getProList = (obj) => {
  const { categoryId, goodsName, page } = obj
  return request.get('/index.php', {
    params: {
      s: '/api/goods/list',
      categoryId,
      goodsName,
      page
    }
  })
}

export const getProDetail = (goodsId) => {
  return request.get('/index.php', {
    params: {
      s: '/api/goods/detail',
      goodsId
    }
  })
}

export const getProComments = (goodsId, limit) => {
  return request.get('/index.php', {
    params: {
      s: '/api/comment/listRows',
      goodsId,
      limit
    }
  })
}
