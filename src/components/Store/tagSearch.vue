<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="2">
        <v-row>
          <v-card class="mx-auto pa-2 ma-2"
            max-width="500"
            elevation="0"
            style="position:relative;top:80px">
            <v-container>
              <v-row justify="center">
                <v-col>
                  <v-btn text @click="pricesort" class="text--center">
                    價格排序
                  </v-btn>
                  <br />
                  <br />
                  <v-btn text @click="datesort" class="text--center">
                    上架日期
                  </v-btn>
                  <br />
                  <br />
                  <v-btn text @click="scoresort" class="text--center">
                    玩家評分
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <v-card
            class="mx-auto pa-2 ma-2"
            max-width="500"
            elevation="0"
            style="position:relative;top:80px"
          >
            <v-container class="py-0">
              <h6 class="text--center">標籤</h6>
              <v-row align="center" justify="center">
                <v-col
                  v-for="(selection, i) in selections"
                  :key="selection.name"
                  class="shrink"
                >
                  <v-chip
                    :disabled="loading"
                    close
                    @click:close="selected.splice(i, 1)"
                  >
                    <v-icon left v-text="'mdi-google-controller'"></v-icon>
                    {{ selection.name }}
                  </v-chip>
                </v-col>
              </v-row>
            </v-container>

            <v-divider v-if="!allSelected"></v-divider>

            <v-list>
              <template v-for="item in categories">
                <v-list-item
                  v-if="!selected.includes(item)"
                  :key="item.name"
                  :disabled="loading"
                  @click="selected.push(item)"
                >
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                  <v-list-item-avatar>
                    <v-icon
                      :disabled="loading"
                      v-text="'mdi-google-controller'"
                    ></v-icon>
                  </v-list-item-avatar>
                </v-list-item>
              </template>
            </v-list>
            <v-divider />
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="9">
        <v-row justify="center">
          <v-col
            cols="12"
            sm="6"
            md="6"
            lg="6"
            xl="6"
            v-for="(g, i) in limitby"
            :key="i"
          >
            <v-card elevation="0" @click.native="select(g)">
              <v-hover
                v-slot="{ hover }"
                open-delay="300"
                @click="hover = false"
              >
                <v-row class="pa-0 ma-0">
                  <v-col cols="8">
                    <v-overlay :absolute="true" :value="hover" :z-index="100">
                      <v-img
                        style="position:relative;z-index:100"
                        :src="g.picture"
                      >
                      </v-img>
                    </v-overlay>
                    <div
                      class="white"
                      style="text-decoration: none; color: inherit;position:relative;left:-50px"
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
                            style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;z-index: 1;position:relative"
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
                        style="position:relative;left:-100px;top:100px"
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
export default {
  components: {},
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
    tagChips: [
      {
        text: "Action",
        icon: "mdi-numeric-0-box-outline",
        id: 1,
      },
      {
        text: "Battle",
        icon: "mdi-numeric-1-box-outline",
        id: 2,
      },
      {
        text: "Co-op",
        icon: "mdi-numeric-2-box-outline",
        id: 3,
      },
      {
        text: "Difficult",
        icon: "mdi-numeric-3-box-outline",
        id: 4,
      },
      {
        text: "Exploration",
        icon: "mdi-numeric-4-box-outline",
        id: 7,
      },
      {
        text: "First-Person",
        icon: "mdi-numeric-5-box-outline",
        id: 9,
      },
      {
        text: "God Game",
        icon: "mdi-numeric-6-box-outline",
        id: 11,
      },
    ],
    loading: false,
    search: "",
    selected: [],
    radioGroup: 0,
  }),

  computed: {
    limitby() {
      let start = (this.page - 1) * 8;
      let end = start + 8;
      return this.games.slice(start, end);
    },
    allSelected() {
      return this.selected.length === this.tagChips.length;
    },
    categories() {
      const search = this.search.toLowerCase();

      if (!search) return this.tagChips;

      return this.tagChips.filter((item) => {
        const text = item.text.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
    selections() {
      const selections = [];

      for (const selection of this.selected) {
        selections.push(selection);
      }
      let tags = [];

      selections.forEach((element) => {
        tags.push(element.id);
      });

      if (tags.length > 0) this.searchGames(tags);
      else this.updateGames();

      return selections;
    },
  },

  watch: {},

  mounted() {
    this.updateGames();
    this.updateTags();
  },

  methods: {
    pricesort() {
      this.games.sort((a, b) => {
        if (parseInt(a.price) < parseInt(b.price)) return -1;
        if (parseInt(a.price) > parseInt(b.price)) return 1;
        return 0;
      });
    },
    datesort() {
      this.games.sort((a, b) => {
        if (parseInt(a.id) > parseInt(b.id)) return -1;
        if (parseInt(a.id) < parseInt(b.id)) return 1;
        return 0;
      });
    },
    scoresort() {
      this.games.sort((a, b) => {
        if (parseInt(a.star) > parseInt(b.star)) return -1;
        if (parseInt(a.star) < parseInt(b.star)) return 1;
        return 0;
      });
    },
    async searchGames(tags) {
      let config = {
        method: "post",
        url: "api/search",
        data: {
          tag: tags,
        },
      };
      this.games = await this.axios(config)
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
          return [];
        });
      this.pageLength = parseInt(this.games.length / 8 + 1);
      if (this.pageLength == 0) this.pageLength++;
    },
    select(e) {
      this.$store.commit("gameCheckout", e);
      this.$router.push({ name: "Game" });
    },
    async updateGames() {
      let config = {
        method: "get",
        url: "api/game",
      };
      let doc = await this.axios(config)
        .then(function(response) {
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
      this.pageLength = parseInt(this.games.length / 8 + 1);
      if (this.pageLength == 0) this.pageLength++;
    },
    async updateTags() {
      let config = {
        method: "get",
        url: "api/tag",
      };
      let doc = await this.axios(config)
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
          return [];
        });
      this.tagChips = doc;
      console.log(doc);
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
