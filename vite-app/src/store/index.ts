import { createStore } from 'vuex'
import { isMobileFun } from '@/utils/common'

export default createStore({
  state: {
    collapsed: false,
    hasLogin: false,
    mobileShowSideBar: false,
    isMobile: isMobileFun()
  },
  mutations: {
    SET_COLLAPSED(state, collapsed) {
      state.collapsed = collapsed
    },
    SET_HASLOGIN(state, loginState) {
      state.hasLogin = loginState
      sessionStorage.setItem('hasLogin', +loginState + '')
    },
    SET_ISMOBILE(state, isMobile) {
      state.isMobile = isMobile
    },
    SET_MOBILESHOWSIDEBAR(state, mobileShowSideBar) {
      state.mobileShowSideBar = mobileShowSideBar
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
