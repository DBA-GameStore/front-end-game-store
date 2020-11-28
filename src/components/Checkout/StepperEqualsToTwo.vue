<template>
  <v-card elevation="0" class="grey--text">
    <h1>Checkout Order</h1>
    <br />
    <v-row>
      <v-col cols="4">
        <h2 class="Half-Grey">Product name</h2>
      </v-col>
      <v-col cols="6"> </v-col>
      <v-spacer />
      <v-col cols="2" style="left: -10px">
        <h3>$50000</h3>
      </v-col>
    </v-row>
    <v-row v-for="(item, index) in shippingList" :key="index">
      <v-col cols="2">
        <v-divider class="mx-4" vertical style="display: inline"></v-divider>
      </v-col>
      <v-col cols="7">
        <h4>{{ item.label }}</h4>
      </v-col>
      <v-spacer />
      <v-col cols="2" style="left: -10px">
        <h4>{{ item.content }}</h4>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
    data() {
        return{
            shippingList: [
                {label: "Price", content: "$50000"},
                {label: "Shipping", content: "$10"},
                {label: "Tax", content: "$10"},
            ]
        }
    }
}
</script>

<style>
.Half-Grey {
  background: linear-gradient(to top, #bbdefb 50%, transparent 50%);
  border-radius: 0;
}
</style>