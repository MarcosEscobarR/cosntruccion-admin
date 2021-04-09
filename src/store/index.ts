import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    constructionId: 0
  },
  mutations: {
    updateConstructionId (state, id) {
      state.constructionId = id
    }
  },
  actions: {
  },
  modules: {
  }
})
