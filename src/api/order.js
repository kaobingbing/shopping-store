import request from '@/utils/request'

export const checkOrder = (mode, obj) => {
  return request.get('/index.php', {
    params: {
      s: '/api/checkout/order',
      mode,
      delivery: 10,
      couponId: 0,
      isUsePoints: 0,
      ...obj
    }
  })
}

export const submitOrder = (mode, params) => {
  return request.post('/index.php', {
    mode,
    delivery: 10,
    couponId: 0,
    payType: 10,
    isUsePoints: 0,
    ...params
  }, {
    params: {
      s: '/api/checkout/submit'
    }
  })
}

export const addAddress = (obj) => {
  return request.post('/index.php', {
    ...obj
  }, {
    params: {
      s: '/api/address/add'
    }
  })
}

export const getMyOrderList = (dataType, page) => {
  return request.get('/index.php', {
    params: {
      s: '/api/order/list',
      dataType,
      page
    }
  })
}
