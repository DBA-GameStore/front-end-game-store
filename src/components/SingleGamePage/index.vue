<template>
  <v-container v-if="getCurrentGame">
    <game />
    <review />
  </v-container>
</template>

<script>
import slide from "@/components/SingleGamePage/imageSlide.vue";
import game from "@/components/SingleGamePage/game.vue";
import review from "@/components/SingleGamePage/review.vue";

export default {
  components: {
    slide,
    game,
    review,
  },
  computed: {
    getCurrentGame: {
      get() {
        return this.$store.getters.getGameSelector;
      },
    },
    checktLogin: {
      get() {
        return this.$store.getters.getUser;
      },
    },
  },

  mounted() {},
};
</script>
