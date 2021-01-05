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
            >Thanks for being so honest with me about how this is impacting
            you.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn text>
              撰寫評論
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col></v-row
    >
    <v-row justify="center" v-for="(item, index) in comments" :key="index">
      <v-col cols="9">
        <comment :data="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import comment from "@/components/SingleGamePage/comment.vue";

export default {
  components: {
    comment,
  },

  data() {
    return {
      comments: [
        {
          name: "RGBGamer",
          comment: "commentcommentcommentcommentcommentcomment",
          avatarImg:
            "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/2c/2c861f6ccfed7dd404d284137d848bf17c6ebec1_medium.jpg",
          gift: 0,
          thumbup: 0,
          thumbdown: 0,
          rating: 5,
          reply: [
            {
              avatarImg:
                "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/a8/a844c3685e9401ceffc5c41f218ee51ce54342ce_medium.jpg",
              comment: "Thank you for your comment!",
              postBy: "Admin",
            },
          ],
        },
        {
          name: "火山大隊長",
          comment: "昨天我撿到100塊 我的心情很好 雖然這干遊戲沒有關係",
          avatarImg:
            "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4e/4e2a656f1d9fb8f0ef9e5ccd9a377601bb42d7f5_medium.jpg",
          gift: 0,
          thumbup: 0,
          thumbdown: 0,
          rating: 1,
        },
      ],
    };
  },
};
</script>
