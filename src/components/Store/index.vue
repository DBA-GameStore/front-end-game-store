<template>
  <v-app>
    <v-card elevation="0">
      <v-container>
        <v-row class="pa-0 ma-0">
          <storeToolbar />
        </v-row>
      </v-container>
      <v-container>
        <v-row justify="center" class="pa-0 ma-0">
          <v-card-text>精選推薦</v-card-text>
          <storeCarousel />
        </v-row>
      </v-container>

      <v-container v-for="i in titles" :key="i">
        <v-card-text>{{ i }}</v-card-text>
        <v-row justify="center" class="pa-0 ma-0">
          <storeCarouselMultis />
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
import storeToolbar from "@/components/Store/toolbar.vue";
import storeCarousel from "@/components/Store/carousel.vue";
import storeCarouselMultis from "@/components/Store/multiIteamCarousel.vue";
export default {
  components: {
    storeToolbar,
    storeCarousel,
    storeCarouselMultis
  },
  data() {
    return {
      titles: ["熱門遊戲", "特別優惠", "社群推薦"]
    };
  },
  watch: {},
  methods: {}
};
</script>

<style></style>
