<template>
  <v-list-group no-action>
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>回覆 ({{ counts }})</v-list-item-title>
      </v-list-item-content>
    </template>
    <v-list-item v-if="getAdmin && getLogin">
      <v-text-field
        label="回覆"
        v-model="msg"
        single-line
        messages
        color="black"
        placeholder="回覆"
        class="pa-0 comment-message"
      ></v-text-field>
      <v-btn icon fab class="comment-message" @click="doReply">
        <v-icon>
          mdi-send
        </v-icon>
      </v-btn>
    </v-list-item>
    <v-list-item v-for="(item, index) in replys" :key="index" class="pa-0">
      <v-list-item-content class="pa-0 list-comment">
        <v-row align="center" justify="center">
          <v-col cols="2">
            <v-avatar class="pa-0 ma-0">
              <img :src="item.avatarImg" alt="John" />
            </v-avatar>
          </v-col>
          <v-col cols="10">
            <p class="p-comment-title">{{ item.comment }}</p>
            <p class="p-comment-postBy">{{ item.postBy }}</p>
          </v-col>
        </v-row>
      </v-list-item-content>
      <v-btn icon fab class="btn-delete-comment" v-if="getAdmin">
        <v-icon>
          mdi-delete
        </v-icon>
      </v-btn>
    </v-list-item>
  </v-list-group>
</template>

<script>
export default {
  props: ["replyid"],
  data() {
    return {
      counts: 0,
      msg: "",
      replys: [],
    };
  },
  methods: {
    async updateReply() {
      let config = {
        method: "get",
        url: "api/reply/" + this.replyid,
        headers: { uid: this.getLogin.uid },
      };
      this.replys = await this.axios(config)
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
          return [];
        });
      console.log(this.replys);
    },
    async doReply() {
      let config = {
        method: "post",
        url: "api/reply/",
        headers: { uid: this.getLogin.uid },
        data: {
          gameid: this.getCurrentGame.id,
          context: this.msg,
        },
      };
      let result = await this.axios(config)
        .then(function(response) {
          alert("回覆成功");
          return 1;
        })
        .catch(function(error) {
          console.log(error);
          return -1;
        });
      if (result == 1) this.updateReply();
    },
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
    this.counts = this.replys.length > 0 ? this.reply.length : 0;
    this.updateReply();
  },
};
</script>

<style>
.list-comment {
  position: relative;
  top: -10px;
  margin-bottom: -10px;
}
.comment-message {
  position: relative;
  left: -50px;
}
.btn-delete-comment {
  position: relative;
  left: -70px;
  float: right;
}
.p-comment-title {
  position: relative;
  top: 15px;
  left: 5%;
  padding: 10px 50px 10px 10px;
}
.p-comment-postBy {
  font-size: 13px;
  position: relative;
  left: 5%;
  padding: 10px 50px 10px 10px;
  top: -3px;
  margin-bottom: -15px;
}
</style>
