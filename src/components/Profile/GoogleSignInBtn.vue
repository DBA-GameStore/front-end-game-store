<template>
  <GoogleLogin
    :params="params"
    :renderParams="renderParams"
    :onSuccess="onSuccess"
    :onFailure="onFailure"
  ></GoogleLogin>

  <!-- <GoogleLogin :params="params" :logoutButton="true">Logout</GoogleLogin> -->
</template>

<script>
import GoogleLogin from 'vue-google-login';
export default {
    components: {
        GoogleLogin
    },
    data() {
    return {
        params: {
            client_id: "784954252883-pa2ldt93uuctvt84f53nrepau4ullh0d.apps.googleusercontent.com"
        },
        // only needed if you want to render the button with the google ui
        renderParams: {
            width: 150,
            height: 50,
            longtitle: false
        }
    };
  },
  methods:{
    onSuccess(googleUser) {
        console.log(googleUser);

        // This only gets the user information: id, name, imageUrl and email
        console.log(googleUser.getBasicProfile());
    },
    onFailure(googleUser) {
        console.log(googleUser);

        // This only gets the user information: id, name, imageUrl and email
        console.log(googleUser.getBasicProfile());
    }
  }
};
</script>
