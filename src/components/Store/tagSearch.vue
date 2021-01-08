<template>
  <v-container>
    <!-- <tagChip style="position:relative;top:80px" /> -->
    <v-row justify="center">
      <v-col cols="10">
        <v-row justify="center">
          <v-col cols="4" v-for="(g, i) in limitby" :key="i">
            <v-card elevation="0" @click.native="select(g)">
              <v-hover
                v-slot="{ hover }"
                open-delay="300"
                @click="hover = false"
              >
                <v-row class="pa-0 ma-0">
                  <v-col cols="6">
                    <v-overlay :absolute="true" :value="hover" :z-index="100">
                      <v-img
                        style="position:relative;z-index:100"
                        :src="g.picture"
                      >
                      </v-img>
                    </v-overlay>
                    <div
                      class="white"
                      style="text-decoration: none; color: inherit;position:relative;left:10%"
                    >
                      <br />
                      <br />

                      <v-card elevation="0">
                        <span
                          class="d-inline-block text-truncate"
                          style="position:relative;top:20px;max-width: 150px;font-size:10px"
                          >{{ g.description }}</span
                        >
                        <div class="d-flex flex-no-wrap justify-space-between">
                          <v-card-title
                            class="headline"
                            style="white-space: nowrap;z-index: 1;position:relative"
                          >
                            <h3>{{ g.name }}</h3>
                          </v-card-title>
                        </div>
                      </v-card>
                      <v-card-subtitle
                        style="white-space: nowrap;z-index: 1;position:relative"
                      >
                        <v-icon v-for="(p, j) in platform" :key="j">{{
                          p
                        }}</v-icon>
                      </v-card-subtitle>
                      <v-card-subtitle style="position:relative;top:-20px">
                        $ {{ g.price }}
                      </v-card-subtitle>
                    </div>
                    <br />
                  </v-col>
                  <v-col cols="4">
                    <div
                      class="white"
                      style="text-decoration: none; color: inherit;"
                    >
                      <v-avatar
                        class="ma-3"
                        size="150"
                        style="position:relative;left:-20%;top:100px"
                      >
                        <v-img :src="g.picture"></v-img>
                      </v-avatar>
                    </div>
                  </v-col>
                </v-row>
              </v-hover>
            </v-card>
          </v-col>
        </v-row>
        <v-pagination v-model="page" :length="pageLength" circle>
        </v-pagination>
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
    expand: [],
    games: [],
    pageLength: 1,
    page: 1,
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
    limitby() {
      let start = (this.page - 1) * 9;
      let end = start + 9;
      return this.games.slice(start, end);
    },
  },

  watch: {},

  mounted() {
    this.updateGames();
  },

  methods: {
    select(e) {
      this.$store.commit("gameCheckout", e);
      this.$router.push({ name: "Game" });
    },
    async updateGames() {
      let vm = this;
      let config = {
        method: "get",
        url: "api/game",
      };
      let doc = await this.axios(config)
        .then(function(response) {
          // console.log(response);
          return response;
        })
        .catch(function(error) {
          console.log(error);
          return this.cart;
        });
      this.games = doc.data;
      this.games.forEach((element) => {
        this.expand.push(false);
      });
      this.pageLength = parseInt(this.games.length / 8);
      if (this.pageLength == 0) this.pageLength++;
    },
  },
  filteredStart() {
    return this.pageLength;
  },
  filteredEnd() {
    return this.pageLength + 9;
  },
};
</script>

<style>
.theme--light.v-pagination .v-pagination__item--active {
  color: grey !important;
}
</style>
