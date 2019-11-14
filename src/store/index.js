import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    mutationAddCount(state, n = 0) {
      return (
        state.count += n
      )
    },
    mutationReduceCount(state, n = 0) {
      return (
        state.count -= n
      )
    }
  },
  actions: {
    actionAddCount(context, n = 0) {
      console.log(context);
      return context.commit('mutationAddCount', n)
    }
  },
  getters: {
    getterCount(state) {
      return (state.count * 2)
    }
  },
  modules: {
  }
})
