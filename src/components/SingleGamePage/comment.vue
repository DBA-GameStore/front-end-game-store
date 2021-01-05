<template>
  <v-card color="#fafafa">
    <v-row>
      <v-col cols="4">
        <v-card-title class="headline">
          <v-avatar>
            <img :src="data.avatarImg" alt="John" />
          </v-avatar>
          <v-card-subtitle>{{ data.name }}</v-card-subtitle>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-gift</v-icon>
              <span>{{ data.gift }}</span>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-thumb-up-outline</v-icon>
              <span>{{ data.thumbup }}</span>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-thumb-down-outline</v-icon>
              <span>{{ data.thumbdown }}</span>
            </v-btn>
          </v-card-actions>
        </v-card-title>
      </v-col>
      <v-col cols="6">
        <v-card-subtitle>
          {{ data.comment }}
        </v-card-subtitle>
        <v-card-actions>
          <v-icon
            v-for="i in 5"
            :key="i"
            :color="i < data.rating + 1 ? '#fdd835' : '#000000'"
          >
            mdi-dice-{{ i }}
          </v-icon>
        </v-card-actions>
        <br />
        <reply :reply="data.reply" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import reply from "@/components/SingleGamePage/reply.vue";
export default {
  props: ["data"],
  components: {
    reply,
  },
};
</script>
