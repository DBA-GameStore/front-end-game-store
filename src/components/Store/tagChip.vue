<template>
  
</template>

<script>
export default {
  data: () => ({
    
  }),

  computed: {

  },

  watch: {
    selected() {
      this.search = "";
    }
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
  }
};
</script>
