<template>
  <v-container>
    <v-row justify="center">
      <v-card-title>
        Game Store
      </v-card-title>
    </v-row>
    <v-row
      v-if="checktLogin != null"
      justify="center"
      style="position:relative;top:-25px"
    >
      <v-col cols="2"></v-col>
      <v-col cols="6">
        <v-toolbar elevation="0">
          <v-spacer />
          <v-btn @click="logout" elevation="0" color="white" text>
            <span class="blue--text">Log out</span>
          </v-btn>
          <v-spacer />
        </v-toolbar>
        <h2 class="text-center">
          <u>個人檔案</u>
        </h2>
        <br />
        <v-form>
          <v-text-field
            outlined
            label="信箱"
            disabled
            :value="checktLogin.email"
          >
          </v-text-field>
          <v-text-field
            outlined
            label="姓名"
            disabled
            :value="checktLogin.displayName"
          ></v-text-field>
          <v-text-field outlined label="地址一"></v-text-field>
          <v-text-field outlined label="地址二"></v-text-field>
          <v-text-field outlined label="國家"></v-text-field>
          <v-text-field outlined label="城市"></v-text-field>
          <v-text-field outlined label="Zip"></v-text-field>
          <v-text-field outlined label="聯絡電話"></v-text-field>
          <v-toolbar elevation="0">
            <v-spacer />
            <v-btn text>
              Save
            </v-btn>
          </v-toolbar>
        </v-form>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <v-row v-else justify="center">
      <firebaseSingn />
    </v-row>
  </v-container>
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
  mounted() {},
  methods: {
    logout() {
      this.$store.commit("logout");
      signout();
    },
  },
};
</script>

<style>
.v-label.theme--light {
  color: black !important;
}
</style>
