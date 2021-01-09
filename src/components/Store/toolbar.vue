<template>
  <v-toolbar elevation="1" dense color="white">
    <v-menu offset-y bottom open-on-hover :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          text
          style="position: relative; left: -15px"
          @click="checkout(1)"
        >
          <div>瀏覽</div>
        </v-btn>
      </template>

      <!-- <v-list>
        <v-list-item v-for="(item, index) in hotSale" :key="index">
          <v-btn text color="white">
            <v-list-item-title class="black--text">{{
              item.title
            }}</v-list-item-title>
          </v-btn>
        </v-list-item>
      </v-list> -->
    </v-menu>
    <v-btn
      v-bind="attrs"
      v-on="on"
      text
      style="position: relative; left: -15px"
      @click="checkout(2)"
    >
      <div>活動</div>
    </v-btn>
    <v-btn
      v-bind="attrs"
      v-on="on"
      text
      style="position: relative; left: -15px"
      @click="checkout(3)"
    >
      <div>遊戲分級</div>
    </v-btn>
    <v-spacer />
    <!-- <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      flat
      hide-no-data
      hide-details
      label="Search for games"
      solo-inverted
      dark
    ></v-autocomplete> -->
    <v-card elevation="0">
      <v-autocomplete
        append-icon="mdi-search"
        :loading="loading"
        :filter="(v) => v"
        :items="items"
        item-text="name"
        item-value="name"
        :search-input.sync="search"
        v-model="select"
        flat
        hide-no-data
        hide-details
        rounded
        color="#efefef"
        return-object
        solo
        placeholder="搜尋"
        @keydown.enter="searchFun(select)"
      >
      </v-autocomplete>
    </v-card>
  </v-toolbar>
</template>

<script>
export default {
  props: ["on", "attrs"],
  data() {
    return {
      hotSale: [
        { title: "免費遊玩" },
        { title: "預購" },
        { title: "熱門遊戲" },
      ],
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [],
    };
  },
  mounted() {
    this.updateGames();
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    checkout(n) {
      this.$emit("checkout-page", n);
    },
    searchFun(e) {
      console.log(e);

      this.$store.commit("gameCheckout", e);
      this.$router.push({ name: "Game" });
    },
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        let newFilter = [];
        this.items = this.states.filter((e) => {
          return (
            (e.name || "").toLowerCase().indexOf((v.name || "").toLowerCase()) >
            -1
          );
        });
        this.loading = false;
      }, 500);
    },
    async updateGames() {
      let vm = this;
      let config = {
        method: "get",
        url: "api/game",
      };
      let doc = await this.axios(config)
        .then(function(response) {
          console.log(response);
          return response;
        })
        .catch(function(error) {
          console.log(error);
          return this.cart;
        });
      this.games = doc.data;
    },
  },
};
</script>

<style>
.v-select.v-select--is-menu-active .v-input__icon--append .v-icon {
  transform: none;
}
label.v-label.theme--light {
  color: white;
}
</style>
