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
          <v-btn icon color="white" @click="addwishlist">
            <v-icon color="red" v-if="collection">
              mdi-heart
            </v-icon>
            <v-icon color="black" v-else>
              mdi-heart-outline
            </v-icon>
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
    return {
      collection: false,
    };
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
    this.updatewishlist();
  },

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
      let config = {
        method: "post",
        url: "api/shoppinglist/cart",
        headers: { uid: this.checktLogin.uid },
        data: { quantity: 1, gameId: this.getCurrentGame.id },
      };
      this.axios(config)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    async addwishlist() {
      let config = {
        method: "post",
        url: "api/wishlist",
        headers: { uid: this.checktLogin.uid },
        data: { gameid: this.getCurrentGame.id },
      };
      let res = await this.axios(config)
        .then(function(response) {
          return 1;
        })
        .catch(function(error) {
          console.log(error);
          return -1;
        });
      if (res == 1) {
        this.updatewishlist();
        if (this.collection == false) {
          alert("新增至願望清單");
        } else {
          alert("從願望清單移除");
        }
      }
    },
    async updatewishlist() {
      let config = {
        method: "get",
        url: "api/wishlist",
        headers: { uid: this.checktLogin.uid },
        data: { gameid: this.getCurrentGame.id },
      };
      let doc = await this.axios(config)
        .then(function(response) {
          console.log(response);
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
          return [];
        });
      let check = [];
      doc.filter((item) => {
        if (item.gameid === this.getCurrentGame.id) {
          check.push(item);
        }
      });
      console.log(doc);
      if (check.length > 0) this.collection = true;
      else this.collection = false;
    },
  },
};
</script>
