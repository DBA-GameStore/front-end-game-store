<template>
  <div class="Profile">
    <h1>Login</h1>
    <googleSignInBtn />
  </div>
</template>

<script>
import googleSignInBtn from '@/components/Profile/GoogleSignInBtn.vue'

export default {
  name: "Home",
  components: {
    googleSignInBtn
  }
};
</script>
