import request from '@/utils/request'

export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('http://smart-shop.itheima.net/index.php?s=/api/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

export const getCartList = () => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/cart/list')
}

export const changeCount = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('http://smart-shop.itheima.net/index.php?s=/api/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

export const delSelect = (cartIds) => {
  return request.post('http://smart-shop.itheima.net/index.php?s=/api/cart/clear', {
    cartIds
  })
}
