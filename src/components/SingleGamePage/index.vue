<template>
  <v-container v-if="getCurrentGame">
    <game />
    <review />
  </v-container>
</template>

<script>
import game from "@/components/SingleGamePage/game.vue";
import review from "@/components/SingleGamePage/review.vue";

export default {
  components: {
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

  mounted() {
    console.log(this.getCurrentGame);
  },
};
</script>
