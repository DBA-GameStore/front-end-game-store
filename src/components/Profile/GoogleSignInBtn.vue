<template>
  <div>
    <GoogleLogin
      v-if="!isLogined"
      :params="params"
      :renderParams="renderParams"
      :onSuccess="onSuccess"
      :onFailure="onFailure"
      :logoutButton="isLogined"
      :onCurrentUser="getCurernt"
    ></GoogleLogin>
    <v-btn v-else text @click="logout">
      <GoogleLogin :params="params" :logoutButton="true">
        Logout
      </GoogleLogin>
    </v-btn>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
export default {
  components: {
    GoogleLogin
  },
  data() {
    return {
      isLogined: false,
      params: {
        client_id:
          "784954252883-pa2ldt93uuctvt84f53nrepau4ullh0d.apps.googleusercontent.com"
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 236.16,
        height: 42,
        longtitle: true
      }
    };
  },
  methods: {
    getCurernt(googleUser) {
      console.log(googleUser);
      if (!googleUser) this.isLogined = false;
    },
    onSuccess(googleUser) {
      this.isLogined = true;
      // This only gets the user information: id, name, imageUrl and email
      console.log(googleUser.getBasicProfile());
    },
    onFailure(googleUser) {
      console.log(googleUser);

      // This only gets the user information: id, name, imageUrl and email
      console.log(googleUser.getBasicProfile());
    },
    logout() {
      console.log(this.isLogined);
      this.isLogined = false;
    }
  }
};
</script>
