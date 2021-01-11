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
              <img :src="avatarImg" alt="John" />
            </v-avatar>
          </v-col>
          <v-col cols="10">
            <p class="p-comment-title">{{ item.replycontext }}</p>
            <p class="p-comment-postBy">Admin</p>
          </v-col>
        </v-row>
      </v-list-item-content>
      <v-btn
        icon
        fab
        class="btn-delete-comment"
        v-if="getAdmin"
        @click="deletereply(item)"
      >
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
      avatarImg:
        "data:image/png;base64,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",
      replys: [],
    };
  },
  methods: {
    async updateReply() {
      let config = {
        method: "get",
        url: "api/review/gameid/" + this.getCurrentGame.id,
      };
      let comments = await this.axios(config)
        .then(function(response) {
          console.log(response.data);
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
          return [];
        });
      this.replys = comments.filter((item) => {
        return item.id === this.replyid;
      });
      if (this.replys[0].replyid === "") {
        this.replys = [];
        this.counts = 0;
      }
      this.counts = this.replys.length;
    },
    async doReply() {
      let config = {
        method: "post",
        url: "api/reply",
        headers: { uid: this.getLogin.uid },
        data: {
          reviewid: this.replyid,
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
      if (result == 1) {
        this.$emit("doupdate");
        this.updateReply();
      }
    },
    async deletereply(e) {
      let config = {
        method: "delete",
        url: "api/reply/" + e.replyid,
        headers: { uid: this.getLogin.uid },
      };
      let result = await this.axios(config)
        .then(function(response) {
          alert("留言已刪除");
          return 1;
        })
        .catch(function(error) {
          console.log(error);
          return -1;
        });
      if (result == 1) {
        this.$emit("doupdate");
        this.updateReply();
      }
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
