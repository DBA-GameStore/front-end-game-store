<template>
  <v-app>
    <appbar></appbar>

    <v-main style="height: 100vh; max-height: 100%">
      <!-- <v-btn @click="post">Post</v-btn> -->
      <!-- <v-btn @click="get">Get</v-btn> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import appbar from "@/components/Appbar/index.vue";
export default {
  name: "App",

  components: {
    appbar
  },

  data() {
    return {};
  },
  methods: {
    post() {
      this.axios
        .post("http://127.0.0.1/sqlproject/game", {
          name: "sab",
          tagid: "1"
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    get() {
      this.axios
        .get("http://127.0.0.1/sqlproject/game")
        .then(function(response) {
          console.log("getter: ",response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
};
</script>
