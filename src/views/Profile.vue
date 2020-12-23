<template>
  <v-card class="Profile" elevation="0" height="50%">
    <v-layout align-center justify-center column fill-height>
      <v-row justify="center">
        <v-card-title style="position: relative; top: 20px"
          >Game Store</v-card-title
        >
      </v-row>
      <div v-if="checktLogin != null">
        <v-btn @click="logout" elevation="0" color="white" text>
          <span class="black--text">Log out</span>
        </v-btn>
      </div>
      <firebaseSingn v-else />
      <v-row justify="center" align="center">
        <v-layout justify-space-around column align-center fill-height>
          <!-- <googleSignInBtn class="elevation-0" />
          <facebookSignInBtn style="position: relative; top: 10px" /> -->
        </v-layout>
      </v-row>
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
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      signout();
    },
  },
};
</script>
