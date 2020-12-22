import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    storePageSelector: 0
  },
  getters: {
    getStoreSelector: state => {
      return state.storePageSelector
    }
  },
  mutations: {
    storeCheckout(state,n){
      state.storePageSelector = n
    }
  },
  actions: {},
  modules: {}
});
