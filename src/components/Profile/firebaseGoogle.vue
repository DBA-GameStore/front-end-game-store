<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>
<script>
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import config from "@/firebaseConfig.js";
import store from "../../store/index";

export default {
  name: "auth",
  mounted() {
    store.commit("storeCheckout", 0);
    var uiConfig = {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccess: function(currentUser, credential, redirectUrl) {
          const userId = currentUser.uid;
          // Manually redirect.
          window.location.assign("/");
          // Do not automatically redirect.
          return false;
        },
        // signInFailure callback must be provided to handle merge conflicts which
        // occur when an existing credential is linked to an anonymous user.
        signInFailure: function(error) {
          // For merge conflicts, the error.code will be
          // 'firebaseui/anonymous-upgrade-merge-conflict'.
          if (error.code != "firebaseui/anonymous-upgrade-merge-conflict") {
            return Promise.resolve();
          }
          // The credential the user tried to sign in with.
          var cred = error.credential;
          // Copy data from anonymous user to permanent user and delete anonymous
          // user.
          // ...
          // Finish sign-in after data is copied.
          return firebase.auth().signInWithCredential(cred);
        },
      },
    };
    var ui;
    ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  },
};
</script>
