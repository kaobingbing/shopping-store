import request from '@/utils/request'

export const getProList = (obj) => {
  const { categoryId, goodsName, page } = obj
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/goods/list', {
    params: {
      categoryId,
      goodsName,
      page
    }
  })
}

export const getProDetail = (goodsId) => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/goods/detail', {
    params: {
      goodsId
    }
  })
}

export const getProComments = (goodsId, limit) => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}
