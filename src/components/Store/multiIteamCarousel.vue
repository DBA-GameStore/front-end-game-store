<template>
  <hooper :settings="hooperSettings">
    <slide v-for="(g, index) in games" :key="index">
      <v-container>
        <v-card color="grey" height="400">
          <router-link :to="{ name: 'Game' }">
            <v-img @click="select(g)" :src="g.picture" height="200" />
          </router-link>
        </v-card>
      </v-container>
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
        playSpeed: 3500,
        itemsToShow: 2,
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
