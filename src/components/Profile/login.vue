<template>
  <v-card class="Profile" elevation="1">
    <v-row justify="center">
      <v-card-title>Game Store</v-card-title>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <v-divider />
      </v-col>
    </v-row>
    <v-row justify="center">
      <googleSignInBtn class="elevation-0" />
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <v-divider />
      </v-col>
    </v-row>
    <v-row justify="center">
      <facebookSignInBtn />
    </v-row>
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
