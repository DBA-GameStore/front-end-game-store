<template>
  <v-container>
    <v-row>
      <v-col cols="2" md="3" lg="2">
        <tagChip />
      </v-col>
      <v-col cols="10" md="9" lg="10">
        <v-row class="pa-0 ma-0">
          <v-col cols="4" md="9" lg="4" v-for="(g, i) in games" :key="i">
            <router-link :to="{ name: 'Game' }">
              <v-card elevation="0" @click="select(g)">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="headline"
                      style="white-space: nowrap;z-index: 1;position:relative"
                      v-text="g.name"
                    ></v-card-title>
                    <v-card-subtitle>
                      <v-icon v-for="(p, j) in platform" :key="j">{{
                        p
                      }}</v-icon>
                    </v-card-subtitle>
                  </div>

                  <v-avatar
                    class="ma-3"
                    size="125"
                    tile
                    style="position:relative;left:-50px"
                  >
                    <v-img :src="g.url"></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import tagChip from "@/components/Store/tagChip";

export default {
  components: {
    tagChip,
  },
  data: () => ({
    games: [
      {
        url: require(`@/assets/logo.png`),
        name: "Hollow Knight",
        describe: "Metroidvania Game",
        images: [
          "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        ],
      },
      {
        url: require(`@/assets/logo.png`),
        name: "Gris",
        describe: "Game of Art",
        images: [
          "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        ],
      },
      {
        url: require(`@/assets/logo.png`),
        name: "Fall Guys",
        describe: "Party Game",
        images: [
          "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        ],
      },
      {
        url: require(`@/assets/logo.png`),
        name: "Escape!",
        describe: "Party Game",
        images: [
          "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        ],
      },
    ],
    platform: ["mdi-microsoft-windows", "mdi-apple"],
  }),

  computed: {
    selector: {
      get() {
        return this.$store.getters.getStoreSelector;
      },
    },
  },

  watch: {},

  methods: {
    select(e) {
      console.log(this.games);
      this.$store.commit("gameCheckout", e);
    },
  },
};
</script>
