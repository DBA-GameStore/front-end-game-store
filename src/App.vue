<template>
  <v-app>
    <appbar></appbar>
    <v-main style="height: 100vh; max-height: 100%">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import appbar from "@/components/Appbar/index.vue"
export default {
  name: "App",

  components: {
    appbar,
  },

data() {
    return {
    };
  },
};
</script>