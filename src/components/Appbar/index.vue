<template>
  <v-app-bar
    absolute
    class="pa-0"
    elevate-on-scroll
    fixed
    app
    color="transparent"
    scroll-target="#scrolling-techniques-7"
  >
    <v-container>
      <v-row>
        <v-card-title>
          <v-btn
            class="doNotActive"
            id="no-background-hover"
            icon
            @click="checkout"
            to="/"
            ><v-icon> mdi-gamepad-circle-outline</v-icon></v-btn
          >
        </v-card-title>

        <v-spacer></v-spacer>
        <!-- v-bind:color="type === 'guest' ? 'secondary' : 'primary'" -->
        <v-card-title class="secondary--text">
          <v-btn icon :to="{ name: 'Checkout' }" id="no-background-hover">
            <v-icon>mdi-cart-outline</v-icon>
          </v-btn>
          <v-btn icon :to="{ name: 'Profile' }" id="no-background-hover">
            <v-icon>mdi-account</v-icon>
          </v-btn>
          <v-btn
            v-if="checkAdmin && checktLogin"
            icon
            :to="{ name: 'UploadGame' }"
            id="no-background-hover"
          >
            <v-icon>mdi-upload</v-icon>
          </v-btn>
        </v-card-title>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    checkout() {
      this.$store.commit("storeCheckout", 0);
    },
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
};
</script>

<style>
.doNotActive.v-btn--active::before {
  opacity: 0;
}
.v-btn::before {
  background-color: transparent;
}
</style>

<style lang="scss">
#no-background-hover::before {
  background-color: transparent !important;
}
</style>
