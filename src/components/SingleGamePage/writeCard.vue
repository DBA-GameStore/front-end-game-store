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
      <v-card-subtitle>替 {{ getCurrentGame.name }} 撰寫評論</v-card-subtitle>
    </v-toolbar>
    <v-row align="center" justify="center">
      <v-card-actions> </v-card-actions>
      <v-col cols="12">
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
          <v-btn @click="dowrite" elevation="0">
            <span>
              發布評論 -
            </span>
            <v-icon>
              mdi-send
            </v-icon>
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import reply from "@/components/SingleGamePage/reply.vue";
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
    };
  },
  mounted() {
    console.log(this.checktLogin);
  },
  methods: {
    dowrite() {
      console.log(this.msg);
      console.log(this.rating);
    },
  },
  components: {
    reply,
  },
};
</script>
