<template>
  <v-app-bar
    absolute
    class="pa-0"
    elevate-on-scroll
    fixed
    dense
    app
    dark
    scroll-target="#scrolling-techniques-7"
  >
    <v-container>
      <v-row>
        <v-card-title class="secondary--text">
          <v-btn class="doNotActive" id="no-background-hover" text to="/"
            >Game Store</v-btn
          >
        </v-card-title>

        <v-spacer></v-spacer>
        <v-card-title class="secondary--text">
          <v-btn icon :to="{ name: 'Checkout' }" id="no-background-hover" v-bind:color="type==='guest' ? 'secondary' : 'primary'">
            <v-icon>mdi-cart-outline</v-icon>
          </v-btn>
          <v-btn icon :to="{ name: 'Profile' }" id="no-background-hover">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </v-card-title>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

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