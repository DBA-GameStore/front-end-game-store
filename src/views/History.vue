<template>
  <v-container>
    <history />
  </v-container>
</template>

<script>
import history from "@/components/History/index.vue";
export default {
  components: {
    history,
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    checktLogin: {
      get() {
        return this.$store.getters.getUser;
      },
    },
  },
  mounted() {
    if (this.checktLogin == null) {
      this.$router.push({name: "Profile"});
    }
  },
  methods: {},
};
</script>
