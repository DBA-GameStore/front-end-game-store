<template>
  
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
