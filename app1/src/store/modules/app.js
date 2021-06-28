const app = {
  state: {
    name: ''
  },
  mutations: {
    SET_GLOBAL_STATE: (state, payload) => {
      state.name = payload.name
    },
  },
  actions: {
    // ToggleSideBar: ({ commit }) => {
    //   commit('TOGGLE_SIDEBAR')
    // },
  }
}

export default app
