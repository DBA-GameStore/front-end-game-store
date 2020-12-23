<template>
  <v-container>
    <v-row>
      <v-col cols="2" md="3" lg="2">
        <tagChip />
      </v-col>
      <v-col cols="10" md="9" lg="10">
        <v-row class="pa-0 ma-0">
          <v-col cols="4" md="9" lg="4" v-for="(g, i) in games" :key="i">
            <v-card elevation="0">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    style="white-space: nowrap;z-index: 1;position:relative"
                    v-text="g.name"
                  ></v-card-title>
                  <v-card-subtitle>
                    <v-icon v-for="(platform, j) in g.platform" :key="j">{{
                      platform
                    }}</v-icon>
                  </v-card-subtitle>
                </div>

                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                  style="position:relative;left:-50px"
                >
                  <v-img :src="g.img"></v-img>
                </v-avatar>
              </div>
            </v-card>
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
    tagChip
  },
  data: () => ({
    games: [
      {
        name: "Hollow Knight",
        img: require(`@/assets/logo.png`),
        platform: ["mdi-microsoft-windows", "mdi-apple"]
      },
      {
        name: "Gris",
        img: require(`@/assets/logo.png`),
        platform: ["mdi-microsoft-windows", "mdi-apple"]
      },
      {
        name: "Speed Runner",
        img: require(`@/assets/logo.png`)
      },
      {
        name: "Hollow Knight",
        img: require(`@/assets/logo.png`)
      },
      {
        name: "Gris",
        img: require(`@/assets/logo.png`)
      },
      {
        name: "Speed Runner",
        img: require(`@/assets/logo.png`)
      }
    ]
  }),

  computed: {},

  watch: {},

  methods: {}
};
</script>
