import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    isAdmin: false,
    storePageSelector: 0,
    gameSelector: null,
  },
  plugins: [
    createPersistedState({
      key: "m$$$(@asopfjwoqpfjw1o41-0249-12je921j@pqjfopwqjfopjfopwqjf",
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
  getters: {
    getAdmin: (state) => {
      return state.isAdmin;
    },
    getUser: (state) => {
      return state.user;
    },
    getStoreSelector: (state) => {
      return state.storePageSelector;
    },
    getGameSelector: (state) => {
      return state.gameSelector;
    },
    getShoppingCart: (state) => {
      return state.shoppingCart;
    },
  },
  mutations: {
    login(state, e) {
      if (e.email == "t107590017@ntut.org.tw") {
        state.isAdmin = true;
      } else {
        state.isAdmin = false;
      }
      state.user = e;
    },
    logout(state) {
      state.user = null;
    },
    storeCheckout(state, n) {
      state.storePageSelector = n;
    },
    gameCheckout(state, e) {
      state.gameSelector = e;
    }
  },
  actions: {},
  modules: {},
});
