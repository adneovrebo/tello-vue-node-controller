import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    telloState: null,
    telloStateLastConnection:null
  },
  mutations: {
    setTelloState(state,{data: data}){
      state.telloState = data
    }
  },
  actions: {
  },
  modules: {
  }
})
