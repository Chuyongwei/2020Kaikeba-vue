import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from './kvuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter : 0
  },
  getters:{
    doubleCounter(state){
      return state.counter*2
    }
  },
  mutations: {
    add(state){
      console.log("Dsfa");
      // console.log(state.counter);
      state.counter++;
  
    },
  },
  actions: {
    add({commit}){
      setTimeout(()=>{
        commit('add')
      },1000)
    }
  },
  modules: {
  }
})
