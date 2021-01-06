<template>
  <v-container v-if="getCurrentGame">
    <v-row justify="center">
      <v-col cols="9" sm="12" md="5" lg="5" xl="5">
        <h1 class="text-align: center">{{ getCurrentGame.name }}</h1>
        <br />
        <v-img :src="getCurrentGame.picture" max-width="100%"> </v-img>
        <!-- <slide :images="getCurrentGame.picture" /> -->
      </v-col>
      <v-col
        cols="9"
        style="position:relative;top:50px"
        sm="12"
        md="4"
        lg="4"
        xl="4"
      >
        <v-card elevation="0" height="170">
          <v-card-subtitle>{{ getCurrentGame.description }}</v-card-subtitle>
        </v-card>
        <v-toolbar elevation="0">
          <v-spacer />
          <v-card-title
            style="position:relative;left:-10px;white-space: nowrap;"
          >
            NT : ${{ getCurrentGame.price }}
          </v-card-title>
          <v-btn text color="white" @click="addToCart()">
            <span class="quaternary--text">加入購物車</span>
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="9">
        <hr />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import slide from "@/components/SingleGamePage/imageSlide.vue";
export default {
  components: {
    // slide,
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
