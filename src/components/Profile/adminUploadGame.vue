<template>
  <div>
    <v-text-field placeholder="Name"></v-text-field>
    <v-text-field placeholder="Describe"></v-text-field>
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
  </div>
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
