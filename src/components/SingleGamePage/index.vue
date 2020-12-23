<template>
  <v-container v-if="getCurrentGame">
    <v-row justify="center">
      <v-col cols="8">
        <v-card-title>{{getCurrentGame.name}}</v-card-title>
        <slide :images="getCurrentGame.images"/>
        <v-card-subtitle>{{getCurrentGame.describe}}</v-card-subtitle>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-toolbar elevation="0">
          <v-spacer></v-spacer>
          <v-btn text color="white">
            <span class="red--text">加入購物車</span>
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import slide from "@/components/SingleGamePage/imageSlide.vue";
export default {
  components: {
    slide,
  },
  data() {
    return {};
  },
  computed: {
    getCurrentGame: {
      get() {
        return this.$store.getters.getGameSelector;
      },
    },
  },
};
</script>
