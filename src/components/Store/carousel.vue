<template>
  <hooper :settings="hooperSettings" style="height: 400px">
    <slide v-for="(g, index) in games" :key="index">
      <router-link :to="{ name: 'Game' }" >
        <v-img @click="select(g)" :src="g.url" height="100%"> </v-img>
      </router-link>
    </slide>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
    <hooper-navigation slot="hooper-addons">
      <v-icon slot="hooper-next" color="white"> mdi-chevron-down</v-icon>
      <v-icon slot="hooper-prev" color="white"> mdi-chevron-up</v-icon>
    </hooper-navigation>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "App",
  props: ["games"],
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
  },
  data() {
    return {
      hooperSettings: {
        centerMode: true,
        autoPlay: true,
        playSpeed: 3500,
        itemsToShow: 1,
        vertical: true,
      },
    };
  },
  methods: {
    select(e) {
      console.log(this.games);
      this.$store.commit("gameCheckout", e);
    },
  },
};
</script>
