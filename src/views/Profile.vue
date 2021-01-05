<template>
  <v-card class="Profile" elevation="0" height="50%">
    <v-layout align-center justify-center column fill-height>
      <v-row justify="center">
        <v-card-title style="position: relative; top: 20px"
          >Game Store</v-card-title
        >
      </v-row>
      <v-row v-if="checktLogin != null" justify="center">
        <v-btn @click="logout" elevation="0" color="white" text>
          <span class="blue--text">Log out</span>
        </v-btn>
      </v-row>
      <firebaseSingn v-else />
    </v-layout>
  </v-card>
</template>

<script>
import firebaseSingn from "@/components/Profile/firebaseGoogle.vue";
// import googleSignInBtn from "@/components/Profile/GoogleSignInBtn.vue";
// import facebookSignInBtn from "@/components/Profile/FacebookSignInBtn.vue";
import { signout } from "@/APIs/signout.js";

export default {
  name: "Home",
  components: {
    firebaseSingn,
    // googleSignInBtn,
    // facebookSignInBtn,
  },
  computed: {
    checktLogin: {
      get() {
        return this.$store.getters.getUser;
      },
    },
    checkAdmin: {
      get() {
        return this.$store.getters.getAdmin;
      },
    },
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      signout();
    },
  },
};
</script>
