import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    storePageSelector: 0
  },
  getters: {
    getUser: state => {
      return state.user
    },
    getStoreSelector: state => {
      return state.storePageSelector
    }
  },
  mutations: {
    login(state,e){
      state.user = e
    },
    logout(state){
      state.user = null
    },
    storeCheckout(state,n){
      state.storePageSelector = n
    }
  },
  actions: {},
  modules: {}
});
