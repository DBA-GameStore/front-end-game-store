<template>
  <v-container>
    <v-row justify="center" v-if="checktLogin && checkAdmin">
      <v-col cols="12">
        <v-item-group v-model="window" class="text-right" mandatory>
          <v-item
            v-for="n in length"
            :key="`btn-${n}`"
            v-slot="{ active, toggle }"
          >
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>

        <v-window v-model="window" class="elevation-1">
          <v-window-item :value="0">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Name
                    </th>
                    <th class="text-center">
                      Recommend
                    </th>
                    <th class="text-center">
                      Price
                    </th>
                    <th class="text-center">
                      Description
                    </th>
                    <th class="text-center">
                      SoldOut
                    </th>
                    <th class="text-center">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in games" :key="index">
                    <td>
                      <v-card-subtitle @click="select(item)">
                        {{ item.name }}
                      </v-card-subtitle>
                    </td>
                    <td>
                      <v-card
                        elevation="0"
                        class="d-flex justify-center mb-6"
                        color="transparent"
                      >
                        <v-checkbox
                          v-model="item.recommend == 1"
                          @change="selectRecommend(item, $event)"
                          style="position:relative;top:13px"
                        ></v-checkbox>
                      </v-card>
                    </td>
                    <td style="white-space: nowrap;">
                      <v-text-field
                        prefix="NT$"
                        :value="item.price"
                        v-model="item.price"
                        full-width
                        flat
                        solo
                        dense
                        style="width:100px;position:relative;top:13px"
                        @keydown.enter="changePrice(item, item.price)"
                      >
                      </v-text-field>
                    </td>
                    <td>
                      {{ item.description }}
                    </td>
                    <td class="text-center">{{ item.soldOutNumber }}</td>
                    <td>
                      <v-btn icon @click="deleteGame(item)">
                        <v-icon>
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-window-item>
          <v-window-item :value="1">
            <v-row justify="center">
              <v-col cols="2"></v-col>
              <v-col cols="8">
                <h2>
                  <u>Upload New Product</u>
                </h2>
                <br />
                <uploadGame @parentUpdate="updateGames" />
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
          </v-window-item>
          <v-window-item :value="2">
            <v-row justify="center">
              <v-col cols="2"></v-col>
              <v-col cols="8">
                <h2>
                  <u>Upload New Coupon</u>
                </h2>
                <br />
                <uploadCoupon />
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-card-subtitle>
        You have to login and be admin.
      </v-card-subtitle>
    </v-row>
  </v-container>
</template>

<script>
import uploadGame from "@/components/Profile/adminUploadGame";
import uploadCoupon from "@/components/Profile/adminUploadCoupon";

export default {
  name: "Home",
  components: {
    uploadGame,
    uploadCoupon,
  },
  data() {
    return {
      games: [],
      recommends: [],
      length: 3,
      window: 0,
    };
  },
  mounted() {
    if (this.checktLogin == null) {
      this.$router.push({ name: "Profile" });
    }
    this.updateGames();
  },
  methods: {
    select(e) {
      this.$store.commit("gameCheckout", e);
      this.$router.push({ name: "Game" });
    },
    async updateGames() {
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
    async deleteGame(e) {
      let config = {
        method: "delete",
        url: "api/game/" + e.id,
      };
      let res = await this.axios(config)
        .then(function(response) {
          alert("成功下架");
          return 1;
        })
        .catch(function(error) {
          console.log(error);
          return -1;
        });
      if (res == 1) {
        this.updateGames();
      }
    },
    async selectRecommend(e, e1) {
      let config = {
        method: "patch",
        url: "api/game/" + e.id,
        data: {
          recommend: e1 == true ? 1 : 0,
        },
      };
      let res = await this.axios(config)
        .then(function(response) {
          alert("推薦遊戲!");
          return 1;
        })
        .catch(function(error) {
          console.log(error);
          return -1;
        });
      if (res == 1) this.updateGames();
    },
    async changePrice(e, e1) {
      let config = {
        method: "patch",
        url: "api/game/" + e.id,
        data: {
          price: e1,
        },
      };
      let res = await this.axios(config)
        .then(function(response) {
          alert("價錢更改");
          return 1;
        })
        .catch(function(error) {
          console.log(error);
          return -1;
        });
      if (res == 1) this.updateGames();
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

<style>
.v-application .primary--text {
  color: grey !important;
}
</style>
