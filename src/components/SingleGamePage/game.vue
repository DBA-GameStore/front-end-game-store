<template>
  <v-container v-if="getCurrentGame">
    <v-row justify="center">
      <v-col cols="5">
        <v-card-title>{{ getCurrentGame.name }}</v-card-title>
        <slide :images="getCurrentGame.picture" />
      </v-col>
      <v-col cols="4" style="position:relative;top:50px">
        <v-img :src="getCurrentGame.picture" max-width="100%"> </v-img>
        <v-card-subtitle>{{ getCurrentGame.description }}</v-card-subtitle>
      </v-col>
    </v-row>
    <v-row justify="center" style="fill-">
      <v-col cols="9">
        <v-card-title style="position:relative;left:-10px"
          >NT : ${{ getCurrentGame.price }}</v-card-title
        >
        <v-btn text color="white" @click="addToCart()">
          <span class="quaternary--text">加入購物車</span>
        </v-btn>
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
    checktLogin: {
      get() {
        return this.$store.getters.getUser;
      },
    },
  },

  mounted() {},

  methods: {
    async addToCart() {
      if (this.checktLogin == null) {
        this.$router.push({
          name: "Profile",
        });
      } else {
        await this.post();
        this.pushToCheckout();
      }
    },
    pushToCheckout() {
      this.$router.push({
        name: "Checkout",
      });
    },
    async post() {
      this.axios
        .post("http://127.0.0.1/sqlproject/shoppinglist/cart", {
          quantity: 1,
          gameId: this.getCurrentGame.id,
        })
        .then(function(response) {
          console.log(response);
          return;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
