
<template>
  <hooper :settings="hooperSettings">
    <slide v-for="i in 5" :key="i">
      <v-container>
        <v-card color="grey" height="400">
          <v-img
            src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
            height="200"
          />
        </v-card>
      </v-container>
    </slide>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination
} from 'hooper';

export default {
   components: {
        Hooper, Slide
    },
    data() {
        return {
            hooperSettings: {
                infiniteScroll: true,
                centerMode: true,
                autoPlay: true,
                playSpeed: 3500,
                itemsToShow: 2
            }   
        }
    }
}
</script>

<style scoped>
.img1 {
  height: 100%;
}
</style>