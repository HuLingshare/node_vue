import { createStore } from 'vuex'

export default createStore({
  state: {
    collapsed: false,
    hasLogin: false
  },
  mutations: {
    SET_COLLAPSED(state, collapsed) {
      state.collapsed = collapsed
    },
    SET_HASLOGIN(state, loginState) {
      state.hasLogin = loginState
      sessionStorage.setItem('hasLogin', +loginState + '')
    }
  },
  actions: {
    handlerSetCollapsed(context, collapsed:boolean) {
      context.commit('SET_COLLAPSED', collapsed)
    },
    handlerSetHasLogin(context, loginState:boolean) {
      context.commit('SET_HASLOGIN', loginState)
    }
  },
  modules: {
  }
})
