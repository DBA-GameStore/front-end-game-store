<template>
  <v-card class="Profile" elevation="0" height="50%">
    <v-layout align-center justify-center column fill-height>
      <v-row justify="center">
        <v-card-title style="position: relative; top: 20px"
          >Game Store</v-card-title
        >
      </v-row>
      <v-row justify="center" align="center">
        <v-layout justify-space-around column align-center fill-height>
          <googleSignInBtn class="elevation-0" />
          <facebookSignInBtn style="position: relative; top: 10px" />
        </v-layout>
      </v-row>
    </v-layout>
  </v-card>
</template>

<script>
import googleSignInBtn from "@/components/Profile/GoogleSignInBtn.vue";
import facebookSignInBtn from "@/components/Profile/FacebookSignInBtn.vue";

export default {
  name: "Home",
  components: {
    googleSignInBtn,
    facebookSignInBtn
  }
};
</script>
