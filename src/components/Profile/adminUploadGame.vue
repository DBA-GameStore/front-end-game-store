<template>
  <v-form>
    <v-text-field placeholder="ID"></v-text-field>
    <v-text-field placeholder="Name"></v-text-field>
    <v-text-field placeholder="Description"></v-text-field>
    <v-text-field placeholder="soldOutNumber"></v-text-field>
    <v-text-field placeholder="Price"></v-text-field>
    <v-text-field placeholder="TagID"></v-text-field>
    <v-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Pick an avatar"
      prepend-icon="mdi-camera"
      label="Avatar"
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
