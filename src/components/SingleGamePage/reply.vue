<template>
  <v-list-group no-action>
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>回覆 ({{ counts }})</v-list-item-title>
      </v-list-item-content>
    </template>
    <v-list-item v-if="getAuthority">
      <v-text-field
        label="回覆"
        v-model="reply"
        single-line
        messages
        class="pa-0 comment-message"
      ></v-text-field>
      <v-btn icon fab class="comment-message" @click="doReply">
        <v-icon>
          mdi-send
        </v-icon>
      </v-btn>
    </v-list-item>
    <v-list-item v-for="(item, index) in reply" :key="index" class="pa-0">
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
      <v-btn
        icon
        fab
        class="btn-delete-comment"
        @click="deleteComment(item, index)"
        v-if="getAuthority"
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
  name: "comments",
  props: ["reply"],
  data() {
    return {
      counts: 0,
    };
  },
  components: {},
  methods: {},
  computed: {},
  mounted() {
    this.counts = this.reply.length > 0 ? this.reply.length : 0;
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
