import request from '@/utils/request'

export const getAddressList = () => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/address/list')
}
