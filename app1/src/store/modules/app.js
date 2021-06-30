const app = {
  state: {
    globalState: ''
  },
  mutations: {
    SET_GLOBAL_STATE: (state, payload) => {
      state.globalState = payload
    },
  },
  actions: {
    // ToggleSideBar: ({ commit }) => {
    //   commit('TOGGLE_SIDEBAR')
    // },
  }
}

export default app
