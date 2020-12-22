<template>
  <v-card class="mx-auto" max-width="500">
    <v-container class="py-0">
      <v-row align="center" justify="start">
        <v-col
          v-for="(selection, i) in selections"
          :key="selection.text"
          class="shrink"
        >
          <v-chip
            :disabled="loading"
            close
            @click:close="selected.splice(i, 1)"
          >
            <v-icon left v-text="selection.icon"></v-icon>
            {{ selection.text }}
          </v-chip>
        </v-col>
      </v-row>
    </v-container>

    <v-divider v-if="!allSelected"></v-divider>

    <v-list>
      <template v-for="item in categories">
        <v-list-item
          v-if="!selected.includes(item)"
          :key="item.text"
          :disabled="loading"
          @click="selected.push(item)"
        >
          <v-list-item-avatar>
            <v-icon :disabled="loading" v-text="item.icon"></v-icon>
          </v-list-item-avatar>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tagChips: [
      {
        text: "Music",
        icon: "mdi-music-box",
      },
      {
        text: "Action",
        icon: "mdi-sword",
      },
    ],
    loading: false,
    search: "",
    selected: [],
  }),

  computed: {
    allSelected() {
      return this.selected.length === this.tagChips.length;
    },
    categories() {
      const search = this.search.toLowerCase();

      if (!search) return this.tagChips;

      return this.tagChips.filter((item) => {
        const text = item.text.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
    selections() {
      const selections = [];

      for (const selection of this.selected) {
        selections.push(selection);
      }

      return selections;
    },
  },

  watch: {
    selected() {
      this.search = "";
    },
  },

  methods: {
    next() {
      this.loading = true;

      setTimeout(() => {
        this.search = "";
        this.selected = [];
        this.loading = false;
      }, 2000);
    },
  },
};
</script>
