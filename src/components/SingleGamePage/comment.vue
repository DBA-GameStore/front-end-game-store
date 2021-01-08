<template>
  <v-card color="#fafafa">
    <v-row v-if="selfComment">
      <v-col cols="4">
        <v-card-title class="headline">
          <v-avatar>
            <!-- <img :src="selfComment.picture" alt="John" /> -->
          </v-avatar>
          <!-- <v-card-subtitle>{{ selfComment.name }}</v-card-subtitle> -->
        </v-card-title>
      </v-col>
      <v-col cols="6">
        <v-card-actions>
          <v-icon
            v-for="i in 5"
            :key="i"
            :color="i < star + 1 ? '#fdd835' : '#000000'"
          >
            mdi-dice-{{ i }}
          </v-icon>
        </v-card-actions>
        <v-card-subtitle>
          {{ selfComment.context }}
        </v-card-subtitle>
        <br />
        <!-- <reply :reply="selfComment.reply" v-if="checkAdmin" /> -->
      </v-col>
      <v-toolbar elevation="0" color="transparent">
        <v-spacer />
        <v-card-subtitle>{{ selfComment.datetime }}</v-card-subtitle>
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
</template>

<script>
import reply from "@/components/SingleGamePage/reply.vue";
export default {
  props: ["data"],
  components: {
    reply,
  },
  data() {
    return {
      selfComment: null,
      star: 3,
    };
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
    getCurrentGame: {
      get() {
        return this.$store.getters.getGameSelector;
      },
    },
  },
  mounted() {
    this.updateComment();
  },
  methods: {
    async updateComment() {
      let vm = this;
      let config = {
        method: "get",
        url: "api/review/gameid/" + this.getCurrentGame.id,
      };
      this.selfComment = await this.axios(config)
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
          return [];
        });
      this.selfComment = this.selfComment[this.data];
      this.star = parseInt(this.selfComment.star);
    },
  },
};
/* 
<v-card-actions>
            <v-btn icon>
              <v-icon>mdi-gift</v-icon>
              <!-- <span>{{ selfComment[data].gift }}</span> -->
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-thumb-up-outline</v-icon>
              <!-- <span>{{ selfComment[data].thumbup }}</span> -->
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-thumb-down-outline</v-icon>
              <!-- <span>{{ selfComment[data].thumbdown }}</span> -->
            </v-btn>
          </v-card-actions>
*/
</script>
