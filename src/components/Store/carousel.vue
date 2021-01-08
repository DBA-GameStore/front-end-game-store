<template>
  <hooper :settings="hooperSettings" style="height: 400px">
    <slide v-for="(g, index) in games" :key="index">
      <router-link :to="{ name: 'Game' }">
        <v-row justify="center" align="center"> </v-row>
        <v-card width="100%" height="100%" elevation="0" >
          <v-row justify="center" align="center">
            <v-col cols="7">
              <v-img @click="select(g)" :src="g.picture" style="position:relative;top:40px;z-index:10"> </v-img>
              <v-img @click="select(g)" :src="g.picture" style="position:absolute;right:100px;top:40px;z-index:2;opacity:0.45"> </v-img>
              <v-img @click="select(g)" :src="g.picture" style="position:absolute;left:100px;bottom:50px;z-index:2;opacity:0.2"> </v-img>
            </v-col>
          </v-row>
        </v-card>
        <v-card-title>{{ g.name }}</v-card-title>
      </router-link>
    </slide>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
    <hooper-navigation slot="hooper-addons">
      <v-icon slot="hooper-next" color="black"> mdi-chevron-down</v-icon>
      <v-icon slot="hooper-prev" color="black"> mdi-chevron-up</v-icon>
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

  mounted() {},

  methods: {
    select(e) {
      console.log(this.games);
      this.$store.commit("gameCheckout", e);
    },
  },
};
</script>
