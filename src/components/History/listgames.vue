<template>
  <v-list-group no-action>
    <template v-slot:activator>
      <v-list-item-content>
        <v-toolbar elevation="0" color="transparent">
          <v-list-item-action>購買內容 ({{ games.length }})</v-list-item-action>
          <v-spacer />
          <v-card-subtitle style="white-space: nowrap;" v-if="coupon.couponid">
            使用優惠券 {{ coupon.hash }}, 享 {{ coupon.discount }} 折
          </v-card-subtitle>
          <v-card-subtitle style="white-space: nowrap;">
            總金額： NT$ {{ coupon.total }}
          </v-card-subtitle>
        </v-toolbar>
      </v-list-item-content>
    </template>
    <v-list-item class="pa-0" v-for="(j, index) in games" :key="index">
      <v-list-item-content class="pa-0 list-comment">
        <v-row justify="center" align="center">
          <v-col cols="1"></v-col>
          <v-col cols="4">
            <v-img :src="j.picture" max-width="100%"> </v-img>
          </v-col>
          <v-col cols="6">
            <p class="p-comment-title">{{ j.name }}</p>
            <p class="p-comment-title">NT$ {{ j.price }}</p>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
  </v-list-group>
</template>

<script>
export default {
  props: ["listid", "coupon"],
  components: {},
  data() {
    return {
      games: [],
    };
  },
  mounted() {
    this.updateHistory();
  },
  computed: {
    checktLogin: {
      get() {
        return this.$store.getters.getUser;
      },
    },
  },
  methods: {
    async updateHistory() {
      let config = {
        method: "get",
        url: "api/shoppinglist/listid/" + this.listid,
        headers: { uid: this.checktLogin.uid },
      };
      this.games = await this.axios(config)
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
          return [];
        });
    },
  },
};
</script>

<style>
.v-list-group v-list-group--no-action:hover {
  background: white;
}
</style>
