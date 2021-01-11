<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="9">
        <v-row>
          <v-card-title>
            <u>
              優惠券
            </u>
          </v-card-title>
        </v-row>
        <v-row v-for="(item, index) in test" :key="index">
          <v-col cols="2">
            <v-divider
              class="mx-4"
              vertical
              style="display: inline;"
            ></v-divider>
          </v-col>
          <v-col cols="3">
            <v-row>
              <h5>代碼</h5>
              <h4 class="highlight">{{ item.hash }}</h4>
            </v-row>
          </v-col>
          <v-col cols="2">
            <v-row>
              <h6>說明</h6>
              <h4>{{ item.context }}</h4>
            </v-row>
          </v-col>
          <v-spacer />
          <v-col cols="2">
            <v-row>
              <h5>折</h5>
              <h4>{{ item.discount }}</h4>
            </v-row>
          </v-col>
          <v-col cols="2">
            <v-btn
              icon
              @click="deleteGame(item)"
              v-if="checktLogin && checkAdmin"
            >
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      test: [
        {
          hash: "BBBC05",
          context: "新開幕折扣",
          discount: "98",
          start: "",
          end: "",
        },
        {
          hash: "BBBC05",
          context: "新開幕折扣",
          discount: "98",
          start: "",
          end: "",
        },
        {
          hash: "BBBC05",
          context: "新開幕折扣",
          discount: "98",
          start: "",
          end: "",
        },
        {
          hash: "BBBC05",
          context: "新開幕折扣",
          discount: "98",
          start: "",
          end: "",
        },
      ],
    };
  },
  methods: {
    async updateCoupon() {},
    async deleteGame() {
      if (this.checkAdmin == false) return;
    },
  },
  computed: {
    checktLogin: {
      get() {
        return this.$store.getters.getUser;
      },
    },
    checkAdmin: {
      get() {
        return this.$store.getters.getAdmin;
      },
    },
  },
};
</script>

<style scope>
.highlight {
  background: linear-gradient(to top, #ffd54f 50%, transparent 50%);
  border-radius: 0;
}
</style>
