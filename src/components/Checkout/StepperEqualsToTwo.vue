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
    <v-row v-for="(item, index) in cart" :key="index">
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
  </v-card>
</template>

<script>
import props from "@/GooglePaySettings";
export default {
  props: ["shipping"],
  data() {
    return {
      totalPrice: 0,
    };
  },
  mounted() {
    this.caculate();
  },
  methods: {
    async caculate() {
      await this.updateCart();
      this.cart.forEach((element) => {
        this.totalPrice += parseInt(element.price);
      });
      this.totalPrice += parseInt(this.shipping);
      props.transactionInfo.totalPrice = this.totalPrice.toString();
      props.paymentDataRequest.transactionInfo.totalPrice = this.totalPrice.toString();
    },
    async updateCart() {
      let vm = this;
      let doc = await this.retrive("shoppinglist/cart");
      this.cart = doc.data;
    },
    async retrive(collection) {
      const snapshot = await this.axios
        .get("http://127.0.0.1/sqlproject/" + collection)
        .then(function(response) {
          return response;
        })
        .catch(function(error) {
          console.log(error);
        });
      return snapshot;
    },
  },
};
</script>

<style>
.Half-Grey {
  background: linear-gradient(to top, #bbdefb 50%, transparent 50%);
  border-radius: 0;
}
</style>
