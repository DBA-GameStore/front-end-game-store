<template>
  <v-card color="#fafafa">
    <v-toolbar elevation="0" color="#fafafa">
      <v-card-title class="headline">
        <v-avatar>
          <img :src="getCurrentUser.photoURL" alt="John" />
        </v-avatar>
        <v-card-subtitle>{{ getCurrentUser.displayName }}</v-card-subtitle>
      </v-card-title>
      <v-spacer />
      <v-card-subtitle
        >替 {{ getCurrentGame.name }} 撰寫評論 ......</v-card-subtitle
      >
    </v-toolbar>
    <v-row align="center" justify="center">
      <v-card-actions> </v-card-actions>
      <v-col cols="12">
        <v-form ref="form">
          <v-card-actions>
            <v-textarea
              class="mx-2"
              rows="1"
              height="150"
              v-model="msg"
              prepend-icon="mdi-comment"
              outlined
            ></v-textarea>
          </v-card-actions>
          <v-toolbar elevation="0" color="#fafafa">
            <v-card-subtitle>評分</v-card-subtitle>
            <v-spacer />
            <v-btn
              icon
              v-for="i in 5"
              :key="i"
              @click="rating = i"
              class="pa-0"
              style="position: relative;z-index: 10;"
            >
              <v-icon :color="i < rating + 1 ? '#fdd835' : '#000000'">
                mdi-dice-{{ i }}
              </v-icon>
            </v-btn>
            <v-spacer />
            <v-btn
              @click="dowrite"
              elevation="0"
              :disabled="rating <= 0 || msg == ''"
            >
              <span>
                發布評論 -
              </span>
              <v-icon>
                mdi-send
              </v-icon>
            </v-btn>
          </v-toolbar>
          <span>{{ warrning }}</span>
        </v-form>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  computed: {
    getCurrentUser: {
      get() {
        return this.$store.getters.getUser;
      },
    },
    getCurrentGame: {
      get() {
        return this.$store.getters.getGameSelector;
      },
    },
  },
  data() {
    return {
      msg: "",
      rating: 0,
      warrning: "",
    };
  },
  mounted() {},
  methods: {
    dowrite() {
      console.log(this.msg);
      console.log(this.rating);
      this.post();
    },
    async post() {
      this.$emit("updateToggle");
      let config = {
        method: "post",
        url: "api/review/request",
        headers: { uid: this.getCurrentUser.uid },
        data: {
          gameid: this.getCurrentGame.id,
          star: this.rating,
          context: this.msg,
        },
      };
      let rep = await this.axios(config)
        .then(function(response) {
          console.log(response);
          return 1;
        })
        .catch(function(error) {
          console.log(error);
          return -1;
        });
      if (rep == 1) {
        this.$router.go(this.$router.currentRoute);
      }
    },
  },
  components: {},
};
</script>
