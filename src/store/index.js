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
  },
  plugins: [
    createPersistedState({
      key: 'userInfo',  //儲存在 localStorage 的 key
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
  },
  mutations: {
    login(state, e) {
      if (e.email == "t107590017@ntut.org.tw") state.isAdmin = true;
      state.user = e;
    },
    logout(state) {
      state.user = null;
    },
    storeCheckout(state, n) {
      state.storePageSelector = n;
    },
  },
  actions: {},
  modules: {},
});
