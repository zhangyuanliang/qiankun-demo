const app = {
  state: {
    commonData: {

    }
  },
  mutations: {
    SET_COMMON_DATA: (state, payload) => {
      state.commonData = payload
    },
  },
  actions: {
    // ToggleSideBar: ({ commit }) => {
    //   commit('TOGGLE_SIDEBAR')
    // },
  }
}

export default app
