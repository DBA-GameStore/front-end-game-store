<template>
  <v-app>
    <v-card elevation="0">
      <v-container>
        <v-row class="pa-0 ma-0">
          <storeToolbar @checkout-page="checkout" />
        </v-row>
      </v-container>

      <div v-if="selector == 3">
        <ageRating />
      </div>
      <div v-if="selector == 2">
        <eventPage />
      </div>
      <div v-if="selector == 1">
        <tagSearch />
      </div>
      <div v-else-if="selector == 0">
        <v-container>
          <v-row justify="center" class="pa-0 ma-0">
            <v-card-text>精選推薦</v-card-text>
            <storeCarousel :games="top" />
          </v-row>
        </v-container>

        <v-container v-for="(t, index) in titles" :key="index">
          <v-card-text>{{ t.tag }}</v-card-text>
          <v-row justify="center" class="pa-0 ma-0">
            <storeCarouselMultis :games="t.games" />
          </v-row>
        </v-container>
      </div>
    </v-card>
  </v-app>
</template>

<script>
import storeToolbar from "@/components/Store/toolbar.vue";
import storeCarousel from "@/components/Store/carousel.vue";
import storeCarouselMultis from "@/components/Store/multiIteamCarousel.vue";
import tagSearch from "@/components/Store/tagSearch.vue";
import eventPage from "@/components/Store/event.vue"
import ageRating from "@/components/Store/ageRating.vue";

export default {
  components: {
    storeToolbar,
    storeCarousel,
    storeCarouselMultis,
    tagSearch,
    eventPage,
    ageRating,
  },
  data() {
    return {
      titles: [
        {
          tag: "熱門遊戲",
          games: [
            {
              url: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
              name: "Hollow Knight",
              describe: "Metroidvania Game",
              images: [
                "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
                "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
              ],
            },
          ],
        },
        {
          tag: "特別優惠",
          games: [
            {
              url: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
              name: "Hollow Knight",
              describe: "Metroidvania Game",
              images: [
                "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
                "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
              ],
            },
          ],
        },
        {
          tag: "社群推薦",
          games: [
            {
              url: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
              name: "Hollow Knight",
              describe: "Metroidvania Game",
              images: [
                "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
                "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
              ],
            },
          ],
        },
      ],
      top: [
        {
          url: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          name: "Hollow Knight",
          describe: "Metroidvania Game",
          images: [
            "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
            "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          ],
        },
      ],
    };
  },
  watch: {},
  methods: {
    checkout(n) {
      this.$store.commit("storeCheckout", n);
    },
  },
  mounted() {
    this.selector();
  },
  computed: {
    selector: {
      get() {
        return this.$store.getters.getStoreSelector;
      },
    },
  },
};
</script>

<style></style>
