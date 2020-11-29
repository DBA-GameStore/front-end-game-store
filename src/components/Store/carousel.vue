<template>
  <hooper :settings="hooperSettings" style="height: 400px">
    <slide v-for="j in 3" :key="j">
      <router-link :to="{ name: 'Checkout' }">
        <v-img
          src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
          height="100%"
        >
        </v-img>
      </router-link>
    </slide>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
    <hooper-navigation slot="hooper-addons">
      <v-icon slot="hooper-next" color="white"> mdi-chevron-down</v-icon>
      <v-icon slot="hooper-prev" color="white"> mdi-chevron-up</v-icon>
    </hooper-navigation>
  </hooper>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
  },
  data() {
    return {
        hooperSettings: {
            centerMode: true,
            autoPlay: true,
            playSpeed: 3500,
            itemsToShow: 1,
            vertical: true
        }   
    }
  }
};
</script>