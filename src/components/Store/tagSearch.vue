<template>
  <v-container>
    <v-row>
      <v-col cols="2" md="3" lg="2">
        <tagChip />
      </v-col>
      <v-col cols="10">
        <v-row class="pa-0 ma-0" v-for="(g, i) in games" :key="i">
          <v-col cols="8">
            <router-link
              @click.native="select(g)"
              :to="{ name: 'Game' }"
              class="white"
              style="text-decoration: none; color: inherit;"
            >
              <v-card elevation="0">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="headline"
                      style="white-space: nowrap;z-index: 1;position:relative"
                      v-text="g.name"
                    ></v-card-title>
                    <v-card-subtitle
                      style="white-space: nowrap;z-index: 1;position:relative"
                    >
                      <v-icon v-for="(p, j) in platform" :key="j">{{
                        p
                      }}</v-icon>
                    </v-card-subtitle>
                    <v-card-subtitle>$ {{ g.price }}</v-card-subtitle>
                  </div>
                </div>
              </v-card>
            </router-link>
            <br />
          </v-col>
          <v-col cols="4">
            <router-link
              @click.native="select(g)"
              :to="{ name: 'Game' }"
              class="white"
              style="text-decoration: none; color: inherit;"
            >
              <v-avatar
                class="ma-3"
                width="100%"
                height="90%"
                tile
                style="position:relative;left:-100%"
              >
                <v-img :src="g.picture"></v-img>
              </v-avatar>
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
    games: null,
    // games: [
    //   {
    //     url: require(`@/assets/logo.png`),
    //     name: "Hollow Knight",
    //     describe: "Metroidvania Game",
    //     images: [
    //       "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //       "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //     ],
    //   },
    //   {
    //     url: require(`@/assets/logo.png`),
    //     name: "Gris",
    //     describe: "Game of Art",
    //     images: [
    //       "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //       "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //     ],
    //   },
    //   {
    //     url: require(`@/assets/logo.png`),
    //     name: "Fall Guys",
    //     describe: "Party Game",
    //     images: [
    //       "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //       "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //     ],
    //   },
    //   {
    //     url: require(`@/assets/logo.png`),
    //     name: "Escape!",
    //     describe: "Party Game",
    //     images: [
    //       "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //       "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //     ],
    //   },
    // ],
    platform: ["mdi-microsoft-windows", "mdi-apple"],
  }),

  computed: {
    getGames: {
      get() {
        return this.$store.getters.getGames;
      },
    },
  },

  watch: {},

  mounted() {
    this.updateGames();
  },

  methods: {
    select(e) {
      this.$store.commit("gameCheckout", e);
    },
    async updateGames() {
      let vm = this;
      let doc = await this.retrive("game");
      this.games = doc.data;
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
};
</script>
