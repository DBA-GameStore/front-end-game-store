<template>
  <v-card elevation="0">
    <h1>Checkout Order</h1>
    <br />
    <v-row>
      <v-col cols="5">
        <h2 class="Half-Grey">Total Price:</h2>
      </v-col>
      <v-col cols="4">
        <h3 class="pa-0 ma-0">${{ totalPrice }}</h3>
      </v-col>
      <v-col cols="2"> </v-col>
    </v-row>
    <v-row v-for="(item, index) in updateCart" :key="index">
      <v-col cols="2">
        <v-divider class="mx-4" vertical style="display: inline"></v-divider>
      </v-col>
      <v-col cols="7">
        <h4>{{ item.name }}</h4>
      </v-col>
      <v-spacer />
      <v-col cols="2" style="left: -10px">
        <h4>{{ item.price }}</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-divider class="mx-4" vertical style="display: inline"></v-divider>
      </v-col>
      <v-col cols="7">
        <h4>運費</h4>
      </v-col>
      <v-spacer />
      <v-col cols="2" style="left: -10px">
        <h4>{{ shipping }}</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-select
          :items="coupon"
          append-icon="mdi-ticket"
          label="優惠券"
          :placeholder="coupon == [] ? '暫無優惠券' : '選擇優惠券'"
          v-model="coupon"
          outlined
          dense
          :disabled="coupn == []"
        ></v-select>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import props from "@/GooglePaySettings";
export default {
  props: ["shipping"],
  data() {
    return {
      
    };
  },
  mounted() {},
  computed: {
    checktLogin: {
      get() {
        return this.$store.getters.getUser;
      },
    },
    updateCart() {
      let config = {
        method: "get",
        url: "api/shoppinglist/cart",
        headers: { uid: this.checktLogin.uid },
      };
      return this.axios(config)
        .then(function(response) {
          console.log(response);
          return response;
        })
        .catch(function(error) {
          console.log(error);
          return [];
        });
    },
  },
  methods: {
    
  },
};
</script>

