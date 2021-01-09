<template>
  <v-container>
    <v-row
      v-if="checktLogin != null"
      justify="center"
      style="position:relative;top:-25px"
    >
      <v-col cols="9">
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
              <v-window-item :value="0">
                <v-card flat>
                  <v-card-text>
                    <v-row class="mb-4" align="center">
                      <v-toolbar elevation="0">
                        <v-card-title>
                          Game Store
                        </v-card-title>
                        <v-spacer />
                        <v-btn @click="logout" elevation="0" color="white" text>
                          <span class="blue--text">Log out</span>
                        </v-btn>
                      </v-toolbar>
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
                  </v-card-text>
                </v-card>
              </v-window-item>
              <!-- <v-window-item :value="1">
                <v-row class="mb-4" align="center">
                  <v-toolbar elevation="0">
                    <v-card-title>
                      Game Store
                    </v-card-title>
                    <v-spacer />
                    <v-btn @click="logout" elevation="0" color="white" text>
                      <span class="blue--text">Log out</span>
                    </v-btn>
                  </v-toolbar>
                </v-row>
                <v-row>
                  <v-col cols="1"> </v-col>
                  <v-col>
                    <v-card-title>
                      <u>
                        現有優惠券
                      </u>
                    </v-card-title>
                  </v-col>
                </v-row>
                <v-row v-for="(item, index) in coupons" :key="index">
                  <v-col cols="1"></v-col>
                  <v-col cols="1">
                    <v-divider
                      class="mx-4"
                      vertical
                      style="display: inline"
                    ></v-divider>
                  </v-col>
                  <v-col cols="7">
                    <h4>{{ item }}</h4>
                  </v-col>
                  <v-spacer />
                  <v-col cols="2" style="left: -10px">
                    <h4>x1</h4>
                  </v-col>
                </v-row>
                <br />
                <br />
              </v-window-item> -->
              <!-- <v-window-item :value="2">
                <v-row class="mb-4" align="center">
                  <v-toolbar elevation="0">
                    <v-card-title>
                      Game Store
                    </v-card-title>
                    <v-icon>mdi-account</v-icon>
                    <v-spacer />
                    <v-btn @click="logout" elevation="0" color="white" text>
                      <span class="blue--text">Log out</span>
                    </v-btn>
                  </v-toolbar>
                </v-row>
              </v-window-item> -->
            </v-window>
          </v-col>
        </v-row>
      </v-col>
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
      length: 1,
      window: 0,
      coupons: ["滿千折百", "買一送醫"],
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
