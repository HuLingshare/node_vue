interface r {
  path: string;
  name: string;
  closable?: boolean;
}
const tabs = {
  state: {
    curPage: '', // 当前路由完整路径
    cachePages: ['Home@/home'], // 元素为路由名称+ @ + 路由完整地址的拼接字符串
  },
  getters: {
    cachePagesList(state):r[] {
      let arr = state.cachePages
      arr = arr.map(ele => {
        const a = ele.split('@')
        return {
          name: a[0],
          path: a[1],
          closable: a[0] !== 'Home'
        }
      })
      return arr
    },
    curPageKey(state, getters):number {
      const arr = getters.cachePagesList
      const key = arr.findIndex(ele => ele.path === state.curPage)
      return key
    },
    curPageName(state, getters):string {
      const arr = getters.cachePagesList
      const key = getters.curPageKey
      return arr[key].name
    }
  },
  mutations: {
    SET_CACHEPAGES(state, router:r) {
      const cachePages = router.name + '@' + router.path
      let s = new Set(state.cachePages)
      s.add(cachePages)
      state.cachePages = [...s]
    },
    SET_CACHEPAGES_DEL(state, index:number) {
      state.cachePages.splice(index, 1)
    },
    SET_CURPAGE(state, path:string) {
      state.curPage = path
    },
    SET_CACHEPAGES_RESET(state) {
      state.curPage = '/home'
      state.cachePages = ['Home@/home']
    },
    SET_CACHEPAGES_DELOTHERS(state, index:number) {
      const arr = state.cachePages.filter((ele, i) => {
        if (i === index) {
          return true
        } else if ( i === 0 ) {
          return true
        }
      })
      state.cachePages = arr
    },
    SET_CACHEPAGES_DELLEFT(state,  index:number) {
      if (index === 0 || index === 1) { return }
      state.cachePages.splice(1, index-1)
    },
    SET_CACHEPAGES_DELRIGHT(state,  index:number) {
      const arr = state.cachePages.splice(0, index + 1)
      state.cachePages = arr
    }
  },
  actions: {}
}

export default tabs