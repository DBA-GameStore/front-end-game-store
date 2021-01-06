<template>
  <v-form>
    <v-text-field outlined label="ID"></v-text-field>
    <v-text-field outlined label="Name"></v-text-field>
    <v-text-field outlined label="Description"></v-text-field>
    <v-text-field outlined label="soldOutNumber"></v-text-field>
    <v-text-field outlined label="Price"></v-text-field>
    <v-text-field outlined label="TagID"></v-text-field>
    <v-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
      label="Pick an avatar"
      prepend-icon="mdi-camera"
    ></v-file-input>
    <v-btn text>
      Upload
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    rules: [
      value =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!"
    ]
  })
};
</script>

<style>
.v-label.theme--light {
  color: black !important;
}
</style>

