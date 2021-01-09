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
            <storeCarousel :games="games" />
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
import eventPage from "@/components/Store/event.vue";
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
      games: [],
      // titles: [
      //   {
      //     tag: "熱門遊戲",
      //     games: [
      //       {
      //         url: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      //         name: "Hollow Knight",
      //         describe: "Metroidvania Game",
      //         images: [
      //           "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      //           "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     tag: "特別優惠",
      //     games: [
      //       {
      //         url: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      //         name: "Hollow Knight",
      //         describe: "Metroidvania Game",
      //         images: [
      //           "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      //           "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     tag: "社群推薦",
      //     games: [
      //       {
      //         url: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      //         name: "Hollow Knight",
      //         describe: "Metroidvania Game",
      //         images: [
      //           "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      //           "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      //         ],
      //       },
      //     ],
      //   },
      // ],
      top: [],
      titles: [],
      // top: [
      //   {
      //     url: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      //     name: "Hollow Knight",
      //     describe: "Metroidvania Game",
      //     images: [
      //       "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      //       "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      //     ],
      //   },
      // ],
    };
  },
  watch: {},
  mounted() {
    this.updateGames();
  },
  methods: {
    checkout(n) {
      this.$store.commit("storeCheckout", n);
    },
    async updateGames() {
      let doc = await this.retrive("game");
      this.games = doc.data;
      let configHot = {
        method: "get",
        url: "api/search/hot/5",
      };
      let t = [];
      let docHot = await this.axios(configHot)
        .then(function(response) {
          console.log(response.data);
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
          return [];
        });
      t.push({
        tag: "熱門遊戲",
        games: this.docHot,
      });
      let configStar = {
        method: "get",
        url: "api/search/starest/5",
      };
      let docStar = await this.axios(configStar)
        .then(function(response) {
          console.log(response.data);
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
          return [];
        });
      t.push({
        tag: "玩家好評",
        games: this.docStar
      })
      this.titles = t;
    },
    async retrive(collection) {
      const snapshot = await this.axios
        .get("http://127.0.0.1/sqlproject/" + collection)
        .then(function(response) {
          return response;
        })
        .catch(function(error) {
          console.log(error);
        });
      return snapshot;
    },
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
