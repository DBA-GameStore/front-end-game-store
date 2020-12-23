import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import config from "./firebaseConfig.js";

import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);
firebase.initializeApp(config);
firebase.analytics();
// var ui = new firebaseui.auth.AuthUI(firebase.auth());

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
  created() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        store.commit("login", firebaseUser);
      } else {
        // store.commit("setLoading", false);
      }
    });
  }
}).$mount("#app");
