
export default {

  state: () => ({
    config:null,
    iswechat:false
  }),

  getters: {
    CONFIG: state => state.config,
    ISWECHAT:state => state.iswechat,
  },

  mutations: {
    CONFIG_DATA(state,payload) {
      state.config = payload
    },
    IS_WECHAT(state,payload) {
      state.iswechat = payload
    },
  },

  namespaced: true
}
