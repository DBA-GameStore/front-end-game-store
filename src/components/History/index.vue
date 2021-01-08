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
          <v-toolbar elevation="0" color="transparent">
            <v-card-title> 訂單編號 {{ i.id }} </v-card-title>
            <v-spacer />
            <v-card-subtitle>{{ i.buyDatetime }}</v-card-subtitle>
          </v-toolbar>
          <listgame :listid="i.id" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import listgame from "@/components/History/listgames.vue";
export default {
  components: {
    listgame,
  },
  data() {
    return {
      history: [],
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
          console.log(response);
          return response.data;
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
