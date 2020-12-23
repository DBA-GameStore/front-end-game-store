<template>
  <hooper :settings="hooperSettings">
    <slide v-for="(g, index) in games" :key="index">
      <v-container>
        <v-card color="grey" height="400">
          <router-link :to="{ name: 'Game' }">
            <v-img @click="select(g)" :src="g.url" height="200" />
          </router-link>
        </v-card>
      </v-container>
    </slide>
  </hooper>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";

export default {
  props: ["games"],
  components: {
    Hooper,
    Slide,
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
  mounted() {
    console.log(this.games);
  },
};
</script>

<style scoped>
.img1 {
  height: 100%;
}
</style>
