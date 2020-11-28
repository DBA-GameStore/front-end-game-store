<template>
  <v-app-bar
    absolute
    color="white"
    class="pa-0"
    elevate-on-scroll
    fixed
    dense
    app
    scroll-target="#scrolling-techniques-7"
  >
    <v-btn text to="/" color="white">
      <v-card-title class="secondary--text">Game Store</v-card-title>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn icon :to="{ name: 'Checkout' }">
      <v-icon>mdi-cart-outline</v-icon>
    </v-btn>
    <v-btn icon :to="{ name: 'Profile' }">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>