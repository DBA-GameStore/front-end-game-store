<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <h2>
          <u>Upload New Product</u>
        </h2>
        <br />
        <uploadGame />
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import uploadGame from "@/components/Profile/adminUploadGame";

export default {
  name: "Home",
  components: {
    uploadGame,
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
