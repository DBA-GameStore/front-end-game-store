<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="9">
        <v-card color="#385F73" dark id="comment">
          <v-card-title class="headline">
            <v-btn text @click="$vuetify.goTo('#comment')">
              <h2 class="pa-0 ma-0">顧客評論 ({{ comments.length }})</h2>
            </v-btn>
          </v-card-title>
          <v-card-subtitle
            >Thanks for being so honest with us about how this is impacting
            you.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn text @click="dowrite" :disabled="getLogin == null">
              撰寫評論
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="9">
        <write v-if="toggle" />
      </v-col>
    </v-row>
    <div>
      <v-row justify="center" v-for="(item, index) in comments" :key="index">
        <v-col cols="9">
          <v-card color="#fafafa">
            <v-row v-if="item">
              <v-col cols="4">
                <v-card-title class="headline">
                  <v-avatar>
                    <img :src="item.memberpicture"/>
                  </v-avatar>
                  <v-card-subtitle>{{ item.membername }}</v-card-subtitle>
                </v-card-title>
              </v-col>
              <v-col cols="6">
                <v-card-actions>
                  <v-icon
                    v-for="i in 5"
                    :key="i"
                    :color="i < toint(item.star) + 1 ? '#fdd835' : '#000000'"
                  >
                    mdi-dice-{{ i }}
                  </v-icon>
                </v-card-actions>
                <v-card-subtitle>
                  {{ item.context }}
                </v-card-subtitle>
                <br />
                <reply :replyid="item.id" v-on:doupdate="updateComment" />
              </v-col>
              <v-toolbar elevation="0" color="transparent">
                <v-spacer />
                <v-card-subtitle>{{ item.datetime }}</v-card-subtitle>
              </v-toolbar>
            </v-row>

            <v-sheet class="pa-3" v-else>
              <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                type="card"
              ></v-skeleton-loader>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import write from "@/components/SingleGamePage/writeCard.vue";
import reply from "@/components/SingleGamePage/reply.vue";

export default {
  components: {
    write,
    reply,
  },
  data() {
    return {
      comments: [],
      toggle: false,
    };
  },
  computed: {
    getCurrentGame: {
      get() {
        return this.$store.getters.getGameSelector;
      },
    },
    getLogin: {
      get() {
        return this.$store.getters.getUser;
      },
    },
    getAdmin: {
      get() {
        return this.$store.getters.getAdmin;
      },
    },
  },
  mounted() {
    this.updateComment();
  },
  methods: {
    async updateComment() {
      let config = {
        method: "get",
        url: "api/review/gameid/" + this.getCurrentGame.id,
      };
      this.comments = await this.axios(config)
        .then(function(response) {
          console.log(response.data);
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
          return [];
        });
      this.comments = this.comments.reduce((unique, o) => {
        if (!unique.some((obj) => obj.id === o.id)) {
          unique.push(o);
        }
        return unique;
      }, []);
      this.comments.filter((item) => (item.star = parseInt(item.star)));
    },
    dowrite() {
      this.toggle = !this.toggle;
    },
    toint(e) {
      return parseInt(e);
    },
  },
};
</script>
