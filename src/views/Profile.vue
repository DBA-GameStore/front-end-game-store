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
        <v-row align="center">
          <v-item-group
            v-model="window"
            class="shrink mr-6"
            mandatory
            tag="v-flex"
          >
            <v-item v-for="n in length" :key="n" v-slot="{ active, toggle }">
              <div>
                <v-btn :input-value="active" icon @click="toggle">
                  <v-icon>mdi-record</v-icon>
                </v-btn>
              </div>
            </v-item>
          </v-item-group>

          <v-col>
            <v-window v-model="window" class="elevation-1" vertical>
              <v-window-item v-for="n in length" :key="n">
                <v-card flat>
                  <v-card-text>
                    <v-row class="mb-4" align="center">
                      <v-avatar color="grey" class="mr-4"></v-avatar>
                      <strong class="title">Title {{ n }}</strong>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>mdi-account</v-icon>
                      </v-btn>
                    </v-row>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </v-card-text>
                </v-card>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
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
  data() {
    return {
      length: 3,
      window: 0,
    };
  },
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
