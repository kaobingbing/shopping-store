import { getInfo, setInfo } from '@/utils/storage'

export default {
  namespaced: true,
  state () { // 数据
    return {
      userInfo: getInfo()
    }
  },
  mutations: { // 修改数据的方法
    setUserInfo (state, obj) {
      state.userInfo = obj
      setInfo(obj)
    }
  },
  actions: { // 异步操作
    logout (context) {
      context.commit('setUserInfo', {})
      // 跨模块操作
      context.commit('cart/setCartList', [], { root: true })
    }
  },
  getters: { // 基于state计算出来的属性

  }
}
