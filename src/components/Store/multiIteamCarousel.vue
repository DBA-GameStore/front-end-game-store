<template>
  <hooper :settings="hooperSettings">
    <slide v-for="(g, index) in games" :key="index">
      <v-row justify="center" align="center" class="pa-0 ma-0" style="position:relative;left:-20px;">
        <v-col cols="10">
          <v-card color="white" elevation="0">
            <router-link :to="{ name: 'Game' }">
              <v-img @click="select(g)" :src="g.picture" />
            </router-link>
          </v-card>
        </v-col>
      </v-row>
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination,
  Navigation as HooperNavigation,
} from "hooper";

export default {
  props: ["games"],
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        centerMode: true,
        autoPlay: true,
        playSpeed: 5000,
        itemsToShow: 3,
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

<style scoped>
.img1 {
  height: 100%;
}
</style>
