<template>
  <v-app>
    <v-main>
      <checkout />
      <!-- <router-view></router-view> -->
    </v-main>
  </v-app>
</template>

<script>
import checkout from "@/views/Checkout.vue"
export default {
  name: "App",

  components: {
    checkout
  },

data() {
    return {
    };
  },
};
</script>
