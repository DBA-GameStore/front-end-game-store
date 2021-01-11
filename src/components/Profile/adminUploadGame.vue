<template>
  <v-form ref="form">
    <v-text-field v-model="name" outlined label="Name"></v-text-field>
    <v-text-field v-model="price" outlined label="Price"></v-text-field>
    <v-text-field v-model="picture" outlined label="Picture"></v-text-field>
    <v-text-field
      v-model="description"
      outlined
      label="Description"
    ></v-text-field>
    <v-text-field v-model="tagid" outlined label="TagName"></v-text-field>
    <!-- <v-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
      label="Pick an avatar"
      prepend-icon="mdi-camera"
    ></v-file-input> -->
    <v-toolbar elevation="0">
      <v-spacer />
      <v-btn text @click="doupload">
        Upload
      </v-btn>
    </v-toolbar>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    name: "",
    price: "",
    picture: "",
    description: "",
    tagid: "",
    rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!",
    ],
  }),
  methods: {
    async doupload() {
      let config = {
        method: "post",
        url: "api/game",
        data: {
          name: this.name,
          price: this.price,
          picture: this.picture,
          description: this.description,
          tag: this.tagid,
          recommend: 0,
        },
      };
      let result = await this.axios(config)
        .then(function(response) {
          console.log(response);
          alert("上傳成功");
          return 1;
        })
        .catch(function(error) {
          console.log(error);
          return -1;
        });
      if (result == 1) {
        this.$emit("parentUpdate");
        this.$refs.form.reset();
      }
    },
  },
};
</script>

<style>
.v-label.theme--light {
  color: black !important;
}
.v-input__icon v-input__icon--clear {
  color: black !important;
}
</style>
