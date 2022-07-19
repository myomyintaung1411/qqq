
export default {

  state: () => ({
    config:null
  }),

  getters: {
    CONFIG: state => state.config,
  },

  mutations: {
    CONFIG_DATA(state,payload) {
      state.config = payload
    },
  },

  namespaced: true
}
