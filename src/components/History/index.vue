<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        md="9"
        lg="9"
        xl="9"
        v-for="(i, index0) in history"
        :key="index0"
      >
        <v-card>
          <v-card-title> 訂單編號 {{ i }} </v-card-title>
          <v-list-group no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-toolbar elevation="0" color="transparent">
                  <v-list-item-title>購買內容</v-list-item-title>
                  <v-spacer />
                  <v-card-subtitle style="white-space: nowrap;">
                    總金額： NT$ 1000
                  </v-card-subtitle>
                </v-toolbar>
              </v-list-item-content>
            </template>
            <v-list-item class="pa-0" v-for="(j, index) in games" :key="index">
              <v-list-item-content class="pa-0 list-comment">
                <v-row justify="center" align="center">
                  <v-col cols="3"></v-col>
                  <v-col cols="4">
                    <v-img :src="j.picture" max-width="100%"> </v-img>
                  </v-col>
                  <v-col cols="3"></v-col>
                  <v-col cols="4">
                    <p class="p-comment-title">{{ j.name }}</p>
                    <p class="p-comment-title">NT$ {{ j.price }}</p>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      history: [],
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
      let vm = this;
      let config = {
        method: "get",
        url: "api/shoppinglist",
        headers: { uid: this.checktLogin.uid },
      };
      this.history = await this.axios(config)
        .then(function(response) {
          console.log(12333);
          console.log(response);
          return response;
        })
        .catch(function(error) {
          console.log(error);
          return [];
        });
      console.log(this.history);
    },
  },
};
</script>

<style>
.v-list-group v-list-group--no-action:hover {
  background: white;
}
</style>
