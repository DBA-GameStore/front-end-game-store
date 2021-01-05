<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="9">
        <v-card color="#385F73" dark>
          <v-card-title class="headline">
            顧客評論 (0)
          </v-card-title>

          <v-card-subtitle
            >Listen to your favorite artists and albums whenever and wherever,
            online and offline.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn text>
              撰寫評論
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col></v-row
    >
    <v-row justify="center" v-for="i in 10" :key="i">
      <v-col cols="9">
        <comment />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import comment from "@/components/SingleGamePage/comment.vue";

export default {
  components: {
    comment,
  },
};
</script>
