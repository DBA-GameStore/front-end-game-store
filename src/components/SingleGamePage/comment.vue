<template>
  <v-card color="#fafafa">
    <v-row>
      <v-col cols="4">
        <v-card-title class="headline">
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <v-card-subtitle>AvatarBot</v-card-subtitle>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-gift</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-thumb-up-outline</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-thumb-down-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card-title>
      </v-col>
      <v-col cols="6">
        <v-card-subtitle>
          CommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsComments
        </v-card-subtitle>
        <v-card-actions>
          <v-icon v-for="i in 5" :key="i" :color="i < 4 ? '#fdd835' : '#000000'">
            mdi-dice-{{ i }}
          </v-icon>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {};
</script>
