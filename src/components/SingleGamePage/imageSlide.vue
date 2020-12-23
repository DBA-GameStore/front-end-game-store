<template>
  <hooper :infiniteScroll="true" :autoPlay="true" :centerMode="true">
    <slide v-for="(img, index) in images" :key="index">
        <v-img :src="img" height="100%"> </v-img>
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";

export default {
  props: ["images"],
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
};
</script>
