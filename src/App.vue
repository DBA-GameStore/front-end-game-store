<template>
  <v-app>
    <appbar></appbar>
    <v-content style="height: 100vh; max-height: 100%">
      <profile />
    </v-content>
    <v-content style="height: 100vh; max-height: 100%">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import appbar from "@/components/Appbar/index.vue"
import profile from "@/components/Profile/index.vue"
export default {
  name: "App",

  components: {
    appbar,
    profile
  },

data() {
    return {
    };
  },
};
</script>