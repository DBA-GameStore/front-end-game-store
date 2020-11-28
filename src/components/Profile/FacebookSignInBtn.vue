<template>
  <v-facebook-login
    app-id="389767259024821"
    :async-delay="500"
    @login="handleLogin"
    @logout="handleLogout"
  />
</template>

<script>
  import VFacebookLogin from 'vue-facebook-login-component'

  export default {
    components: {
      VFacebookLogin
    },
    data() {
        return {
            user: null
        }
    },
    methods: {
        handleLogin(e) {
            console.log(e);
        },
        handleLogout() {
            console.log("Logout");
        },
    }
  }
</script>