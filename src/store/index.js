import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{}
  },
  mutations: {
    login(value){
      this.state.user = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
