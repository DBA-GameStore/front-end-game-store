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
            client_id: "xxxxxx"
        },
        // only needed if you want to render the button with the google ui
        renderParams: {
            width: 250,
            height: 50,
            longtitle: true
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
