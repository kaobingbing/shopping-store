import request from '@/utils/request'

export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/index.php', {
    goodsId,
    goodsNum,
    goodsSkuId
  }, {
    params: {
      s: '/api/cart/add'
    }
  })
}

export const getCartList = () => {
  return request.get('/index.php', {
    params: {
      s: '/api/cart/list'
    }
  })
}

export const changeCount = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/index.php', {
    goodsId,
    goodsNum,
    goodsSkuId
  }, {
    params: {
      s: '/api/cart/update'
    }
  })
}

export const delSelect = (cartIds) => {
  return request.post('/index.php', {
    cartIds
  }, {
    params: {
      s: '/api/cart/clear'
    }
  })
}
