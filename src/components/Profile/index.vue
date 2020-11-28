<template>
  <div class="Profile">
    <login />
  </div>
</template>

<script>
import login from '@/components/Profile/SignIn.vue'

export default {
  name: "Home",
  components: {
      login
  }
};
</script>
