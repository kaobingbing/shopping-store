import request from '@/utils/request'

export const checkOrder = (mode, obj) => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/checkout/order', {
    params: {
      mode, // cart,buyNow
      delivery: 10,
      couponId: 0,
      isUsePoints: 0,
      ...obj
    }
  })
}

// 提交订单
export const submitOrder = (mode, params) => {
  return request.post('http://smart-shop.itheima.net/index.php?s=/api/checkout/submit', {
    mode,
    delivery: 10, // 物流方式  配送方式 (10快递配送 20门店自提)
    couponId: 0, // 优惠券 id
    payType: 10, // 余额支付
    isUsePoints: 0, // 是否使用积分
    ...params
  })
}

export const addAddress = (obj) => {
  return request.post('http://smart-shop.itheima.net/index.php?s=/api/address/add', {
    ...obj
  })
}
// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/order/list', {
    params: {
      dataType,
      page
    }
  })
}
