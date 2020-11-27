<template>
  <div class="Checkout">
    <v-card elevation="0">
      <v-row>
        <v-col cols="3"> </v-col>
        <v-col cols="6">
          <v-card elevation="0">
            <v-stepper v-model="e6" vertical class="elevation-0">
              <v-stepper-step :complete="e6 > 1" step="1">
                Shipping address
                <small>Information of your Shipping</small>
              </v-stepper-step>

              <v-stepper-content step="1">
                <step1 />
                <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
                <v-btn text> Cancel </v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 2" step="2">
                Your order
              </v-stepper-step>

              <v-stepper-content step="2">
                <v-card
                  color="grey lighten-1"
                  class="mb-12"
                  height="200px"
                ></v-card>
                <googlePay/>
              </v-stepper-content>
            </v-stepper>
          </v-card>
        </v-col>
        <v-col cols="3"> </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import step1 from "@/components/Checkout/StepperEqualsToOne.vue"
import googlePay from '@/components/Checkout/GooglePay.vue'
export default {
  name: "Home",
  components: {
    step1,
    googlePay
  },
  data(){
    return {
        e6: 1
    }
  }
};
</script>
