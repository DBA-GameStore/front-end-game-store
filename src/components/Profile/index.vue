<template>
  <div class="Profile">
    <login />
  </div>
</template>

<script>
import login from "@/components/Profile/login.vue";

export default {
  name: "Home",
  components: {
    login
  }
};
</script>
